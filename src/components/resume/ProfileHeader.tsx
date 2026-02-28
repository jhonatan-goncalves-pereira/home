'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink } from 'lucide-react';
import { profile } from '@/data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'backOut' } },
};

export function ProfileHeader() {
  return (
    <div className="relative overflow-hidden rounded-3xl mb-12">
      {/* Background mesh gradient */}
      <div className="absolute inset-0 hero-mesh" />
      <div className="absolute inset-0 dot-grid opacity-40" />

      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan-500/8 dark:bg-cyan-500/12 blur-3xl pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 p-8 md:p-12"
      >
        {/* Profile Photo */}
        <motion.div variants={photoVariants} className="flex-shrink-0">
          <div className="relative">
            {/* Animated ring */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 opacity-80 blur-sm animate-pulse-glow" />
            <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500" />

            <div className="relative w-44 h-44 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>

            {/* Online indicator */}
            <div className="absolute bottom-3 right-3 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg">
              <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left min-w-0">
          {/* Badge */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-500/20 border border-blue-500/20 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Disponível para oportunidades
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-3 leading-none"
          >
            {profile.name.split(' ')[0]}{' '}
            <span className="gradient-text">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mb-6 leading-relaxed"
          >
            {profile.title}
          </motion.p>

          {/* Highlights */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Spring Boot'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>{profile.email}</span>
            </a>
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>({profile.phone.slice(0, 2)}) {profile.phone.slice(2, 7)}-{profile.phone.slice(7)}</span>
              </a>
            )}
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </span>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {/* Primary CTA */}
            <a
              href="/print"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>

            {/* GitHub */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github className="w-4 h-4" />
                GitHub
                <ExternalLink className="w-3 h-3 opacity-50" />
              </a>
            )}

            {/* LinkedIn */}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-white bg-[#0A66C2] hover:bg-[#0958a8] shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Stats sidebar */}
        <motion.div
          variants={itemVariants}
          className="flex lg:flex-col gap-4 lg:gap-3 flex-shrink-0"
        >
          {[
            { value: '3+', label: 'Anos de\nExperiência' },
            { value: '10+', label: 'Projetos\nEntregues' },
            { value: '5+', label: 'Tecnologias\nDominadas' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center w-24 h-20 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/80 dark:border-gray-700/80 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl font-black gradient-text leading-none">{stat.value}</span>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center leading-tight mt-1 whitespace-pre-line">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
