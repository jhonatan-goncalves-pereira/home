'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { certifications } from '@/data/education';
import { Section } from '@/components/ui';

export function CertificationsSection() {
  const formatDate = (date: string) => {
    return new Date(date + '-01').toLocaleDateString('pt-BR', {
      month: 'short',
      year: 'numeric',
    });
  };

  return (
    <Section title="Certificações" subtitle="Certificados e credenciais profissionais">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-40px' }}
            whileHover={{ y: -2 }}
            className="group bg-white dark:bg-gray-900/80 rounded-2xl p-5 border border-gray-200 dark:border-gray-800 hover:border-sky-200 dark:hover:border-sky-800/60 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900/40 dark:to-blue-900/40 flex items-center justify-center flex-shrink-0 border border-sky-200/50 dark:border-sky-700/30">
                <Award className="w-5 h-5 text-sky-600 dark:text-sky-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-tight mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                  {cert.issuer}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-4">
              <Calendar className="w-3.5 h-3.5" />
              <span>Emitido em {formatDate(cert.date)}</span>
              {cert.expirationDate && (
                <span className="text-gray-400 dark:text-gray-500">
                  · Expira {formatDate(cert.expirationDate)}
                </span>
              )}
            </div>

            <div className="mt-auto">
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  Ver Credencial
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                cert.credentialId && (
                  <span className="text-xs text-gray-400 dark:text-gray-500 font-mono">
                    ID: {cert.credentialId}
                  </span>
                )
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
