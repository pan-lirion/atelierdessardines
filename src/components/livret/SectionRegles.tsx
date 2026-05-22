import { getTranslations } from 'next-intl/server';
import LivretSection from './LivretSection';
import { ShieldCheck } from 'lucide-react';

const ruleEmojis = ['🚭', '🔇', '🚪', '👥', '⚖️', '♻️', '🐾', '🛋️', '🚭', '🪑'];

export default async function SectionRegles() {
  const t = await getTranslations('SectionRegles');

  const regles = ruleEmojis.map((emoji, i) => ({
    emoji,
    texte: t(`rule${i}` as `rule${0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9}`),
  }));

  return (
    <LivretSection id="regles" icon={ShieldCheck} title={t('title')} accent="sea">
      <p>{t('intro')}</p>
      <div className="space-y-2">
        {regles.map(({ emoji, texte }) => (
          <div key={texte} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-xs">
            <span className="text-xl flex-shrink-0">{emoji}</span>
            <p className="text-sm text-gray-700">{texte}</p>
          </div>
        ))}
      </div>
    </LivretSection>
  );
}
