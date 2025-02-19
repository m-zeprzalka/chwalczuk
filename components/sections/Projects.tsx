// components/sections/Projects.tsx
"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { projects } from "@/data/projects";
import { fadeIn } from "@/utils/motion";

const Masonry = dynamic(() => import("react-masonry-css"), { ssr: false });

export const Projects = () => {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <section id="realizacje" className="py-24">
      <div className="container px-4 max-w-7xl mx-auto">
        <motion.h2
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-4xl md:text-6xl font-bold text-white mb-16 text-center"
        >
          Featured Projects
        </motion.h2>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex w-full gap-6"
          columnClassName="masonry-grid-column"
        >
          {projects.map((project) => (
            <motion.div
              key={`project-${project.title}-${project.category}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6 group"
            >
              <div className="w-full relative overflow-hidden rounded-xl bg-white/5">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full object-cover"
                  src={project.video}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm">{project.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};
