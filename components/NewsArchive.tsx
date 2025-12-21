import React, { useEffect } from 'react';
import { ArrowLeft, Bell, ChevronRight, Calendar } from 'lucide-react';
import { newsData } from '../data/news';

interface NewsArchiveProps {
  onBack: () => void;
}

const NewsArchive: React.FC<NewsArchiveProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <Bell size={150} />
          </div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
              News Archive
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              筑摩野改新党のこれまでの歩み
            </p>
          </div>
        </div>

        {/* News List */}
        <div className="space-y-4">
          {newsData.map((item) => (
            <a 
              key={item.id} 
              href={item.link}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-2xl bg-white hover:bg-stone-50 border border-stone-200 hover:border-brand-200 transition-all duration-300 shadow-sm hover:shadow-md"
              onClick={(e) => {
                if (item.link.startsWith('#')) {
                  // ハッシュ遷移をスムーズにする
                }
              }}
            >
              <div className="flex items-center gap-4 flex-shrink-0">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  item.category === 'イベント' ? 'bg-blue-50 text-blue-600' :
                  item.category === 'お知らせ' ? 'bg-orange-50 text-orange-600' :
                  'bg-brand-50 text-brand-600'
                }`}>
                  <item.icon size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-400 font-mono text-sm">{item.date}</span>
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border w-fit mt-1 ${
                    item.category === 'イベント' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                    item.category === 'お知らせ' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                    'bg-brand-50 text-brand-600 border-brand-100'
                  }`}>
                    {item.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-grow font-bold text-stone-800 group-hover:text-brand-700 transition-colors text-lg">
                 {item.title}
              </div>

              <div className="text-stone-300 group-hover:text-brand-400 transition-colors ml-auto sm:ml-0">
                <ChevronRight size={24} />
              </div>
            </a>
          ))}
        </div>

        {/* Footer Actions */}
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

export default NewsArchive;