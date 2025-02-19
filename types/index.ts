// types/index.ts
import { LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  category: string;
  video: string;
}

export interface ContactItem {
  icon: LucideIcon;
  text: string;
  link: string;
}

export interface PhilosophyItem {
  title: string;
  desc: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export interface SectionProps {
  className?: string;
  children: React.ReactNode;
}
