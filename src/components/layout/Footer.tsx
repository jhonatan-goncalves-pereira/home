import Link from 'next/link';
import { Github, Linkedin, Mail, Heart, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';

const socialLinks = [
  { href: profile.github, icon: Github, label: 'GitHub' },
  { href: profile.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${profile.email}`, icon: Mail, label: 'Email' },
].filter((l) => l.href);

const footerLinks = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/#contact', label: 'Contato' },
  { href: '/print', label: 'Versão Impressa' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center shadow-md">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-gray-900 dark:text-white">
                {profile.name.split(' ')[0]}
                <span className="text-indigo-600 dark:text-indigo-400">.</span>
              </span>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 leading-relaxed">
              {profile.title}
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs">
              {profile.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              Links Rápidos
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
              Conecte-se
            </h3>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800/60 transition-all duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800/60">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-gray-400 dark:text-gray-500 text-xs">
              © {currentYear} {profile.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs flex items-center gap-1.5">
              Feito com <Heart className="w-3.5 h-3.5 text-rose-500" /> usando Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
