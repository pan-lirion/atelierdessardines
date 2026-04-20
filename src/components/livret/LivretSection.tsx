import { ReactNode, ElementType } from 'react';
import clsx from 'clsx';

interface LivretSectionProps {
  id: string;
  icon: ElementType;
  title: string;
  children: ReactNode;
  accent?: 'sea' | 'sand' | 'green' | 'orange' | 'red';
}

const accentMap = {
  sea: 'bg-sea-50 border-sea-200',
  sand: 'bg-sand-50 border-sand-200',
  green: 'bg-green-50 border-green-200',
  orange: 'bg-orange-50 border-orange-200',
  red: 'bg-red-50 border-red-200',
};

const iconAccentMap = {
  sea: 'bg-sea-100 text-sea-600',
  sand: 'bg-sand-100 text-sand-600',
  green: 'bg-green-100 text-green-600',
  orange: 'bg-orange-100 text-orange-600',
  red: 'bg-red-100 text-red-600',
};

export default function LivretSection({
  id,
  icon: Icon,
  title,
  children,
  accent = 'sea',
}: LivretSectionProps) {
  return (
    <section
      id={id}
      className={clsx(
        'rounded-2xl border p-6 scroll-mt-20',
        accentMap[accent]
      )}
    >
      <div className="flex items-center gap-4 mb-5">
        <div className={clsx('w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0', iconAccentMap[accent])}>
          <Icon className="w-5 h-5" />
        </div>
        <h2 className="font-display text-xl font-bold text-gray-900">{title}</h2>
      </div>
      <div className="space-y-3 text-gray-700 text-sm leading-relaxed">{children}</div>
    </section>
  );
}

// Sous-composants utilitaires
export function InfoBox({ children, type = 'info' }: { children: ReactNode; type?: 'info' | 'tip' | 'warning' }) {
  const styles = {
    info: 'bg-sea-50 border-sea-200 text-sea-800',
    tip: 'bg-green-50 border-green-200 text-green-800',
    warning: 'bg-amber-50 border-amber-300 text-amber-800',
  };
  const emojis = { info: 'ℹ️', tip: '💡', warning: '⚠️' };
  return (
    <div className={clsx('border rounded-xl px-4 py-3 text-sm', styles[type])}>
      <span className="mr-2">{emojis[type]}</span>
      {children}
    </div>
  );
}

export function Steps({ items }: { items: string[] }) {
  return (
    <ol className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-6 h-6 bg-sea-600 text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
            {i + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="flex-shrink-0 w-5 h-5 border-2 border-gray-300 rounded mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
