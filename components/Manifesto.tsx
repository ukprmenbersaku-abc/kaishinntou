import React from 'react';
import { ArrowRight } from 'lucide-react';
import { policies } from '../data/policies';

const Manifesto: React.FC = () => {
  return (
    <section id="manifesto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Manifesto</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">みんなと交わす、4つの約束</h3>
          <p className="mt-6 max-w-2xl mx-auto text-stone-500 text-lg">
            「できない」を「できる」に変えるために。<br/>
            私たち筑摩野改新党は、実現可能な政策を提案します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {policies.map((policy) => (
            <div 
              key={policy.id} 
              onClick={() => window.location.hash = `#/policy/${policy.id}`}
              className="group flex flex-col h-full bg-stone-50 rounded-3xl p-8 hover:bg-white border-2 border-transparent hover:border-brand-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              role="button"
              tabIndex={0}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors ${policy.color}`}>
                <policy.icon size={32} />
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-4 group-hover:text-brand-700 transition-colors">
                {policy.title}
              </h4>
              <p className="text-stone-600 leading-relaxed text-sm flex-grow">
                {policy.description}
              </p>
              
              <div className="mt-6 flex items-center text-brand-600 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                詳しく見る <ArrowRight size={16} className="ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;