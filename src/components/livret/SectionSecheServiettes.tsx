import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox } from './LivretSection';
import { Thermometer } from 'lucide-react';

export default async function SectionSecheServiettes() {
  const t = await getTranslations('SectionSecheServiettes');

  return (
    <LivretSection id="seche-serviettes" icon={Thermometer} title={t('title')} accent="orange">
      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('sdb_title')}</p>
        <ul className="space-y-1 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
            <span>{t.rich('sdb_item1', { b: (c) => <strong>{c}</strong> })}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
            <span>{t.rich('sdb_item2', { b: (c) => <strong>{c}</strong> })}</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('seche_title')}</p>
        <p>{t('seche_p')}</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('fer_title')}</p>
        <p>{t.rich('fer_p', { b: (c) => <strong>{c}</strong> })}</p>
      </div>

      <InfoBox type="warning">{t('warning')}</InfoBox>
      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
