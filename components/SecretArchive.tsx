import React, { useEffect } from 'react';
import { ArrowLeft, FileText, Download, Lock } from 'lucide-react';

interface SecretArchiveProps {
  onBack: () => void;
}

const SecretArchive: React.FC<SecretArchiveProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dummyDocs = [
    { id: 1, title: '第10回 生徒会執行部 議事録ドラフト', date: '2025.11.20', size: '2.4 MB', type: 'PDF' },
    { id: 2, title: '第9回 生徒会執行部 議事録（未修正版）', date: '2025.11.13', size: '1.8 MB', type: 'PDF' },
    { id: 3, title: '文化祭の後夜祭における新企画案メモ', date: '2025.10.30', size: '450 KB', type: 'TXT' },
    { id: 4, title: '生徒意識調査アンケート集計（生データ）', date: '2025.10.15', size: '5.2 MB', type: 'CSV' },
  ];

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
            <FileText size={120} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 text-blue-600 mb-4 bg-blue-50 inline-block px-4 py-1.5 rounded-full border border-blue-100">
              <Lock size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">Secret Archive</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-stone-900 mb-2">
              限定資料アーカイブ
            </h1>
            <p className="text-stone-500">
              一般公開前のドラフトや、内部検討用の資料置き場です。<br/>
              <span className="text-red-500 font-bold text-xs">※外部への流出は厳禁です。</span>
            </p>
          </div>
        </div>

        {/* File List */}
        <div className="bg-white rounded-[2rem] border border-stone-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-stone-100 bg-stone-50/50">
            <h2 className="font-bold text-stone-700 flex items-center gap-2">
              <FileText size={20} className="text-stone-400" />
              ドキュメント一覧
            </h2>
          </div>
          
          <div className="divide-y divide-stone-100">
            {dummyDocs.map((doc) => (
              <div key={doc.id} className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-stone-50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className={`
                    w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs
                    ${doc.type === 'PDF' ? 'bg-red-50 text-red-600' : 
                      doc.type === 'CSV' ? 'bg-green-50 text-green-600' : 'bg-stone-100 text-stone-600'}
                  `}>
                    {doc.type}
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-800 group-hover:text-brand-700 transition-colors mb-1">
                      {doc.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-stone-400">
                      <span>{doc.date}</span>
                      <span>•</span>
                      <span>{doc.size}</span>
                    </div>
                  </div>
                </div>
                
                <button className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-stone-200 text-stone-600 font-bold text-sm hover:bg-stone-800 hover:text-white hover:border-stone-800 transition-all duration-300">
                  <Download size={16} />
                  ダウンロード
                </button>
              </div>
            ))}
          </div>
          
          <div className="p-6 text-center border-t border-stone-100 bg-stone-50/30">
            <p className="text-xs text-stone-400">これ以前の資料はSに直接問い合わせてください。</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecretArchive;