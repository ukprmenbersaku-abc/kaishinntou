import { CalendarClock, Mic, Bell, Info, UserCog, Clock, Sparkles, Sun, MessageSquare, Video, CloudSnow, Snowflake } from 'lucide-react';
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
    id: 'n_snow_update',
    date: '2026.01.22',
    category: 'お知らせ',
    title: '【13:20更新】大雪に関する追加情報（松本地域）',
    link: '#/news/heavy-snow',
    icon: CloudSnow
  },
  {
    id: 'n_snow_warning',
    date: '2026.01.22',
    category: 'お知らせ',
    title: '【注意】大雪による路面凍結・校内通行について',
    link: '#/news/heavy-snow',
    icon: Snowflake
  },
  {
    id: 'n_chat_release',
    date: '2026.01.13',
    category: 'お知らせ',
    title: '【公開】新チャットアプリ「SnapNode」（ベータ版）をリリースしました',
    link: '#/news/chat-release',
    icon: MessageSquare
  },
  {
    id: 'n_online_meeting',
    date: '2026.01.12',
    category: 'お知らせ',
    title: '【延期】1/14(水) オンライン会議の延期について',
    link: '#/news/online-meeting',
    icon: Video
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