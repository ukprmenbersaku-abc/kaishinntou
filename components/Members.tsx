import React from 'react';
import { Code2, ArrowRight } from 'lucide-react';
import { members } from '../data/members';

const Members: React.FC = () => {
  // 候補者（userkunn以外）と技術者（userkunn）を分離
  const candidates = members.filter(m => m.id !== 'userkunn');
  const support = members.find(m => m.id === 'userkunn');

  const handleMemberClick = (id: string) => {
    window.location.hash = `#/member/${id}`;
  };

  return (
    <section id="members" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Candidates</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">立候補者紹介</h3>
          <p className="mt-4 text-stone-500">
             私たち1年生コンビが、新しい視点で学校を変えていきます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto mb-16">
          {candidates.map((member) => (
            <div 
              key={member.id} 
              onClick={() => handleMemberClick(member.id)}
              className="group bg-white rounded-3xl p-8 md:p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 flex flex-col h-full hover:-translate-y-1 cursor-pointer relative"
            >
              <div className="mb-6">
                <h4 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{member.name}</h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm md:text-base border border-brand-100">
                  {member.role}
                </div>
              </div>
              <p className="text-stone-600 text-base leading-relaxed text-left bg-stone-50 p-6 rounded-2xl border border-stone-100 flex-grow">
                {member.bio}
              </p>
              
              <div className="mt-6 flex items-center justify-center text-stone-400 font-bold text-sm group-hover:text-brand-600 transition-colors">
                もっと知る <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical Support Section */}
        {support && (
          <div className="mt-20 border-t border-stone-200 pt-12 text-center max-w-2xl mx-auto">
            <h4 className="text-stone-400 font-bold tracking-widest uppercase text-xs mb-8">
              Web System & Design Support
            </h4>
            <div 
              onClick={() => handleMemberClick(support.id)}
              className="group inline-flex items-center gap-6 bg-white px-10 py-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all cursor-pointer hover:-translate-y-1 w-full md:w-auto"
            >
              <div className="p-4 bg-brand-100 rounded-full text-brand-600 transition-colors group-hover:bg-brand-200">
                <Code2 size={40} />
              </div>
              <div className="text-left flex-grow">
                <p className="text-sm text-stone-500 font-bold mb-1">技術提供者</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-3xl md:text-4xl font-extrabold text-stone-800 tracking-tight font-sans">
                    {support.name}
                  </p>
                  <ArrowRight size={20} className="text-stone-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Members;