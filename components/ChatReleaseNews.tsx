import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, ExternalLink, Key, Mail, ShieldCheck } from 'lucide-react';

interface ChatReleaseNewsProps {
  onBack: () => void;
}

const ChatReleaseNews: React.FC<ChatReleaseNewsProps> = ({ onBack }) => {
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

        {/* Header - Changed from Emerald to Indigo for SnapNode theme */}
        <div className="bg-indigo-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-indigo-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-indigo-900 pointer-events-none">
            <MessageSquare size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-indigo-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-indigo-100 shadow-sm text-indigo-600">お知らせ</span>
              <span className="text-sm font-medium">2026.01.13</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              【公開】新チャットアプリ<br/>「SnapNode」(ベータ版)
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              お待たせしました。新しいコミュニケーションツールを公開します。
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <ExternalLink className="text-brand-500" />
                アクセス方法
             </h2>
             <div className="bg-white border border-stone-200 rounded-3xl p-8 shadow-sm">
                <p className="text-stone-700 leading-relaxed mb-6">
                    以下のリンクからウェブチャット「SnapNode」にアクセスできます。<br/>
                    ブックマーク、または党員ダッシュボードからのアクセスをお勧めします。
                </p>
                <div className="text-center">
                    <a 
                        href="https://ukpr-s-chat.pages.dev" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        SnapNodeを開く
                        <ExternalLink size={20} />
                    </a>
                    <p className="text-xs text-stone-400 mt-4 font-mono">
                        https://ukpr-s-chat.pages.dev
                    </p>
                </div>
             </div>
          </section>

          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <Key className="text-brand-500" />
                アカウント登録ルール
             </h2>
             <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8">
                <p className="font-bold text-stone-800 mb-4">
                    利用を開始するには、アカウント登録（サインアップ）が必要です。<br/>
                    管理上の理由から、以下のルールに従って登録してください。
                </p>

                <div className="space-y-4">
                    <div className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-4">
                        <div className="bg-blue-50 text-blue-600 p-2 rounded-lg flex-shrink-0">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-800 mb-1">メールアドレス</h3>
                            <p className="text-sm text-stone-600 mb-2">
                                <strong>「自分の名前（苗字英語小文字）@chikushin.com」</strong> の形式にしてください。
                            </p>
                            <div className="bg-stone-100 p-3 rounded-lg text-sm font-mono text-stone-700">
                                <span className="text-stone-400">例：岩本宗祐の場合</span><br/>
                                <span className="font-bold text-blue-600">iwamoto@chikushin.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-5 rounded-xl border border-stone-200 flex items-start gap-4">
                        <div className="bg-orange-50 text-orange-600 p-2 rounded-lg flex-shrink-0">
                            <ShieldCheck size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-stone-800 mb-1">パスワード</h3>
                            <p className="text-sm text-stone-600">
                                自由に設定してください。<br/>
                                <span className="text-xs text-stone-400">※忘れないように管理をお願いします。</span>
                            </p>
                        </div>
                    </div>
                </div>
             </div>
          </section>

          <section>
             <h2 className="text-xl font-bold text-stone-900 mb-4 border-l-4 border-brand-500 pl-4">
                注意事項（ベータ版）
             </h2>
             <ul className="list-disc list-inside space-y-2 text-stone-600 bg-white border border-stone-200 p-6 rounded-2xl">
                 <li>本システムはベータ版です。動作が不安定な場合があります。</li>
                 <li>チャットの内容は党員のみ閲覧可能ですが、機密情報の取り扱いには引き続きご注意ください。</li>
                 <li>不具合を見つけた場合は、S（共同代表）までご連絡ください。</li>
             </ul>
          </section>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
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

export default ChatReleaseNews;