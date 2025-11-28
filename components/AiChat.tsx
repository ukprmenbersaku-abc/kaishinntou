import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "タブレットの規制（ISGCAgent）は本当に緩和できますか？",
    answer: "一気に全ての制限を解除するのは難しいですが、新設する「デジタル委員会」で先生方と交渉します。「勉強に必要な動画は見られるようにする」など、生徒自身でルールを提案し、段階的な緩和を目指します。"
  },
  {
    question: "「防災委員会」って、避難訓練の係ですか？",
    answer: "単なる係ではありません。生徒の目線で「ここが危ない」という場所を探したり、予告なしの避難訓練を企画したりします。先生に言われて動くのではなく、自分たちの命を自分たちで守るための組織です。"
  },
  {
    question: "地域との関わりを増やすメリットは？",
    answer: "筑摩野中は地域の方々に支えられています。行事に参加して顔見知りになれば、登下校時の安心にもつながりますし、学校の外の世界を知る良いチャンスにもなります。"
  },
  {
    question: "公約が「言いっぱなし」で終わることはありませんか？",
    answer: "今回は「公約進捗ボード」を作成し、毎月どこまで進んだかを全校に報告します。「やったふり」はしません。もし壁にぶつかった場合も、正直に報告して皆さんに相談します。"
  }
];

const AiChat: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="qa" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-brand-100 text-brand-600 rounded-full mb-4">
            <HelpCircle size={24} />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-stone-900">よくある質問</h3>
          <p className="mt-4 text-stone-500">
            教室や廊下でよく聞かれる質問をまとめました。
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border border-stone-200 rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'bg-brand-50/30 border-brand-200 shadow-sm' : 'bg-white hover:bg-stone-50'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-brand-800' : 'text-stone-700'}`}>
                  Q. {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-brand-500" />
                ) : (
                  <ChevronDown className="text-stone-400" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="p-6 pt-0 text-stone-600 leading-relaxed border-t border-transparent">
                  <span className="font-bold text-brand-600 mr-2">A.</span>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center bg-stone-100 rounded-2xl p-6">
          <p className="text-stone-600 mb-2 font-medium">他に聞きたいことはありますか？</p>
          <p className="text-sm text-stone-500">
            休み時間に2年A組の深志、または昇降口前の意見箱までお気軽にどうぞ！
          </p>
        </div>
      </div>
    </section>
  );
};

export default AiChat;