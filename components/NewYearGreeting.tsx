import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Send } from 'lucide-react';

interface NewYearGreetingProps {
  onBack: () => void;
}

const NewYearGreeting: React.FC<NewYearGreetingProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-white pt-24 pb-12 relative overflow-hidden font-sans">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse"></div>
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse delay-1000"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-400 hover:text-white mb-8 transition-colors duration-300"
        >
          <div className="bg-white/10 p-2 rounded-full mr-3 group-hover:bg-white/20 transition-colors duration-300">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">ホームに戻る</span>
        </button>

        <div className="text-center py-12 md:py-24">
            <div className="inline-flex items-center justify-center p-4 bg-yellow-500/20 rounded-full text-yellow-400 mb-8 shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                <Sparkles size={48} />
            </div>

            <h1 className="text-4xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 pb-2">
                    Happy New Year
                </span>
                <span className="text-3xl md:text-5xl text-white mt-4 block font-medium">
                    2026
                </span>
            </h1>

            <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                <p className="text-lg md:text-xl leading-relaxed text-stone-300 mb-8 font-medium">
                    新年あけましておめでとうございます。<br/>
                    旧年中は筑摩野改新党への温かいご支援、誠にありがとうございました。
                </p>
                <div className="w-16 h-0.5 bg-yellow-500/50 mx-auto mb-8"></div>
                <p className="text-lg md:text-xl leading-relaxed text-stone-300 mb-8">
                    2026年は、公約実現の「実行の年」です。<br/>
                    「聴く学校」から「動く学校」へ。<br/>
                    皆さんと共に、新しい学校生活を築いていけることを楽しみにしています。
                </p>
                <p className="text-lg md:text-xl leading-relaxed text-stone-300">
                    本年もどうぞよろしくお願い申し上げます。
                </p>

                <div className="mt-12 text-right border-t border-white/10 pt-6">
                    <p className="font-bold text-lg text-stone-400">筑摩野改新党 代表</p>
                    <p className="font-bold text-2xl text-white mt-1 font-serif tracking-widest">岩本 宗祐</p>
                </div>
            </div>

             {/* Message CTA */}
             <div className="mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                  <p className="text-stone-400 mb-6 font-bold">新年の抱負や要望をお聞かせください</p>
                  <a
                    href="https://forms.gle/unGfDqs9yaEQTcNMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-yellow-400/50 transform hover:-translate-y-1"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    メッセージを送る
                  </a>
             </div>
        </div>

      </div>
    </div>
  );
};

export default NewYearGreeting;