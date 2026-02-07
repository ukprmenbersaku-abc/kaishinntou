import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Clock, ArrowRight } from 'lucide-react';

interface CountdownOverlayProps {
  onNewYear?: () => void;
}

type Phase = 'hidden' | 'mini' | 'full' | 'critical' | 'celebrating';

const CountdownOverlay: React.FC<CountdownOverlayProps> = ({ onNewYear }) => {
  const [phase, setPhase] = useState<Phase>('hidden');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [formattedTime, setFormattedTime] = useState('');
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showCloseButton, setShowCloseButton] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const hasTriggeredNewYear = useRef(false);

  useEffect(() => {
    const checkTime = () => {
      // ユーザーが閉じた場合は再表示しない（祝いフェーズ以外）
      if (isDismissed && phase !== 'celebrating') return;

      const now = new Date();
      const month = now.getMonth() + 1; // 1-12
      const date = now.getDate();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      // 目標時刻: 翌年の1月1日 00:00:00
      const nextYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
      const diff = nextYear.getTime() - now.getTime();
      const diffSeconds = Math.floor(diff / 1000);

      // 時間フォーマットの作成 (HH:MM:SS)
      const h = Math.floor(diffSeconds / 3600);
      const m = Math.floor((diffSeconds % 3600) / 60);
      const s = diffSeconds % 60;
      setFormattedTime(`${h > 0 ? h + ':' : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
      setSecondsLeft(diffSeconds); // 秒数をセット

      // -----------------------------------------------------
      // フェーズ判定ロジック
      // -----------------------------------------------------

      // 1. 新年のお祝いフェーズ (1月1日 00:00:00 〜 00:00:30)
      if (month === 1 && date === 1 && hours === 0 && minutes === 0 && seconds < 30) {
        if (phase !== 'celebrating') {
          setPhase('celebrating');
          setCurrentYear(now.getFullYear());
          setIsDismissed(false); // お祝いは強制表示
        }
        return;
      }

      // 2. 12月31日以外は隠す (1月1日の30秒以降も含む)
      if (month !== 12 || date !== 31) {
        if (phase !== 'celebrating' && phase !== 'hidden') {
          setPhase('hidden');
        }
        return;
      }

      // --- 以下、12月31日の処理 ---

      // 3. クリティカルフェーズ (23:59:50 〜 23:59:59) - ラスト10秒
      if (hours === 23 && minutes === 59 && seconds >= 50) {
        setPhase('critical');
        setCurrentYear(now.getFullYear());
      }
      // 4. フルスクリーンフェーズ (23:50:00 〜 23:59:49) - ラスト10分
      else if (hours === 23 && minutes >= 50) {
        setPhase('full');
        setCurrentYear(now.getFullYear());
      }
      // 5. ミニウィジェットフェーズ (上記以前、12/31中ずっと)
      else {
        setPhase('mini');
      }
    };

    const timer = setInterval(checkTime, 100);
    checkTime();

    return () => clearInterval(timer);
  }, [phase, isDismissed]);

  // 新年フェーズ管理
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (phase === 'celebrating') {
      if (!hasTriggeredNewYear.current && onNewYear) {
        onNewYear();
        hasTriggeredNewYear.current = true;
      }
      timeout = setTimeout(() => {
        setShowCloseButton(true);
      }, 5000);
    } else {
      setShowCloseButton(false);
      // カウントダウン中はリセット
      if (phase === 'full' || phase === 'critical' || phase === 'mini') {
        hasTriggeredNewYear.current = false;
      }
    }
    return () => clearTimeout(timeout);
  }, [phase, onNewYear]);

  const handleClose = () => {
    setIsDismissed(true);
    setPhase('hidden');
  };

  if (phase === 'hidden') return null;

  return (
    <>
      {/* ------------------------------------------------------------------
          Mini Widget Phase
          12/31の23:50まで表示される右下のウィジェット
       ------------------------------------------------------------------ */}
      {phase === 'mini' && (
        <div className="fixed bottom-4 right-4 z-[9999] animate-in slide-in-from-bottom-10 fade-in duration-700">
          <div className="bg-stone-900/90 text-white backdrop-blur-md px-5 py-3 rounded-full shadow-2xl border border-stone-700 flex items-center gap-3">
             <div className="bg-brand-600 p-1.5 rounded-full animate-pulse">
                <Clock size={16} />
             </div>
             <div>
                <p className="text-[10px] text-stone-400 font-bold uppercase tracking-wider leading-none mb-0.5">Countdown to 2026</p>
                <p className="text-xl font-mono font-bold leading-none tabular-nums tracking-widest">{formattedTime}</p>
             </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------
          Full Overlay / Critical / Celebrating
          全画面を覆うモード
       ------------------------------------------------------------------ */}
      {(phase === 'full' || phase === 'critical' || phase === 'celebrating') && (
        <div className={`fixed inset-0 z-[9999] overflow-hidden font-sans transition-colors duration-1000 ${phase === 'critical' ? 'bg-red-900/95' : 'bg-stone-900/95'} backdrop-blur-md`}>
          <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
            
            {/* Countdown Display (Full & Critical) */}
            {(phase === 'full' || phase === 'critical') && (
              <div className="relative z-10 text-center animate-in fade-in zoom-in duration-500">
                <p className={`text-xl md:text-3xl font-bold mb-4 md:mb-8 tracking-widest uppercase transition-colors duration-300 ${phase === 'critical' ? 'text-white' : 'text-brand-400'}`}>
                  {phase === 'critical' ? 'FINAL COUNTDOWN' : `Count Down to ${currentYear + 1}`}
                </p>
                
                <div className="relative">
                   {/* Main Timer */}
                   <div className={`leading-none font-bold text-white tabular-nums transition-all duration-300 ${phase === 'critical' ? 'text-[35vw] md:text-[20rem] animate-pulse text-red-100 drop-shadow-[0_0_50px_rgba(220,38,38,0.8)]' : 'text-[18vw] md:text-[12rem] drop-shadow-[0_0_30px_rgba(34,197,94,0.6)]'}`}>
                     {/* 10分前〜1分前までは MM:SS、1分切ったら秒数のみ大きく表示などの工夫も可能だが、
                         ここでは統一感を出すため secondsLeft (秒数) を表示するロジックにするか、
                         formattedTimeを使うかで分岐 */}
                     {secondsLeft <= 60 ? secondsLeft : formattedTime}
                   </div>
                </div>

                <p className={`text-base md:text-lg mt-8 font-bold transition-colors duration-300 ${phase === 'critical' ? 'text-red-200' : 'text-stone-400'}`}>
                  {phase === 'critical' ? '新しい時代が、すぐそこに。' : '新しい時代まで、あと少し。'}
                </p>
              </div>
            )}

            {/* Celebrating Phase */}
            {phase === 'celebrating' && (
              <div className="relative z-10 text-center animate-in zoom-in-50 duration-1000 flex flex-col items-center max-w-4xl mx-auto w-full">
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
        </div>
      )}
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default CountdownOverlay;