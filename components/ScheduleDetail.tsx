import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock, Info, CheckCircle2 } from 'lucide-react';

interface ScheduleEvent {
  dateStr: string;
  title: string;
  time: string;
  location: string;
  description: string;
  year?: number;
  month?: number;
  day?: number | null; // null if date is undecided
  dateObject?: Date; // For comparison
}

const rawScheduleData = [
  {
    dateStr: '2025年12月4日(木)',
    title: '生徒会⑪',
    time: '放課後',
    location: '生徒会室',
    description: '第11回生徒会委員会。後期の活動報告まとめと、次期生徒会への引き継ぎ事項の確認を行います。'
  },
  {
    dateStr: '2025年12月11日(木)',
    title: '新入生説明会',
    time: '午後',
    location: '本校 体育館',
    description: '来年度入学予定の小学6年生とその保護者を対象とした説明会です。生徒会役員から中学校生活についてのプレゼンテーションを行います。'
  },
  {
    dateStr: '2025年12月18日(木)',
    title: '生徒総会',
    time: '5,6時間目',
    location: '本校 体育館',
    description: '全校生徒による後期活動の総括。各委員会の活動報告と、生徒からの質疑応答が行われます。今年度の締めくくりとなる重要な会です。'
  },
  {
    dateStr: '2025年12月19日(金)',
    title: '生徒会役員引継ぎ',
    time: '放課後',
    location: '生徒会室・各教室',
    description: '現3年生役員から、新しく選出された2年生・1年生役員へのバトンタッチ。正式に新体制がスタートします。'
  },
  {
    dateStr: '2026年4月(未定)',
    title: '二学年代議員会選抜',
    time: '未定',
    location: '各教室',
    description: '新2年生の中から、クラスの代表となる代議員を選出します。新しいクラスでの最初の重要な決め事です。'
  }
];

// 祝日リスト (2025-2027)
const HOLIDAYS = [
  // 2025
  "2025-04-29", // 昭和の日
  "2025-05-03", // 憲法記念日
  "2025-05-04", // みどりの日
  "2025-05-05", // こどもの日
  "2025-05-06", // 休日
  "2025-07-21", // 海の日
  "2025-08-11", // 山の日
  "2025-09-15", // 敬老の日
  "2025-09-23", // 秋分の日
  "2025-10-13", // スポーツの日
  "2025-11-03", // 文化の日
  "2025-11-23", // 勤労感謝の日
  "2025-11-24", // 休日
  
  // 2026
  "2026-01-01", // 元日
  "2026-01-12", // 成人の日
  "2026-02-11", // 建国記念の日
  "2026-02-23", // 天皇誕生日
  "2026-03-20", // 春分の日
  "2026-04-29", // 昭和の日
  "2026-05-03", // 憲法記念日
  "2026-05-04", // みどりの日
  "2026-05-05", // こどもの日
  "2026-05-06", // 振替休日
  "2026-07-20", // 海の日
  "2026-08-11", // 山の日
  "2026-09-21", // 敬老の日
  "2026-09-22", // 国民の休日
  "2026-09-23", // 秋分の日
  "2026-10-12", // スポーツの日
  "2026-11-03", // 文化の日
  "2026-11-23", // 勤労感謝の日
  
  // 2027
  "2027-01-01", // 元日
  "2027-01-11", // 成人の日
  "2027-02-11", // 建国記念の日
  "2027-02-23", // 天皇誕生日
  "2027-03-20", // 春分の日
];

interface ScheduleDetailProps {
  onBack: () => void;
}

