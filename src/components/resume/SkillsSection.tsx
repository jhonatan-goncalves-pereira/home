'use client';

import { motion } from 'framer-motion';
import { skillCategories, getSkillsByCategory } from '@/data/skills';
import { Section } from '@/components/ui';
import type { Skill } from '@/data/skills';

// Proficiency level config
function getSkillConfig(level: number): {
  label: string;
  dotClass: string;
  badgeClass: string;
  barClass: string;
} {
  if (level >= 90) return {
    label: 'Expert',
    dotClass: 'bg-emerald-500',
    badgeClass: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/50',
    barClass: 'from-emerald-500 to-teal-400',
  };
  if (level >= 75) return {
    label: 'Avançado',
    dotClass: 'bg-blue-500',
    badgeClass: 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/50',
    barClass: 'from-blue-500 to-sky-400',
  };
  if (level >= 60) return {
    label: 'Intermediário',
    dotClass: 'bg-amber-500',
    badgeClass: 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/50',
    barClass: 'from-amber-500 to-orange-400',
  };
  return {
    label: 'Básico',
    dotClass: 'bg-gray-400',
    badgeClass: 'bg-gray-50 dark:bg-gray-800/40 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700/50',
    barClass: 'from-gray-400 to-gray-300',
  };
}

// Category icon SVGs
const categoryIcons: Record<string, React.ReactNode> = {
  Languages: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Frontend: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Backend: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    </svg>
  ),
  Databases: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  'Cloud & DevOps': (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  Metodologias: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  ),
  QA: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

// Category gradient colors
const categoryGradients: Record<string, string> = {
  Languages: 'from-blue-500 to-sky-600',
  Frontend: 'from-blue-500 to-cyan-500',
  Backend: 'from-blue-500 to-blue-600',
  Databases: 'from-emerald-500 to-teal-600',
  'Cloud & DevOps': 'from-sky-500 to-blue-600',
  Metodologias: 'from-orange-500 to-amber-500',
  QA: 'from-rose-500 to-pink-600',
};

function SkillChip({ skill }: { skill: Skill }) {
  const config = getSkillConfig(skill.level);

  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -1 }}
      transition={{ duration: 0.15 }}
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-sm font-medium cursor-default ${config.badgeClass} transition-shadow hover:shadow-sm`}
    >
      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${config.dotClass}`} />
      <span>{skill.name}</span>
      {skill.yearsOfExperience && (
        <span className="text-xs opacity-60 tabular-nums">{skill.yearsOfExperience}a</span>
      )}
    </motion.div>
  );
}

function SkillCategory({ category, index }: { category: string; index: number }) {
  const categorySkills = getSkillsByCategory(category);
  if (categorySkills.length === 0) return null;

  const sortedSkills = [...categorySkills].sort((a, b) => b.level - a.level);
  const gradient = categoryGradients[category] ?? 'from-blue-500 to-sky-600';
  const icon = categoryIcons[category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: '-40px' }}
      className="group bg-white dark:bg-gray-900/80 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/60 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Category header */}
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-sm flex-shrink-0`}>
          {icon ?? <span className="text-xs font-bold">{category[0]}</span>}
        </div>
        <h3 className="font-bold text-sm text-gray-900 dark:text-white uppercase tracking-wider">
          {category}
        </h3>
        <span className="ml-auto text-xs text-gray-400 dark:text-gray-500 font-medium">
          {sortedSkills.length} skills
        </span>
      </div>

      {/* Skills chips */}
      <div className="flex flex-wrap gap-2">
        {sortedSkills.map((skill) => (
          <SkillChip key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <Section id="skills" title="Skills & Expertise" subtitle="Tecnologias e ferramentas que domino">
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs mb-8 p-4 rounded-xl bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800">
        <span className="text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide text-xs">Nível:</span>
        {[
          { dot: 'bg-emerald-500', label: 'Expert (90%+)' },
          { dot: 'bg-blue-500', label: 'Avançado (75%+)' },
          { dot: 'bg-amber-500', label: 'Intermediário (60%+)' },
        ].map(({ dot, label }) => (
          <span key={label} className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-400">
            <span className={`w-2 h-2 rounded-full ${dot}`} />
            {label}
          </span>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <SkillCategory key={category} category={category} index={index} />
        ))}
      </div>
    </Section>
  );
}
