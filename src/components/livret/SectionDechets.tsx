import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox } from './LivretSection';
import { Trash2 } from 'lucide-react';

export default async function SectionDechets() {
  const t = await getTranslations('SectionDechets');

  const bacs = [
    { emoji: '⚫', nameKey: 'bac0_name', jourKey: 'bac0_jour', freqKey: 'bac0_freq', contenuKey: 'bac0_contenu' },
    { emoji: '🟡', nameKey: 'bac1_name', jourKey: 'bac1_jour', freqKey: 'bac1_freq', contenuKey: 'bac1_contenu' },
    { emoji: '🔵', nameKey: 'bac2_name', jourKey: 'bac2_jour', freqKey: 'bac2_freq', contenuKey: 'bac2_contenu' },
  ] as const;

  return (
    <LivretSection id="dechets" icon={Trash2} title={t('title')} accent="green">
      <p>{t.rich('intro', { b: (c) => <strong>{c}</strong> })}</p>

      <div className="space-y-3 pt-1">
        {bacs.map(({ emoji, nameKey, jourKey, freqKey, contenuKey }) => (
          <div key={nameKey} className="bg-white rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl flex-shrink-0">{emoji}</span>
              <div>
                <p className="font-semibold text-sm text-gray-800">{t(nameKey)}</p>
                <p className="text-xs text-sea-600 font-medium">
                  📅 {t(jourKey)} — {t(freqKey)}
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-xs pl-10">{t(contenuKey)}</p>
          </div>
        ))}
      </div>

      <InfoBox type="info">{t.rich('info', { b: (c) => <strong>{c}</strong> })}</InfoBox>
      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