const ScheduleDetail: React.FC<ScheduleDetailProps> = ({ onBack }) => {
  // 初期表示を2025年12月に設定
  const [currentDate, setCurrentDate] = useState(new Date(2025, 11, 1));
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [now, setNow] = useState(new Date());

  // コンポーネントマウント時に現在時刻を更新
  useEffect(() => {
    setNow(new Date());
    window.scrollTo(0, 0);
  }, []);

  // データをパースし、現在時刻と比較してステータスを決定
  const scheduleData = rawScheduleData.map(item => {
    let year: number | undefined;
    let month: number | undefined;
    let day: number | null | undefined = null;
    let dateObject: Date | undefined;

    // "2025年12月4日" 形式
    const dateMatch = item.dateStr.match(/(\d{4})年(\d{1,2})月(\d{1,2})日/);
    if (dateMatch) {
      year = parseInt(dateMatch[1]);
      month = parseInt(dateMatch[2]);
      day = parseInt(dateMatch[3]);
      // イベント終了時刻をその日の23:59:59とする
      dateObject = new Date(year, month - 1, day, 23, 59, 59);
    } else {
      // "2026年4月" 形式
      const monthMatch = item.dateStr.match(/(\d{4})年(\d{1,2})月/);
      if (monthMatch) {
        year = parseInt(monthMatch[1]);
        month = parseInt(monthMatch[2]);
        // 月末を仮の日付とする
        dateObject = new Date(year, month, 0, 23, 59, 59);
      }
    }

    const isDone = dateObject ? now > dateObject : false;

    return {
      ...item,
      year,
      month,
      day,
      dateObject,
      isDone
    };
  });

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
  
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const currentMonthEvents = scheduleData.filter(e => e.year === year && e.month === month);
  const fixedEvents = currentMonthEvents.filter(e => e.day !== null && e.day !== undefined);
  const undecidedEvents = currentMonthEvents.filter(e => e.day === null || e.day === undefined);
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
            現在の日付: {now.toLocaleDateString()}
          </p>
        </div>

        {/* Calendar Container */}
        <div className="bg-white rounded-3xl shadow-sm border border-stone-200 mb-12">
          {/* Calendar Header */}
          <div className="bg-brand-50 p-6 flex items-center justify-between rounded-t-3xl">
            <button 
              onClick={prevMonth}
              className="p-2 hover:bg-white rounded-full transition-colors text-brand-700 cursor-pointer"
            >
              <ChevronLeft size={24} />
            </button>
            <h2 className="text-2xl font-bold text-stone-800">
              {year}年 {month}月
            </h2>
            <button 
              onClick={nextMonth}
              className="p-2 hover:bg-white rounded-full transition-colors text-brand-700 cursor-pointer"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="p-4 md:p-8">
            <div className="grid grid-cols-7 mb-4 text-center">
              {['日', '月', '火', '水', '木', '金', '土'].map((day, i) => (
                <div key={day} className={`font-bold text-sm py-2 ${i === 0 ? 'text-red-500' : i === 6 ? 'text-blue-500' : 'text-stone-400'}`}>
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="aspect-square"></div>;
                }

                const dayEvents = getEventsForDay(day);
                const hasEvent = dayEvents.length > 0;
                const isSelected = selectedDate === day;
                // 予定が1つだけかどうか
                const isSingleEvent = dayEvents.length === 1;

                // 休日・曜日判定
                const dateObj = new Date(year, month - 1, day);
                const dayOfWeek = dateObj.getDay();
                const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isHoliday = HOLIDAYS.includes(dateStr);

                // 文字色決定ロジック
                let textColorClass = '';
                if (isHoliday || dayOfWeek === 0) {
                  textColorClass = 'text-red-500';
                } else if (dayOfWeek === 6) {
                  textColorClass = 'text-blue-500';
                } else {
                  textColorClass = hasEvent ? 'text-brand-700' : 'text-stone-400';
                }

                return (
                  <div 
                    key={day} 
                    onClick={() => hasEvent && setSelectedDate(isSelected ? null : day)}
                    className={`
                      aspect-square md:aspect-auto md:h-32 rounded-xl p-2 border transition-all relative flex flex-col items-start justify-start
                      ${hasEvent 
                        ? 'bg-brand-50 border-brand-200 cursor-pointer hover:shadow-md hover:border-brand-400' 
                        : 'bg-white border-transparent text-stone-400'
                      }
                      ${isSelected ? 'ring-2 ring-brand-500 ring-offset-2' : ''}
                      ${isSingleEvent ? 'group/date' : ''}
                    `}
                  >
                    <span className={`text-sm font-bold w-6 h-6 flex items-center justify-center rounded-full mb-1 ${textColorClass} ${hasEvent ? 'bg-white/60' : ''}`}>
                      {day}
                    </span>
                    
                    {/* Event Indicators */}
                    <div className="w-full space-y-1">
                      {dayEvents.map((evt, i) => (
                        <div key={i} className="group/event relative">
                          {/* Event Bar */}
                          <div className={`text-xs p-1 rounded-md truncate w-full ${evt.isDone ? 'bg-stone-200 text-stone-500 line-through' : 'bg-brand-500 text-white'}`}>
                            <span className="hidden md:inline">{evt.title}</span>
                            <span className="md:hidden block w-2 h-2 rounded-full bg-current mx-auto"></span>
                          </div>

                          {/* Hover Tooltip */}
                          {/* isSingleEventの場合は親のgroup/dateホバーで表示、それ以外は自身のgroup/eventホバーで表示 */}
                          <div className={`
                            opacity-0 transition-opacity absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-stone-900 text-white text-xs rounded-xl shadow-xl z-[100] pointer-events-none p-4
                            ${isSingleEvent ? 'group-hover/date:opacity-100' : 'group-hover/event:opacity-100'}
                          `}>
                            <div className="font-bold text-sm mb-1">{evt.title}</div>
                            <div className="flex items-center gap-1 mb-1 text-stone-300">
                                <Clock size={12} /> {evt.time}
                            </div>
                            <div className="flex items-center gap-1 mb-2 text-stone-300">
                                <MapPin size={12} /> {evt.location}
                            </div>
                            <div className="leading-relaxed text-stone-300 border-t border-stone-700 pt-2">
                                {evt.description}
                            </div>
                            {/* Arrow */}
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-stone-900"></div>
                          </div>
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
                  <div key={i} className="bg-white p-4 rounded-xl border border-orange-100 shadow-sm relative overflow-hidden">
                    {evt.isDone && <div className="absolute inset-0 bg-stone-100/50 backdrop-blur-[1px] flex items-center justify-center z-10"><span className="font-bold text-stone-500 bg-white px-3 py-1 rounded-full shadow-sm">終了</span></div>}
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
              .map((event, index) => {
                // リスト表示用にも曜日判定
                const dateObj = new Date(event.year!, event.month! - 1, event.day!);
                const dayOfWeek = dateObj.getDay();
                const dateStr = `${event.year}-${String(event.month).padStart(2, '0')}-${String(event.day).padStart(2, '0')}`;
                const isHoliday = HOLIDAYS.includes(dateStr);
                
                let dayColor = 'bg-brand-100 text-brand-700';
                if (isHoliday || dayOfWeek === 0) dayColor = 'bg-red-100 text-red-600';
                else if (dayOfWeek === 6) dayColor = 'bg-blue-100 text-blue-600';
                if (event.isDone) dayColor = 'bg-stone-200 text-stone-400';

                return (
                  <div 
                    key={index} 
                    className={`
                      flex flex-col md:flex-row gap-4 p-5 rounded-2xl border transition-all relative
                      ${selectedDate === event.day 
                        ? 'bg-brand-50 border-brand-200 shadow-md transform scale-[1.01]' 
                        : 'bg-white border-stone-100 shadow-sm hover:shadow-md'
                      }
                      ${event.isDone ? 'bg-stone-50' : ''}
                    `}
                  >
                    {/* Status Badge for Done events */}
                    {event.isDone && (
                      <div className="absolute top-4 right-4 text-stone-400 flex items-center gap-1 font-bold text-xs bg-stone-200 px-2 py-1 rounded-full">
                        <CheckCircle2 size={12} /> 終了
                      </div>
                    )}

                    {/* Date Box */}
                    <div className={`
                      flex flex-col items-center justify-center p-3 rounded-xl w-full md:w-24 shrink-0
                      ${dayColor}
                    `}>
                      <span className="text-xs font-bold uppercase">Date</span>
                      <span className="text-2xl font-bold">{event.day}</span>
                      <span className="text-xs">{['日','月','火','水','木','金','土'][dayOfWeek]}</span>
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
                );
              })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ScheduleDetail;