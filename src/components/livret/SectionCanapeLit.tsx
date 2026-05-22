import { getTranslations } from 'next-intl/server';
import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Sofa } from 'lucide-react';

export default async function SectionCanapeLit() {
  const t = await getTranslations('SectionCanapeLit');

  return (
    <LivretSection id="canape-lit" icon={Sofa} title={t('title')} accent="sand">
      <p>{t('intro')}</p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('find_title')}</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-sand-400 rounded-full flex-shrink-0 mt-1.5" />
            <span>{t.rich('couette', { b: (c) => <strong>{c}</strong> })}</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-sand-400 rounded-full flex-shrink-0 mt-1.5" />
            <span>{t.rich('oreillers', { b: (c) => <strong>{c}</strong> })}</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('unfold_title')}</p>
        <Steps items={[t('unfold0'), t('unfold1'), t('unfold2'), t('unfold3')]} />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('fold_title')}</p>
        <Steps items={[t('fold0'), t('fold1'), t('fold2'), t('fold3')]} />
      </div>

      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
