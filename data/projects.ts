// data/projects.ts
export const projects = [
  {
    title: "Banana Socks",
    category: "Product Campaign",
    video: "/videos/banana.mp4",
  },
  {
    title: "Brandy Lifestyle",
    category: "Branded Content",
    video: "/videos/lifestyle.mp4",
  },
  {
    title: "Automotive", // Lepsze niż dosłowne "Motoryzacja"
    category: "Commercial Films",
    video: "/videos/moto.mp4",
  },
  {
    title: "Cellove",
    category: "Commercial Spot",
    video: "/videos/cellove.mp4",
  },
  {
    title: "Tech Summit",
    category: "Event Coverage",
    video: "/videos/tech-summit.mp4",
  },
  {
    title: "Sports Brand Films", // Wyjaśniający typ produkcji
    category: "Branded Content",
    video: "/videos/sport.mp4",
  },
];

// data/contact.ts
import { Mail, Phone, Instagram, Linkedin } from "lucide-react";

export const contactItems = [
  {
    icon: Mail,
    text: "rafal.chwalczuk@gmail.com",
    link: "mailto:rafal.chwalczuk@gmail.com",
  },
  { icon: Phone, text: "+48 508 108 767", link: "tel:+48508108767" },
  {
    icon: Instagram,
    text: "rafal_chwalczuk",
    link: "http://instagram.com/rafal_chwalczuk",
  },
  {
    icon: Linkedin,
    text: "rafalchwalczuk",
    link: "http://linkedin.com/in/rafalchwalczuk",
  },
];

// data/philosophy.ts
export const philosophyItems = [
  {
    title: "Dobre przygotowanie",
    desc: "Kompleksowa analiza i planowanie każdego projektu",
  },
  {
    title: "Jakość wykonania",
    desc: "Najwyższe standardy realizacji i postprodukcji",
  },
  {
    title: "Terminowość",
    desc: "Dotrzymywanie ustaleń i harmonogramu prac",
  },
  {
    title: "Komunikacja",
    desc: "Stały kontakt i informowanie o postępach",
  },
];
