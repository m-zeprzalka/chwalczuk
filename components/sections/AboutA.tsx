// components/sections/AboutA.tsx
"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  Check,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Calendar,
  GraduationCap,
  Star,
  Link,
  Linkedin,
  Instagram,
} from "lucide-react";
import {
  experienceItems,
  educationItems,
  skills,
  certificates,
  contactInfo,
  memberships,
} from "@/data/aboutData";

// Animacje
const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const AboutA = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-black/50 to-black"
      id="about"
    >
      <div className="container px-4 max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-6">
        {/* Left Column - Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {/* Profile Photo */}
          <motion.div
            variants={cardAnimation}
            className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/images/hero/hero.jpg"
              alt="Rafał Chwalczuk"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
              <h1 className="text-4xl font-bold">Rafał Chwalczuk</h1>
              <div className="flex gap-4">
                <a
                  href="#realizacje"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Link size={16} />
                  Portfolio
                </a>
                <a
                  href="https://www.linkedin.com/in/chwalczuk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href="http://instagram.com/rafal_chwalczuk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-2"
                >
                  <Instagram size={16} />
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={cardAnimation}
            className="p-6 bg-white/5 rounded-xl border border-white/10 space-y-4 hover:border-blue-500/30 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              Contact
            </h3>
            <div className="space-y-3 text-gray-300">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-500" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-500" />
                {contactInfo.phone}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-500" />
                {contactInfo.location}
              </div>
            </div>
          </motion.div>

          {/* Key Skills */}
          <motion.div
            variants={cardAnimation}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              Key Skills
            </h3>
            <div className="text-sm text-blue-400 mb-6">
              MY FAVORITE ONES ARE AE, PR, PS
            </div>
            <div className="space-y-2">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-blue-500" />
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            variants={cardAnimation}
            className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
          >
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{cert.name}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {cert.issuer} ({cert.year})
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Experience & Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="space-y-12"
        >
          {/* Latest Experience Title */}
          <motion.div variants={cardAnimation} className="space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              The Latest Experience
            </h2>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experienceItems.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400">{exp.company}</p>
                    <p className="text-gray-400 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </p>
                  </div>
                </div>
                {exp.responsibilities.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-gray-300"
                      >
                        <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-1" />
                        {resp}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.h2 variants={cardAnimation} className="text-3xl font-bold">
              Education
            </motion.h2>
            {educationItems.map((edu, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">
                        {edu.field}
                      </h4>
                      <p className="text-blue-400">{edu.school}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-blue-500/5 rounded-lg border border-blue-500/10">
                    <p className="text-sm text-white font-medium mb-2">
                      {edu.honors}
                    </p>
                    <p className="text-sm text-gray-400">"{edu.thesis}"</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Memberships */}
          <motion.div variants={staggerContainer} className="space-y-6">
            <motion.h2 variants={cardAnimation} className="text-3xl font-bold">
              Memberships
            </motion.h2>
            {memberships.map((membership, index) => (
              <motion.div
                key={index}
                variants={cardAnimation}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">
                      {membership.organization}
                    </h4>
                    <p className="text-gray-400">{membership.role}</p>
                    <p className="text-blue-400 text-sm">{membership.period}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
