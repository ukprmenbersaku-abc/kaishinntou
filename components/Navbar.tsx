import React, { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'ホーム', href: '#home' },
    { name: '公約', href: '#manifesto' },
    { name: '主要党員', href: '#members' },
    { name: 'スケジュール', href: '#schedule' },
    { name: 'Q&A', href: '#qa' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // デフォルト動作（ハッシュ変更）を許可し、App.tsxのリスナーに処理させる
    setIsOpen(false);
    
    // ハッシュを明示的にセットすることで、同じページ内での再クリックや
    // 詳細ページからの戻り動作を確実にトリガーする
    if (window.location.hash !== href) {
        window.location.hash = href;
    } else {
        // 既にそのハッシュにいる場合、手動でスクロール
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex-shrink-0 flex items-center gap-2 group cursor-pointer">
              <div className="bg-brand-500 text-white p-1.5 rounded-full transition-transform duration-300 group-hover:rotate-12">
                <Leaf size={24} />
              </div>
              <span className="font-bold text-xl text-stone-800 tracking-wide">筑摩野改新党</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-600 hover:text-brand-600 hover:bg-brand-50 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-brand-600 focus:outline-none p-2 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-stone-600 hover:text-brand-600 hover:bg-brand-50 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;