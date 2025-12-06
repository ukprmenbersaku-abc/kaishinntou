import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import Manifesto from './components/Manifesto';
import Members from './components/Members';
import Schedule from './components/Schedule';
import ScheduleDetail from './components/ScheduleDetail';
import AiChat from './components/AiChat';
import Footer from './components/Footer';
import PolicyDetail from './components/PolicyDetail';
import ElectionDetail from './components/ElectionDetail';
import MemberDetail from './components/MemberDetail';
import SecretDashboard from './components/SecretDashboard';
import SecretArchive from './components/SecretArchive';
import SecretMeeting from './components/SecretMeeting';
import { policies } from './data/policies';
import { members } from './data/members';
import { Policy, Member } from './types';
import { Loader2, LockKeyhole } from 'lucide-react';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'policy' | 'election' | 'member' | 'schedule' | 'secret-archive' | 'secret-meeting'>('main');
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  
  // Auth State
  const [user, setUser] = useState<any>(null);
  const [authInitialized, setAuthInitialized] = useState(false);

  useEffect(() => {
    // Firebase Auth Listener
    if (window.firebase && window.firebase.onAuthStateChanged) {
      const unsubscribe = window.firebase.onAuthStateChanged(window.firebase.auth, (currentUser: any) => {
        setUser(currentUser);
        setAuthInitialized(true); // 認証チェック完了
      });
      return () => unsubscribe();
    } else {
      // Firebaseがない場合（プレビュー等）も初期化完了とする
      setAuthInitialized(true);
    }
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Check for Policy Route: #/policy/id
      if (hash.startsWith('#/policy/')) {
        const policyId = hash.replace('#/policy/', '');
        const policy = policies.find(p => p.id === policyId);
        if (policy) {
          setSelectedPolicy(policy);
          setCurrentView('policy');
          return;
        }
      }

      // Check for Member Route: #/member/id
      if (hash.startsWith('#/member/')) {
        const memberId = hash.replace('#/member/', '');
        const member = members.find(m => m.id === memberId);
        if (member) {
          setSelectedMember(member);
          setCurrentView('member');
          return;
        }
      }

      // Check for Secret Routes
      if (hash === '#/secret/archive') {
        setCurrentView('secret-archive');
        return;
      }
      if (hash === '#/secret/meeting') {
        setCurrentView('secret-meeting');
        return;
      }

      // Check for Election Route
      if (hash === '#election') {
        setCurrentView('election');
        return;
      }

      // Check for Schedule Detail Route
      if (hash === '#schedule-detail') {
        setCurrentView('schedule');
        return;
      }

      // Default to Main View
      setCurrentView('main');
      setSelectedPolicy(null);
      setSelectedMember(null);

      // Handle Smooth Scroll for Standard Anchors (#home, #manifesto, etc.)
      if (hash && !hash.startsWith('#/')) {
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else if (!hash || hash === '#home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial check on load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const handleLogout = () => {
    if (window.firebase && window.firebase.signOut) {
      window.firebase.signOut(window.firebase.auth).then(() => {
        // ログアウト後はホームへ
        window.location.hash = '#home';
        window.location.reload();
      });
    }
  };

  // 認証チェック中はローディングを表示（一瞬でも未認証画面を見せないため）
  if (!authInitialized) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col items-center justify-center text-stone-400">
        <Loader2 className="animate-spin mb-4" size={40} />
        <p className="text-sm font-bold">Loading system...</p>
      </div>
    );
  }

  // セキュリティガード: シークレットページへのアクセス時に未認証ならエラー表示
  if ((currentView === 'secret-archive' || currentView === 'secret-meeting') && !user) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-lg w-full text-center border border-red-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-red-500 pointer-events-none">
             <LockKeyhole size={150} />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-500 rounded-full mb-6">
              <LockKeyhole size={40} />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-stone-900 mb-4">
              アクセス権限がありません
            </h1>
            <p className="text-stone-600 mb-8 leading-relaxed">
              このページ（党員専用エリア）を表示するには認証が必要です。<br/>
              ログインしていないか、セッションが切れました。
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => window.location.hash = '#home'} 
                className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all duration-300 shadow-lg shadow-brand-100 transform hover:-translate-y-1"
              >
                トップページへ戻る
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar user={user} />
      
      {/* 
         メインビューかつログイン済みの場合のみダッシュボードを表示
         （アーカイブ等の詳細ページではダッシュボードは非表示にする）
      */}
      {user && currentView === 'main' && (
        <SecretDashboard 
          userEmail={user.email} 
          userId={user.uid}
          onLogout={handleLogout}
        />
      )}

      {currentView === 'main' ? (
        <main>
          <Hero />
          <News />
          <Manifesto />
          <Members />
          <Schedule />
          <AiChat />
          <section id="support" className="py-24 bg-brand-900 text-white relative overflow-hidden">
               {/* Simple pattern background */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-normal font-sans">
                    あなたの声を、<br/>
                    お聞かせください。
                  </h3>
                  <p className="text-brand-100 text-lg md:text-xl leading-relaxed mb-10">
                    筑摩野改新党は、皆さんと一緒に作る生徒会です。<br/>
                    学校生活の悩み、公約への質問、私たちへの要望など、<br className="hidden md:inline"/>
                    どんな小さなことでも構いません。率直な意見をお待ちしています。
                  </p>
                  <a
                    href="https://forms.gle/unGfDqs9yaEQTcNMA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-brand-900 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-stone-100 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                  >
                    意見・質問・要望はこちらから
                  </a>
               </div>
          </section>
        </main>
      ) : currentView === 'policy' && selectedPolicy ? (
        <main>
          <PolicyDetail 
            policy={selectedPolicy} 
            onBack={() => window.location.hash = '#manifesto'} 
          />
        </main>
      ) : currentView === 'member' && selectedMember ? (
        <main>
           <MemberDetail 
            member={selectedMember} 
            onBack={() => window.location.hash = '#members'} 
           />
        </main>
      ) : currentView === 'schedule' ? (
        <main>
          <ScheduleDetail
            onBack={() => window.location.hash = '#schedule'}
          />
        </main>
      ) : currentView === 'secret-archive' ? (
        // 認証済みユーザーのみ到達可能
        <main>
          <SecretArchive 
            onBack={() => window.location.hash = '#home'}
          />
        </main>
      ) : currentView === 'secret-meeting' ? (
        // 認証済みユーザーのみ到達可能
        <main>
          <SecretMeeting
            onBack={() => window.location.hash = '#home'}
          />
        </main>
      ) : (
        <main>
          <ElectionDetail 
            onBack={() => window.location.hash = '#home'} 
          />
        </main>
      )}

      <Footer />
    </div>
  );
}

export default App;