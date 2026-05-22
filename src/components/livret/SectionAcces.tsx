import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox, Steps } from './LivretSection';
import { KeyRound } from 'lucide-react';

export default async function SectionAcces() {
  const t = await getTranslations('SectionAcces');

  return (
    <LivretSection id="acces" icon={KeyRound} title={t('title')} accent="sea">
      <div className="bg-white rounded-xl p-4 shadow-xs">
        <p className="text-xs text-gray-400 mb-1">{t('address_label')}</p>
        <p className="font-semibold text-gray-800">
          7 rue du Maréchal de Lattre de Tassigny
          <br />62930 Wimereux — Villa La Valkyrie
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-700">{t('checkin')}</p>
          <p className="text-xs text-green-600 mt-1">{t('checkin_label')}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-700">{t('checkout')}</p>
          <p className="text-xs text-amber-600 mt-1">{t('checkout_label')}</p>
        </div>
      </div>

      <InfoBox type="tip">
        {t.rich('flexible_tip', { b: (c) => <strong>{c}</strong> })}
      </InfoBox>

      <div className="bg-white rounded-xl p-4 shadow-xs space-y-2">
        <p className="font-semibold text-gray-800 mb-1">{t('keys_title')}</p>
        <p className="text-sm text-gray-600">
          {t.rich('keys_p1', { b: (c) => <strong>{c}</strong> })}
        </p>
        <p className="text-sm text-gray-600">{t('keys_p2')}</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('parking_title')}</p>
        <p>{t.rich('parking_p', { b: (c) => <strong>{c}</strong> })}</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('ev_title')}</p>
        <ul className="space-y-1 text-sm">
          {[t('ev1'), t('ev2'), t('ev3')].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-sea-400 rounded-full flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">{t('train_title')}</p>
        <Steps items={[t('train1'), t('train2'), t('train3')]} />
      </div>
    </LivretSection>
  );
}
