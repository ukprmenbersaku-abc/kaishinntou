import React, { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
}

const CookieConsent: React.FC<CookieConsentProps> = ({ onAccept, onReject }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 少し遅らせて表示することでユーザーの目を引く
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-stone-200 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
        <div className="bg-brand-100 p-3 rounded-full text-brand-600 flex-shrink-0">
          <Cookie size={32} />
        </div>
        
        <div className="flex-grow">
          <h3 className="font-bold text-stone-900 mb-2">クッキー（Cookie）の使用について</h3>
          <p className="text-sm text-stone-600 leading-relaxed">
            当サイトでは、ポップアップ通知などを一度だけ表示するなど、ユーザー体験を向上させるためにCookieを使用します。<br className="hidden sm:block"/>
            詳しくは
            <a href="#privacy-policy" className="text-brand-600 underline hover:text-brand-800 font-bold mx-1">
              プライバシーポリシー
            </a>
            をご確認ください。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto flex-shrink-0">
          <button 
            onClick={onReject}
            className="px-6 py-2.5 rounded-full border border-stone-300 text-stone-600 text-sm font-bold hover:bg-stone-100 transition-colors"
          >
            拒否する
          </button>
          <button 
            onClick={onAccept}
            className="px-6 py-2.5 rounded-full bg-brand-600 text-white text-sm font-bold hover:bg-brand-700 transition-colors"
          >
            すべて受け入れる
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;