'use client';

import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { languages } from '@/data/skills';

const levelConfig: Record<string, { label: string; color: string; bg: string; width: string }> = {
  Native: {
    label: 'Nativo',
    color: 'text-emerald-700 dark:text-emerald-400',
    bg: 'bg-emerald-500',
    width: 'w-full',
  },
  Professional: {
    label: 'Profissional',
    color: 'text-blue-700 dark:text-blue-400',
    bg: 'bg-blue-500',
    width: 'w-4/5',
  },
  Intermediate: {
    label: 'Intermediário',
    color: 'text-amber-700 dark:text-amber-400',
    bg: 'bg-amber-500',
    width: 'w-3/5',
  },
  Basic: {
    label: 'Básico',
    color: 'text-gray-600 dark:text-gray-400',
    bg: 'bg-gray-400',
    width: 'w-2/5',
  },
};

export function LanguagesSection() {
  return (
    <div className="bg-white dark:bg-gray-900/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/40 dark:to-blue-900/40 flex items-center justify-center border border-cyan-200/50 dark:border-cyan-700/30">
          <Globe className="w-4.5 h-4.5 text-cyan-600 dark:text-cyan-400" />
        </div>
        <h3 className="font-bold text-gray-900 dark:text-white">Idiomas</h3>
      </div>

      <div className="space-y-4">
        {languages.map((lang, index) => {
          const config = levelConfig[lang.level] ?? levelConfig.Basic;
          return (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-semibold text-sm text-gray-900 dark:text-white">
                  {lang.name}
                </span>
                <span className={`text-xs font-semibold ${config.color}`}>
                  {config.label}
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className={`h-full ${config.bg} ${config.width} rounded-full`}
                  style={{ maxWidth: config.width === 'w-full' ? '100%' : config.width === 'w-4/5' ? '80%' : config.width === 'w-3/5' ? '60%' : '40%' }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
