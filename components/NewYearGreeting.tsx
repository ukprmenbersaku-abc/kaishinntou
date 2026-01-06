import React, { useEffect } from 'react';
import { ArrowLeft, Send } from 'lucide-react';

interface NewYearGreetingProps {
  onBack: () => void;
}

const NewYearGreeting: React.FC<NewYearGreetingProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12 relative overflow-hidden font-sans">
        {/* Background Patterns */}
        <div className="fixed inset-0 pointer-events-none">
            {/* Red Circle (Sun) */}
            <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] bg-red-600 rounded-full opacity-10"></div>
            {/* Gold Circle */}
            <div className="absolute bottom-[-5%] left-[-5%] w-[40vw] h-[40vw] min-w-[200px] min-h-[200px] bg-yellow-500 rounded-full opacity-10"></div>
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-5" 
                style={{
                    backgroundImage: 'radial-gradient(#d97706 1px, transparent 1px)', 
                    backgroundSize: '20px 20px'
                }}>
            </div>
        </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-500 hover:text-stone-900 mb-8 transition-colors duration-300"
        >
          <div className="bg-white border border-stone-200 p-2 rounded-full mr-3 group-hover:bg-red-50 group-hover:border-red-100 transition-colors duration-300">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">ホームに戻る</span>
        </button>

        <div className="py-4 md:py-8">
            
            {/* Main Nengajo Card */}
            <div className="bg-[#fffbf0] p-8 md:p-16 rounded-[20px] shadow-xl relative overflow-hidden max-w-3xl mx-auto border-8 border-double border-red-800">
                
                {/* Corner Decorations */}
                <div className="absolute top-4 left-4 text-4xl opacity-20 transform -rotate-12">🌸</div>
                <div className="absolute top-10 right-8 text-3xl opacity-20 transform rotate-12">🌸</div>
                <div className="absolute bottom-4 right-4 text-5xl opacity-20 transform -rotate-12">🎍</div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    
                    {/* Title Section (Horizontal) */}
                    <div className="mb-10 text-stone-900">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-widest leading-tight">
                            謹賀新年
                        </h1>
                        <p className="text-base md:text-xl text-stone-600 font-medium font-serif tracking-widest leading-relaxed">
                            旧年中は多大なるご支援を賜り<br/>厚く御礼申し上げます
                        </p>
                    </div>

                    {/* Year */}
                    <div className="text-red-600 font-bold text-lg tracking-[0.3em] mb-10 border-t border-b border-red-200 py-2 w-full max-w-xs">
                        2026 元旦
                    </div>

                    {/* Main Message */}
                    <div className="text-center space-y-6 font-medium text-stone-700 leading-loose text-base md:text-lg bg-white/60 p-8 rounded-xl backdrop-blur-sm w-full border border-stone-100/50 shadow-sm">
                        <p>
                            筑摩野改新党は、「聴く学校」から「動く学校」へ。<br/>
                            2026年は、公約実現に向けた勝負の年となります。
                        </p>
                        <p>
                            生徒一人ひとりが主役となれる学校を目指し、<br/>
                            役員一同、誠心誠意取り組んで参ります。
                        </p>
                        <p>
                            本年も変わらぬご指導ご鞭撻を賜りますよう<br/>
                            心よりお願い申し上げます。
                        </p>
                    </div>

                    {/* Signature */}
                    <div className="mt-12 flex flex-col items-center w-full">
                        <div className="text-center">
                            <p className="text-sm text-stone-500 mb-2 font-medium tracking-wide">筑摩野中学校 生徒会立候補者団体</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-6 font-serif">筑摩野改新党</h2>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
                                <div className="text-center">
                                    <span className="text-xs text-stone-400 block mb-1">代表</span>
                                    <span className="font-serif font-bold text-xl border-b border-stone-300 pb-1 px-2">岩本 宗祐</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-xs text-stone-400 block mb-1">共同代表</span>
                                    <span className="font-serif font-bold text-xl border-b border-stone-300 pb-1 px-2">S</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Hanko (Stamp) effect */}
                        <div className="mt-8 w-16 h-16 border-4 border-red-600 rounded-full flex items-center justify-center text-red-600 font-serif font-bold text-lg transform rotate-12 opacity-80 bg-white/50 shadow-sm">
                            改新
                        </div>
                    </div>

                </div>
            </div>

             {/* Message CTA */}
             <div className="mt-12 text-center">
                  <p className="text-stone-500 mb-4 font-bold text-sm">新年の抱負やご意見をお待ちしています</p>
                  <a
                    href="https://forms.gle/unGfDqs9yaEQTcNMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 bg-red-700 text-white px-8 py-3 rounded-full font-bold hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-red-200 transform hover:-translate-y-1"
                  >
                    <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    目安箱へ送る
                  </a>
             </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearGreeting;