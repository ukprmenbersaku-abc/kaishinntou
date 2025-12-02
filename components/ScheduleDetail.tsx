import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    date: '2025年X月X日(月)',
    title: '選挙公示・選挙活動開始',
    time: '8:15〜',
    location: '校内掲示板・放送',
    description: '令和9年度生徒会役員選挙の公示が行われます。ポスター掲示やお昼の放送での演説がスタートします。',
    isDone: true
  },
  {
    date: '2025年X月X日(水)',
    title: '立会演説会',
    time: '5,6時間目',
    location: '本校 体育館',
    description: '全校生徒が体育館に集まり、候補者による演説を行います。私たちの熱い思いを直接届けます。',
    isDone: false
  },
  {
    date: '2025年X月X日(木)',
    title: '投票日',
    time: '朝の会・帰りの会',
    location: '各教室 (Googleフォーム)',
    description: '各教室にてタブレットを使用した投票が行われます。あなたの一票で学校が変わります。',
    isDone: false
  },
  {
    date: '2025年X月X日(金)',
    title: '開票結果発表',
    time: 'お昼の放送',
    location: '放送室より',
    description: '選挙管理委員会より、全校放送にて開票結果が発表されます。',
    isDone: false
  },
  {
    date: '2025年X月X日(月)',
    title: '生徒総会（新体制発足）',
    time: '6時間目',
    location: '本校 体育館',
    description: '新生徒会役員の認証式と、新体制での最初の生徒総会が行われます。',
    isDone: false
  }
];

interface ScheduleDetailProps {
  onBack: () => void;
}

const ScheduleDetail: React.FC<ScheduleDetailProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-4 bg-brand-50 rounded-2xl mb-6 text-brand-600">
            <Calendar size={40} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">選挙スケジュール詳細</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            告示から投票、そして新体制発足までの流れです。<br/>
            大切な行事が続きますので、日程の確認をお願いします。
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-brand-100 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {scheduleData.map((item, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Date Bubble (Center) */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-brand-200 flex items-center justify-center transform -translate-x-1/2 md:translate-x-[-50%] z-10">
                  <div className={`w-3 h-3 rounded-full ${item.isDone ? 'bg-stone-300' : 'bg-brand-500'}`}></div>
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className={`bg-stone-50 p-6 rounded-2xl border ${item.isDone ? 'border-stone-100 opacity-70' : 'border-brand-100 shadow-sm'} hover:shadow-md transition-shadow`}>
                    <div className="flex items-center gap-2 mb-2 text-brand-700 font-bold">
                      <Calendar size={18} />
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-stone-900 mb-3">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4">
                      {item.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-4 text-xs font-medium text-stone-500 border-t border-stone-200 pt-3">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        {item.time}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        {item.location}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-stone-400 mb-8">
            ※ 日程や場所は、学校行事や天候の都合により変更となる場合があります。<br/>
            最新情報は学校からの配布物をご確認ください。
          </p>
          <button 
            onClick={onBack}
            className="inline-flex items-center justify-center px-8 py-3 border border-stone-200 rounded-full text-stone-600 hover:bg-stone-50 hover:text-stone-900 font-bold transition-all"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleDetail;