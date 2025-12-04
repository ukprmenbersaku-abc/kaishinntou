import React, { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, AlertCircle, Lightbulb } from 'lucide-react';
import { Policy } from '../types';

interface PolicyDetailProps {
  policy: Policy;
  onBack: () => void;
}

const PolicyDetail: React.FC<PolicyDetailProps> = ({ policy, onBack }) => {
  // ページトップへスクロール
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
          <span className="font-bold">公約一覧に戻る</span>
        </button>

        {/* Header */}
        <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-stone-100 shadow-sm">
          <div className={`inline-flex items-center justify-center p-4 rounded-2xl mb-6 ${policy.color}`}>
            <policy.icon size={48} />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
            {policy.title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-600 font-medium leading-relaxed">
            {policy.description}
          </p>
        </div>

        {/* Content Body */}
        <div className="space-y-12">
          {/* Problem Section */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-center gap-3 text-red-500 mb-2">
                <AlertCircle size={28} />
                <h3 className="text-xl font-bold">現状の課題</h3>
              </div>
              <div className="h-1 w-20 bg-red-100 rounded-full"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-stone-700 leading-loose">
                {policy.content.problem}
              </p>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* Solution Section */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-center gap-3 text-brand-600 mb-2">
                <Lightbulb size={28} />
                <h3 className="text-xl font-bold">解決策</h3>
              </div>
              <div className="h-1 w-20 bg-brand-100 rounded-full"></div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-stone-700 leading-loose">
                {policy.content.solution}
              </p>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* Roadmap Section */}
          <section>
            <div className="flex items-center gap-3 text-stone-800 mb-8">
              <CheckCircle2 size={28} className="text-brand-500" />
              <h3 className="text-2xl font-bold">実現へのロードマップ</h3>
            </div>
            
            <div className="bg-brand-50/50 rounded-3xl p-8 md:p-10">
              <div className="space-y-6 relative">
                {/* Vertical Line */}
                <div className="absolute left-[15px] top-4 bottom-4 w-0.5 bg-brand-200"></div>

                {policy.content.roadmap.map((step, index) => (
                  <div key={index} className="relative flex gap-6 items-start">
                    <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-white border-4 border-brand-300 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 rounded-full bg-brand-600"></div>
                    </div>
                    <div className="pt-1">
                      <h4 className="text-lg font-bold text-stone-800 mb-1">STEP {index + 1}</h4>
                      <p className="text-stone-600">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-stone-500 mb-6">
            この政策について、あなたはどう思いますか？<br/>
            学校で会った時にぜひ意見を聞かせてください。
          </p>
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

export default PolicyDetail;