import React, { useState } from 'react';
import { Code2, ArrowRight, UserPlus, LogIn, Loader2, Lock } from 'lucide-react';
import { members } from '../data/members';

const Members: React.FC = () => {
  // 候補者（userkunn以外）と技術者（userkunn）を分離
  const candidates = members.filter(m => m.id !== 'userkunn');
  const support = members.find(m => m.id === 'userkunn');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleMemberClick = (id: string) => {
    window.location.hash = `#/member/${id}`;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError(null);

    try {
      if (window.firebase && window.firebase.auth) {
        await window.firebase.signInWithEmailAndPassword(
          window.firebase.auth,
          email,
          password
        );
        // ログイン成功時はページをリロードしてApp.tsxのAuthチェックを走らせる、
        // またはReactの状態更新を待つ。ここではシンプルにリロードして確実に最新状態にする。
        window.location.href = '/';
      } else {
        throw new Error("Firebase SDK is not initialized");
      }
    } catch (err: any) {
      console.error(err);
      if (err.code === 'auth/invalid-credential') {
        setLoginError("メールアドレスまたはパスワードが間違っています。");
      } else {
        setLoginError("ログインに失敗しました。");
      }
      setIsLoggingIn(false);
    }
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
          <div className="mt-20 border-t border-stone-200 pt-12 text-center max-w-2xl mx-auto mb-16">
            <h4 className="text-stone-400 font-bold tracking-widest uppercase text-xs mb-8">
              Web System & Design Support
            </h4>
            <div 
              onClick={() => handleMemberClick(support.id)}
              className="group inline-flex items-center gap-6 bg-white px-10 py-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md transition-all duration-300 cursor-pointer hover:-translate-y-1 w-full md:w-auto"
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
                  <ArrowRight size={20} className="text-stone-300 group-hover:text-brand-500 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Member Registration & Login Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* Member Registration Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-stone-200 relative overflow-hidden flex flex-col justify-center">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 opacity-5 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10">
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
                className="inline-flex items-center justify-center px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold shadow-lg shadow-brand-100 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer w-full md:w-auto"
              >
                党員登録はこちら
                <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>

          {/* Login Section */}
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-lg border border-stone-200 relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-stone-100 rounded-2xl text-stone-600 mb-6">
                <Lock size={32} />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                党員専用ページ
              </h3>
              
              <form onSubmit={handleLogin} className="space-y-4 max-w-sm mx-auto">
                <div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all duration-300 text-sm"
                    placeholder="メールアドレス"
                  />
                </div>
                <div>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 placeholder-stone-400 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 outline-none transition-all duration-300 text-sm"
                    placeholder="パスワード"
                  />
                </div>

                {loginError && (
                  <div className="text-red-500 text-xs text-left flex items-center gap-1">
                     <span>⚠️</span> {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoggingIn}
                  className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isLoggingIn ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      認証中...
                    </>
                  ) : (
                    <>
                      ログインしてアクセス
                      <LogIn size={18} />
                    </>
                  )}
                </button>
              </form>
              <p className="text-stone-400 text-xs mt-4">
                ※党員登録済みのメンバーのみアクセス可能です
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Members;