import React, { useEffect, useState } from 'react';
import { Lock, FileText, Calendar, LogOut } from 'lucide-react';

interface SecretDashboardProps {
  userEmail: string;
  userId: string;
  onLogout: () => void;
}

const SecretDashboard: React.FC<SecretDashboardProps> = ({ userEmail, userId, onLogout }) => {
  const [message, setMessage] = useState<string>('読み込み中...');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (window.firebase && window.firebase.rtdb) {
        try {
          // Realtime Databaseからデータを取得
          const { rtdb, rtdb_ref, rtdb_get } = window.firebase;
          const contentRef = rtdb_ref(rtdb, 'secret_content/message');
          const snapshot = await rtdb_get(contentRef);

          if (snapshot.exists()) {
            setMessage(snapshot.val());
          } else {
            setMessage('現在、党員限定のお知らせはありません。');
          }
        } catch (err) {
          console.error("Error fetching secret content:", err);
          setError(true);
          setMessage('データの取得に失敗しました。');
        }
      }
    };

    fetchData();
  }, []);

  return (
    <section className="bg-stone-900 text-white border-b-4 border-brand-500 shadow-xl relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <Lock size={200} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-brand-500 p-2 rounded-lg">
              <Lock size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-wide">党員専用ページ</h2>
              <p className="text-stone-400 text-xs md:text-sm">ようこそ、{userEmail} さん (ID: {userId.slice(0, 6)}...)</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-stone-800 hover:bg-stone-700 rounded-full text-xs font-bold transition-colors border border-stone-700"
          >
            <LogOut size={14} />
            ログアウト
          </button>
        </div>

        <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-stone-700 mb-8">
          <h3 className="text-brand-400 font-bold mb-4 flex items-center gap-2">
            <span className="animate-pulse">●</span> 党員限定メッセージ
          </h3>
          <p className={`text-lg leading-relaxed ${error ? 'text-red-400' : 'text-stone-200'}`}>
            {message}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 hover:border-brand-500/50 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
              <FileText size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">限定資料アーカイブ</h3>
            <p className="text-sm text-stone-400">
              一般には公開されていない、過去の議事録ドラフトやブレインストーミングの記録を確認できます。
            </p>
          </div>

          <div className="bg-stone-800 rounded-xl p-6 border border-stone-700 hover:border-brand-500/50 transition-colors group cursor-pointer">
            <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
              <Calendar size={24} />
            </div>
            <h3 className="font-bold text-lg mb-2 text-white">次回の作戦会議（先行公開）</h3>
            <p className="text-sm text-stone-400">
              公式サイトで発表される前の、未確定のスケジュールや企画案を閲覧できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecretDashboard;