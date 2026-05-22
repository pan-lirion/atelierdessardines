import { getTranslations } from 'next-intl/server';
import LivretSection from './LivretSection';
import { BedDouble } from 'lucide-react';

export default async function SectionAlcove() {
  const t = await getTranslations('SectionAlcove');

  return (
    <LivretSection id="alcove" icon={BedDouble} title={t('title')} accent="sea">
      <p>{t('intro')}</p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('literie_title')}</p>
        <p>{t.rich('literie_p', { b: (c) => <strong>{c}</strong> })}</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('eclairage_title')}</p>
        <p>{t.rich('eclairage_p', { b: (c) => <strong>{c}</strong> })}</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('rangements_title')}</p>
        <p>{t.rich('rangements_p', { b: (c) => <strong>{c}</strong> })}</p>
      </div>
    </LivretSection>
  );
}
