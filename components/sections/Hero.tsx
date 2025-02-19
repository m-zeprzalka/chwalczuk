"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { fadeIn } from "@/utils/motion";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale }}
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative h-full">
          <div className="relative h-full xl:w-[85%] mx-auto overflow-hidden rounded-b-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover opacity-80"
              src="/videos/showreel.mp4"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent w-[100%]" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 container px-4 max-w-7xl mx-auto"
        style={{ opacity, scale }}
      >
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            <span className="font-archivo-regular tracking-wide">Rafał</span>
            <span className="block font-archivo-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              Chwalczuk<span className="text-blue-500">.</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-2xl"
          >
            Pomagam firmom osiągać cele dzięki filmom<br></br> Reklamowym,
            wizerunkowym i relacjom z eventów
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <motion.a
              href="#realizacje"
              whileHover="hover"
              initial="initial"
              className="group relative px-8 py-4 bg-blue-500 rounded-lg inline-flex items-center gap-3 text-lg font-medium overflow-hidden"
            >
              <span className="relative z-10">Zobacz realizacje</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-600"
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
