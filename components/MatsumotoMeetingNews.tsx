
import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Video, Info, Youtube, Globe } from 'lucide-react';

interface MatsumotoMeetingNewsProps {
  onBack: () => void;
}

const MatsumotoMeetingNews: React.FC<MatsumotoMeetingNewsProps> = ({ onBack }) => {
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
            <Globe size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-brand-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-brand-100 shadow-sm text-brand-600">活動報告</span>
              <span className="text-sm font-medium">2026.01.25</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              代表 岩本が松本市「多事総論会」に出席
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              松本市長と市民が語り合う「多事総論会」に、若者の視点から参加しました。
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <Info className="text-brand-500" />
                多事総論会への参加について
             </h2>
             <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 shadow-sm">
                <p className="text-stone-700 leading-relaxed mb-6">
                    先日開催された松本市主催の「多事総論会」に、当党代表の岩本が参加いたしました。<br/>
                    この会は松本市長が直接市民の声を聞く場であり、今回は若者の政治参画や、地域の課題について幅広い議論が行われました。
                </p>
                <p className="text-stone-700 leading-relaxed">
                    当日の議論の様子は、以下の松本市公式YouTubeから全編視聴できます。興味のある方はぜひチェックしてみてください。（※本活動は松本市の公的活動であり、筑摩野改新党の直接的な党活動ではありませんが、代表の活動としてご報告いたします。）
                </p>
             </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <ExternalLink className="text-brand-500" />
                関連リンク
             </h2>
             <div className="grid gap-4">
                <a 
                    href="https://www.youtube.com/live/fghJCHDxKSQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-white border border-stone-200 rounded-2xl hover:border-brand-500 hover:shadow-md transition-all group"
                >
                    <div className="bg-red-50 text-red-600 p-3 rounded-full flex-shrink-0 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        <Youtube size={24} />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-stone-800 mb-1">松本市公式YouTube（アーカイブ配信）</h3>
                        <p className="text-sm text-stone-500">当日の様子を全編ご視聴いただけます。</p>
                    </div>
                    <ExternalLink size={18} className="text-stone-300 group-hover:text-brand-500" />
                </a>

                <a 
                    href="https://www.city.matsumoto.nagano.jp/site/yokosomayorsoffice/183708.html" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 bg-white border border-stone-200 rounded-2xl hover:border-brand-500 hover:shadow-md transition-all group"
                >
                    <div className="bg-blue-50 text-blue-600 p-3 rounded-full flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Globe size={24} />
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-bold text-stone-800 mb-1">松本市公式ホームページ 詳細</h3>
                        <p className="text-sm text-stone-500">多事総論会の概要や開催趣旨について掲載されています。</p>
                    </div>
                    <ExternalLink size={18} className="text-stone-300 group-hover:text-brand-500" />
                </a>
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

export default MatsumotoMeetingNews;
