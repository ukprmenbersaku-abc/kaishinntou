import React, { useState, useEffect } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, Calendar as CalendarIcon, MapPin, Clock, Info, CheckCircle2, Star, AlertCircle, Award } from 'lucide-react';

interface ScheduleEvent {
  dateStr: string;
  title: string;
  time: string;
  location: string;
  description: string;
  year?: number;
  month?: number;
  day?: number | null; 
  dateObject?: Date;
  importance?: 'high' | 'normal' | 'low';
  category?: 'exam' | 'election' | 'school' | 'other';
}

const rawScheduleData: ScheduleEvent[] = [
  // --- 12月以前 (既存分) ---
  {
    dateStr: '2025年12月18日(木)',
    title: '生徒総会',
    time: '5,6時間目',
    location: '本校 体育館',
    description: '全校生徒による後期活動の総括。',
    importance: 'high',
    category: 'school'
  },
  // --- 1月 (既存・追加分) ---
  {
    dateStr: '2026年1月1日(木)',
    title: '元日',
    time: '終日',
    location: '-',
    description: '2026年の始まりです。',
    category: 'other'
  },
  {
    dateStr: '2026年1月7日(水)',
    title: '3学期はじめの式',
    time: '午前',
    location: '体育館',
    description: '3学期始業式。',
    importance: 'normal',
    category: 'school'
  },
  {
    dateStr: '2026年1月13日(火)',
    title: '総合テスト3年⑤',
    time: '一日',
    location: '各教室',
    description: '3年生の第5回総合テストです。',
    importance: 'high',
    category: 'exam'
  },
  // --- 2月 (新規追加分) ---
  {
    dateStr: '2026年2月5日(木)',
    title: '定期テスト④(1,2年) / 総合テスト⑥(3年)',
    time: '一日',
    location: '各教室',
    description: '1,2年生は5教科、3年生は第6回総合テストを実施します。',
    importance: 'high',
    category: 'exam'
  },
  {
    dateStr: '2026年2月6日(金)',
    title: '定期テスト④(1,2年)',
    time: '午前',
    location: '各教室',
    description: '1,2年生の保健体育のテストを実施します。',
    importance: 'normal',
    category: 'exam'
  },
  {
    dateStr: '2026年2月9日(月)',
    title: '長野県公立高校前期選抜',
    time: '一日',
    location: '各志願校',
    description: '公立高校の前期選抜試験日です。3年生の皆さん、頑張ってください！',
    importance: 'high',
    category: 'exam'
  },
  {
    dateStr: '2026年2月12日(木)',
    title: '生徒会⑭',
    time: '放課後',
    location: '生徒会室',
    description: '第14回生徒会委員会。',
    category: 'school'
  },
  {
    dateStr: '2026年2月16日(月)',
    title: '新入生物品販売会',
    time: '午後',
    location: '本校',
    description: '来年度新入生向けの物品販売会です。',
    category: 'school'
  },
  {
    dateStr: '2026年2月18日(水)',
    title: '前期選抜合格発表',
    time: '午前',
    location: '各志願校 / Web',
    description: '長野県公立高校前期選抜の合格発表日です。',
    importance: 'high',
    category: 'exam'
  },
  {
    dateStr: '2026年2月19日(木)',
    title: '参観日 / CSふたむら運営委員会③',
    time: '午後',
    location: '各教室 / 会議室',
    description: '授業参観および地域運営協議会が開催されます。',
    importance: 'normal',
    category: 'school'
  },
  {
    dateStr: '2026年2月25日(水)',
    title: '公立高校後期選抜 志願受付開始',
    time: '午前',
    location: '-',
    description: '後期選抜の志願受付がスタートします。',
    category: 'exam'
  },
  {
    dateStr: '2026年2月26日(木)',
    title: '生徒会⑮',
    time: '放課後',
    location: '生徒会室',
    description: '第15回生徒会委員会。',
    category: 'school'
  },
  // --- 3月 (新規追加分) ---
  {
    dateStr: '2026年3月2日(月)',
    title: '後期選抜志願変更 受付開始',
    time: '午前',
    location: '-',
    description: '公立高校後期選抜の志願変更期間が始まります。',
    category: 'exam'
  },
  {
    dateStr: '2026年3月5日(木)',
    title: '生徒会⑯',
    time: '放課後',
    location: '生徒会室',
    description: '第16回生徒会委員会。今年度最後の定例会です。',
    category: 'school'
  },
  {
    dateStr: '2026年3月10日(火)',
    title: '長野県公立高校後期選抜',
    time: '一日',
    location: '各志願校',
    description: '公立高校の後期選抜本試験日です。',
    importance: 'high',
    category: 'exam'
  },
  {
    dateStr: '2026年3月12日(木)',
    title: '生徒音楽集会',
    time: '午後',
    location: '体育館',
    description: '全校生徒による音楽集会。',
    importance: 'normal',
    category: 'school'
  },
  {
    dateStr: '2026:03:13(金)', // 変換ミスを防ぐため内部フォーマット統一
    title: '3年生を送る会',
    time: '未定',
    location: '体育館',
    description: '卒業する3年生への感謝を伝える会です。',
    importance: 'high',
    category: 'school'
  },
  {
    dateStr: '2026年3月16日(月)',
    title: '公立高校後期選抜 追検査',
    time: '午前',
    location: '指定会場',
    description: '追試験実施日。',
    category: 'exam'
  },
  {
    dateStr: '2026年3月17日(火)',
    title: '令和7年度 終業式・離任式',
    time: '午前',
    location: '体育館',
    description: '今年度の終業式および、お世話になった先生方の離任式を行います。',
    importance: 'high',
    category: 'school'
  },
  {
    dateStr: '2026年3月18日(水)',
    title: '第XX回 卒業証書授与式',
    time: '午前',
    location: '体育館',
    description: '3年生の旅立ちを祝う、卒業式です。',
    importance: 'high',
    category: 'school'
  },
  {
    dateStr: '2026年3月19日(木)',
    title: '春休み開始 / 後期選抜合格発表',
    time: '午前',
    location: '各志願校 / Web',
    description: '今日から春休みです。また、後期選抜の合格発表が行われます。',
    importance: 'high',
    category: 'exam'
  },
  {
    dateStr: '2026年3月22日(日)',
    title: '第97回 二学年代議員選挙 告示',
    time: '午前',
    location: '校内掲示板 / HP',
    description: '新2年生のリーダーを決める選挙が正式に公示されます。立候補を検討している人は要チェック！',
    importance: 'high',
    category: 'election'
  },
  {
    dateStr: '2026年3月26日(木)',
    title: '新2・3年生 準備登校',
    time: '午前',
    location: '本校',
    description: '新学期に向けた準備登校です。',
    importance: 'normal',
    category: 'school'
  }
];

