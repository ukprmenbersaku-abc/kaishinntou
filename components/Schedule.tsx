import React from 'react';
import { Calendar, ArrowRight, Flag } from 'lucide-react';

const Schedule: React.FC = () => {
  const handleDetailClick = () => {
    window.location.hash = '#schedule-detail';
  };

  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Schedule</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">今後の予定</h3>
          <p className="mt-4 text-stone-500">
            選挙に向けた主な日程です。
          </p>
        </div>

        {/* 簡易表示カード */}
        <div className="bg-stone-50 rounded-3xl p-8 md:p-12 border border-stone-100 max-w-2xl mx-auto mb-10 shadow-sm">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold mb-6">
              <Flag size={12} />
              NEXT EVENT
            </div>
            
            <h4 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
              選挙公示
            </h4>
            
            <div className="flex items-center gap-2 text-xl md:text-2xl text-brand-600 font-bold mb-6">
               <Calendar className="text-brand-500" />
               <span>2025年X月X日(月)</span>
            </div>
            
            <p className="text-stone-600 leading-relaxed max-w-md">
              いよいよ選挙期間が始まります。<br/>
              ポスター掲示や、お昼の放送での演説にご注目ください。
            </p>
          </div>
        </div>

        <button
          onClick={handleDetailClick}
          className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-brand-100 text-brand-700 rounded-full font-bold hover:bg-brand-50 hover:border-brand-200 transition-all shadow-sm hover:shadow-md"
        >
          詳しいスケジュールを見る
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Schedule;