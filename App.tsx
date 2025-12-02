import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Members from './components/Members';
import Schedule from './components/Schedule';
import ScheduleDetail from './components/ScheduleDetail';
import AiChat from './components/AiChat';
import Footer from './components/Footer';
import PolicyDetail from './components/PolicyDetail';
import ElectionDetail from './components/ElectionDetail';
import MemberDetail from './components/MemberDetail';
import { policies } from './data/policies';
import { members } from './data/members';
import { Policy, Member } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'policy' | 'election' | 'member' | 'schedule'>('main');
  const [selectedPolicy, setSelectedPolicy] = useState<Policy | null>(null);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

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

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans selection:bg-brand-200 selection:text-brand-900">
      <Navbar />
      
      {currentView === 'main' ? (
        <main>
          <Hero />
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
                    className="inline-block bg-white text-brand-900 px-10 py-4 rounded-full font-bold shadow-lg hover:bg-stone-100 transition-colors cursor-pointer transform hover:-translate-y-1"
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