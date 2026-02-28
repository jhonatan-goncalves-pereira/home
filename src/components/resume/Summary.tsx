'use client';

import { motion } from 'framer-motion';
import { profile } from '@/data/profile';
import { Sparkles } from 'lucide-react';

export function Summary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12"
    >
      <div className="relative rounded-2xl bg-gradient-to-br from-blue-50 to-sky-50/50 dark:from-blue-950/30 dark:to-sky-950/20 border border-blue-100 dark:border-blue-900/40 p-6 md:p-8">
        {/* Decorative quote mark */}
        <div className="absolute top-4 right-6 text-6xl font-serif text-blue-200 dark:text-blue-800/50 leading-none select-none pointer-events-none">
          &ldquo;
        </div>

        <div className="flex items-start gap-3 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-500/10 dark:bg-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Sobre mim</h2>
        </div>

        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-6 relative z-10">
          {profile.summary}
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {profile.highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.06 }}
              className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300 bg-white/60 dark:bg-gray-900/40 rounded-xl px-3 py-2.5 border border-white dark:border-gray-800/60"
            >
              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              <span>{highlight}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
