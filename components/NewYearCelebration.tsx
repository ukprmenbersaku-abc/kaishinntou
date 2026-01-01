import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, X } from 'lucide-react';

interface NewYearCelebrationProps {
  onClose: () => void;
}

const NewYearCelebration: React.FC<NewYearCelebrationProps> = ({ onClose }) => {
  const [showCloseButton, setShowCloseButton] = useState(false);
  const currentYear = 2026; // コンテキストに合わせて2026年設定

  useEffect(() => {
    // 5秒後に閉じるボタンを表示
    const timer = setTimeout(() => {
      setShowCloseButton(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-stone-900/95 backdrop-blur-md animate-in fade-in duration-1000 flex items-center justify-center">
      <div className="w-full h-full p-4 flex flex-col items-center justify-center relative">
        
        {/* Close Button (Top Right) */}
        {showCloseButton && (
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-all animate-in fade-in duration-500 z-50"
            >
                <X size={32} />
            </button>
        )}

        <div className="relative z-10 text-center flex flex-col items-center justify-center max-w-4xl mx-auto w-full animate-in zoom-in-90 duration-1000">
            {/* Sparkles - Adjusted positions to stay within bounds */}
            <div className="absolute top-[-20px] left-4 md:left-10 text-yellow-400 animate-pulse delay-100 hidden md:block"><Sparkles size={60} /></div>
            <div className="absolute bottom-[-20px] right-4 md:right-10 text-yellow-400 animate-pulse delay-300 hidden md:block"><Sparkles size={80} /></div>
            <div className="absolute top-1/4 right-0 text-brand-400 animate-pulse delay-500 hidden sm:block"><Sparkles size={30} /></div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 mb-2 md:mb-6 drop-shadow-lg tracking-tighter leading-none py-2">
                Happy<br/>New Year
            </h1>
            
            <div className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 md:mb-10 tracking-widest border-b-4 border-brand-500 pb-2">
                {currentYear}
            </div>

            <p className="text-stone-300 text-base sm:text-lg md:text-2xl font-bold max-w-xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
                あけましておめでとうございます。<br/>
                今年も筑摩野改新党を<br className="md:hidden"/>よろしくお願いします。
            </p>

            <div className="h-16 flex items-center justify-center">
                <div className={`transition-all duration-1000 transform ${showCloseButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <button
                    onClick={onClose}
                    className="group flex items-center gap-2 md:gap-3 bg-white text-stone-900 hover:bg-brand-50 px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-xl font-bold transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)] cursor-pointer"
                >
                    サイトへ進む
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearCelebration;