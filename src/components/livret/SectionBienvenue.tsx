import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox } from './LivretSection';
import { Heart, Wifi, Phone, Mail } from 'lucide-react';

export default async function SectionBienvenue() {
  const t = await getTranslations('SectionBienvenue');

  const quickInfos = [
    { emoji: '🐾', key: 'info_animaux' },
    { emoji: '👶', key: 'info_bebe' },
    { emoji: '🌿', key: 'info_jardin' },
    { emoji: '☀️', key: 'info_terrasses' },
  ] as const;

  return (
    <LivretSection id="bienvenue" icon={Heart} title={t('title')} accent="sand">
      <p className="text-base font-medium text-gray-800">{t('p1')}</p>
      <p>{t('p2')}</p>
      <p>{t.rich('p3', { b: (c) => <strong>{c}</strong> })}</p>

      <div className="grid grid-cols-2 gap-2 text-sm">
        {quickInfos.map(({ emoji, key }) => (
          <div key={key} className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-xs">
            <span>{emoji}</span>
            <span className="text-gray-700 font-medium text-xs">{t(key)}</span>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-xs space-y-2">
        <p className="font-semibold text-gray-800 text-sm mb-3">{t('contact_label')}</p>
        <a
          href="tel:0781810869"
          className="flex items-center gap-3 text-sea-700 hover:text-sea-500 transition-colors"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">07.81.81.08.69</span>
        </a>
        <a
          href="mailto:contact@atelierdessardines.fr"
          className="flex items-center gap-3 text-sea-700 hover:text-sea-500 transition-colors"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span>contact@atelierdessardines.fr</span>
        </a>
      </div>

      <div className="bg-sea-600 text-white rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2 font-semibold mb-2">
          <Wifi className="w-4 h-4" />
          {t('wifi_title')}
        </div>
        <div className="bg-white/15 rounded-lg p-3">
          <p className="text-xs text-white/70 mb-1">{t('wifi_network_label')}</p>
          <p className="font-mono font-bold text-sm">{t('wifi_network')}</p>
        </div>
        <p className="text-sm text-white/80">{t('wifi_password')}</p>
      </div>

      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
