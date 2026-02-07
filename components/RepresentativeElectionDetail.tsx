import React, { useEffect } from 'react';
import { 
  ArrowLeft, Calendar, MapPin, CheckCircle2, ShieldCheck,
  Star, Trophy, Lightbulb, Zap, Rocket, ChevronRight,
  User, BadgeCheck, Mic, Bell, Sparkles, Target, Trash2
} from 'lucide-react';

interface RepresentativeElectionDetailProps {
  onBack: () => void;
}

const RepresentativeElectionDetail: React.FC<RepresentativeElectionDetailProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] overflow-x-hidden font-sans">
      
      {/* --- HERO SECTION (100vh) --- */}
      <section className="relative bg-stone-900 h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Simple Gradient Background (No liquid effects) */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-900/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-teal-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-600 text-white text-[10px] md:text-xs font-black mb-6 tracking-[0.2em] shadow-xl">
            <BadgeCheck size={16} />
            <span>筑摩野改新党 公認特設サイト</span>
          </div>

          <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-6 leading-[1.1] tracking-tighter">
            <span className="block mb-2 md:mb-4">本気の改革、</span>
            <span className="text-brand-400">
              公約を必ず実現。
            </span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-stone-400 font-medium max-w-3xl leading-relaxed mb-10">
            第97回 二学年代議員選挙。<br className="hidden md:block" />
            言葉を並べるだけの時代は、もう終わらせる。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-stone-800 border border-stone-700 px-6 py-4 rounded-2xl flex items-center gap-3">
              <Calendar className="text-brand-400" size={24} />
              <div className="text-left">
                <span className="block text-[8px] text-stone-500 font-bold uppercase tracking-widest">Election</span>
                <span className="text-base font-bold text-white">4月7日(予定) 投開票</span>
              </div>
            </div>
            <div className="bg-stone-800 border border-stone-700 px-6 py-4 rounded-2xl flex items-center gap-3">
              <Target className="text-teal-400" size={24} />
              <div className="text-left">
                <span className="block text-[8px] text-stone-500 font-bold uppercase tracking-widest">Status</span>
                <span className="text-base font-bold text-white">公認候補 立候補準備中</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button - SOLID (No liquid glass) */}
        <div className="absolute top-6 left-4 md:left-8 z-50">
          <button 
            onClick={onBack}
            className="group flex items-center gap-3 text-white bg-stone-800 hover:bg-stone-700 transition-all px-6 py-3 rounded-xl shadow-lg border border-stone-600"
          >
            <ArrowLeft size={18} />
            <span className="font-bold text-xs tracking-widest uppercase">Back to Home</span>
          </button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600">
          <span className="text-[10px] font-black tracking-widest">SCROLL</span>
          <div className="w-px h-6 bg-stone-700"></div>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20 bg-[#fafaf9]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- OFFICIAL CANDIDATE SECTION (100vh) --- */}
        <section className="relative min-h-[90svh] flex items-center justify-center py-10">
          <div className="w-full bg-white rounded-[2.5rem] shadow-xl border border-stone-200 overflow-hidden">
            <div className="flex flex-col lg:flex-row h-full">
              {/* Profile Side */}
              <div className="lg:w-1/3 bg-stone-50 p-10 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-100">
                <div className="relative mb-8">
                  <div className="w-44 h-44 md:w-60 md:h-60 rounded-[2.5rem] bg-stone-900 flex items-center justify-center shadow-2xl relative z-10 border-4 border-white">
                    <User size={100} className="text-brand-400" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-brand-600 text-white px-4 py-2 rounded-xl font-black text-xs shadow-xl z-20 flex items-center gap-2">
                    <ShieldCheck size={14} />
                    PARTY LEADER
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-4xl font-black text-stone-900 mb-1 tracking-tighter">岩本 宗祐</h2>
                  <p className="text-stone-400 font-bold text-sm tracking-widest">IWAMOTO SOSUKE</p>
                  <p className="mt-4 bg-stone-200 text-stone-600 px-3 py-1 rounded-full text-[10px] font-black">二学年選挙区 公認候補</p>
                </div>
              </div>

              {/* Info Side */}
              <div className="lg:w-2/3 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
                <div className="mb-10">
                   <h3 className="text-brand-600 font-black tracking-[0.2em] uppercase text-xs mb-4">The 4 Pillars</h3>
                   <h4 className="text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
                     筑摩野を、新しい視点で見つめ直す。<br/>
                     <span className="text-stone-400">4つの重点公約</span>
                   </h4>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { title: "聴く学校の実現", icon: Mic, desc: "一方通行ではない、皆の意見が反映される仕組み作り。" },
                    { title: "清掃は全集中。", icon: Trash2, desc: "自分たちの環境を自分たちで整え、集中できる学び舎を。" },
                    { title: "不透明な校則の改革", icon: Target, desc: "時代に合わないルール、不透明な決まりを再検討。" },
                    { title: "公約は必ず実現させる", icon: BadgeCheck, desc: "言葉を並べて終わらない。確実に実行する姿勢。" }
                  ].map((pillar, i) => (
                    <div key={i} className="flex gap-4 p-5 bg-stone-50 rounded-2xl border border-stone-100 group hover:border-brand-300 hover:bg-white transition-all">
                      <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-stone-200 text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-colors flex-shrink-0">
                        <pillar.icon size={24} />
                      </div>
                      <div>
                        <h5 className="font-bold text-stone-900 mb-1">{pillar.title}</h5>
                        <p className="text-xs text-stone-500 leading-relaxed">{pillar.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SCHEDULE TIMELINE SECTION --- */}
        <section className="py-24">
          <div className="text-center mb-16">
            <h2 className="text-brand-600 font-black tracking-[0.3em] uppercase text-sm mb-4">Election Roadmap</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-stone-900 tracking-tight">代議員会選挙スケジュール</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              { date: "3/22", title: "告示", desc: "選挙の正式な公示。私たちの戦いが始まります。", icon: Bell, active: true },
              { date: "3月下旬", title: "立候補期間", desc: "決意を固めた者が集う期間。準備を整えます。", icon: Target, active: false },
              { date: "4月7日", title: "投開票・選抜", desc: "学級の未来を託す投票。運命の決断日です。", icon: Mic, active: true },
              { date: "4月中旬", title: "代議員就任", desc: "新たな体制での学校運営がスタートします。", icon: Trophy, active: false }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className={`p-8 rounded-3xl border h-full transition-all duration-300 ${step.active ? 'bg-brand-600 text-white border-brand-500 shadow-xl' : 'bg-white border-stone-200 text-stone-800'}`}>
                  <div className={`font-black text-2xl mb-4 ${step.active ? 'text-brand-100' : 'text-brand-600'}`}>{step.date}</div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className={`text-sm font-medium ${step.active ? 'text-brand-50' : 'text-stone-400'}`}>{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-stone-300">
                    <ChevronRight size={32} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* --- MESSAGE SECTION --- */}
        <section className="mb-32">
          <div className="bg-stone-900 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden">
             <div className="absolute top-0 right-0 p-20 opacity-5 text-white"><Star size={200} /></div>
             <div className="max-w-3xl relative z-10">
                <h2 className="text-brand-400 font-black tracking-[0.2em] text-xs mb-6 uppercase">Message from the Leader</h2>
                <blockquote className="text-2xl md:text-4xl font-bold leading-snug mb-10 tracking-tight">
                  「代議員は、ただの連絡係ではない。<br/>
                  学級の意志を背負い、学校という組織を動かす力そのものです。」
                </blockquote>
                <p className="text-stone-400 text-lg leading-relaxed mb-8">
                  今回の代議員選挙、筑摩野改新党は「結果」にこだわります。言ったことは必ずやる。できないことは、どうすればできるようになるか対話する。その誠実なサイクルこそが、新しい筑摩野中には必要です。
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-600 rounded-full flex items-center justify-center font-black">岩</div>
                  <div>
                    <p className="font-bold">岩本 宗祐</p>
                    <p className="text-xs text-stone-500">筑摩野改新党 代表</p>
                  </div>
                </div>
             </div>
          </div>
        </section>

        {/* Footer info */}
        <div className="pb-10 text-center">
          <p className="text-stone-400 text-[10px] font-bold tracking-widest uppercase">
            Chikumano Kaishin Party Special Feature Site<br/>
            &copy; 2026 OFFICIAL REPRESENTATIVE ELECTION PROJECT
          </p>
        </div>

      </div>

    </div>
  );
};

export default RepresentativeElectionDetail;