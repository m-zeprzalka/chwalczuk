// components/sections/Contact.tsx
"use client";

import { motion } from "framer-motion";
import { contactItems } from "@/data/projects";
import { fadeIn } from "@/utils/motion";

export const Contact = () => {
  return (
    <section className="py-24">
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Contact
              </h2>
              <p className="text-gray-400 text-lg">
                Film and photography have been my passion since childhood – it's
                not just my profession, but my true calling. I earned my first
                awards as a teenager, honing my craft both as a freelancer and
                through work with renowned companies. Let's bring your next
                project to life.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => (
                <motion.a
                  key={`contact-${item.text}`}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-6 bg-white/5 rounded-xl hover:bg-white/10 transition-all border border-white/10 hover:border-blue-500/50"
                >
                  <div className="flex items-center gap-4">
                    <item.icon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-sm md:text-base text-white hover:text-blue-500 transition-colors">
                      {item.text}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="w-full"
          >
            <div className="relative rounded-xl overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                src="/videos/reel.mp4"
                className="w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
