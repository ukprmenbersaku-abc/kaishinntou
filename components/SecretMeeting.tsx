import React, { useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Clock, Users, Lock, ChevronRight } from 'lucide-react';

interface SecretMeetingProps {
  onBack: () => void;
}

const SecretMeeting: React.FC<SecretMeetingProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <button 
          onClick={onBack}
          className="group flex items-center text-stone-500 hover:text-brand-600 mb-8 transition-colors duration-300"
        >
          <div className="bg-white border border-stone-200 p-2 rounded-full mr-3 group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors duration-300">
            <ArrowLeft size={20} />
          </div>
          <span className="font-bold">ダッシュボードに戻る</span>
        </button>

        {/* Header */}
        <div className="bg-white rounded-[2rem] p-8 md:p-10 mb-8 border border-stone-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-5 text-brand-900 pointer-events-none">
            <Calendar size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-orange-600 mb-4 bg-orange-50 inline-block px-4 py-1.5 rounded-full border border-orange-100">
              <Lock size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Secret Strategy</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
              次回の作戦会議（先行公開）
            </h1>
            <p className="text-stone-500">
              まだ先生には提出していない、未確定のスケジュールを含みます。<br/>
              <span className="text-red-500 font-bold text-xs">※口外禁止です。</span>
            </p>
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[2rem] border border-stone-200 shadow-sm overflow-hidden mb-8">
          <div className="p-8 border-b border-stone-100 bg-brand-50/30">
             <div className="flex items-center gap-2 text-brand-600 font-bold mb-4">
               <span className="inline-block w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
               NEXT MEETING
             </div>
             <h2 className="text-2xl md:text-3xl font-bold text-stone-800">
               12月25日 クリスマス決起集会
             </h2>
          </div>

          <div className="p-8 grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-400 font-bold mb-1">日時</p>
                  <p className="text-lg font-bold text-stone-800">12月25日 (木) 16:30 〜</p>
                  <p className="text-sm text-stone-500">※完全下校時刻まで粘ります</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-400 font-bold mb-1">場所</p>
                  <p className="text-lg font-bold text-stone-800">第2理科室</p>
                  <p className="text-sm text-stone-500">（鍵はSが確保済み）</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-500 flex-shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-sm text-stone-400 font-bold mb-1">参加メンバー</p>
                  <p className="text-lg font-bold text-stone-800">改新党コアメンバー</p>
                  <p className="text-sm text-stone-500">＋ 勧誘予定の1年生2名</p>
                </div>
              </div>
            </div>

            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
              <h3 className="font-bold text-stone-800 mb-4 flex items-center gap-2">
                <ChevronRight className="text-brand-500" />
                主な議題
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-stone-700 text-sm">
                  <span className="font-bold text-brand-500">01.</span>
                  3学期の生徒会選挙に向けた最終スタンスの確認
                </li>
                <li className="flex items-start gap-2 text-stone-700 text-sm">
                  <span className="font-bold text-brand-500">02.</span>
                  「目安箱」のデジタル化アプリのデモ（担当: S）
                </li>
                <li className="flex items-start gap-2 text-stone-700 text-sm">
                  <span className="font-bold text-brand-500">03.</span>
                  反対勢力（現執行部の一部）への対策について
                </li>
                <li className="flex items-start gap-2 text-stone-700 text-sm">
                  <span className="font-bold text-brand-500">04.</span>
                  党のマスコットキャラクター案の選定
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Plans */}
        <h3 className="text-xl font-bold text-stone-800 mb-6 pl-4 border-l-4 border-stone-200">
          以降の予定（仮）
        </h3>
        
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 flex items-center gap-4 opacity-60">
             <div className="font-bold text-stone-400 w-24">1月未定</div>
             <div className="font-bold text-stone-500">全校アンケートの集計作業</div>
             <div className="ml-auto text-xs border border-stone-200 px-2 py-1 rounded text-stone-400">調整中</div>
          </div>
           <div className="bg-white p-6 rounded-2xl border border-stone-200 flex items-center gap-4 opacity-60">
             <div className="font-bold text-stone-400 w-24">2月上旬</div>
             <div className="font-bold text-stone-500">選挙管理委員会への立候補届出</div>
             <div className="ml-auto text-xs border border-stone-200 px-2 py-1 rounded text-stone-400">調整中</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecretMeeting;