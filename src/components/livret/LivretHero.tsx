import { getTranslations } from 'next-intl/server';
import { Waves } from 'lucide-react';

export default async function LivretHero() {
  const t = await getTranslations('LivretHero');

  return (
    <div className="bg-sea-900 text-white px-4 pt-10 pb-16 text-center">
      <div className="max-w-3xl mx-auto">
        <Waves className="w-10 h-10 text-sand-300 mx-auto mb-4" />
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">{t('title')}</h1>
        <p className="text-sea-300 text-lg">{t('subtitle')}</p>
        <p className="mt-4 text-white/60 text-sm max-w-md mx-auto">{t('desc')}</p>
      </div>
    </div>
  );
}
