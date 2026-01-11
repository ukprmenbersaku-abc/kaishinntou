import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Cookie, Info, BarChart3 } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <span className="font-bold">ホームに戻る</span>
        </button>

        {/* Header */}
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-brand-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-brand-900 pointer-events-none">
            <Shield size={150} />
          </div>

          <div className="relative z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight">
              プライバシーポリシー
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              Cookie（クッキー）の使用と情報の取り扱いについて
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-12">
          
          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">
              <Cookie className="text-brand-500" />
              Cookie（クッキー）について
            </h2>
            <div className="prose prose-stone max-w-none text-stone-700 leading-loose">
              <p>
                当サイトでは、ユーザーの皆様により良い体験を提供するためにCookie（クッキー）を使用しています。
                Cookieとは、ウェブサイトを訪問した際にお客様のブラウザに保存される小さなテキストファイルのことです。
              </p>
              <p>
                当サイトで使用するCookieには、個人を特定できる情報（氏名、電話番号、住所など）は一切含まれません。
              </p>
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">
              <Info className="text-blue-500" />
              使用目的
            </h2>
            <div className="bg-stone-50 rounded-2xl p-6 md:p-8 space-y-6">
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-2">1. 演出の制御（機能性Cookie）</h3>
                <p className="text-stone-600">
                  新年のお祝い演出や、ポップアップ通知などを「一度だけ表示する」ために使用します。
                  これにより、ページを開くたびに同じ演出が表示されるのを防ぎ、快適にサイトをご利用いただけます。
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg text-stone-900 mb-2">2. アクセス解析（分析用Cookie）</h3>
                <p className="text-stone-600">
                  サイトの利用状況（アクセス数や閲覧ページなど）を把握し、サイトの改善に役立てるために使用します。
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6 border-b border-stone-100 pb-2">
              <BarChart3 className="text-orange-500" />
              Google Analyticsの使用について
            </h2>
            <div className="prose prose-stone max-w-none text-stone-700 leading-loose">
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Google Analytics」を使用しています。
                このGoogle Analyticsはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
              </p>
              <p>
                この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。<br/>
                Google Analyticsの規約に関しての詳細は
                <a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline hover:text-brand-800">
                  Google Analyticsサービス利用規約
                </a>
                のページや
                <a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-brand-600 underline hover:text-brand-800">
                  Googleポリシーと規約
                </a>
                ページをご覧ください。
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4">
              Cookieの管理方法
            </h2>
            <p className="text-stone-700 leading-relaxed">
              ブラウザの設定により、Cookieを拒否したり、保存されたCookieを削除したりすることができます。
              設定方法はブラウザによって異なりますので、お使いのブラウザのヘルプをご確認ください。
              ただし、Cookieを無効にすると、当サイトの一部機能（演出など）が正常に動作しない場合があります。
            </p>
          </section>

          <div className="pt-8 border-t border-stone-100 text-center">
             <p className="text-stone-500 text-sm">制定日: 2025年12月23日</p>
             <p className="font-bold text-stone-900 mt-2">筑摩野改新党</p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button 
            onClick={onBack}
            className="inline-flex items-center justify-center px-8 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            トップページに戻る
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;