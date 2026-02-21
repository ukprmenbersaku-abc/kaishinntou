
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import NewsArchive from './components/NewsArchive';
import Manifesto from './components/Manifesto';
import Members from './components/Members';
import AllMembers from './components/AllMembers';
import RecommendedApps from './components/RecommendedApps';
import Schedule from './components/Schedule';
import ScheduleDetail from './components/ScheduleDetail';
import Footer from './components/Footer';
import PolicyDetail from './components/PolicyDetail';
import ElectionDetail from './components/ElectionDetail';
import RepresentativeElectionDetail from './components/RepresentativeElectionDetail';
import MemberDetail from './components/MemberDetail';
import SecretDashboard from './components/SecretDashboard';
import SecretArchive from './components/SecretArchive';
import SecretMeeting from './components/SecretMeeting';
import SummaryDetail from './components/SummaryDetail';
import PersonnelChangeNews from './components/PersonnelChangeNews';
import NewYearGreeting from './components/NewYearGreeting';
import CountdownNotice from './components/CountdownNotice';
import CookieConsent from './components/CookieConsent';
import PrivacyPolicy from './components/PrivacyPolicy';
import ChatReleaseNews from './components/ChatReleaseNews';
import OnlineMeetingNews from './components/OnlineMeetingNews';
import HeavySnowNews from './components/HeavySnowNews';
import MatsumotoMeetingNews from './components/MatsumotoMeetingNews';
import { policies } from './data/policies';
import { members } from './data/members';
import { Policy, Member } from './types';
import { Loader2, LockKeyhole, ArrowRight } from 'lucide-react';

// Cookie Utility
const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift();
  return null;
};

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'policy' | 'election' | 'representative-election' | 'member' | 'all-members' | 'schedule' | 'secret-archive' | 'secret-meeting' | 'summary' | 'news-archive' | 'news-personnel-change' | 'new-year-greeting' | 'countdown-notice' | 'privacy-policy' | 'chat-release' | 'online-meeting' | 'heavy-snow' | 'matsumoto-meeting'>('main');
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  
  // Auth State
  const [user, setUser] = useState<any>(null);
  const [authInitialized, setAuthInitialized] = useState(false);

  // Cookie State
  const [cookieConsent, setCookieConsent] = useState<string | null>(null);

  useEffect(() => {
    // Check local storage for consent on mount
    const savedConsent = localStorage.getItem('cookie_consent');
    setCookieConsent(savedConsent);
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setCookieConsent('accepted');
  };

  const handleRejectCookies = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setCookieConsent('rejected');
  };

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

      // Check for All Members Route
      if (hash === '#/members/all') {
        setCurrentView('all-members');
        return;
      }

      // Check for News Archive Route
      if (hash === '#/news/archive') {
        setCurrentView('news-archive');
        return;
      }

      // Check for New Year Greeting Route
      if (hash === '#/news/new-year') {
        setCurrentView('new-year-greeting');
        return;
      }

      // Check for Countdown Notice Route
      if (hash === '#/news/countdown') {
        setCurrentView('countdown-notice');
        return;
      }

      // Check for Personnel Change News Route
      if (hash === '#news/personnel-change') {
        setCurrentView('news-personnel-change');
        return;
      }

      // Check for Chat Release News Route
      if (hash === '#/news/chat-release') {
        setCurrentView('chat-release');
        return;
      }

      // Check for Online Meeting News Route
      if (hash === '#/news/online-meeting') {
        setCurrentView('online-meeting');
        return;
      }

      // Check for Heavy Snow News Route
      if (hash === '#/news/heavy-snow') {
        setCurrentView('heavy-snow');
        return;
      }

      // Check for Matsumoto Meeting News Route
      if (hash === '#/news/matsumoto-meeting') {
        setCurrentView('matsumoto-meeting');
        return;
      }

      // Check for Privacy Policy Route
      if (hash === '#privacy-policy') {
        setCurrentView('privacy-policy');
        return;
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

      // Check for Representative Election Route
      if (hash === '#/representative-election') {
        setCurrentView('representative-election');
        return;
      }

      // Check for Schedule Detail Route
      if (hash === '#schedule-detail') {
        setCurrentView('schedule');
        return;
      }

      // Check for Summary Detail Route
      if (hash === '#summary-detail') {
        setCurrentView('summary');
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
      
      {/* Cookie Consent Banner */}
      {!cookieConsent && (
        <CookieConsent onAccept={handleAcceptCookies} onReject={handleRejectCookies} />
      )}
      
      <Navbar user={user} />
      
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
          <RecommendedApps />
          <News />
          <Manifesto />
          <Members />
          <Schedule />
          <section id="support" className="py-24 bg-brand-900 text-white relative overflow-hidden">
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
                    className="group inline-flex items-center justify-center bg-white text-brand-900 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-stone-50 transition-all duration-300 cursor-pointer"
                  >
                    意見・質問・要望はこちらから
                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
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
      ) : currentView === 'all-members' ? (
        <main>
          <AllMembers 
            onBack={() => window.location.hash = '#members'}
          />
        </main>
      ) : currentView === 'news-archive' ? (
        <main>
          <NewsArchive 
            onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'schedule' ? (
        <main>
          <ScheduleDetail
            onBack={() => window.location.hash = '#schedule'}
          />
        </main>
      ) : currentView === 'secret-archive' ? (
        <main>
          <SecretArchive 
            onBack={() => window.location.hash = '#dashboard'}
          />
        </main>
      ) : currentView === 'secret-meeting' ? (
        <main>
          <SecretMeeting
            onBack={() => window.location.hash = '#dashboard'}
          />
        </main>
      ) : currentView === 'summary' ? (
        <main>
          <SummaryDetail 
            onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'news-personnel-change' ? (
        <main>
          <PersonnelChangeNews
            onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'new-year-greeting' ? (
        <main>
          <NewYearGreeting 
             onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'countdown-notice' ? (
        <main>
          <CountdownNotice 
             onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'privacy-policy' ? (
        <main>
          <PrivacyPolicy 
             onBack={() => window.location.hash = '#home'}
          />
        </main>
      ) : currentView === 'chat-release' ? (
        <main>
          <ChatReleaseNews 
             onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'online-meeting' ? (
        <main>
          <OnlineMeetingNews 
             onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'heavy-snow' ? (
        <main>
          <HeavySnowNews 
             onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'matsumoto-meeting' ? (
        <main>
          <MatsumotoMeetingNews 
             onBack={() => window.location.hash = '#news'}
          />
        </main>
      ) : currentView === 'representative-election' ? (
        <main>
          <RepresentativeElectionDetail
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
