import React from 'react';
import { Code2 } from 'lucide-react';
import { Member } from '../types';

const members: Member[] = [
  {
    id: 'm1',
    name: '岩本 宗祐',
    role: '改新党 代表 (1年3組)',
    bio: '1年生ながら改新党を立ち上げた行動派。「聴く学校」を掲げ、生徒一人ひとりの声が確実に届く生徒会を目指す。これまでの慣例に一瞥し、新しい風を吹き込む決意を持つ。',
    image: 'images/iwamoto.png' // 未使用（型定義互換のため保持）
  },
  {
    id: 'm2',
    name: '山﨑 朔',
    role: '共同代表 (1年3組)',
    bio: '岩本と共に党を率いる。デジタル技術への造詣が深く、GIGAスクール構想の推進や防災委員会の設置など、具体的で実用的なシステム作りを担当する。',
    image: 'images/yamazaki.png' // 未使用（型定義互換のため保持）
  }
];

const Members: React.FC = () => {
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
          {members.map((member) => (
            <div key={member.id} className="group bg-white rounded-3xl p-8 md:p-10 text-center shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100 flex flex-col justify-center h-full hover:-translate-y-1">
              <div className="mb-6">
                <h4 className="text-3xl font-bold text-stone-900 mb-3">{member.name}</h4>
                <div className="inline-block px-4 py-1.5 rounded-full bg-brand-50 text-brand-700 font-bold text-sm md:text-base border border-brand-100">
                  {member.role}
                </div>
              </div>
              <p className="text-stone-600 text-base leading-relaxed text-left bg-stone-50 p-6 rounded-2xl border border-stone-100">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        
        {/* Technical Support Section */}
        <div className="mt-20 border-t border-stone-200 pt-12 text-center max-w-2xl mx-auto">
          <h4 className="text-stone-400 font-bold tracking-widest uppercase text-xs mb-8">
            Web System & Design Support
          </h4>
          <div className="inline-flex items-center gap-6 bg-white px-10 py-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="p-4 bg-brand-100 rounded-full text-brand-600">
              <Code2 size={40} />
            </div>
            <div className="text-left">
              <p className="text-sm text-stone-500 font-bold mb-1">技術提供者</p>
              <p className="text-4xl md:text-5xl font-extrabold text-stone-800 tracking-tight font-sans">userkunn</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;