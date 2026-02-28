'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Github, Linkedin, Send } from 'lucide-react';
import { profile } from '@/data/profile';
import { Section } from '@/components/ui';
import { ContactForm } from './ContactForm';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: profile.phone
        ? `(${profile.phone.slice(0, 2)}) ${profile.phone.slice(2, 7)}-${profile.phone.slice(7)}`
        : undefined,
      href: profile.phone ? `tel:${profile.phone}` : undefined,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: profile.location,
      gradient: 'from-rose-500 to-pink-600',
    },
    {
      icon: Calendar,
      label: 'Disponibilidade',
      value: 'Aberto a oportunidades',
      gradient: 'from-amber-500 to-orange-500',
    },
  ];

  const socialLinks = [
    profile.github && {
      icon: Github,
      label: 'GitHub',
      href: profile.github,
      bg: 'bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600',
    },
    profile.linkedin && {
      icon: Linkedin,
      label: 'LinkedIn',
      href: profile.linkedin,
      bg: 'bg-[#0A66C2] hover:bg-[#0958a8]',
    },
  ].filter(Boolean) as Array<{ icon: React.ElementType; label: string; href: string; bg: string }>;

  return (
    <Section id="contact" title="Contato" subtitle="Vamos conversar sobre seu próximo projeto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="h-full bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl shadow-indigo-500/20 relative overflow-hidden">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <Send className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">Informações de Contato</h3>
              </div>

              <div className="space-y-4 mb-8">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  value && (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs text-white/60 font-medium uppercase tracking-wide">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-semibold text-white hover:text-white/80 transition-colors break-all"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm font-semibold text-white">{value}</p>
                        )}
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-xs text-white/60 font-medium uppercase tracking-wide mb-3">
                  Redes Sociais
                </p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, bg }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white ${bg} transition-all duration-200 hover:-translate-y-0.5`}
                    >
                      <Icon className="w-4 h-4" />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <div className="h-full bg-white dark:bg-gray-900/80 rounded-2xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-6">
              Envie uma Mensagem
            </h3>
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
