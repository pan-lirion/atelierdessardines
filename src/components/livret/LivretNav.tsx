'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';

const sectionIds = [
  { id: 'bienvenue', key: 'bienvenue' },
  { id: 'acces', key: 'acces' },
  { id: 'regles', key: 'regles' },
  { id: 'canape-lit', key: 'canape' },
  { id: 'alcove', key: 'alcove' },
  { id: 'cuisson', key: 'cuisson' },
  { id: 'lave-vaisselle', key: 'vaisselle' },
  { id: 'machine-laver', key: 'linge' },
  { id: 'seche-serviettes', key: 'serviettes' },
  { id: 'cuisine', key: 'cuisine' },
  { id: 'dechets', key: 'dechets' },
  { id: 'depart', key: 'depart' },
  { id: 'contacts', key: 'contacts' },
  { id: 'alentours', key: 'alentours' },
] as const;

export default function LivretNav() {
  const t = useTranslations('LivretNav');
  const [active, setActive] = useState('bienvenue');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btn = navRef.current?.querySelector(`[data-id="${active}"]`) as HTMLElement;
    btn?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [active]);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sand-100 shadow-sm">
      <div
        ref={navRef}
        className="flex gap-1 overflow-x-auto scrollbar-none px-4 py-3 max-w-3xl mx-auto"
        style={{ scrollbarWidth: 'none' }}
      >
        {sectionIds.map(({ id, key }) => (
          <a
            key={id}
            href={`#${id}`}
            data-id={id}
            className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              active === id
                ? 'bg-sea-600 text-white shadow-sm'
                : 'text-gray-500 hover:bg-sand-100 hover:text-gray-700'
            }`}
          >
            {t(key)}
          </a>
        ))}
      </div>
    </nav>
  );
}
