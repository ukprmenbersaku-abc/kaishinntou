import React from 'react';

const Hero: React.FC = () => {
  const scrollToManifesto = () => {
    // ハッシュを変更してルーターに処理させる（スムーズスクロールはApp.tsx側で制御）
    window.location.hash = '#manifesto';
  };

  const scrollToMembers = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '#members';
  };

  const goToElectionInfo = () => {
    window.location.hash = '#election';
  };

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-50 pt-28 pb-12">
      
      {/* Background decoration (CSS only, no images) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-brand-100 rounded-bl-[100px] opacity-60 blur-3xl transform translate-x-20 -translate-y-20"></div>
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vh] bg-teal-50 rounded-tr-[150px] opacity-60 blur-3xl transform -translate-x-20 translate-y-20"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full border-[60px] border-brand-50/30 rounded-full transform -translate-x-1/2 -translate-y-1/2 scale-150"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <button 
            onClick={goToElectionInfo}
            className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-brand-100 text-brand-700 text-sm font-bold mb-8 shadow-sm hover:bg-brand-50 hover:shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
            </span>
            <span>令和7年度 筑摩野中学校 生徒会役員選挙</span>
            <span className="text-brand-400 text-xs ml-1 group-hover:translate-x-1 transition-transform">→ 詳細</span>
          </button>
          
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 mb-8 leading-tight tracking-tight">
            学校生活に、<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-teal-500">新しい選択肢</span>を。
          </h1>
          
          <p className="text-lg md:text-2xl text-stone-600 mb-12 leading-relaxed font-medium">
            「ルールだから」で諦めない。<br className="hidden md:block" />
            生徒一人ひとりが、自分の言葉で学校を変える。<br/>
            筑摩野改新党は、そんな生徒会を目指します。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button
              onClick={scrollToManifesto}
              className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-full text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-500/30 transform hover:-translate-y-1"
            >
              私たちの約束 (公約)
            </button>
            <a
              href="#members"
              onClick={scrollToMembers}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-100 text-lg font-bold rounded-full text-brand-700 bg-white hover:bg-brand-50 transition-all"
            >
              候補者を知る
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;