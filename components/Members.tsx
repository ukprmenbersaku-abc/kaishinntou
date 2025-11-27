import React from 'react';
import { Code2, Glasses, Smile } from 'lucide-react';
import { Member } from '../types';

// 【画像の配置場所について】
// 画像ファイルは必ずプロジェクトルートの 'public' フォルダの中に 'images' フォルダを作って入れてください。
//
// 構成:
// root/
//   ├── public/           <-- ★重要: publicフォルダを作成
//   │    └── images/      <-- その中に images フォルダ
//   │         ├── iwamoto.png  (岩本代表の画像)
//   │         └── yamazaki.png (山﨑共同代表の画像)
//   ├── src/
//   └── index.html

const members: Member[] = [
  {
    id: 'm1',
    name: '岩本 宗祐',
    role: '改新党 代表 (1年3組)',
    bio: '1年生ながら改新党を立ち上げた行動派。「聴く学校」を掲げ、生徒一人ひとりの声が確実に届く生徒会を目指す。これまでの慣例に一瞥し、新しい風を吹き込む決意を持つ。',
    image: './images/iwamoto.png'
  },
  {
    id: 'm2',
    name: '山﨑 朔',
    role: '共同代表 (1年3組)',
    bio: '岩本と共に党を率いる。デジタル技術への造詣が深く、GIGAスクール構想の推進や防災委員会の設置など、具体的で実用的なシステム作りを担当する。',
    image: 'https://drive.google.com/uc?export=view&id=1nYnHiapo4wmN6NiJSJ2lCOONOPLXSyz0'
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

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mb-16">
          {members.map((member) => (
            <div key={member.id} className="group bg-white rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-brand-200 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* 画像コンテナ */}
                <div className="relative w-40 h-40 mx-auto">
                    <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full rounded-full object-cover border-4 border-stone-50 group-hover:border-brand-200 transition-colors duration-300 bg-stone-200 relative z-10"
                    onError={(e) => {
                        // 画像が見つからない場合、画像を非表示にしてフォールバック要素を表示
                        e.currentTarget.style.display = 'none';
                        const fallbackId = `fallback-${member.id}`;
                        const fallbackEl = document.getElementById(fallbackId);
                        if (fallbackEl) fallbackEl.style.display = 'flex';
                    }}
                    />
                    
                    {/* 画像読み込みエラー時のフォールバック表示（シルエット） */}
                    <div 
                        id={`fallback-${member.id}`}
                        className="hidden absolute inset-0 rounded-full bg-brand-100 items-center justify-center flex-col border-4 border-stone-50 z-0"
                    >
                        {member.name.includes('岩本') ? (
                            <Glasses size={48} className="text-brand-400 mb-1" />
                        ) : (
                            <Smile size={48} className="text-brand-400 mb-1" />
                        )}
                        <span className="text-brand-700 font-bold text-xs">No Image</span>
                    </div>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-stone-900 mb-1">{member.name}</h4>
              <p className="text-brand-600 font-bold text-sm mb-4 bg-brand-50 inline-block px-3 py-1 rounded-full">{member.role}</p>
              <p className="text-stone-600 text-sm leading-relaxed text-left bg-stone-50 p-4 rounded-xl">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
        
        {/* Technical Support Section */}
        <div className="mt-20 border-t border-stone-200 pt-12 text-center max-w-2xl mx-auto">
          <h4 className="text-stone-400 font-bold tracking-widest uppercase text-xs mb-6">
            Web System & Design Support
          </h4>
          <div className="inline-flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
            <div className="p-3 bg-brand-50 rounded-full text-brand-600">
              <Code2 size={24} />
            </div>
            <div className="text-left">
              <p className="text-xs text-stone-500 font-medium mb-0.5">技術提供者</p>
              <p className="text-xl font-bold text-stone-800 tracking-tight">userkunn</p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-stone-400 bg-stone-100 py-2 px-4 rounded-lg inline-block mx-auto">
          <p>※ 画像パス設定:</p>
          <p className="mb-1">岩本: <code>public/images/iwamoto.png</code> (要配置)</p>
          <p>山﨑: Google Drive URL (設定済)</p>
        </div>
      </div>
    </section>
  );
};

export default Members;