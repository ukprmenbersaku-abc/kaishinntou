
import React, { useEffect } from 'react';
import { ArrowLeft, Quote, Calendar, User, Mic } from 'lucide-react';

interface SummaryDetailProps {
  onBack: () => void;
}

const SummaryDetail: React.FC<SummaryDetailProps> = ({ onBack }) => {
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
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-brand-100 shadow-sm relative overflow-hidden">
           {/* Decoration */}
           <div className="absolute top-0 right-0 p-8 opacity-10 text-brand-900 pointer-events-none">
            <Mic size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-brand-700">
              <span className="bg-brand-100 px-3 py-1 rounded-full text-xs font-bold border border-brand-200">活動報告</span>
              <span className="flex items-center gap-1 text-sm font-medium"><Calendar size={14}/> 2025.12.21</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              今年度の活動のまとめと、<br/>
              これからの筑摩野中学校へ。
            </h1>

            <div className="flex items-center gap-2 border-l-2 border-brand-200 pl-4">
              <div>
                <p className="text-sm font-bold text-stone-500 uppercase tracking-wider">筑摩野改新党 代表</p>
                <p className="text-xl font-bold text-stone-800">代表 岩本</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12 max-w-3xl mx-auto">
          
          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6 border-l-4 border-brand-500 pl-4">
              はじめに
            </h2>
            <p className="text-lg text-stone-700 leading-loose mb-6">
              皆さん、こんにちは。筑摩野改新党の代表 岩本です。<br/>
              早いもので、私たちが「学校を変えたい」と声を上げてから数ヶ月が経ちました。この12月という節目に、改めて今年度の活動を振り返り、私の想いをお伝えしたいと思います。
            </p>
          </section>

          <section>
            <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
               <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                 <Quote className="text-brand-400 rotate-180" size={24} />
                 対話から見えた「可能性」
               </h3>
               <p className="text-stone-600 leading-relaxed">
                 活動を通して最も嬉しかったのは、多くの生徒の皆さんが「実はこう思っていた」「もっとこうしたい」と声を寄せてくれたことです。<br/><br/>
                 「諦め」の空気が漂っていた場所に、少しずつ「希望」の種が蒔かれているのを感じます。タブレット規制の問題も、防災への不安も、皆さんが声を上げてくれたからこそ、具体的な公約として形にすることができました。
               </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-stone-900 mb-6 border-l-4 border-brand-500 pl-4">
              来年度に向けて
            </h2>
            <p className="text-lg text-stone-700 leading-loose">
              私たちの活動はまだ始まったばかりです。公約に掲げた「聴く学校」や「デジタル委員会の設置」は、口だけで終わらせてはいけません。<br/><br/>
              来たる選挙戦、そしてその先にある生徒会活動において、私は先頭に立って汗をかく覚悟です。ですが、学校を変えるのは代表一人ではありません。ここにいる皆さん一人ひとりが主役です。
            </p>
          </section>

          {/* Fix: Changed closing </div> to </section> to match opening <section> tag */}
          <section className="text-center pt-8 border-t border-stone-100">
            <p className="text-2xl font-bold text-stone-800 mb-4">
              「新しい選択肢」を、共に選びましょう。
            </p>
            <p className="text-stone-500">
              引き続き、筑摩野改新党へのご理解とご協力を心よりお願い申し上げます。
            </p>
          </section>
        </div>

        {/* Footer Actions */}
        <div className="mt-16 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center justify-center px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            トップページに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryDetail;
