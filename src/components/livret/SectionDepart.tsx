import { getTranslations } from 'next-intl/server';
import LivretSection, { Checklist, InfoBox } from './LivretSection';
import { LogOut, Star } from 'lucide-react';

export default async function SectionDepart() {
  const t = await getTranslations('SectionDepart');

  const checklistKeys = [
    'checklist0', 'checklist1', 'checklist2', 'checklist3',
    'checklist4', 'checklist5', 'checklist6', 'checklist7',
    'checklist8', 'checklist9', 'checklist10', 'checklist11',
  ] as const;

  return (
    <LivretSection id="depart" icon={LogOut} title={t('title')} accent="sand">
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <p className="font-bold text-amber-800 text-base">{t('checkout_label')}</p>
        <p className="text-sm text-amber-700 mt-0.5">{t('checkout_note')}</p>
      </div>

      <Checklist items={checklistKeys.map((k) => t(k))} />

      <InfoBox type="info">
        {t.rich('late_info', { b: (c) => <strong>{c}</strong> })}
      </InfoBox>

      <div className="bg-sea-50 border border-sea-200 rounded-xl p-4 mt-2">
        <div className="flex items-center gap-2 font-semibold text-sea-800 mb-2">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          {t('review_title')}
        </div>
        <p className="text-sm text-sea-700 leading-relaxed">
          {t.rich('review_p1', { b: (c) => <strong>{c}</strong> })}
        </p>
        <p className="text-sm text-sea-700 mt-2">{t('review_p2')}</p>
      </div>

      <p className="pt-2 text-base font-medium text-gray-800 text-center whitespace-pre-line">
        {t('goodbye')}{'\n'}
        <span className="text-sm font-normal text-gray-500">{t('goodbye_sign')}</span>
      </p>
    </LivretSection>
  );
}
