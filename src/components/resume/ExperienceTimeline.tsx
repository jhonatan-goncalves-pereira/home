'use client';

import { motion } from 'framer-motion';
import { experience } from '@/data/experience';
import { ExperienceCard } from './ExperienceCard';
import { Section } from '@/components/ui';

export function ExperienceTimeline() {
  return (
    <Section id="experience" title="Experiência" subtitle="Minha jornada profissional">
      <div className="relative">
        {/* Timeline line — gradient */}
        <div className="absolute left-6 top-4 bottom-4 w-px bg-gradient-to-b from-indigo-500 via-purple-500/50 to-transparent hidden md:block" />

        <div className="space-y-6">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: '-50px' }}
              className="relative md:pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-3.5 top-6 hidden md:flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white dark:border-gray-950 shadow-md shadow-indigo-500/30" />
                {exp.current && (
                  <div className="absolute w-5 h-5 rounded-full bg-indigo-500/30 animate-ping" />
                )}
              </div>

              <ExperienceCard experience={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
