'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Waves } from 'lucide-react';

const navLinks = [
  { href: '/#logement', label: 'Le logement' },
  { href: '/#equipements', label: 'Équipements' },
  { href: '/#localisation', label: 'Localisation' },
  { href: '/livret', label: 'Livret d\'accueil' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            L&apos;Atelier des Sardines
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:opacity-70 ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            className="bg-sea-600 hover:bg-sea-700 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Réserver
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
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium py-2 border-b border-sand-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#reservation"
                onClick={() => setOpen(false)}
                className="bg-sea-600 text-white text-center font-medium px-5 py-3 rounded-full mt-2"
              >
                Réserver
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
