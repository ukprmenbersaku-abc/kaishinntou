import React, { useEffect } from 'react';
import { ArrowLeft, CalendarOff, AlertCircle } from 'lucide-react';

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
        <div className="bg-red-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-red-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-red-900 pointer-events-none">
            <CalendarOff size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-red-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-red-100 shadow-sm text-red-600">お知らせ</span>
              <span className="text-sm font-medium">2026.01.12</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              【重要】1/14(水) オンライン会議の<br/>延期について
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              テスト期間を考慮し、日程を変更いたします。
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <AlertCircle className="text-red-500" />
                延期の理由と今後について
             </h2>
             <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
                <p className="text-stone-700 leading-relaxed mb-6">
                    1月14日(水)に予定していたGoogle Meetでのオンライン会議ですが、
                    <strong>現在はテスト期間中であり、学業への影響を考慮すべき</strong>との判断に至りました。<br/>
                    そのため、誠に勝手ながら今回の会議は<span className="font-bold text-red-600">延期</span>とさせていただきます。
                </p>
                <p className="text-stone-700 leading-relaxed mb-6">
                    予定を空けてくださっていた皆様、直前のご連絡となり大変申し訳ありません。
                </p>
                
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
                    <h3 className="font-bold text-stone-800 mb-2">次回開催予定</h3>
                    <p className="text-stone-600">
                        <span className="font-bold text-brand-600">テスト期間明け</span>に改めて実施する予定です。<br/>
                        詳細な日時が決まり次第、ウェブチャット等で改めてご連絡いたします。
                    </p>
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