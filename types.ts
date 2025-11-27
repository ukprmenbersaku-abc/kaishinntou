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
  bio: string;
  image: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}