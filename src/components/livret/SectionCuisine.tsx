import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox } from './LivretSection';
import { UtensilsCrossed } from 'lucide-react';

export default async function SectionCuisine() {
  const t = await getTranslations('SectionCuisine');

  const categories = [
    { key: 'cat0', items: ['cat0_item0', 'cat0_item1', 'cat0_item2', 'cat0_item3'] },
    { key: 'cat1', items: ['cat1_item0', 'cat1_item1', 'cat1_item2'] },
    { key: 'cat2', items: ['cat2_item0', 'cat2_item1'] },
    { key: 'cat3', items: ['cat3_item0', 'cat3_item1', 'cat3_item2', 'cat3_item3', 'cat3_item4', 'cat3_item5', 'cat3_item6', 'cat3_item7'] },
    { key: 'cat4', items: ['cat4_item0', 'cat4_item1', 'cat4_item2', 'cat4_item3', 'cat4_item4'] },
  ] as const;

  return (
    <LivretSection id="cuisine" icon={UtensilsCrossed} title={t('title')} accent="green">
      <p>{t('intro')}</p>

      <div className="space-y-4 pt-1">
        {categories.map(({ key, items }) => (
          <div key={key}>
            <p className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-1.5">
              {t(key)}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {items.map((itemKey) => (
                <li key={itemKey} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-sea-400 rounded-full flex-shrink-0 mt-1.5" />
                  {t(itemKey)}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
