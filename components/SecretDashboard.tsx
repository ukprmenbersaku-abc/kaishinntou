
import React, { useEffect, useState } from 'react';
import { Lock, FileText, Calendar, LogOut, ShieldCheck, ChevronRight, Grid } from 'lucide-react';

interface SecretDashboardProps {
  userEmail: string;
  userId: string;
  onLogout: () => void;
}

const SecretDashboard: React.FC<SecretDashboardProps> = ({ userEmail, userId, onLogout }) => {
  // メッセージの定数を定義
  const welcomeMessage = `皆さん、筑摩野改新党への入党ありがとうございます。
これから、このサイトを使用し、筑摩野中をよりよくしていきたいと思っています。皆さん、ご協力お願いします。
（追加日12/14）`;

  // 初期状態としてウェルカムメッセージを設定
  const [message, setMessage] = useState<string>(welcomeMessage);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (window.firebase && window.firebase.rtdb) {
        try {
          // Realtime Databaseからデータを取得
          const { rtdb, rtdb_ref, rtdb_get } = window.firebase;
          const contentRef = rtdb_ref(rtdb, 'secret_content/message');
          const snapshot = await rtdb_get(contentRef);

          if (snapshot.exists() && snapshot.val()) {
            setMessage(snapshot.val());
          }
          // データがない場合は初期値（welcomeMessage）のまま
        } catch (err) {
          console.error("Error fetching secret content:", err);
          setError(true);
          // エラー時も初期値（welcomeMessage）を表示
        }
      }
    };

    fetchData();
  }, []);

  const goToArchive = () => {
    window.location.hash = '#/secret/archive';
  };

  const goToMeeting = () => {
    window.location.hash = '#/secret/meeting';
  };

  return (
    // Navbarの高さ分+余白を確保するために pt-28 を設定
    <section id="dashboard" className="bg-white border-b border-stone-200 shadow-sm relative overflow-hidden pt-28 pb-12">
      {/* Background Pattern - Light Mode */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none text-brand-900">
        <Lock size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <div className="bg-brand-50 p-3 rounded-2xl text-brand-600 border border-brand-100">
               <ShieldCheck size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-900 tracking-wide flex items-center gap-3">
                党員専用ダッシュボード
                <span className="text-xs font-bold text-white bg-brand-600 px-3 py-1 rounded-full shadow-sm shadow-brand-200">
                  Member Only
                </span>
              </h2>
              <p className="text-stone-500 text-sm mt-1 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                ログイン中: <span className="font-mono text-stone-700 font-bold">{userEmail}</span>
              </p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-5 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-600 rounded-full text-sm font-bold transition-all duration-300 border border-stone-200 hover:shadow-sm"
          >
            <LogOut size={16} />
            ログアウト
          </button>
        </div>

        {/* Message Card - Light Theme */}
        <div className="bg-brand-50/60 rounded-3xl p-6 md:p-8 border border-brand-100 mb-8 shadow-sm relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-brand-800 font-bold mb-4 flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-500"></span>
              </span>
              党員限定メッセージ
            </h3>
            {/* whitespace-pre-wrap を追加して改行を反映 */}
            <p className={`text-lg leading-relaxed font-medium whitespace-pre-wrap ${error ? 'text-red-500' : 'text-stone-700'}`}>
              {message}
            </p>
          </div>
        </div>

        {/* Action Cards Grid - Light Theme */}
        <div className="grid md:grid-cols-2 gap-6">
          <div 
            onClick={goToArchive}
            className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 group cursor-pointer relative"
          >
            <div className="absolute top-6 right-6 text-stone-300 group-hover:text-brand-500 transition-colors">
              <ChevronRight size={24} />
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <FileText size={24} />
              </div>
              <div className="pr-8">
                <h3 className="font-bold text-lg mb-2 text-stone-900 group-hover:text-brand-700 transition-colors">
                  限定資料アーカイブ
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  一般には公開されていない、過去の議事録ドラフトやブレインストーミングの記録を確認できます。
                </p>
              </div>
            </div>
          </div>

          <div 
            onClick={goToMeeting}
            className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:shadow-lg hover:border-brand-200 transition-all duration-300 group cursor-pointer relative"
          >
            <div className="absolute top-6 right-6 text-stone-300 group-hover:text-brand-500 transition-colors">
              <ChevronRight size={24} />
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Calendar size={24} />
              </div>
              <div className="pr-8">
                <h3 className="font-bold text-lg mb-2 text-stone-900 group-hover:text-brand-700 transition-colors">
                  次回の作戦会議（先行公開）
                </h3>
                <p className="text-sm text-stone-500 leading-relaxed">
                  公式サイトで発表される前の、未確定のスケジュールや企画案を閲覧できます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretDashboard;
