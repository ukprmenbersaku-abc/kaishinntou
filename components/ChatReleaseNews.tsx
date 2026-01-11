import React, { useEffect } from 'react';
import { ArrowLeft, MessageSquare, AlertTriangle, Users } from 'lucide-react';

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

        {/* Header */}
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-brand-100 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 text-brand-900 pointer-events-none">
            <MessageSquare size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4 text-brand-700">
              <span className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-brand-100 shadow-sm text-brand-600">お知らせ</span>
              <span className="text-sm font-medium">2026.01.08</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
              【予告】党員用ウェブチャット<br/>1/13(火) リリース決定
            </h1>
            <p className="text-lg text-stone-600 font-medium">
              より円滑なコミュニケーションを目指して。
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          <section>
             <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
                <Users className="text-brand-500" />
                導入の目的
             </h2>
             <p className="text-lg text-stone-700 leading-loose mb-6">
                これまでメールや口頭で行っていた党内の連絡を、専用のウェブチャットに移行します。<br/>
                これにより、情報の見落としを防ぎ、よりスピーディーな意見交換が可能になります。<br/>
                今後はこのチャットを通じて、活動スケジュールの調整や議案の相談を行っていく予定です。
             </p>
          </section>

          <section>
             <div className="bg-yellow-50 border border-yellow-200 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-yellow-800 mb-4 flex items-center gap-2">
                    <AlertTriangle size={24} />
                    ベータ版としての提供について
                </h3>
                <p className="text-stone-700 leading-relaxed mb-4">
                    今回リリースするのは「ベータ版（試用版）」となります。<br/>
                    開発途中の機能が含まれており、動作が不安定になる可能性があります。
                </p>
                <ul className="list-disc list-inside space-y-2 text-stone-600 bg-white/60 p-4 rounded-xl border border-yellow-100">
                    <li>メッセージの通知機能は現在開発中です。</li>
                    <li>予期せぬエラーが発生した場合は、S（共同代表）までご報告ください。</li>
                    <li>予告なくメンテナンスを行う場合があります。</li>
                </ul>
             </div>
          </section>

          <section className="text-center pt-8 border-t border-stone-100">
             <p className="font-bold text-stone-800 text-lg mb-2">
                リリース予定日
             </p>
             <p className="text-4xl font-bold text-brand-600 mb-6 font-mono">
                2026.01.13 <span className="text-lg text-stone-400 font-normal ml-2">(Tue)</span>
             </p>
             <p className="text-stone-500">
                党員専用ダッシュボードからアクセス可能になる予定です。<br/>
                楽しみにお待ちください。
             </p>
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