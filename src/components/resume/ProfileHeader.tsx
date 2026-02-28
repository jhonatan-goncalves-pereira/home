'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, Phone, MapPin, Download, Github, Linkedin, ExternalLink, Sparkles } from 'lucide-react';
import { profile } from '@/data/profile';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

const photoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'backOut' } },
};

export function ProfileHeader() {
  return (
    <div className="relative overflow-hidden rounded-3xl mb-12">
      {/* ULTRA PREMIUM Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950/30" />
      
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 hero-mesh opacity-60" />
      
      {/* Floating orbs - more dramatic */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-400/15 blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] rounded-full bg-gradient-to-br from-sky-500/15 to-blue-400/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-blue-400/5 to-transparent pointer-events-none" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 dot-grid opacity-30" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-10 p-8 md:p-12"
      >
        {/* Profile Photo - ULTRA PREMIUM */}
        <motion.div variants={photoVariants} className="flex-shrink-0">
          <div className="relative group">
            {/* Multi-layer glow ring */}
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-400 opacity-60 blur-xl animate-pulse" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 opacity-80 blur-lg" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 to-sky-500" />

            {/* Photo container */}
            <div className="relative w-44 h-44 rounded-full overflow-hidden border-[3px] border-white dark:border-gray-900 shadow-2xl">
              <Image
                src={profile.photo}
                alt={profile.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            </div>

            {/* Premium online indicator */}
            <div className="absolute bottom-2 right-2">
              <div className="relative w-6 h-6 bg-emerald-500 rounded-full border-3 border-white dark:border-gray-900 shadow-lg">
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-60" />
              </div>
            </div>

            {/* Decorative elements around photo */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl rotate-12 opacity-80 shadow-lg" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-70 shadow-lg" />
          </div>
        </motion.div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left min-w-0">
          {/* ULTRA PREMIUM Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full badge-premium mb-5"
          >
            <Sparkles className="w-4 h-4" />
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm font-semibold">Disponível para oportunidades</span>
          </motion.div>

          {/* ULTRA PREMIUM Name - Fixed contrast! */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 leading-none"
          >
            <span className="text-gray-900 dark:text-white">{profile.name.split(' ')[0]}</span>{' '}
            <span className="gradient-text drop-shadow-sm">{profile.name.split(' ').slice(1).join(' ')}</span>
          </motion.h1>

          {/* Title - Enhanced visibility */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-semibold mb-6 leading-relaxed max-w-2xl"
          >
            {profile.title}
          </motion.p>

          {/* Tech Stack Badges - ULTRA PREMIUM */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-2.5 mb-8">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'Java', 'Spring Boot'].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.05 }}
                className="px-4 py-1.5 text-sm font-semibold rounded-full badge-premium cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-5 text-sm mb-8"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            >
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">{profile.email}</span>
            </a>
            {profile.phone && (
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <span className="font-medium">({profile.phone.slice(0, 2)}) {profile.phone.slice(2, 7)}-{profile.phone.slice(7)}</span>
              </a>
            )}
            <span className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="font-medium">{profile.location}</span>
            </span>
          </motion.div>

          {/* Action Buttons - ULTRA PREMIUM */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {/* Primary CTA - Stunning gradient */}
            <a
              href="/print"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 hover:-translate-y-1 active:translate-y-0 group"
              style={{
                background: 'linear-gradient(135deg, hsl(200 90% 50%) 0%, hsl(195 95% 55%) 50%, hsl(190 85% 60%) 100%)',
              }}
            >
              <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Download CV
            </a>

            {/* GitHub */}
            {profile.github && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-gray-700 dark:text-gray-200 card-premium hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="w-5 h-5" />
                GitHub
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
            )}

            {/* LinkedIn */}
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'linear-gradient(135deg, #0A66C2 0%, #0077B5 100%)',
                }}
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
            )}
          </motion.div>
        </div>

        {/* Stats sidebar - ULTRA PREMIUM */}
        <motion.div
          variants={itemVariants}
          className="flex lg:flex-col gap-3 flex-shrink-0"
        >
          {[
            { value: '3+', label: 'Anos de\nExperiência', color: 'from-blue-500 to-sky-500' },
            { value: '10+', label: 'Projetos\nEntregues', color: 'from-sky-500 to-cyan-500' },
            { value: '5+', label: 'Tecnologias\nDominadas', color: 'from-cyan-500 to-blue-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="group flex flex-col items-center justify-center w-28 h-22 rounded-2xl card-premium hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className={`text-3xl font-black bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 text-center leading-tight mt-1.5 whitespace-pre-line font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
