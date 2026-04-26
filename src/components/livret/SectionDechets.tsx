import LivretSection, { InfoBox } from './LivretSection';
import { Trash2 } from 'lucide-react';

const collecte = [
  {
    emoji: '⚫',
    bac: 'Bac gris — ordures ménagères',
    jour: 'Mardi',
    frequence: 'Toutes les semaines',
    contenu: 'Restes alimentaires, déchets non recyclables',
  },
  {
    emoji: '🟡',
    bac: 'Bac jaune — emballages & papiers',
    jour: 'Mercredi',
    frequence: 'Une semaine sur deux (en alternance avec le bac bleu)',
    contenu: 'Plastiques, cartons, boîtes métal, briques alimentaires',
  },
  {
    emoji: '🔵',
    bac: 'Bac bleu — papiers',
    jour: 'Mercredi',
    frequence: 'Une semaine sur deux (en alternance avec le bac jaune)',
    contenu: 'Journaux, magazines, courriers, papiers propres',
  },
];

export default function SectionDechets() {
  return (
    <LivretSection id="dechets" icon={Trash2} title="Le tri des déchets" accent="green">
      <p>
        À Wimereux, le tri sélectif est obligatoire. Les poubelles se trouvent
        à <strong>l&apos;entrée de la villa</strong> — vous ne pouvez pas les rater.
      </p>

      <div className="space-y-3 pt-1">
        {collecte.map(({ emoji, bac, jour, frequence, contenu }) => (
          <div key={bac} className="bg-white rounded-xl p-4 shadow-xs">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl flex-shrink-0">{emoji}</span>
              <div>
                <p className="font-semibold text-sm text-gray-800">{bac}</p>
                <p className="text-xs text-sea-600 font-medium">
                  📅 {jour} — {frequence}
                </p>
              </div>
            </div>
            <p className="text-gray-500 text-xs pl-10">{contenu}</p>
          </div>
        ))}
      </div>

      <InfoBox type="info">
        Bacs jaune et bleu collectés le <strong>mercredi en alternance</strong> —
        en cas de doute, regardez quel bac vos voisins ont sorti la veille.
      </InfoBox>

      <InfoBox type="tip">
        Colonnes à verre (bouteilles & bocaux) disponibles <strong>place Foch</strong>.
      </InfoBox>
    </LivretSection>
  );
}
