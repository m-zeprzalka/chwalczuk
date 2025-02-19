// components/sections/About.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight, Check, Mail, Phone, MapPin } from "lucide-react";

export const About = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-black/50 to-black">
      <div className="container px-4 max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
        {/* Lewa kolumna - Zdjęcie i dane kontaktowe */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/hero/hero.jpg"
              alt="Rafał Chwalczuk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <Check className="w-5 h-5 text-blue-500" />
              Kontakt
            </h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-500" />
                rafal.chwalczuk@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-500" />
                508 108 767
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                Warszawa
              </div>
            </div>
          </div>
        </motion.div>

        {/* Prawa kolumna - Zawartość */}
        <motion.div
          className="space-y-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-archivo-extrabold text-white">
            Rafał Chwalczuk
          </h2>

          {/* Doświadczenie */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-white border-l-4 border-blue-500 pl-4">
              THE LATEST EXPERIENCE
            </h3>

            {experienceItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-xl font-medium text-white">
                      {item.title}
                    </h4>
                    <p className="text-blue-400 text-sm mt-1">{item.company}</p>
                    <p className="text-gray-400 text-sm mt-2">{item.period}</p>
                  </div>
                  <span className="text-blue-500 text-xs bg-blue-900/30 px-2 py-1 rounded">
                    {item.type}
                  </span>
                </div>
                <ul className="mt-4 space-y-2 text-gray-300">
                  {item.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Edukacja i umiejętności */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Edukacja
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">
                    Warszawska Wyższa Szkoła Humanistyczna
                  </h4>
                  <p className="text-sm text-gray-400">
                    2017-2020 · Advertising strategies & PR
                  </p>
                  <p className="text-xs text-blue-400 mt-1">
                    Praca dyplomowa z wyróżnieniem
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">
                Kluczowe umiejętności
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-blue-500" />
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Dane do wypełnienia
const experienceItems = [
  {
    title: "Video Content Creator",
    company: "FREELANCE | CO-FOUNDER OF SOCONTENT.MARKETING",
    period: "2022 - Obecnie",
    type: "Pełny etat",
    responsibilities: [
      "Kreacja i produkcja contentu wideo",
      "Zarządzanie projektami kreatywnymi",
      "Współpraca z influencerami i markami",
    ],
  },
  {
    title: "Wykładowca",
    company: "WARSZAWSKA SZKOŁA REKLAMY",
    period: "2021-2022",
    type: "Część etatu",
    responsibilities: [
      "Prowadzenie zajęć z Adobe Premiere Pro i After Effects",
      "Multimedia w Internecie",
      "Scenografia multimedialna",
    ],
  },
  // ... Dodaj pozostałe doświadczenia
];

const skills = [
  "Adobe Creative Cloud",
  "DaVinci Resolve Studio",
  "Unreal Engine (podstawy)",
  "Znajomość trendów social media",
  "Zaawansowany angielski",
  "Organizacja pracy",
  // ... Dodaj pozostałe umiejętności
];
