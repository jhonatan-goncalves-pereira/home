'use client';

import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import type { Experience } from '@/data/experience';

interface ExperienceCardProps {
  experience: Experience;
}

const typeLabels: Record<string, string> = {
  'full-time': 'CLT / Full-time',
  'part-time': 'Part-time',
  'contract': 'Contrato',
  'freelance': 'Freelance',
  'internship': 'Estágio',
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric',
    });
  };

  const initials = experience.company
    .split(' ')
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white dark:bg-gray-900/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800/60 transition-all duration-300"
    >
      {/* Gradient accent on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/0 to-sky-500/0 group-hover:from-blue-500/3 group-hover:to-sky-500/3 transition-all duration-300 pointer-events-none" />

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-4">
          {/* Company Logo */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/40 dark:to-sky-900/40 flex items-center justify-center flex-shrink-0 border border-blue-200/50 dark:border-blue-700/30 shadow-sm">
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
              <h3 className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
                {experience.title}
              </h3>
              {experience.current && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 flex-shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Atual
                </span>
              )}
            </div>

            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
              {experience.company}
            </p>

            <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(experience.startDate)} –{' '}
                {experience.current ? 'Presente' : formatDate(experience.endDate!)}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {experience.location}
              </span>
              <span className="flex items-center gap-1">
                <Briefcase className="w-3.5 h-3.5" />
                {typeLabels[experience.type] ?? experience.type}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2 mb-4">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
              {achievement}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
