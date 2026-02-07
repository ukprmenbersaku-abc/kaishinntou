import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Calendar, ShieldCheck, Star, Trophy, Lightbulb, 
  Rocket, User, BadgeCheck, Mic, Bell, Target, Trash2, 
  ChevronRight, ArrowRight, AlertCircle, Sparkles, Home
} from 'lucide-react';

interface RepresentativeElectionDetailProps {
  onBack: () => void;
}

interface RepPolicy {
  id: string;
  title: string;
  icon: any;
  desc: string;
  detail: string;
  points: string[];
}

const repPolicies: RepPolicy[] = [
  {
    id: 'rep-p1',
    title: '聴く学校の実現',
    icon: Mic,
    desc: '皆さんの「本音」を形にする。',
    detail: '代議員は学級の代表です。しかし、これまでは一部の声しか届いていませんでした。デジタル目安箱の設置や、定期的な「昼休み対話会」を実施し、誰でも匿名で、あるいは直接意見を言える環境を整えます。',
    points: ['デジタル目安箱の運用開始', '学級内の意見集約プロセスの透明化', '代議員による全生徒への定期ヒアリング']
  },
  {
    id: 'rep-p2',
    title: '清掃は全集中。',
    icon: Trash2,
    desc: '環境が心を作り、学びを深める。',
    detail: '清掃の時間は、ただの作業ではありません。自分たちの学び舎を整える大切な時間です。効率的な清掃用具の導入を提案し、短時間でも「全集中」で取り組める仕組みを構築。清掃後の達成感を学年全体で共有します。',
    points: ['清掃道具の効率的なメンテナンス', '音楽を活用した「集中タイム」の導入', '美化コンクールの再定義と表彰制度']
  },
  {
    id: 'rep-p3',
    title: '不透明な校則の改革の検討',
    icon: ShieldCheck,
    desc: '「なぜ？」を放置しない。',
    detail: '「昔からあるから」という理由だけで残っている、今の時代にそぐわない不透明な校則はありませんか？生徒会と連携し、まずは校則の「全件調査」を行い、生徒・保護者・先生の三者で議論する場を設けます。',
    points: ['校則全件の公開とアンケート調査', '校則検討委員会の設置提案', '時代に合わせた柔軟な運用ルールの模索']
  },
  {
    id: 'rep-p4',
    title: 'いった公約は必ず実現させる。',
    icon: Target,
    desc: '政治の基本は、信頼。',
    detail: '「選挙の時だけいいことを言う」のはもう終わりにしましょう。掲げた公約がどこまで進んでいるか、なぜ遅れているのかを毎月「見える化」して報告します。皆さんと約束したことは、任期中に必ず形にします。',
    points: ['公約進捗状況の掲示板・HP公開', '未達成事項に対する改善策の提示', '誠実な報告とフィードバックの徹底']
  }
];

