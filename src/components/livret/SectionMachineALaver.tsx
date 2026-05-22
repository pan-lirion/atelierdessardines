import { getTranslations } from 'next-intl/server';
import LivretSection, { Steps, InfoBox } from './LivretSection';
import { WashingMachine } from 'lucide-react';

export default async function SectionMachineALaver() {
  const t = await getTranslations('SectionMachineALaver');

  return (
    <LivretSection id="machine-laver" icon={WashingMachine} title={t('title')} accent="sea">
      <p>{t.rich('intro', { b: (c) => <strong>{c}</strong> })}</p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('how_title')}</p>
        <Steps items={[t('step0'), t('step1'), t('step2'), t('step3'), t('step4')]} />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('etendage_title')}</p>
        <p>{t('etendage_p')}</p>
      </div>

      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