// 祝日リスト (2025-2027) - 省略せず維持
const HOLIDAYS = [
  "2026-01-01", "2026-01-12", "2026-02-11", "2026-02-23", "2026-03-20", "2026-04-29"
];

interface ScheduleDetailProps {
  onBack: () => void;
}

const ScheduleDetail: React.FC<ScheduleDetailProps> = ({ onBack }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 1)); // 2026年2月を初期表示
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    setNow(new Date());
    window.scrollTo(0, 0);
  }, []);

  const scheduleData = rawScheduleData.map(item => {
    let year, month, day, dateObject;
    const dateMatch = item.dateStr.match(/(\d{4})[年月](\d{1,2})[月日](\d{1,2})[日]?/);
    if (dateMatch) {
      year = parseInt(dateMatch[1]);
      month = parseInt(dateMatch[2]);
      day = parseInt(dateMatch[3]);
      dateObject = new Date(year, month - 1, day, 23, 59, 59);
    } else {
      const monthMatch = item.dateStr.match(/(\d{4})[年月](\d{1,2})[月]/);
      if (monthMatch) {
        year = parseInt(monthMatch[1]);
        month = parseInt(monthMatch[2]);
        dateObject = new Date(year, month, 0, 23, 59, 59);
      }
    }
    const isDone = dateObject ? now > dateObject : false;
    return { ...item, year, month, day, dateObject, isDone };
  });

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;

  const prevMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));

  const getDaysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();
  const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m - 1, 1).getDay();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const days = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const currentMonthEvents = scheduleData.filter(e => e.year === year && e.month === month);
  const getEventsForDay = (d: number) => currentMonthEvents.filter(e => e.day === d);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-500 hover:text-brand-600 mb-8 transition-all"
        >
          <div className="bg-white border border-stone-200 p-2 rounded-full mr-3 group-hover:bg-brand-50 shadow-sm transition-all">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">HOME</span>
        </button>

        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-stone-900 flex items-center justify-center gap-3 mb-2">
            <CalendarIcon className="text-brand-500" size={36} />
            SCHEDULER
          </h1>
          <p className="text-stone-400 text-xs font-bold tracking-widest uppercase">
            Chikumano Middle School Official Activity Calendar
          </p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-stone-200/50 border border-stone-200 mb-12 overflow-hidden">
          <div className="bg-stone-900 p-8 flex items-center justify-between text-white">
            <button onClick={prevMonth} className="p-3 hover:bg-white/10 rounded-full transition-all"><ChevronLeft size={28} /></button>
            <h2 className="text-3xl font-black tracking-tighter">{year} / {month < 10 ? `0${month}` : month}</h2>
            <button onClick={nextMonth} className="p-3 hover:bg-white/10 rounded-full transition-all"><ChevronRight size={28} /></button>
          </div>

          <div className="p-6 md:p-10">
            <div className="grid grid-cols-7 mb-6 text-center">
              {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => (
                <div key={day} className={`font-black text-[10px] tracking-widest py-2 ${i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-stone-300'}`}>
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-3">
              {days.map((day, index) => {
                if (day === null) return <div key={`empty-${index}`} className="aspect-square"></div>;
                const dayEvents = getEventsForDay(day);
                const hasEvent = dayEvents.length > 0;
                const isSelected = selectedDate === day;
                const dateStr = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isHoliday = HOLIDAYS.includes(dateStr);
                const dayOfWeek = new Date(year, month - 1, day).getDay();

                return (
                  <div 
                    key={day} 
                    onClick={() => hasEvent && setSelectedDate(isSelected ? null : day)}
                    className={`
                      aspect-square rounded-2xl p-2 border transition-all duration-300 relative flex flex-col items-center justify-center
                      ${hasEvent 
                        ? 'bg-stone-50 border-brand-200 cursor-pointer hover:bg-white hover:shadow-xl hover:-translate-y-1' 
                        : 'bg-white border-transparent text-stone-200'
                      }
                      ${isSelected ? 'bg-white border-brand-500 ring-4 ring-brand-500/10' : ''}
                    `}
                  >
                    <span className={`text-sm font-black ${isHoliday || dayOfWeek === 0 ? 'text-red-400' : dayOfWeek === 6 ? 'text-blue-400' : hasEvent ? 'text-stone-800' : 'text-stone-300'}`}>
                      {day}
                    </span>
                    {hasEvent && (
                      <div className="mt-1 flex gap-1">
                        {dayEvents.map((e, i) => (
                          <div key={i} className={`w-1.5 h-1.5 rounded-full ${e.category === 'exam' ? 'bg-red-500' : e.category === 'election' ? 'bg-brand-500' : 'bg-blue-400'}`}></div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- Event Detail List --- */}
        <div className="space-y-6">
           {currentMonthEvents.length > 0 ? (
             currentMonthEvents.sort((a,b) => (a.day||0)-(b.day||0)).map((evt, i) => (
               <div key={i} className={`bg-white rounded-[2rem] p-6 md:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row gap-6 items-start md:items-center transition-all hover:shadow-md ${evt.isDone ? 'opacity-50 grayscale' : ''}`}>
                 <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center flex-shrink-0 font-black ${
                   evt.category === 'exam' ? 'bg-red-50 text-red-500 border border-red-100' :
                   evt.category === 'election' ? 'bg-brand-50 text-brand-600 border border-brand-100' :
                   'bg-blue-50 text-blue-600 border border-blue-100'
                 }`}>
                   <span className="text-[10px] leading-none mb-1">{month} /</span>
                   <span className="text-xl leading-none">{evt.day}</span>
                 </div>
                 <div className="flex-grow">
                   <div className="flex flex-wrap items-center gap-3 mb-2">
                     <h3 className="text-xl font-bold text-stone-900">{evt.title}</h3>
                     {evt.importance === 'high' && <span className="flex items-center gap-1 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black animate-pulse"><AlertCircle size={10} /> IMPORTANT</span>}
                     {evt.category === 'election' && <span className="bg-brand-600 text-white text-[10px] px-2 py-0.5 rounded-full font-black">ELECTION</span>}
                   </div>
                   <div className="flex gap-4 text-xs font-bold text-stone-400 uppercase tracking-widest">
                     <span className="flex items-center gap-1"><Clock size={14} /> {evt.time}</span>
                     <span className="flex items-center gap-1"><MapPin size={14} /> {evt.location}</span>
                   </div>
                   <p className="mt-3 text-sm text-stone-500 leading-relaxed font-medium">{evt.description}</p>
                 </div>
                 {evt.isDone && <CheckCircle2 size={24} className="text-stone-300 ml-auto" />}
               </div>
             ))
           ) : (
             <div className="text-center py-20 bg-white rounded-[2rem] border-2 border-dashed border-stone-200">
                <p className="text-stone-400 font-bold">この月の予定はありません</p>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};

export default ScheduleDetail;