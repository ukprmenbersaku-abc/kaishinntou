import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

interface ElectionDetailProps {
  onBack: () => void;
}

const ElectionDetail: React.FC<ElectionDetailProps> = ({ onBack }) => {
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
        <div className="bg-brand-50 rounded-[2.5rem] p-8 md:p-12 mb-12 border border-brand-100 shadow-sm text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4 leading-tight">
            令和9年度<br/>筑摩野中学校 生徒会役員選挙
          </h1>
          <p className="text-lg text-stone-600 font-medium">
            あなたの清き一票が、これからの学校を作ります。
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 text-brand-600 mb-4">
              <Calendar size={24} />
              <h3 className="text-xl font-bold text-stone-800">投票日時</h3>
            </div>
            <p className="text-2xl font-bold text-stone-900 pl-9">
              未定
            </p>
            <p className="text-stone-500 pl-9 mt-1">
              決まり次第お知らせします
            </p>
          </div>

          <div className="bg-white border border-stone-200 p-6 rounded-2xl shadow-sm">
            <div className="flex items-center gap-3 text-brand-600 mb-4">
              <MapPin size={24} />
              <h3 className="text-xl font-bold text-stone-800">投票場所</h3>
            </div>
            <p className="text-xl font-bold text-stone-900 pl-9">
              各教室 (PC投票)
            </p>
            <p className="text-stone-500 pl-9 mt-1">
              Googleフォームを使用します<br/>
              <span className="text-xs text-stone-400">※今後変更になる可能性があります</span>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-12">
          <section>
            <h3 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-2">
              <CheckCircle2 className="text-brand-500" />
              選挙の流れ
            </h3>
            <div className="bg-stone-50 rounded-3xl p-12 text-center text-stone-500">
              <p className="text-lg font-medium mb-2">未定</p>
              <p className="text-sm">
                詳細は決定次第お知らせします。<br/>
                学校からの連絡をお待ちください。
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 text-center">
          <button 
            onClick={() => window.location.hash = '#manifesto'}
            className="inline-flex items-center justify-center px-8 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold transition-all duration-300 shadow-md hover:shadow-lg"
          >
            改新党の公約を見る
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectionDetail;