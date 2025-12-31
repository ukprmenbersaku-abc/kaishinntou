import React, { useEffect } from 'react';
import { ArrowLeft, Clock, Sparkles, Calendar, Zap, MessageCircle } from 'lucide-react';

interface CountdownNoticeProps {
  onBack: () => void;
}

const CountdownNotice: React.FC<CountdownNoticeProps> = ({ onBack }) => {
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
        <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-12 mb-12 shadow-xl relative overflow-hidden text-white">
           <div className="absolute top-0 right-0 p-8 opacity-20 text-brand-400 pointer-events-none">
            <Clock size={150} />
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-brand-600 px-3 py-1 rounded-full text-xs font-bold shadow-sm shadow-brand-900/50">イベント予告</span>
              <span className="text-sm font-medium text-stone-300">2025.12.28</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              筑摩野改新党 公式サイト<br/>
              <span className="text-brand-400">年越しカウントダウン</span>実施決定
            </h1>
            <p className="text-lg text-stone-300 font-medium max-w-2xl">
              2025年の締めくくりと、2026年の幕開けを、このサイト上で一緒にお祝いしませんか？
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto space-y-12">
          
          <section>
             <h2 className="flex items-center gap-3 text-2xl font-bold text-stone-900 mb-6">
                <Sparkles className="text-yellow-500" />
                イベント概要
             </h2>
             <div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 leading-relaxed text-stone-700">
                <p className="mb-6">
                    筑摩野改新党公式サイト（トップページ）にて、大晦日から元旦にかけての特別演出「年越しカウントダウン」を実施します。<br/>
                    特別なアプリのインストールは不要です。お使いのブラウザでアクセスするだけで参加できます。
                </p>
                <div className="space-y-4">
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200">
                        <div className="bg-brand-50 text-brand-600 p-3 rounded-full flex-shrink-0"><Calendar size={20} /></div>
                        <div>
                            <h3 className="font-bold text-stone-900">開催日時</h3>
                            <p className="text-stone-600">2025年12月31日 23:59:00頃 〜 2026年1月1日 00:00:30頃</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200">
                        <div className="bg-yellow-50 text-yellow-600 p-3 rounded-full flex-shrink-0"><Zap size={20} /></div>
                        <div>
                            <h3 className="font-bold text-stone-900">参加方法</h3>
                            <p className="text-stone-600">
                                時間になりましたら、このサイトのトップページを開いてお待ちください。<br/>
                                <span className="text-xs text-stone-400">※自動的にカウントダウンモードに切り替わります</span>
                            </p>
                        </div>
                    </div>
                    
                    {/* Google Chat Section */}
                    <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-stone-200 shadow-sm ring-1 ring-stone-200">
                        <div className="bg-stone-100 text-stone-500 p-3 rounded-full flex-shrink-0"><MessageCircle size={20} /></div>
                        <div>
                            <h3 className="font-bold text-stone-900 flex items-center gap-2">
                              Google Chat 特設スペース
                              <span className="bg-stone-200 text-stone-600 text-[10px] px-2 py-0.5 rounded-full">受付終了</span>
                            </h3>
                            <p className="text-stone-600 mb-3 text-sm leading-relaxed mt-1">
                                カウントダウンの1時間前（23:00頃）から、Google Chatにて特設スペースを開放します。<br/>
                                <span className="opacity-60 line-through decoration-stone-400">リアルタイムでチャットしながら賑やかに新年を迎えたい方は、以下のフォームから事前申請をお願いします。</span>
                            </p>
                            <div 
                              className="inline-flex items-center gap-2 text-sm font-bold text-white bg-stone-400 px-5 py-2.5 rounded-lg cursor-not-allowed"
                            >
                              受付は終了しました
                            </div>
                            <p className="text-xs text-red-500 font-bold mt-2">
                                ※定刻（12/31 15:00）を過ぎたため、応募受付は終了しました。たくさんのご応募ありがとうございました。
                            </p>
                        </div>
                    </div>
                </div>
             </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-stone-900 mb-4 border-l-4 border-brand-500 pl-4">
              ご案内
            </h2>
            <ul className="list-disc list-inside space-y-2 text-stone-600 bg-stone-50 p-6 rounded-2xl">
                <li>カウントダウンはお使いの端末の時計に合わせて表示されます。正確な時間を知りたい場合は、端末の時刻設定をご確認ください。</li>
            </ul>
          </section>

          <section className="text-center pt-8">
            <p className="text-2xl font-bold text-stone-800 mb-4">
              皆さんと良いお年を迎えられることを<br/>楽しみにしています。
            </p>
          </section>

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

export default CountdownNotice;