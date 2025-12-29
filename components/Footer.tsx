import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h4 className="text-2xl font-bold text-white mb-4">
          筑摩野改新党
        </h4>
        <p className="text-sm mb-8">
          筑摩野中学校 令和6年度 生徒会役員選挙 立候補者団体<br/>
          （代表：1年3組 岩本宗祐 / 共同代表：1年3組 S）
        </p>
        <div className="text-xs text-stone-600 flex flex-col items-center gap-2">
          <p>&copy; 2025 Chikumano Kaishin Party.</p>
          <p className="opacity-50">Technical Support: userkunn & S</p>
          <p className="opacity-50">thank you for Google AI Studio, Firebase, Cloudflare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;