import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';

const scheduleData = [
  {
    date: '2025年12月4日(木)',
    title: '生徒会⑪',
    time: '放課後',
    location: '生徒会室',
    description: '第11回生徒会委員会。後期の活動報告まとめと、次期生徒会への引き継ぎ事項の確認を行います。',
    isDone: true
  },
  {
    date: '2025年12月11日(木)',
    title: '新入生説明会',
    time: '午後',
    location: '本校 体育館',
    description: '来年度入学予定の小学6年生とその保護者を対象とした説明会です。生徒会役員から中学校生活についてのプレゼンテーションを行います。',
    isDone: false
  },
  {
    date: '2025年12月18日(木)',
    title: '生徒総会',
    time: '5,6時間目',
    location: '本校 体育館',
    description: '全校生徒による後期活動の総括。各委員会の活動報告と、生徒からの質疑応答が行われます。今年度の締めくくりとなる重要な会です。',
    isDone: false
  },
  {
    date: '2025年12月19日(金)',
    title: '生徒会役員引継ぎ',
    time: '放課後',
    location: '生徒会室・各教室',
    description: '現3年生役員から、新しく選出された2年生・1年生役員へのバトンタッチ。正式に新体制がスタートします。',
    isDone: false
  },
  {
    date: '2026年4月(未定)',
    title: '二学年代議員会選抜',
    time: '未定',
    location: '各教室',
    description: '新2年生の中から、クラスの代表となる代議員を選出します。新しいクラスでの最初の重要な決め事です。',
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
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6">活動スケジュール詳細</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">
            生徒会の今後の活動予定です。<br/>
            引継ぎから新年度の準備まで、重要な行事が続きます。
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