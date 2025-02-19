// components/sections/CTA.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { fadeIn } from "@/utils/motion";

export const CTA = () => {
  return (
    <section className="pt-40 relative">
      <div className="container px-4 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-blue-500/5 rounded-3xl blur-3xl"
          />

          <div className="relative space-y-8">
            <h2 className="text-5xl md:text-7xl font-bold">
              Zrealizujmy razem
              <span className="block text-blue-500 mt-2">
                Twój następny projekt
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Skontaktuj się ze mną, aby omówić szczegóły współpracy
            </p>

            <motion.button
              whileHover="hover"
              initial="initial"
              className="group relative px-8 py-4 bg-blue-500 rounded-lg inline-flex items-center gap-3 text-lg font-medium mt-8 overflow-hidden"
            >
              <span className="relative z-10">Rozpocznij współpracę</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: 0 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 bg-blue-600"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="bottom-0 left-0 right-0 w-full">
        <img
          src="/images/bar.jpg"
          alt="Bottom bar"
          className="w-full h-full object-cover bottom-0"
        />
      </div>
    </section>
  );
};
