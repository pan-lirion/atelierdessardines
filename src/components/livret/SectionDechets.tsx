import LivretSection, { InfoBox } from './LivretSection';
import { Trash2 } from 'lucide-react';

const tris = [
  {
    couleur: 'Jaune',
    emoji: '🟡',
    contenu: 'Emballages en plastique, cartons, boîtes métal, briques alimentaires',
  },
  {
    couleur: 'Vert',
    emoji: '🟢',
    contenu: 'Verre (bouteilles, bocaux) — à déposer dans les colonnes à verre',
  },
  {
    couleur: 'Gris / Noir',
    emoji: '⚫',
    contenu: 'Ordures ménagères résiduelles (restes alimentaires non compostables, etc.)',
  },
];

export default function SectionDechets() {
  return (
    <LivretSection id="dechets" icon={Trash2} title="Le tri des déchets" accent="green">
      <p>
        À Wimereux, le tri sélectif est obligatoire. Merci de respecter les
        consignes de tri locales. Les poubelles se trouvent{' '}
        <strong>[À compléter : emplacement dans l&apos;appartement / cour]</strong>.
      </p>

      <div className="space-y-3 pt-1">
        {tris.map(({ couleur, emoji, contenu }) => (
          <div
            key={couleur}
            className="flex items-start gap-3 bg-white rounded-xl p-3 shadow-xs"
          >
            <span className="text-2xl flex-shrink-0">{emoji}</span>
            <div>
              <p className="font-semibold text-sm">Poubelle {couleur}</p>
              <p className="text-gray-600 text-sm">{contenu}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-1">📅 Jours de collecte</p>
        <p>[À compléter : jours de passage des bennes dans la rue.]</p>
      </div>

      <InfoBox type="tip">
        Les colonnes à verre les plus proches se trouvent{' '}
        <strong>[À compléter : intersection / parking proche]</strong>.
      </InfoBox>
    </LivretSection>
  );
}
