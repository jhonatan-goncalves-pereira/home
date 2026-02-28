'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { education } from '@/data/education';
import { Section } from '@/components/ui';

// Reusable content without the Section wrapper (for embedding in custom layouts)
export function EducationSectionContent() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      {education.map((edu, index) => (
        <motion.div
          key={edu.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: '-40px' }}
          whileHover={{ y: -2 }}
          className="group bg-white dark:bg-gray-900/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-800/60 shadow-sm hover:shadow-md transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-sky-100 dark:from-blue-900/40 dark:to-sky-900/40 flex items-center justify-center flex-shrink-0 border border-blue-200/50 dark:border-blue-700/30 shadow-sm">
              <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold text-gray-900 dark:text-white leading-tight mb-1">
                {edu.degree} em {edu.field}
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2">
                {edu.school}
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {edu.startYear} – {edu.endYear ?? 'Presente'}
                </span>
              </div>
              {edu.gpa && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  CR: <span className="font-semibold text-gray-700 dark:text-gray-300">{edu.gpa}</span>
                </p>
              )}
              {edu.honors && edu.honors.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {edu.honors.map((honor) => (
                    <span
                      key={honor}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/40"
                    >
                      <Award className="w-3 h-3" />
                      {honor}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Full section with Section wrapper (for standalone use)
export function EducationSection() {
  return (
    <Section id="education" title="Educação" subtitle="Formação acadêmica e qualificações">
      <EducationSectionContent />
    </Section>
  );
}
