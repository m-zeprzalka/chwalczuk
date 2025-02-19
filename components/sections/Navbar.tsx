// components/sections/Navbar.tsx
"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-black z-50">
      <div className="container mx-auto p-4 flex justify-between items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl tracking-tight"
        >
          <span className="text-bold tracking-wider">Chwalczuk</span>
          <span className="text-blue-500">.</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="hidden md:block"
        >
          <motion.a
            href="#about"
            whileHover="hover"
            initial="initial"
            className="group relative px-6 py-2.5 bg-blue-500 rounded-lg inline-flex items-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">View CV</span>
            <Eye className="relative z-10 w-5 h-5" />
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
    </nav>
  );
};
