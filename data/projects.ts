// data/projects.ts
export const projects = [
  {
    title: "Banana Socks",
    category: "Kampania produktowa",
    video: "/videos/banana.mp4",
  },
  {
    title: "Brandy Lifestyle",
    category: "Video Marketing",
    video: "/videos/lifestyle.mp4",
  },
  {
    title: "Studniówki",
    category: "Retro Video",
    video: "/videos/studniowki.mp4",
  },
  {
    title: "Motoryzacja",
    category: "Video Marketing",
    video: "/videos/moto.mp4",
  },

  {
    title: "Cellove",
    category: "Spot reklamowy",
    video: "/videos/cellove.mp4",
  },
  {
    title: "Tech Summit",
    category: "Relacja eventowa",
    video: "/videos/tech-summit.mp4",
  },

  {
    title: "Brandy Sportowe",
    category: "Video Marketing",
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
