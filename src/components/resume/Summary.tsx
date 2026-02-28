'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Sparkles, Quote } from 'lucide-react';

export function Summary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12"
    >
      {/* ULTRA PREMIUM Summary Card */}
      <div className="relative rounded-3xl overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-sky-50 dark:from-blue-950/20 dark:via-gray-900 dark:to-sky-950/10" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        
        {/* Decorative orbs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-blue-500/10 dark:bg-blue-500/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-sky-500/10 dark:bg-sky-500/15 blur-3xl pointer-events-none" />

        <div className="relative p-6 md:p-8">
          {/* Header with icon */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Sobre mim</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Resumo profissional</p>
            </div>
          </div>

          {/* Quote decorative element */}
          <div className="absolute top-6 right-6 md:right-8 text-8xl font-serif text-blue-200 dark:text-blue-800/30 leading-none select-none pointer-events-none">
            <Quote className="w-16 h-16 -rotate-12" />
          </div>

          {/* Main summary text */}
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8 relative z-10 max-w-4xl">
            {profile.summary}
          </p>

          {/* Highlights - ULTRA PREMIUM Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {profile.highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
                className="group flex items-start gap-3 rounded-xl p-4 card-premium hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-sky-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                  {highlight}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
