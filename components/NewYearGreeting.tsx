import React, { useEffect } from 'react';
import { ArrowLeft, Sparkles, Send, Sun } from 'lucide-react';

interface NewYearGreetingProps {
  onBack: () => void;
}

const NewYearGreeting: React.FC<NewYearGreetingProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-900 text-stone-800 pt-24 pb-12 relative overflow-hidden font-sans">
        {/* Decorative Background for "Omedetai" feeling */}
        <div className="absolute inset-0 bg-[#fbfaf5]">
            {/* Japanese Traditional Pattern-ish CSS */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5" 
                style={{backgroundImage: 'radial-gradient(#d97706 2px, transparent 2px)', backgroundSize: '30px 30px'}}>
            </div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-red-500 rounded-bl-full opacity-5 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vh] bg-gold-500 rounded-tr-full opacity-5 pointer-events-none"></div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-500 hover:text-stone-800 mb-8 transition-colors duration-300"
        >
          <div className="bg-white border border-stone-200 p-2 rounded-full mr-3 group-hover:bg-red-50 group-hover:text-red-600 transition-colors duration-300">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">ホームに戻る</span>
        </button>

        <div className="text-center py-8 md:py-16">
            
            {/* Main Greeting Card */}
            <div className="bg-white p-2 md:p-4 rounded-[3rem] shadow-2xl relative overflow-hidden max-w-3xl mx-auto">
                {/* Gold Frame */}
                <div className="border-4 border-double border-yellow-500 rounded-[2.5rem] p-8 md:p-12 relative">
                    
                    {/* Rising Sun Icon */}
                    <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-red-500 opacity-20">
                        <Sun size={120} />
                    </div>

                    <div className="relative z-10">
                        <div className="inline-flex items-center justify-center p-3 bg-red-100 text-red-600 rounded-full mb-6">
                            <span className="text-xs font-bold tracking-widest uppercase px-2">Happy New Year</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight text-stone-900">
                            謹賀新年
                            <span className="block text-2xl md:text-3xl text-yellow-600 mt-4 font-bold tracking-[0.2em]">
                                2026
                            </span>
                        </h1>

                        <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-yellow-500 mx-auto mb-10 rounded-full"></div>

                        <div className="space-y-6 text-lg md:text-xl font-medium text-stone-600 leading-loose">
                            <p>
                                明けましておめでとうございます。<br/>
                                旧年中は筑摩野改新党への温かいご支援、<br className="hidden md:inline"/>誠にありがとうございました。
                            </p>
                            <p>
                                2026年は、公約実現の「実行の年」です。<br/>
                                「聴く学校」から「動く学校」へ。<br/>
                                皆さんと共に、新しい学校生活を<br className="hidden md:inline"/>築いていけることを楽しみにしています。
                            </p>
                            <p>
                                本年もどうぞよろしくお願い申し上げます。
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col items-center">
                            <p className="font-bold text-sm text-stone-400 mb-2">筑摩野改新党 代表</p>
                            {/* Font changed to sans-serif (Zen Maru Gothic) per request */}
                            <p className="font-bold text-3xl text-stone-900 font-sans tracking-widest">岩本 宗祐</p>
                             <div className="flex gap-4 mt-6">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-white border border-stone-200"></div>
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

             {/* Message CTA */}
             <div className="mt-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                  <p className="text-stone-500 mb-6 font-bold">新年の抱負や要望をお聞かせください</p>
                  <a
                    href="https://forms.gle/unGfDqs9yaEQTcNMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-full font-bold hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-red-200 transform hover:-translate-y-1"
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