import { getTranslations } from 'next-intl/server';
import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Flame } from 'lucide-react';

export default async function SectionCuisson() {
  const t = await getTranslations('SectionCuisson');

  return (
    <LivretSection id="cuisson" icon={Flame} title={t('title')} accent="orange">
      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('micro_title')}</p>
        <p className="mb-2">{t.rich('micro_manual', { b: (c) => <strong>{c}</strong> })}</p>
        <Steps items={[t('micro0'), t('micro1'), t('micro2')]} />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('plaques_title')}</p>
        <p>{t.rich('plaques_p', { b: (c) => <strong>{c}</strong> })}</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">
          {t('raclette_title')}{' '}
          <span className="text-xs font-normal text-gray-400">{t('raclette_season')}</span>
        </p>
        <p>{t('raclette_p')}</p>
        <ul className="mt-2 space-y-1 text-sm">
          {[t('raclette1'), t('raclette2')].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">
          {t('plancha_title')}{' '}
          <span className="text-xs font-normal text-gray-400">{t('plancha_season')}</span>
        </p>
        <p>{t('plancha_p')}</p>
      </div>

      <InfoBox type="warning">{t('warning')}</InfoBox>
    </LivretSection>
  );
}
