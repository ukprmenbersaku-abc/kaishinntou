import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

interface CountdownOverlayProps {
  onNewYear?: () => void;
}

const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ onNewYear }) => {
  const [phase, setPhase] = useState<'hidden' | 'counting' | 'celebrating'>('hidden');
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showCloseButton, setShowCloseButton] = useState(false);
  
  // ユーザーが手動で閉じたかどうかのフラグ
  const [isDismissed, setIsDismissed] = useState(false);
  
  // onNewYearの発火済みフラグ
  const hasTriggeredNewYear = useRef(false);

  useEffect(() => {
    const checkTime = () => {
      // ユーザーが閉じた場合は再表示しない
      if (isDismissed) return;

      // 現在時刻を取得（本番モード）
      const now = new Date();

      const month = now.getMonth() + 1; // 1-12
      const date = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // ロジック: 12月31日 23:59:00 ～ 23:59:59 の間はカウントダウン
      if (month === 12 && date === 31 && hours === 23 && minutes === 59) {
        setPhase('counting');
        setSecondsLeft(60 - seconds);
        setCurrentYear(now.getFullYear());
      }
      // ロジック: 1月1日 00:00:00 ～ 00:00:30 の間は新年のお祝い
      else if (month === 1 && date === 1 && hours === 0 && minutes === 0 && seconds < 30) {
        if (phase !== 'celebrating') {
          setPhase('celebrating');
          setCurrentYear(now.getFullYear()); // 新しい年
        }
      } 
      // それ以外は非表示
      else {
        // Celebratingの場合はボタンを押すまで維持
        if (phase !== 'celebrating') {
             setPhase('hidden');
        }
      }
    };

    // タイマー設定
    const timer = setInterval(checkTime, 100); // チェック頻度を上げて反応を良くする
    checkTime(); // 初回即時実行

    return () => clearInterval(timer);
  }, [phase, isDismissed]);

  // 新年フェーズになったらコールバックを実行し、5秒後にボタンを表示する
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === 'celebrating') {
      
      // App側に通知（1回だけ）
      if (!hasTriggeredNewYear.current && onNewYear) {
        onNewYear();
        hasTriggeredNewYear.current = true;
      }

      timeout = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);
    } else {
      setShowCloseButton(false);
      if (phase === 'counting') {
        hasTriggeredNewYear.current = false; // リセット
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, onNewYear]);

  const handleClose = () => {
    setIsDismissed(true); // 閉じたことを記録
    setPhase('hidden');
  };

  if (phase === 'hidden') return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-stone-900/95 backdrop-blur-md overflow-hidden font-sans">
      
      {/* Container for centering content absolutely */}
      <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">

        {/* Counting Phase */}
        {phase === 'counting' && (
          <div className="relative z-10 text-center animate-in fade-in zoom-in duration-500">
            <p className="text-brand-400 text-xl md:text-3xl font-bold mb-4 md:mb-8 tracking-widest uppercase">
              Count Down to {currentYear + 1}
            </p>
            <div className="relative">
               {/* Huge Number */}
              <div key={secondsLeft} className="text-[25vw] md:text-[15rem] leading-none font-bold text-white tabular-nums animate-bounce-slight drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]">
                {secondsLeft}
              </div>
              <p className="text-stone-400 text-base md:text-lg mt-4 font-bold">
                新しい時代まで、あと少し。
              </p>
            </div>
          </div>
        )}

        {/* Celebrating Phase */}
        {phase === 'celebrating' && (
          <div className="relative z-10 text-center animate-in zoom-in-50 duration-1000 flex flex-col items-center max-w-4xl mx-auto w-full">
            {/* Decorative Sparkles - Positioned absolutely to container to avoid layout shift */}
            <div className="absolute top-1/4 left-10 md:left-20 text-yellow-400 animate-pulse delay-100 hidden md:block"><Sparkles size={80} /></div>
            <div className="absolute bottom-1/4 right-10 md:right-20 text-yellow-400 animate-pulse delay-300 hidden md:block"><Sparkles size={100} /></div>
            <div className="absolute top-1/3 right-10 text-brand-400 animate-pulse delay-500 hidden sm:block"><Sparkles size={40} /></div>

            <div className="mb-4 md:mb-8 inline-flex p-3 md:p-4 rounded-full bg-yellow-400/20 text-yellow-300 border border-yellow-400/50 shadow-[0_0_50px_rgba(234,179,8,0.3)]">
              <Clock size={24} className="animate-spin-slow md:w-8 md:h-8" />
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300 mb-4 md:mb-8 drop-shadow-lg tracking-tighter leading-none">
              Happy<br/>New Year
            </h1>
            
            <div className="text-3xl md:text-6xl font-bold text-white mb-6 md:mb-8 tracking-widest">
              {currentYear}
            </div>

            <p className="text-stone-300 text-base md:text-2xl font-bold max-w-xl mx-auto leading-relaxed mb-8 md:mb-12 px-4">
              あけましておめでとうございます。<br/>
              今年も筑摩野改新党をよろしくお願いします。
            </p>

            {/* Close Button - Appears after 5 seconds */}
            {/* Fixed height container to prevent layout jump */}
            <div className="h-16 flex items-center justify-center">
              <div className={`transition-all duration-1000 transform ${showCloseButton ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <button
                  onClick={handleClose}
                  className="group flex items-center gap-2 md:gap-3 bg-white/10 hover:bg-white text-white hover:text-stone-900 border border-white/30 px-6 py-3 md:px-8 md:py-4 rounded-full text-lg md:text-xl font-bold transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  サイトへ進む
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <style>{`
        @keyframes bounce-slight {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .animate-bounce-slight {
          animation: bounce-slight 0.8s infinite;
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CountdownOverlay;