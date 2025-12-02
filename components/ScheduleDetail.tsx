import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock, Info } from 'lucide-react';

interface ScheduleEvent {
  dateStr: string;
  title: string;
  time: string;
  location: string;
  description: string;
  isDone: boolean;
  year?: number;
  month?: number;
  day?: number | null; // null if date is undecided
}

const rawScheduleData = [
  {
    dateStr: '2025年12月4日(木)',
    title: '生徒会⑪',
    time: '放課後',
    location: '生徒会室',
    description: '第11回生徒会委員会。後期の活動報告まとめと、次期生徒会への引き継ぎ事項の確認を行います。',
    isDone: true
  },
  {
    dateStr: '2025年12月11日(木)',
    title: '新入生説明会',
    time: '午後',
    location: '本校 体育館',
    description: '来年度入学予定の小学6年生とその保護者を対象とした説明会です。生徒会役員から中学校生活についてのプレゼンテーションを行います。',
    isDone: false
  },
  {
    dateStr: '2025年12月18日(木)',
    title: '生徒総会',
    time: '5,6時間目',
    location: '本校 体育館',
    description: '全校生徒による後期活動の総括。各委員会の活動報告と、生徒からの質疑応答が行われます。今年度の締めくくりとなる重要な会です。',
    isDone: false
  },
  {
    dateStr: '2025年12月19日(金)',
    title: '生徒会役員引継ぎ',
    time: '放課後',
    location: '生徒会室・各教室',
    description: '現3年生役員から、新しく選出された2年生・1年生役員へのバトンタッチ。正式に新体制がスタートします。',
    isDone: false
  },
  {
    dateStr: '2026年4月(未定)',
    title: '二学年代議員会選抜',
    time: '未定',
    location: '各教室',
    description: '新2年生の中から、クラスの代表となる代議員を選出します。新しいクラスでの最初の重要な決め事です。',
    isDone: false
  }
];

// データをパースして扱いやすい形式にする
const scheduleData: ScheduleEvent[] = rawScheduleData.map(item => {
  // "2025年12月4日" 形式のマッチング
  const dateMatch = item.dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
  if (dateMatch) {
    return {
      ...item,
      year: parseInt(dateMatch[1]),
      month: parseInt(dateMatch[2]),
      day: parseInt(dateMatch[3])
    };
  }
  
  // "2026年4月" 形式のマッチング（日付未定）
  const monthMatch = item.dateStr.match(/(\d{4})年(\d{1,2})月/);
  if (monthMatch) {
    return {
      ...item,
      year: parseInt(monthMatch[1]),
      month: parseInt(monthMatch[2]),
      day: null
    };
  }

  return item;
});

interface ScheduleDetailProps {
  onBack: () => void;
}

const ScheduleDetail: React.FC<ScheduleDetailProps> = ({ onBack }) => {
  // 初期表示を2025年12月に設定 (JavaScriptの月は0-11なので11が12月)
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // 表示用 (1-12)

  // カレンダー操作
  const prevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  // カレンダー生成ロジック
  const getDaysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();
  const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m - 1, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  
  // カレンダーグリッド用の配列作成
  const days = [];
  // 月初めの空白
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }
  // 日付
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // 現在の月のイベントを取得
  const currentMonthEvents = scheduleData.filter(e => e.year === year && e.month === month);
  
  // 日付が決まっているイベント
  const fixedEvents = currentMonthEvents.filter(e => e.day !== null && e.day !== undefined);
  
  // 日付が未定のイベント
  const undecidedEvents = currentMonthEvents.filter(e => e.day === null || e.day === undefined);

  // 指定した日のイベントを取得
  const getEventsForDay = (d: number) => fixedEvents.filter(e => e.day === d);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-500 hover:text-brand-600 mb-8 transition-colors"
        >
          <div className="bg-stone-100 p-2 rounded-full mr-3 group-hover:bg-brand-50 transition-colors">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">トップに戻る</span>
        </button>

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 flex items-center justify-center gap-3 mb-2">
            <CalendarIcon className="text-brand-500" size={32} />
            活動カレンダー
          </h1>
          <p className="text-stone-500 text-sm md:text-base">
            現在の日付: 2025年12月1日
          </p>
        </div>

        {/* Calendar Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 overflow-hidden mb-12">
          {/* Calendar Header */}
          <div className="bg-brand-50 p-6 flex items-center justify-between">
            <button 
              onClick={prevMonth}
              className="p-2 hover:bg-white rounded-full transition-colors text-brand-700"
            >
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold text-stone-800">
              {year}年 {month}月
            </h2>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-white rounded-full transition-colors text-brand-700"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="p-4 md:p-8">
            {/* Weekday Headers */}
            <div className="grid grid-cols-7 mb-4 text-center">
              {['日', '月', '火', '水', '木', '金', '土'].map((day, i) => (
                <div key={day} className={`font-bold text-sm py-2 ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-stone-400'}`}>
                  {day}
                </div>
              ))}
            </div>

            {/* Days */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="aspect-square"></div>;
                }

                const dayEvents = getEventsForDay(day);
                const hasEvent = dayEvents.length > 0;
                const isSelected = selectedDate === day;

                return (
                  <div 
                    key={day} 
                    onClick={() => hasEvent && setSelectedDate(isSelected ? null : day)}
                    className={`
                      aspect-square md:aspect-auto md:h-32 rounded-xl p-2 border transition-all relative flex flex-col items-start justify-start
                      ${hasEvent 
                        ? 'bg-white border-brand-200 cursor-pointer hover:shadow-md hover:border-brand-400' 
                        : 'bg-stone-50/50 border-transparent text-stone-400'
                      }
                      ${isSelected ? 'ring-2 ring-brand-500 ring-offset-2' : ''}
                    `}
                  >
                    <span className={`text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full mb-1 ${hasEvent ? 'bg-brand-100 text-brand-700' : ''}`}>
                      {day}
                    </span>
                    
                    {/* Event Indicators */}
                    <div className="w-full space-y-1 overflow-hidden">
                      {dayEvents.map((evt, i) => (
                        <div key={i} className={`text-xs p-1 rounded-md truncate ${evt.isDone ? 'bg-stone-200 text-stone-500 line-through' : 'bg-brand-500 text-white'}`}>
                          <span className="hidden md:inline">{evt.title}</span>
                          <span className="md:hidden block w-2 h-2 rounded-full bg-current mx-auto"></span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detailed List for the Month */}
        <div className="space-y-8">
          <div className="flex items-center gap-3 mb-6">
            <h3 className="text-xl font-bold text-stone-800 border-l-4 border-brand-500 pl-3">
              {year}年{month}月の予定一覧
            </h3>
            {currentMonthEvents.length === 0 && (
              <p className="text-stone-500 text-sm">この月の予定はまだ登録されていません。</p>
            )}
          </div>

          {/* Undecided Events */}
          {undecidedEvents.length > 0 && (
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 mb-6">
              <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                <Info size={18} />
                日程調整中・未定の予定
              </h4>
              <div className="grid gap-4 md:grid-cols-2">
                {undecidedEvents.map((evt, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm">
                    <h5 className="font-bold text-stone-800 mb-2">{evt.title}</h5>
                    <p className="text-sm text-stone-600">{evt.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Fixed Events List */}
          <div className="space-y-4">
            {fixedEvents
              .sort((a, b) => (a.day || 0) - (b.day || 0))
              .map((event, index) => (
              <div 
                key={index} 
                className={`
                  flex flex-col md:flex-row gap-4 p-5 rounded-2xl border transition-all
                  ${selectedDate === event.day 
                    ? 'bg-brand-50 border-brand-200 shadow-md transform scale-[1.01]' 
                    : 'bg-white border-stone-100 shadow-sm hover:shadow-md'
                  }
                  ${event.isDone ? 'opacity-70' : ''}
                `}
              >
                {/* Date Box */}
                <div className={`
                  flex flex-col items-center justify-center p-3 rounded-xl w-full md:w-24 shrink-0
                  ${event.isDone ? 'bg-stone-100 text-stone-400' : 'bg-brand-100 text-brand-700'}
                `}>
                  <span className="text-xs font-bold uppercase">Dec</span>
                  <span className="text-2xl font-bold">{event.day}</span>
                  <span className="text-xs">{['日','月','火','水','木','金','土'][new Date(event.year!, event.month! - 1, event.day!).getDay()]}</span>
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h4 className={`text-xl font-bold ${event.isDone ? 'text-stone-500 line-through' : 'text-stone-800'}`}>
                      {event.title}
                    </h4>
                    <div className="flex gap-3 text-xs md:text-sm font-medium text-stone-500 mt-2 md:mt-0">
                      <div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded-md">
                        <Clock size={14} /> {event.time}
                      </div>
                      <div className="flex items-center gap-1 bg-stone-50 px-2 py-1 rounded-md">
                        <MapPin size={14} /> {event.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScheduleDetail;