import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "デジタル目安箱って、本当に匿名なんですか？",
    answer: "はい、完全に匿名です。Googleフォームの設定でメールアドレスを収集しない設定にし、誰が書いたか特定できないようにします。安心して意見を送ってください。"
  },
  {
    question: "校則を変えるって、先生と揉めませんか？",
    answer: "喧嘩をするわけではありません。生徒へのアンケート結果という「根拠」を持って、先生方と論理的に話し合います。先生方も「生徒が自主的に考えること」を望んでいるはずです。"
  },
  {
    question: "他の立候補者との違いは何ですか？",
    answer: "「お願いを聞く」だけでなく「仕組みを変える」提案をしている点です。要望をただ伝えるだけでなく、実現するための具体的な方法（予算の見直しやデジタル化）をセットで提案しています。"
  },
  {
    question: "生徒会費の公開はいつから始まりますか？",
    answer: "当選した場合、12月の生徒会だよりから開始します。過去の分についても、可能な限りさかのぼって整理し、図書室前などに掲示する予定です。"
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