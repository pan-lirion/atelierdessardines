'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, Link, useRouter } from '@/i18n/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves, ChevronDown } from 'lucide-react';

const locales = [
  { code: 'fr', flag: '🇫🇷', label: 'FR' },
  { code: 'en', flag: '🇬🇧', label: 'EN' },
  { code: 'de', flag: '🇩🇪', label: 'DE' },
  { code: 'nl', flag: '🇳🇱', label: 'NL' },
] as const;

export default function Header() {
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const navLinks = [
    { href: '/#logement', label: t('nav_logement') },
    { href: '/#equipements', label: t('nav_equipements') },
    { href: '/#localisation', label: t('nav_localisation') },
    { href: '/livret', label: t('nav_livret') },
  ];

  const currentLocale = locales.find((l) => l.code === locale) ?? locales[0];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Waves
            className={`w-6 h-6 transition-colors ${
              scrolled ? 'text-sea-600' : 'text-white'
            }`}
          />
          <span
            className={`font-display text-lg font-semibold transition-colors ${
              scrolled ? 'text-sea-900' : 'text-white'
            }`}
          >
            {t('logo')}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as '/'}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
              aria-label="Change language"
            >
              <span>{currentLocale.flag}</span>
              <span>{currentLocale.label}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-lg border border-sand-100 overflow-hidden min-w-[110px]"
                >
                  {locales.map(({ code, flag, label }) => (
                    <Link
                      key={code}
                      href={pathname as '/'}
                      locale={code}
                      onClick={() => setLangOpen(false)}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors hover:bg-sand-50 ${
                        code === locale
                          ? 'font-semibold text-sea-700 bg-sea-50'
                          : 'text-gray-700'
                      }`}
                    >
                      <span>{flag}</span>
                      <span>{label}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/#reservation"
            className="bg-sea-600 hover:bg-sea-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            {t('cta_reserver')}
          </Link>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <X className={scrolled ? 'text-gray-800' : 'text-white'} />
          ) : (
            <Menu className={scrolled ? 'text-gray-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-sand-100"
          >
            <div className="flex flex-col px-4 py-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href as '/'}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium py-2 border-b border-sand-100"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile language switcher */}
              <div className="flex gap-2 flex-wrap pt-1">
                {locales.map(({ code, flag, label }) => (
                  <Link
                    key={code}
                    href={pathname as '/'}
                    locale={code}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                      code === locale
                        ? 'bg-sea-600 text-white border-sea-600'
                        : 'border-sand-200 text-gray-600 hover:bg-sand-50'
                    }`}
                  >
                    <span>{flag}</span>
                    <span>{label}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/#reservation"
                onClick={() => setOpen(false)}
                className="bg-sea-600 text-white text-center font-medium px-5 py-3 rounded-full mt-2"
              >
                {t('cta_reserver')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
