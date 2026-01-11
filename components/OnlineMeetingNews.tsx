import React, { useEffect } from 'react';
import { ArrowLeft, Video, Clock, Link as LinkIcon } from 'lucide-react';

interface OnlineMeetingNewsProps {
  onBack: () => void;
}

const OnlineMeetingNews: React.FC<OnlineMeetingNewsProps> = ({ onBack }) => {
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
        <div className="bg-blue-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-blue-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-blue-900 pointer-events-none">
            <Video size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-blue-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-blue-100 shadow-sm text-blue-600">お知らせ</span>
              <span className="text-sm font-medium">2026.01.10</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              【重要】1/14(水) オンライン会議の<br/>開催について
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              Google Meetを使用した緊急ミーティングを行います。
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <Clock className="text-blue-500" />
                開催日時・集合時間
             </h2>
             <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
                <div className="space-y-6">
                    <div>
                        <p className="text-sm font-bold text-stone-400 mb-1">開催日</p>
                        <p className="text-2xl font-bold text-stone-800">1月14日 (水)</p>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8">
                        <div>
                            <p className="text-sm font-bold text-stone-400 mb-1">会議時間</p>
                            <p className="text-3xl font-bold text-blue-600 font-mono">16:00 〜 16:30</p>
                            <p className="text-xs text-stone-500 mt-1">※進行状況により、終了時間が多少前後する可能性があります。</p>
                        </div>
                        <div className="border-l border-stone-100 pl-0 md:pl-8">
                            <p className="text-sm font-bold text-stone-400 mb-1">集合時間</p>
                            <p className="text-xl font-bold text-stone-700 font-mono">15:50 (3:50 PM)</p>
                            <p className="text-xs text-stone-500 mt-1">※接続確認のため、少し早めにお集まりください。</p>
                        </div>
                    </div>
                </div>
             </div>
             <p className="text-stone-600 mt-4 leading-relaxed">
                急なご連絡となり申し訳ありません。<br/>
                重要な連絡事項があるため、放課後の短い時間ですがオンラインで集まりたいと思います。ご協力をお願いします。
             </p>
          </section>

          <section>
             <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <LinkIcon size={24} className="text-brand-500" />
                    参加方法
                </h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                    会議には <strong>Google Meet</strong> を使用します。<br/>
                    招待リンクは、先日リリースをお伝えした「党員用ウェブチャット」の方に掲載します。
                </p>
                <div className="bg-white p-4 rounded-xl border border-stone-200 flex items-center gap-4">
                    <div className="bg-brand-50 text-brand-600 p-2 rounded-lg font-bold text-xl min-w-[60px] text-center font-mono">
                        15:45
                    </div>
                    <div className="text-sm text-stone-600">
                        <span className="font-bold text-stone-800">リンク共有予定時刻</span><br/>
                        この時間（会議開始15分前）になりましたら、ウェブチャットをご確認ください。
                    </div>
                </div>
             </div>
          </section>

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

export default OnlineMeetingNews;