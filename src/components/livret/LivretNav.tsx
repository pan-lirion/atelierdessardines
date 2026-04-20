'use client';

import { useState, useEffect, useRef } from 'react';

const sections = [
  { id: 'bienvenue', label: 'Bienvenue' },
  { id: 'acces', label: 'Accès' },
  { id: 'canape-lit', label: 'Canapé-lit' },
  { id: 'alcove', label: 'Alcôve' },
  { id: 'cuisson', label: 'Four' },
  { id: 'lave-vaisselle', label: 'Vaisselle' },
  { id: 'machine-laver', label: 'Linge' },
  { id: 'seche-serviettes', label: 'Serviettes' },
  { id: 'cuisine', label: 'Cuisine' },
  { id: 'dechets', label: 'Déchets' },
  { id: 'depart', label: 'Départ' },
  { id: 'contacts', label: 'Contacts' },
  { id: 'alentours', label: 'Alentours' },
];

export default function LivretNav() {
  const [active, setActive] = useState('bienvenue');
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Auto-scroll active tab into view
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
        {sections.map(({ id, label }) => (
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
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
