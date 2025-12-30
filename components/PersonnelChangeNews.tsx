import React, { useEffect } from 'react';
import { ArrowLeft, UserCog, UserPlus, UserMinus, Briefcase, ChevronRight } from 'lucide-react';

interface PersonnelChangeNewsProps {
  onBack: () => void;
}

const PersonnelChangeNews: React.FC<PersonnelChangeNewsProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const appointments = [
    { role: '幹事長', name: 'O.R', type: 'new' },
    { role: '幹事長代行', name: 'M.Y', type: 'new' },
    { role: '政調会長', name: 'T.K', type: 'new' },
    { role: '総務会長', name: 'O.K', type: 'move' },
    { role: '選挙対策委員長', name: 'Y.T', type: 'new' },
  ];

  const resignations = [
    { role: '幹事長', name: 'N.T' },
    { role: '選挙対策委員長', name: 'O.K' },
  ];

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-500 hover:text-brand-600 mb-8 transition-colors duration-300"
        >
          <div className="bg-stone-100 p-2 rounded-full mr-3 group-hover:bg-brand-50 transition-colors duration-300">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">ホームに戻る</span>
        </button>

        {/* Header */}
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-brand-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-brand-900 pointer-events-none">
            <UserCog size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-brand-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-brand-100 shadow-sm text-brand-600">お知らせ</span>
              <span className="text-sm font-medium">2025.12.22</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              【重要】役員人事の変更について
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              令和八年度 筑摩野改新党役員人事をお知らせします。
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-2xl mx-auto space-y-12">
          
          {/* New Appointments */}
          <section>
             <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">
                <UserPlus className="text-brand-500" />
                新体制・新任
             </h2>
             <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
                <div className="divide-y divide-stone-100">
                    {appointments.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-5 hover:bg-stone-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-brand-50 flex items-center justify-center text-brand-600 flex-shrink-0">
                                    <Briefcase size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-stone-400 mb-0.5">{item.role}</p>
                                    <p className="text-lg font-bold text-stone-800">{item.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {item.type === 'move' ? (
                                    <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded border border-blue-100">配置換</span>
                                ) : (
                                    <span className="text-xs font-bold bg-green-50 text-green-600 px-2 py-1 rounded border border-green-100">新任</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
             </div>
          </section>

          {/* Resignations */}
          <section>
             <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">
                <UserMinus className="text-stone-400" />
                退任・異動
             </h2>
             <div className="bg-stone-50 border border-stone-200 rounded-3xl overflow-hidden">
                <div className="divide-y divide-stone-200/50">
                    {resignations.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-5">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center text-stone-500 flex-shrink-0">
                                    <Briefcase size={18} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-stone-400 mb-0.5">{item.role}</p>
                                    <p className="text-lg font-bold text-stone-600">{item.name}</p>
                                </div>
                            </div>
                            <span className="text-xs font-bold bg-stone-200 text-stone-500 px-2 py-1 rounded">退任</span>
                        </div>
                    ))}
                </div>
             </div>
             <p className="text-xs text-stone-400 mt-3 pl-2">
                ※O.Kは選挙対策委員長を退任し、総務会長へ就任します。
             </p>
          </section>

          {/* Signature */}
          <div className="pt-12 text-right font-sans">
             <p className="text-stone-500 mb-1">令和七年12月23日</p>
             <p className="text-xl font-bold text-stone-900">筑摩野改新党 代表　岩本 宗祐</p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center justify-center px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            トップページに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonnelChangeNews;