import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, CheckCircle2, Users, ClipboardCheck } from 'lucide-react';

interface RepresentativeElectionDetailProps {
  onBack: () => void;
}

const RepresentativeElectionDetail: React.FC<RepresentativeElectionDetailProps> = ({ onBack }) => {
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
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-brand-100 shadow-sm text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-900 pointer-events-none">
            <Users size={150} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight relative z-10">
            令和8年度<br/>筑摩野中学校 二学年代議員選挙
          </h1>
          <p className="text-lg text-stone-600 font-medium relative z-10">
            新2年生の代表として、クラスの声を届けるリーダーを選出します。
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 text-brand-600 mb-4">
              <Calendar size={24} />
              <h3 className="text-xl font-bold text-stone-800">選挙実施時期</h3>
            </div>
            <p className="text-2xl font-bold text-stone-900 pl-9">
              2026年 4月中旬
            </p>
            <p className="text-stone-500 pl-9 mt-1">
              新学期開始後、各学級にて実施
            </p>
          </div>

          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 text-brand-600 mb-4">
              <MapPin size={24} />
              <h3 className="text-xl font-bold text-stone-800">実施場所</h3>
            </div>
            <p className="text-xl font-bold text-stone-900 pl-9">
              各クラス（2学年教室）
            </p>
            <p className="text-stone-500 pl-9 mt-1">
              ホームルームの時間内に実施
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-stone-900 mb-8 flex items-center gap-2">
              <ClipboardCheck className="text-brand-500" />
              選挙の流れ
            </h3>
            
            <div className="space-y-6 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-0.5 before:bg-brand-100">
              <div className="relative flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center font-bold text-brand-600">
                  1
                </div>
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex-grow">
                  <h4 className="font-bold text-stone-900 mb-1">公示・立候補受付</h4>
                  <p className="text-stone-600 text-sm">各クラスで代議員への立候補を募ります。自薦・他薦ともに受け付けます。</p>
                </div>
              </div>

              <div className="relative flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center font-bold text-brand-600">
                  2
                </div>
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex-grow">
                  <h4 className="font-bold text-stone-900 mb-1">立ち会い演説（学級内）</h4>
                  <p className="text-stone-600 text-sm">立候補者による決意表明を行います。どのようなクラス、学年にしたいかを伝えます。</p>
                </div>
              </div>

              <div className="relative flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center font-bold text-brand-600">
                  3
                </div>
                <div className="bg-stone-50 p-5 rounded-2xl border border-stone-100 flex-grow">
                  <h4 className="font-bold text-stone-900 mb-1">投票・開票</h4>
                  <p className="text-stone-600 text-sm">学級内での無記名投票により、男女各1名（またはクラス規定数）を選出します。</p>
                </div>
              </div>

              <div className="relative flex gap-6 items-start">
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-brand-500 border-2 border-brand-500 flex items-center justify-center font-bold text-white">
                  <CheckCircle2 size={20} />
                </div>
                <div className="bg-brand-50 p-5 rounded-2xl border border-brand-200 flex-grow shadow-sm">
                  <h4 className="font-bold text-brand-900 mb-1">新代議員 決定</h4>
                  <p className="text-brand-800 text-sm font-medium">当選したメンバーは、学年集会等で正式に任命されます。</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-stone-900 rounded-[2rem] p-8 md:p-12 text-white">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Users className="text-brand-400" />
              改新党からのメッセージ
            </h3>
            <p className="text-stone-300 leading-relaxed mb-6">
              代議員は、生徒会とクラスを繋ぐ重要なパイプ役です。<br/>
              筑摩野改新党は、やる気のある新2年生の挑戦を全力で応援します。学年全体の声を拾い上げ、共により良い学校生活を創っていきましょう！
            </p>
            <button 
              onClick={() => window.location.hash = '#members'}
              className="px-6 py-2.5 bg-brand-600 hover:bg-brand-700 rounded-full font-bold transition-all duration-300 text-sm"
            >
              私たちのメンバーを知る
            </button>
          </section>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center justify-center px-8 py-3 border border-stone-200 rounded-full text-stone-600 hover:bg-stone-50 hover:text-stone-900 font-bold transition-all duration-300"
          >
            トップページに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeElectionDetail;