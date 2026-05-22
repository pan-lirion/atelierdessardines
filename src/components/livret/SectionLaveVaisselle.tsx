import { getTranslations } from 'next-intl/server';
import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Droplets } from 'lucide-react';

export default async function SectionLaveVaisselle() {
  const t = await getTranslations('SectionLaveVaisselle');

  return (
    <LivretSection id="lave-vaisselle" icon={Droplets} title={t('title')} accent="sea">
      <p>{t.rich('intro', { b: (c) => <strong>{c}</strong> })}</p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('how_title')}</p>
        <Steps items={[t('step0'), t('step1'), t('step2'), t('step3'), t('step4')]} />
      </div>

      <InfoBox type="tip">{t('tip')}</InfoBox>
      <InfoBox type="warning">{t('warning')}</InfoBox>
    </LivretSection>
  );
}
