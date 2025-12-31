import React, { useEffect } from 'react';
import { ArrowLeft, User, Quote, Hash } from 'lucide-react';
import { Member } from '../types';

interface MemberDetailProps {
  member: Member;
  onBack: () => void;
}

const MemberDetail: React.FC<MemberDetailProps> = ({ member, onBack }) => {
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
          <span className="font-bold">一覧に戻る</span>
        </button>

        {/* Header Profile */}
        <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-stone-100 shadow-sm relative overflow-hidden">
           {/* Decorative background circle */}
           <div className={`absolute top-0 right-0 w-64 h-64 rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/3 ${member.color.replace('text-', 'bg-')}`}></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            {member.image && (
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-lg overflow-hidden flex-shrink-0 bg-white">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
            )}
            
            <div className="flex-grow">
                <div className={`inline-block px-4 py-1.5 rounded-full font-bold text-sm md:text-base border border-stone-200 mb-6 ${member.color}`}>
                  {member.role}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
                  {member.name}
                </h1>

                <div className="flex flex-wrap gap-3">
                  {member.tags.map((tag, index) => (
                    <span key={index} className="inline-flex items-center text-sm font-medium text-stone-500 bg-white px-3 py-1 rounded-full border border-stone-200">
                      <Hash size={14} className="mr-1" />
                      {tag.replace('#', '')}
                    </span>
                  ))}
                </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Bio Section */}
          <section className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="md:w-1/3 flex-shrink-0">
              <div className="flex items-center gap-3 text-stone-800 mb-2">
                <User size={28} className="text-brand-500" />
                <h3 className="text-xl font-bold">人物紹介</h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-stone-700 leading-loose">
                {member.detailBio}
              </p>
            </div>
          </section>

          <hr className="border-stone-100" />

          {/* Message Section */}
          <section>
            <div className="bg-brand-50/50 rounded-3xl p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 text-brand-200 w-16 h-16 transform -scale-x-100" />
              
              <div className="relative z-10 pt-8">
                <h3 className="text-xl font-bold text-brand-800 mb-6 text-center">皆さんへのメッセージ</h3>
                <p className="text-xl md:text-2xl font-medium text-stone-700 leading-relaxed text-center font-sans">
                  "{member.message}"
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center justify-center px-8 py-3 border border-stone-200 rounded-full text-stone-600 hover:bg-stone-50 hover:text-stone-900 font-bold transition-all duration-300"
          >
            候補者一覧に戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;