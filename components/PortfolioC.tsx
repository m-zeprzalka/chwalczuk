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
  Play,
  ChevronRight,
} from "lucide-react";

const Masonry = dynamic(() => import("react-masonry-css"), { ssr: false });

const PortfolioC: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  const projects = [
    {
      type: "video",
      title: "Anna Lewandowska",
      category: "Content marketing",
      src: "/videos/anna.mp4",
    },
    {
      type: "image",
      title: "Project One",
      category: "Photography",
      src: "/images/gallery/img1.jpg",
    },
    {
      type: "video",
      title: "Małgorzata Kożuchowska",
      category: "Kampania wizerunkowa",
      src: "/videos/malgosia.mp4",
    },
    {
      type: "image",
      title: "Project Two",
      category: "Photography",
      src: "/images/gallery/img2.jpg",
    },
    {
      type: "video",
      title: "Cellove",
      category: "Spot reklamowy",
      src: "/videos/cellove.mp4",
    },
    {
      type: "image",
      title: "Project Three",
      category: "Photography",
      src: "/images/gallery/img3.jpg",
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0 z-0" style={{ scale }}>
          <div className="relative h-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
              src="/videos/showreel.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 container px-4 max-w-7xl mx-auto"
          style={{ opacity }}
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <span className="inline-block px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full text-sm">
                Filmmaker & Content Creator
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-7xl md:text-9xl font-bold mb-8 leading-tight"
            >
              <span className="font-archivo-regular">Rafał</span>
              <span className="font-archivo-extrabold block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
                CHWALCZUK
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl"
            >
              Pomagam firmom osiągać cele dzięki filmom - reklamowym,
              wizerunkowym i relacjom z eventów
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <button className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg flex items-center gap-3 text-lg font-medium transition-all transform hover:-translate-y-1">
                Zobacz portfolio <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 border border-white/20 hover:border-blue-500 rounded-lg text-lg font-medium transition-all transform hover:-translate-y-1">
                Kontakt
              </button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="animate-bounce">
            <ChevronRight className="w-8 h-8 text-white transform rotate-90" />
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="realizacje" className="py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-archivo-extrabold text-white mb-16 text-center"
          >
            Wybrane realizacje
          </motion.h2>

          <Masonry
            breakpointCols={{ default: 3, 1100: 2, 700: 1 }}
            className="flex mx-auto w-auto"
            columnClassName="masonry-grid-column"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="relative overflow-hidden rounded-xl bg-white/5 group">
                  {project.type === "video" ? (
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto object-cover"
                      src={project.src}
                    />
                  ) : (
                    <img
                      src={project.src}
                      alt={project.title}
                      className="w-full h-auto object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-blue-400 text-sm">
                        {project.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-b from-black/50 to-black">
        <div className="container px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-square"
          >
            <img
              src="/images/about.jpg"
              alt="Rafał Chwalczuk"
              className="rounded-2xl shadow-2xl w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl" />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-archivo-extrabold text-white">
              O mnie
            </h2>

            <p className="text-lg leading-relaxed text-gray-300">
              Filmem i fotografią zajmuję się odkąd pamiętam – to nie tylko moja
              praca, ale przede wszystkim pasja. Pierwsze nagrody zdobywałem
              jeszcze jako nastolatek, a przez lata rozwijałem swoje
              umiejętności zarówno jako freelancer, jak i w renomowanych
              firmach.
            </p>

            <div className="grid gap-6">
              <div className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/50 transition-colors">
                <h3 className="text-white text-xl font-semibold mb-4">
                  Doświadczenie
                </h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Video Content Creator w Stor9
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Video Editor w 11 bit studios
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-blue-500" />
                    Freelance (2016-obecnie)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl font-archivo-extrabold text-white mb-4">
                  Kontakt
                </h2>
                <p className="text-gray-400 text-lg">
                  Porozmawiajmy o Twoim projekcie
                </p>
              </div>

              <div className="grid gap-6">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5 }}
                    className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50"
                  >
                    <div className="flex items-center gap-4">
                      <item.icon className="w-6 h-6 text-blue-500" />
                      <span className="text-lg text-white hover:text-blue-500 transition-colors">
                        {item.text}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                src="/videos/showreel.mp4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-b from-black to-blue-950/20">
        <div className="container px-4 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-archivo-extrabold bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Zrealizujmy razem
              <span className="block text-blue-500">Twój następny projekt</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Skontaktuj się ze mną, aby omówić szczegóły współpracy
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-lg inline-flex items-center gap-3 text-lg font-medium mt-8"
            >
              Rozpocznij współpracę <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Global Styles */}
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

        .masonry-grid-column {
          padding-left: 24px !important;
          background-clip: padding-box;
        }

        .masonry-grid-column > div {
          margin-bottom: 24px;
        }

        video::-webkit-media-controls {
          display: none !important;
        }

        ::selection {
          background-color: rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </div>
  );
};

export default PortfolioC;
