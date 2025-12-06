import React from 'react';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

const Schedule: React.FC = () => {
  const handleDetailClick = () => {
    window.location.hash = '#schedule-detail';
  };

  const previewEvents = [
    { date: '12月11日(木)', title: '新入生説明会', status: 'upcoming' },
    { date: '12月18日(木)', title: '生徒総会', status: 'upcoming' },
  ];

  return (
    <section id="schedule" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-12">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Schedule</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">今後の予定</h3>
          <p className="mt-4 text-stone-500">
            選挙・生徒会活動に向けた主なスケジュールです。
          </p>
        </div>

        {/* 簡易リスト表示 */}
        <div className="bg-stone-50 rounded-3xl p-8 border border-stone-100 max-w-2xl mx-auto mb-10 shadow-sm text-left">
          <div className="space-y-4">
            {previewEvents.map((event, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-lg flex-shrink-0 ${event.status === 'done' ? 'bg-stone-100 text-stone-400' : 'bg-brand-50 text-brand-600'}`}>
                   <Calendar size={20} className="mb-1" />
                </div>
                <div>
                  <div className={`text-sm font-bold mb-1 ${event.status === 'done' ? 'text-stone-400' : 'text-brand-600'}`}>
                    {event.date}
                  </div>
                  <h4 className={`text-lg font-bold ${event.status === 'done' ? 'text-stone-400 line-through' : 'text-stone-800'}`}>
                    {event.title}
                  </h4>
                </div>
                {event.status === 'upcoming' && (
                  <div className="ml-auto hidden sm:flex items-center text-xs font-bold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
                    <Clock size={12} className="mr-1" /> UPCOMING
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleDetailClick}
          className="group inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-brand-100 text-brand-700 rounded-full font-bold hover:bg-brand-50 hover:border-brand-200 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          詳しい予定を見る
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default Schedule;