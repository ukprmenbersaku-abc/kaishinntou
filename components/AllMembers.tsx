import React, { useEffect } from 'react';
import { ArrowLeft, Users, Award, Shield, ChevronRight, Hash, UserPlus } from 'lucide-react';
import { members } from '../data/members';

interface AllMembersProps {
  onBack: () => void;
}

const AllMembers: React.FC<AllMembersProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // メンバー詳細ページへ遷移
  const handleMemberClick = (id: string) => {
    window.location.hash = `#/member/${id}`;
  };

  // 統計データ
  const totalMembers = 12; // 現在の党員数
  const officersCount = members.filter(m => m.id !== 'userkunn').length;

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
          <span className="font-bold">トップに戻る</span>
        </button>

        {/* Header & Stats */}
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 text-stone-900 relative overflow-hidden shadow-sm border border-brand-100">
          {/* Background Decor */}
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-brand-600">
            <Users size={200} />
          </div>
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-2 text-brand-600 font-bold mb-2">
                  <Award size={20} />
                  <span>ORGANIZATION</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-stone-900">
                  筑摩野改新党<br/>役職党員
                </h1>
                <p className="text-stone-600 font-medium">
                  令和八年度 新体制メンバー<br className="md:hidden"/>
                </p>
              </div>

              {/* Stats Counter */}
              <div className="flex gap-6 md:gap-10 bg-white p-6 rounded-2xl shadow-sm border border-brand-100">
                <div>
                  <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">Total Members</div>
                  <div className="text-4xl font-bold text-stone-800 flex items-end gap-1">
                    {totalMembers}
                    <span className="text-lg font-medium text-stone-400 mb-1">名</span>
                  </div>
                </div>
                <div className="h-full w-px bg-stone-200"></div>
                <div>
                  <div className="text-xs text-stone-400 font-bold uppercase tracking-wider mb-1">Officers</div>
                  <div className="text-4xl font-bold text-brand-600 flex items-end gap-1">
                    {officersCount}
                    <span className="text-lg font-medium text-stone-400 mb-1">名</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recruitment Indicator */}
            <div className="mt-8 flex items-center gap-2 text-sm text-brand-700 bg-white inline-flex px-4 py-2 rounded-full border border-brand-200 shadow-sm font-bold">
              <UserPlus size={18} />
              <span>現在も賛同者を募集中です</span>
            </div>
          </div>
        </div>

        {/* Officers List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-stone-900 flex items-center gap-3 mb-6 px-2">
            <Shield className="text-brand-600" />
            役員・主要メンバー紹介
          </h2>

          <div className="grid gap-6">
            {members.map((member) => (
              <div 
                key={member.id}
                onClick={() => handleMemberClick(member.id)}
                className="group bg-white border border-stone-200 rounded-3xl p-6 md:p-8 hover:shadow-lg hover:border-brand-200 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row gap-6 md:items-center">
                  
                  {member.image && (
                     <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border border-stone-100 flex-shrink-0 bg-stone-50 mx-auto md:mx-0">
                        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                     </div>
                  )}

                  <div className="flex-grow text-center md:text-left">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-2 ${member.color}`}>
                      {member.role}
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-brand-700 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-stone-600 text-sm leading-relaxed mb-4 line-clamp-2">
                      {member.detailBio}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                      {member.tags.slice(0, 3).map((tag, i) => (
                        <span key={i} className="text-xs text-stone-400 bg-stone-50 px-2 py-1 rounded-md border border-stone-100 flex items-center gap-1">
                          <Hash size={10} /> {tag.replace('#', '')}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:flex flex-shrink-0 items-center justify-center w-12 h-12 rounded-full bg-stone-50 group-hover:bg-brand-50 text-stone-300 group-hover:text-brand-600 transition-colors">
                    <ChevronRight size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="mt-12 text-center bg-stone-50 p-8 rounded-3xl border border-stone-100">
          <p className="text-stone-500 text-sm mb-4">
            その他、クラス代表や一般党員など、多くのメンバーが活動を支えています。<br/>
            役員への立候補や、サポーターとしての参加に興味がある方はご連絡ください。
          </p>
          <a 
            href="https://forms.gle/Sjb8EQW57J1ZJWNU8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-600 font-bold hover:underline"
          >
            参加申込みフォームはこちら
          </a>
        </div>

      </div>
    </div>
  );
};

export default AllMembers;