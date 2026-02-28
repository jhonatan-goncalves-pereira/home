'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Download, Code2 } from 'lucide-react';
import { profile } from '@/data/profile';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/#about', label: 'Sobre' },
  { href: '/#experience', label: 'Experiência' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#education', label: 'Educação' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/#contact', label: 'Contato' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-sky-600 flex items-center justify-center shadow-md group-hover:shadow-blue-500/40 transition-shadow">
              <Code2 className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-base text-gray-900 dark:text-white tracking-tight">
              {profile.name.split(' ')[0]}
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/60 transition-all duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="/print"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 transition-all duration-200 hover:-translate-y-px"
            >
              <Download className="w-3.5 h-3.5" />
              Currículo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isMenuOpen ? 'max-h-96 pb-4 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="pt-2 pb-1 border-t border-gray-200/60 dark:border-gray-800/60">
            <nav className="flex flex-col gap-1 mt-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800/60 rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-1 pt-2">
                <a
                  href="/print"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-sky-600 shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download Currículo
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
