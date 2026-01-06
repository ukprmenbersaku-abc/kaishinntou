import React from 'react';
import { Bell, ChevronRight, Sparkles } from 'lucide-react';
import { newsData, NewsItem } from '../data/news';

interface NewsProps {}

const News: React.FC<NewsProps> = () => {
  // トップページには最新の4件を表示（年越しイベント告知を含めるため）
  const recentNews = newsData.slice(0, 4);

  return (
    <section id="news" className="py-12 bg-white border-b border-stone-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          
          {/* Title Section */}
          <div className="w-full text-center flex flex-col items-center">
            <div className="flex items-center gap-3 mb-2">
              <Bell className="text-brand-500" size={48} />
              <h2 className="text-5xl md:text-6xl font-bold text-stone-900 tracking-tight">News</h2>
            </div>
            <p className="text-stone-500 text-sm">改新党からの最新情報</p>
          </div>

          {/* News List */}
          <div className="w-full">
            <div className="flex flex-col gap-3">
              {recentNews.map((item) => (
                <a 
                  key={item.id} 
                  href={item.link}
                  className="group flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-xl border transition-all duration-300 cursor-pointer bg-stone-50 hover:bg-brand-50/50 border-stone-100 hover:border-brand-100"
                  onClick={(e) => {
                    if (item.link.startsWith('#') && !item.link.startsWith('#/')) {
                      e.preventDefault();
                      window.location.hash = item.link;
                    }
                  }}
                >
                  <div className="flex items-center gap-3 text-sm flex-shrink-0">
                    <span className="text-stone-400 font-mono">{item.date}</span>
                    <span className={`px-2 py-0.5 rounded text-xs font-bold border ${
                      item.category === 'イベント' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                      item.category === 'お知らせ' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                      'bg-stone-100 text-stone-600 border-stone-200'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                  
                  <div className="flex-grow font-bold text-stone-700 group-hover:text-brand-700 transition-colors flex items-center gap-2">
                     {item.title}
                  </div>

                  <div className="hidden sm:block text-stone-300 group-hover:text-brand-400 transition-colors">
                    <ChevronRight size={18} />
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-4 text-right">
              <a 
                href="#/news/archive" 
                className="inline-flex items-center text-xs font-bold text-stone-400 hover:text-brand-600 transition-colors duration-300"
              >
                すべてのニュースを見る <ChevronRight size={14} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default News;