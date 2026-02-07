import React from 'react';
import { Code2, ArrowRight, UserPlus, Users, Laptop } from 'lucide-react';
import { members } from '../data/members';

const Members: React.FC = () => {
  // トップページには岩本(m1)とS(m2)のみを表示
  const candidates = members.filter(m => m.id === 'm1' || m.id === 'm2');
  
  // 技術サポートメンバー (userkunn と S)
  const techSupportMembers = members.filter(m => m.id === 'userkunn' || m.id === 'm2');

  const handleMemberClick = (id: string) => {
    window.location.hash = `#/member/${id}`;
  };

  const handleAllMembersClick = () => {
    window.location.hash = '#/members/all';
  };

  return (
    <section id="members" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Members</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">主要党員紹介</h3>
          <p className="mt-4 text-stone-500">
             私たち1年生コンビが、新しい視点で学校を変えていきます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto mb-12">
          {candidates.map((member) => (
            <div 
              key={member.id} 
              onClick={() => handleMemberClick(member.id)}
              className="group bg-white rounded-3xl p-8 md:p-10 text-center shadow-sm hover:shadow-md transition-all duration-300 border border-stone-200 hover:border-stone-400 flex flex-col h-full cursor-pointer relative"
            >
              <div className="mb-6">
                <h4 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">{member.name}</h4>
                <div className={`inline-block px-4 py-1.5 rounded-full font-bold text-sm md:text-base border border-opacity-20 ${member.color}`}>
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
        {techSupportMembers.length > 0 && (
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h4 className="text-stone-400 font-bold tracking-widest uppercase text-xs mb-6">
              Web System & Design Support
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {techSupportMembers.map((support) => (
                <div 
                  key={support.id}
                  onClick={() => handleMemberClick(support.id)}
                  className="group flex items-center gap-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-stone-200 hover:border-stone-400 hover:shadow-md transition-all duration-300 cursor-pointer text-left"
                >
                  {support.image ? (
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-stone-100 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 bg-stone-50">
                      <img src={support.image} alt={support.name} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className={`p-3 rounded-full transition-colors ${support.id === 'userkunn' ? 'bg-stone-100 text-stone-500 group-hover:bg-brand-100 group-hover:text-brand-600' : 'bg-blue-50 text-blue-500 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
                      {support.id === 'userkunn' ? <Code2 size={24} /> : <Laptop size={24} />}
                    </div>
                  )}
                  <div className="flex-grow">
                    <p className="text-xs text-stone-400 font-bold mb-0.5">
                      {support.id === 'userkunn' ? 'System / Design' : 'Infrastructure / Logic'}
                    </p>
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-lg font-bold text-stone-800">
                        {support.name}
                      </p>
                      <ArrowRight size={16} className="text-stone-300 group-hover:text-stone-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All Members Button */}
        <div className="text-center mb-20">
          <button
            onClick={handleAllMembersClick}
            className="group inline-flex items-center justify-center px-8 py-3 bg-white border border-stone-300 text-stone-600 rounded-full font-bold hover:bg-stone-100 hover:text-stone-800 hover:border-stone-400 transition-all duration-300 shadow-sm"
          >
            <Users size={18} className="mr-2" />
            すべての役職党員を見る
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Member Registration Only */}
        <div className="max-w-3xl mx-auto border-t border-stone-200 pt-16">
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-stone-200 relative overflow-hidden flex flex-col justify-center items-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-50 rounded-2xl text-brand-600 mb-6">
                <UserPlus size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                あなたも「改新党」のメンバーに？
              </h3>
              <p className="text-stone-600 mb-8 leading-relaxed text-sm">
                筑摩野改新党では、学校をより良く変えていくための仲間を募集しています。<br/>
                党員限定のコンテンツや特典を用意する予定です。
              </p>
              <a 
                href="https://forms.gle/Sjb8EQW57J1ZJWNU8"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold shadow-lg shadow-brand-100 transition-all duration-300 cursor-pointer w-full md:w-auto"
              >
                党員登録はこちら
                <ArrowRight size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Members;