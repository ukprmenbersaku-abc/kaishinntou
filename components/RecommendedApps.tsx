
import React from 'react';
import { Grid, ExternalLink, Palette } from 'lucide-react';

export const apps = [
  {
    name: 'SnapNode',
    url: 'https://ukpr-s-chat.pages.dev',
    description: '党員・賛同者のための次世代ウェブチャットツール。',
    icon: (
      <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center shadow-sm border border-indigo-100">
         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <circle cx="12" cy="12" r="3" fill="#4F46E5" />
        </svg>
      </div>
    )
  },
  {
    name: 'SQLite Studio',
    url: 'https://ukpr-sqlite.pages.dev',
    description: 'ブラウザ上で動作する軽量データベース管理ツール。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 64 64" className="rounded-xl shadow-sm">
        <rect width="64" height="64" rx="16" fill="url(#grad_sqlite_public)" />
        <g transform="translate(16, 14)">
          <ellipse cx="16" cy="6" rx="14" ry="5" fill="none" stroke="white" strokeWidth="3.5" />
          <path d="M2 6 v 24 a 14 5 0 0 0 28 0 v -24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M2 18 a 14 5 0 0 0 28 0" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <linearGradient id="grad_sqlite_public" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1"/>
            <stop offset="50%" stopColor="#a855f7"/>
            <stop offset="100%" stopColor="#ec4899"/>
          </linearGradient>
        </defs>
      </svg>
    )
  },
  {
    name: 'カラーパレットツール',
    url: 'https://color-palette-tool.pages.dev',
    description: 'デザイン制作に役立つモダンな配色シミュレーター。',
    icon: (
      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-400 rounded-xl flex items-center justify-center text-white shadow-sm">
        <Palette size={28} />
      </div>
    )
  },
  {
    name: 'Pix Morph',
    url: 'https://ukpr-image10.pages.dev',
    description: '画像の加工や変換を直感的に行えるツール。',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" className="rounded-xl shadow-sm">
        <defs>
          <linearGradient id="grad_pix_public" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#6366f1"/>
            <stop offset="100%" stopColor="#a855f7"/>
          </linearGradient>
        </defs>
        <rect width="24" height="24" rx="6" fill="url(#grad_pix_public)"/>
        <g fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" transform="translate(12 12) scale(0.65) translate(-12 -12)">
          <polygon points="12 2 2 7 12 12 22 7 12 2"/>
          <polyline points="2 17 12 22 22 17"/>
          <polyline points="2 12 12 17 22 12"/>
        </g>
      </svg>
    )
  }
];

const RecommendedApps: React.FC = () => {
  return (
    <section id="apps" className="py-24 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold tracking-wide uppercase text-sm mb-3">Innovation Tools</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-stone-900">活動を支えるデジタルツール</h3>
          <p className="mt-4 text-stone-500 max-w-2xl mx-auto">
            筑摩野改新党が提案する、学びと創造を加速させるためのツール群です。<br className="hidden md:block"/>
            どなたでも自由にご利用いただけます。
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-3xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-brand-300 transition-all duration-300 group flex flex-col items-center text-center h-full"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {app.icon}
              </div>
              <h4 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-brand-600 transition-colors">
                {app.name}
              </h4>
              <p className="text-sm text-stone-500 leading-relaxed flex-grow mb-6">
                {app.description}
              </p>
              <div className="text-xs font-bold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                使ってみる <ExternalLink size={14} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendedApps;
