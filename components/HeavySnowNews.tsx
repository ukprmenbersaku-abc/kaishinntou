import React, { useEffect } from 'react';
import { ArrowLeft, Snowflake, AlertTriangle, CloudSnow, ThermometerSnowflake } from 'lucide-react';

interface HeavySnowNewsProps {
  onBack: () => void;
}

const HeavySnowNews: React.FC<HeavySnowNewsProps> = ({ onBack }) => {
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
        <div className="bg-sky-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-sky-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-sky-900 pointer-events-none">
            <Snowflake size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-sky-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-sky-100 shadow-sm text-sky-600">お知らせ</span>
              <span className="text-sm font-medium">2026.01.22</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              【重要】大雪に関する<br/>注意喚起と最新情報
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              登下校中の安全確保と、校内での過ごし方について
            </p>
          </div>
        </div>

        {/* Content - Reverse Chronological Order */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          {/* Latest Update */}
          <section className="relative">
             <div className="absolute -left-3 top-0 bottom-0 w-1 bg-sky-200 rounded-full hidden md:block"></div>
             
             <div className="flex items-center gap-2 mb-4">
                <span className="bg-sky-600 text-white text-xs font-bold px-2 py-1 rounded">13:20 更新</span>
                <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-2">
                   <CloudSnow className="text-sky-500" />
                   大雪の可能性と今後の見通し
                </h2>
             </div>

             <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
                <p className="text-stone-700 leading-relaxed mb-4">
                    気象情報等の更新に伴い、お知らせします。<br/>
                    現時点において、<strong>松本地域における大雪の可能性は低くなりました。</strong>
                </p>
                
                <div className="bg-sky-50 p-6 rounded-2xl border border-sky-100 flex items-start gap-4">
                    <ThermometerSnowflake className="text-sky-600 flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-sky-900 mb-2">今後の注意点</h3>
                        <p className="text-sky-800 text-sm leading-relaxed">
                            大雪のピークは過ぎつつありますが、今後1週間程度は厳しい寒さと降雪が予想されます。<br/>
                            引き続き、防寒対策を万全にし、急な天候の変化に気をつけて過ごしてください。
                        </p>
                    </div>
                </div>
             </div>
          </section>

          {/* Initial Alert */}
          <section className="relative opacity-90">
             <div className="absolute -left-3 top-0 bottom-0 w-1 bg-stone-200 rounded-full hidden md:block"></div>

             <div className="flex items-center gap-2 mb-4">
                <span className="bg-stone-500 text-white text-xs font-bold px-2 py-1 rounded">08:30 発表</span>
                <h2 className="text-xl font-bold text-stone-700 flex items-center gap-2">
                   <AlertTriangle className="text-stone-400" />
                   大雪警報に伴う注意喚起
                </h2>
             </div>

             <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <p className="text-stone-700 leading-relaxed mb-6 font-medium">
                    大雪の影響により、路面の状況が悪化しています。<br/>
                    生徒の皆さんは、以下の点に十分注意してください。
                </p>
                
                <ul className="space-y-4">
                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                        <span className="font-bold text-red-500">①</span>
                        <span className="text-stone-800 font-bold">大雪による路面凍結に十分注意すること</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                        <span className="font-bold text-red-500">②</span>
                        <span className="text-stone-800 font-bold">学校内での通行禁止されている通路を使用しないこと</span>
                    </li>
                    <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-stone-200">
                        <span className="font-bold text-red-500">③</span>
                        <span className="text-stone-800 font-bold">最新の気象情報・学校からの連絡には常に気をつけること</span>
                    </li>
                </ul>
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

export default HeavySnowNews;