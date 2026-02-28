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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative card-premium rounded-2xl p-6"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Left accent bar */}
      <div className="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-gradient-to-b from-blue-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-5">
          {/* Company Logo - ULTRA PREMIUM */}
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-sky-500 to-cyan-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300">
            <span className="text-lg font-black text-white drop-shadow-sm">
              {initials}
            </span>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white leading-tight">
                {experience.title}
              </h3>
              {experience.current && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50 flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Atual
                </span>
              )}
            </div>

            <p className="text-base font-semibold bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent mb-3">
              {experience.company}
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="font-medium">
                  {formatDate(experience.startDate)} –{' '}
                  {experience.current ? 'Presente' : formatDate(experience.endDate!)}
                </span>
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sky-500" />
                <span className="font-medium">{experience.location}</span>
              </span>
              <span className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cyan-500" />
                <span className="font-medium">{typeLabels[experience.type] ?? experience.type}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-5 pl-1">
          {experience.description}
        </p>

        {/* Achievements - Enhanced styling */}
        <ul className="space-y-3 mb-5">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
              <div className="mt-2 w-2 h-2 rounded-full bg-gradient-to-br from-blue-500 to-sky-500 flex-shrink-0 shadow-sm" />
              <span className="flex-1 leading-relaxed">{achievement}</span>
            </li>
          ))}
        </ul>

        {/* Technologies - ULTRA PREMIUM */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-semibold rounded-lg badge-premium cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
