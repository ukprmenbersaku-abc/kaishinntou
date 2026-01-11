import { CalendarClock, Mic, Bell, Info, UserCog, Clock, Sparkles, Sun, MessageSquare, Video } from 'lucide-react';
import React from 'react';

export interface NewsItem {
  id: string;
  date: string;
  category: '活動報告' | 'イベント' | 'お知らせ';
  title: string;
  link: string;
  icon: React.ElementType;
}

export const newsData: NewsItem[] = [
  {
    id: 'n_online_meeting',
    date: '2026.01.10',
    category: 'お知らせ',
    title: '【重要】1/14(水) オンライン会議の開催について',
    link: '#/news/online-meeting',
    icon: Video
  },
  {
    id: 'n_chat_release',
    date: '2026.01.08',
    category: 'お知らせ',
    title: '【予告】党員用ウェブチャット（ベータ版）を1/13にリリースします',
    link: '#/news/chat-release',
    icon: MessageSquare
  },
  {
    id: 'n_newyear_2026',
    date: '2026.01.01',
    category: 'お知らせ',
    title: '謹賀新年 2026',
    link: '#/news/new-year',
    icon: Sun
  },
  {
    id: 'n_countdown',
    date: '2025.12.28',
    category: 'イベント',
    title: '【予告】年越しカウントダウンイベントの実施について',
    link: '#/news/countdown',
    icon: Sparkles
  },
  {
    id: 'n_personnel_20251222',
    date: '2025.12.22',
    category: 'お知らせ',
    title: '【重要】役員人事の変更について',
    link: '#news/personnel-change',
    icon: UserCog
  },
  {
    id: 'n0',
    date: '2025.12.21',
    category: '活動報告',
    title: '岩本代表が、今年度のまとめを発表しました。',
    link: '#summary-detail',
    icon: Mic
  },
  {
    id: 'n1',
    date: '2025.12.18',
    category: 'イベント',
    title: '生徒総会が開催されます（場所：体育館）',
    link: '#schedule-detail',
    icon: CalendarClock
  },
  {
    id: 'n2',
    date: '2025.12.11',
    category: 'お知らせ',
    title: '新入生説明会を実施しました',
    link: '#schedule-detail',
    icon: CalendarClock
  },
  {
    id: 'n4',
    date: '2025.11.25',
    category: 'お知らせ',
    title: '党員限定ダッシュボードの機能を拡充しました',
    link: '#home',
    icon: Bell
  },
  {
    id: 'n5',
    date: '2025.11.10',
    category: '活動報告',
    title: '「デジタル委員会」設置に向けた素案を公開',
    link: '#/policy/p3',
    icon: Info
  },
  {
    id: 'n6',
    date: '2025.10.20',
    category: 'お知らせ',
    title: '筑摩野改新党 公式サイトをプレオープンしました',
    link: '#home',
    icon: Bell
  }
];