const RepresentativeElectionDetail: React.FC<RepresentativeElectionDetailProps> = ({ onBack }) => {
  const [selectedPolicy, setSelectedPolicy] = useState<RepPolicy | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPolicy]);

  if (selectedPolicy) {
    return (
      <div className="min-h-screen bg-white pt-24 pb-12 font-sans">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={() => setSelectedPolicy(null)}
            className="flex items-center gap-2 text-stone-500 hover:text-brand-600 mb-8 font-bold transition-colors cursor-pointer"
          >
            <ArrowLeft size={20} />
            <span>特設サイトTOPに戻る</span>
          </button>

          <div className="bg-stone-900 rounded-[2.5rem] p-10 md:p-16 text-white mb-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-10 text-brand-400">
              <selectedPolicy.icon size={150} />
            </div>
            <div className="relative z-10">
              <div className="bg-brand-600 text-white px-4 py-1.5 rounded-full text-xs font-black inline-block mb-6">重点公約</div>
              <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{selectedPolicy.title}</h1>
              <p className="text-xl md:text-2xl text-brand-100 font-medium">{selectedPolicy.desc}</p>
            </div>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-black text-stone-900 mb-6 flex items-center gap-3">
                <Lightbulb className="text-brand-500" />
                具体的なアクション
              </h2>
              <p className="text-lg text-stone-600 leading-loose mb-8">
                {selectedPolicy.detail}
              </p>
              <div className="grid gap-4">
                {selectedPolicy.points.map((point, i) => (
                  <div key={i} className="flex items-center gap-4 bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <div className="bg-white w-8 h-8 rounded-full flex items-center justify-center font-black text-brand-600 shadow-sm">{i + 1}</div>
                    <span className="font-bold text-stone-800">{point}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-20 text-center">
            <button 
              onClick={() => setSelectedPolicy(null)}
              className="px-12 py-4 bg-stone-900 text-white rounded-full font-black text-lg hover:bg-stone-800 transition-all shadow-xl cursor-pointer"
            >
              閉じて公約一覧へ
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-900 overflow-x-hidden font-sans">
      
      {/* --- HERO SECTION (100vh) --- */}
      <section className="relative h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-900/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-teal-900/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-brand-600 text-white text-[10px] md:text-xs font-black mb-8 tracking-[0.2em] shadow-xl">
            <ShieldCheck size={16} />
            <span>筑摩野改新党 公認特設サイト</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-[1.0] tracking-tighter">
            <span className="block mb-2 md:mb-4">本気の改革、</span>
            <span className="text-brand-400">
              公約を必ず実現。
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-stone-400 font-medium max-w-3xl leading-relaxed mb-12">
            第97回 二学年代議員選挙。<br className="hidden md:block" />
            言葉だけでなく、実行力で学校を変える。
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-stone-800/80 border border-stone-700 px-8 py-5 rounded-2xl flex items-center gap-4 shadow-2xl">
              <Calendar className="text-brand-400" size={28} />
              <div className="text-left">
                <span className="block text-[10px] text-stone-500 font-bold uppercase tracking-widest mb-1">Schedule</span>
                <span className="text-lg font-black text-white">4月7日(予定) 投開票</span>
              </div>
            </div>
            <div className="bg-stone-800/80 border border-stone-700 px-8 py-5 rounded-2xl flex items-center gap-4 shadow-2xl">
              <Target className="text-teal-400" size={28} />
              <div className="text-left">
                <span className="block text-[10px] text-stone-500 font-bold uppercase tracking-widest mb-1">Announcement</span>
                <span className="text-lg font-black text-white">3月22日 告示</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-stone-600">
          <span className="text-[10px] font-black tracking-widest">SCROLL TO DETAILS</span>
          <div className="w-px h-10 bg-gradient-to-b from-stone-600 to-transparent"></div>
        </div>
      </section>

      {/* --- OFFICIAL CANDIDATE SECTION --- */}
      <section className="relative min-h-[100svh] flex items-center justify-center py-20 bg-stone-900">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <div className="w-full bg-white rounded-[3rem] shadow-[0_0_80px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col lg:flex-row min-h-[80vh]">
            
            {/* Profile Side */}
            <div className="lg:w-1/3 bg-stone-50 p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-stone-100">
              <div className="relative mb-8">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-[3rem] bg-stone-900 flex items-center justify-center shadow-2xl border-4 border-white relative z-10">
                  <User size={100} className="text-brand-400" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-brand-600 text-white px-6 py-3 rounded-2xl font-black text-xs shadow-xl z-20 flex items-center gap-2">
                  <BadgeCheck size={18} />
                  PARTY LEADER
                </div>
              </div>
              <div className="text-center">
                <h2 className="text-5xl font-black text-stone-900 mb-2 tracking-tighter">岩本 宗祐</h2>
                <p className="text-stone-400 font-bold text-sm tracking-widest mb-6">IWAMOTO SOSUKE</p>
                <div className="flex flex-wrap justify-center gap-2">
                   <span className="bg-stone-900 text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">公認候補者</span>
                   <span className="bg-brand-50 text-brand-600 px-4 py-2 rounded-xl text-[10px] font-black border border-brand-100">二学年選挙区</span>
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="lg:w-2/3 p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <div className="mb-10">
                 <h3 className="text-brand-600 font-black tracking-[0.3em] uppercase text-xs mb-4">The 4 Pillars</h3>
                 <h4 className="text-4xl md:text-5xl font-black text-stone-900 tracking-tighter leading-[1.1]">
                   二学年の未来を、<br/>
                   <span className="text-stone-400 italic font-serif">言葉ではなく行動で。</span>
                 </h4>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                {repPolicies.map((pillar) => (
                  <button 
                    key={pillar.id} 
                    onClick={() => setSelectedPolicy(pillar)}
                    className="flex text-left gap-4 p-6 bg-stone-50 rounded-3xl border border-stone-100 group hover:border-brand-500 hover:bg-white transition-all shadow-sm hover:shadow-xl cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center border border-stone-200 text-brand-600 shadow-sm group-hover:bg-brand-600 group-hover:text-white transition-all flex-shrink-0">
                      <pillar.icon size={28} />
                    </div>
                    <div className="flex-grow">
                      <h5 className="font-bold text-lg text-stone-900 mb-1 group-hover:text-brand-600 transition-colors flex items-center justify-between">
                        {pillar.title}
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                      </h5>
                      <p className="text-[11px] text-stone-500 leading-snug font-medium">{pillar.desc}</p>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-stone-400 font-black text-[10px] uppercase tracking-[0.3em] gap-4">
                <span>Representative Election 2026</span>
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  Official Candidate List
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SCHEDULE INFO --- */}
      <section className="py-32 bg-stone-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white p-16 rounded-[4rem] border border-stone-200 shadow-2xl relative overflow-hidden">
            <div className="absolute -top-20 -right-20 opacity-5 text-stone-900 rotate-12"><Bell size={300} /></div>
            
            <h3 className="text-brand-600 font-black tracking-[0.4em] uppercase text-xs mb-8">Official Roadmap</h3>
            <h2 className="text-4xl md:text-6xl font-black text-stone-900 mb-12 tracking-tighter leading-tight">
              代議員会選挙<br/>スケジュール
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="group relative">
                <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 group-hover:border-brand-400 group-hover:bg-white transition-all text-center">
                  <div className="text-brand-600 font-black text-3xl mb-4 italic tracking-widest">3月22日</div>
                  <h4 className="text-xl font-black text-stone-900 mb-3">告示</h4>
                  <p className="text-sm text-stone-500 font-bold">選挙期間の正式な始まり。私たちの覚悟を全校に示します。</p>
                </div>
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 text-stone-200">
                  <ChevronRight size={32} />
                </div>
              </div>

              <div className="group">
                <div className="bg-brand-600 p-10 rounded-[2.5rem] border border-brand-500 shadow-2xl shadow-brand-200/50 text-center text-white">
                  <div className="text-brand-200 font-black text-3xl mb-4 italic tracking-widest">4月7日(予定)</div>
                  <h4 className="text-xl font-black mb-3">投開票・選抜</h4>
                  <p className="text-sm text-brand-100 font-bold opacity-90">学級の未来が決まる運命の日。一票一票に誠実に向き合います。</p>
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-[10px] font-black tracking-widest uppercase">
              ※ 詳細な日程、掲示期間、選抜プロセスは学校の規定に基づき、適宜更新されます。
            </p>
          </div>
        </div>
      </section>

      {/* --- RETURN TO MAIN SITE BUTTON (EMBEDDED) --- */}
      <section className="py-24 bg-stone-900 flex flex-col items-center">
        <div className="max-w-xl w-full px-4">
          <button 
            onClick={onBack}
            className="group w-full bg-stone-800 hover:bg-stone-700 text-white p-8 rounded-[2.5rem] border border-stone-700 transition-all flex items-center justify-between shadow-xl cursor-pointer"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-brand-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
                <Home size={32} />
              </div>
              <div className="text-left">
                <p className="text-[10px] text-brand-400 font-black tracking-widest uppercase mb-1">Return to Official</p>
                <p className="text-xl font-black">公式サイトに戻る</p>
              </div>
            </div>
            <div className="bg-stone-900 p-4 rounded-full text-stone-500 group-hover:text-white transition-colors">
              <ArrowLeft size={24} />
            </div>
          </button>
          <p className="mt-8 text-center text-stone-600 text-[10px] font-bold tracking-[0.2em] uppercase">
            Thank you for visiting the special election feature.
          </p>
        </div>
      </section>

      {/* --- FOOTER INFO --- */}
      <div className="py-20 text-center bg-stone-900 border-t border-stone-800">
        <div className="flex justify-center gap-10 mb-10 text-stone-700">
           <Trophy size={40} className="hover:text-brand-500 transition-colors" />
           <Rocket size={40} className="hover:text-brand-500 transition-colors" />
           <Sparkles size={40} className="hover:text-brand-500 transition-colors" />
        </div>
        <p className="text-stone-500 text-[10px] font-black tracking-[0.4em] uppercase leading-loose">
          Chikumano Kaishin Party Special Feature Site<br/>
          &copy; 2026 OFFICIAL REPRESENTATIVE ELECTION PROJECT
        </p>
      </div>

    </div>
  );
};

export default RepresentativeElectionDetail;