// components/PortfolioB.tsx
"use client";

import { FC, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import {
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X,
  Download,
  ArrowRight,
} from "lucide-react";

const Masonry = dynamic(() => import("react-masonry-css"), { ssr: false });

const PortfolioB: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.03]);

  const projects = [
    {
      title: "Anna Lewandowska",
      category: "Content marketing",
      video: "/videos/anna.mp4",
    },
    {
      title: "Małgorzata Kożuchowska",
      category: "Kampania wizerunkowa",
      video: "/videos/malgosia.mp4",
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
      title: "Banana Socks",
      category: "Kampania produktowa",
      video: "/videos/banana.mp4",
    },
    {
      title: "White Paintings",
      category: "Nagrania muzyczne",
      video: "/videos/music.mp4",
    },
  ];

  const contactItems = [
    {
      icon: Mail,
      text: "contact@chwalczuk.pl",
      link: "mailto:contact@chwalczuk.pl",
    },
    { icon: Phone, text: "+48 123 456 789", link: "tel:+48123456789" },
    { icon: Instagram, text: "@chwalczuk.film", link: "https://instagram.com" },
    {
      icon: Linkedin,
      text: "linkedin.com/in/rafalchwalczuk",
      link: "https://linkedin.com",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-archivo antialiased">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-white/10">
        <div className="container mx-auto px-4 h-16 flex justify-between items-center max-w-7xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tight"
          >
            <span className="font-archivo-regular">CHWALCZUK</span>
            <span className="text-blue-500">.</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            <motion.a
              href="/cv.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg flex items-center gap-2 hover:bg-blue-500/10 transition-all"
            >
              Pobierz CV <Download size={18} />
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Nowoczesny design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ scale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90"
            src="/videos/showreel.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />
        </motion.div>

        <div className="relative z-10 text-center container px-4 max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-bold mb-6"
          >
            <span className="font-archivo-regular text-white">Rafał</span>
            <span className="font-archivo-extrabold block text-white mt-4">
              CHWALCZUK
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Pomagam firmom osiągać cele dzięki filmom - reklamowym, wizerunkowym
            i relacjom z eventów
          </motion.p>
        </div>
      </section>

      {/* Projects Section - Masonry Grid */}
      <section id="realizacje" className="py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-archivo-extrabold text-white mb-16 text-center"
          >
            Wybrane realizacje
          </motion.h2>

          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
            className="flex gap-6"
            columnClassName="masonry-column"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 group"
              >
                <div className="relative overflow-hidden rounded-xl hover:shadow-2xl hover:shadow-white/5 transition-all">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-cover"
                    src={project.video}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm">{project.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* About Section - Minimalistyczna */}
      <section className="py-24 bg-black/50">
        <div className="container px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative aspect-square"
          >
            <img
              src="/images/hero/hero.jpg"
              alt="Rafał Chwalczuk"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-archivo-extrabold text-white mb-8">
              O mnie
            </h2>

            <div className="space-y-8">
              <p className="text-lg leading-relaxed">
                Filmem i fotografią zajmuję się odkąd pamiętam – to nie tylko
                moja praca, ale przede wszystkim pasja. Pierwsze nagrody
                zdobywałem jeszcze jako nastolatek, a przez lata rozwijałem
                swoje umiejętności zarówno jako freelancer, jak i w renomowanych
                firmach.
              </p>

              <div className="space-y-6">
                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Doświadczenie
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Video Content Creator w Stor9</li>
                    <li>Video Editor w 11 bit studios</li>
                    <li>Freelance (2016-obecnie)</li>
                  </ul>
                </div>

                <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-white text-xl font-semibold mb-4">
                    Filozofia pracy
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1">▸</span>
                      <div>
                        <h4 className="font-semibold text-white">
                          Dobre przygotowanie
                        </h4>
                        <p className="text-gray-400 text-sm">
                          Kompleksowa analiza i planowanie każdego projektu
                        </p>
                      </div>
                    </li>
                    {/* Pozostałe punkty */}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section - Prosty układ */}
      <section className="py-24">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-12 text-center"
          >
            <h2 className="text-4xl font-archivo-extrabold text-white mb-8">
              Kontakt
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-colors border border-white/10"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-blue-500" />
                    <a
                      href={item.link}
                      className="text-lg text-white hover:text-blue-500 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.text}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Minimalistyczny */}
      <footer className="py-12 border-t border-white/10">
        <div className="container px-4 max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-6 h-6 text-white" />
            </a>
            <a
              href="#"
              className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6 text-white" />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CHWALCZUK.PL | Wszelkie prawa
            zastrzeżone
          </p>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Archivo:wght@400;800&display=swap");

        .font-archivo-regular {
          font-family: "Archivo", sans-serif;
          font-weight: 400;
        }

        .font-archivo-extrabold {
          font-family: "Archivo", sans-serif;
          font-weight: 800;
        }

        .masonry-column {
          gap: 1.5rem !important;
          padding-left: 1.5rem !important;
        }

        .masonry-column > div {
          margin-bottom: 1.5rem !important;
        }

        video::-webkit-media-controls {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default PortfolioB;
