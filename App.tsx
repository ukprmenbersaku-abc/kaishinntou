import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Manifesto from './components/Manifesto';
import Members from './components/Members';
import AiChat from './components/AiChat';
import Footer from './components/Footer';
import PolicyDetail from './components/PolicyDetail';
import ElectionDetail from './components/ElectionDetail';
import MemberDetail from './components/MemberDetail';
import { policies } from './data/policies';
import { members } from './data/members';
import { Policy, Member } from './types';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'policy' | 'election' | 'member'>('main');
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
          <AiChat />
          <section id="support" className="py-24 bg-brand-900 text-white relative overflow-hidden">
               {/* Simple pattern background */}
               <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
               
               <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
                  <h3 className="text-3xl md:text-5xl font-bold mb-8 leading-normal font-sans">
                    あなたの一票が、<br/>
                    学校を変える力になる。
                  </h3>
                  <p className="text-brand-100 text-lg md:text-xl leading-relaxed mb-10">
                    あなたの一票が、未来を変える第一歩です。<br/>
                    私たちと一緒に、もっと自由で、もっと楽しい筑摩野中を作りましょう。
                  </p>
                  <div className="inline-block bg-white text-brand-900 px-10 py-4 rounded-full font-bold shadow-lg">
                    応援よろしくお願いします！
                  </div>
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