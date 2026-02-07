import { LucideIcon } from "lucide-react";

export interface Policy {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  content: {
    problem: string;
    solution: string;
    roadmap: string[];
  };
}

export interface Member {
  id: string;
  name: string;
  role: string;
  bio: string; // 一覧表示用の短い紹介
  image: string; // 現状はプレースホルダー
  
  // 詳細ページ用
  detailBio: string; // 詳細な経歴や人柄
  message: string; // 生徒へのメッセージ
  tags: string[]; // 特徴を表すタグ（例：#行動力 #聞き上手）
  color: string; // テーマカラー
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}