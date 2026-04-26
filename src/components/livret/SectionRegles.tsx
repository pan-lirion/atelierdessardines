import LivretSection from './LivretSection';
import { ShieldCheck } from 'lucide-react';

const regles = [
  { emoji: '🚭', texte: 'Non-fumeur dans tout le logement' },
  { emoji: '🔇', texte: 'Respecter les voisins et le calme, en particulier après 22h' },
  { emoji: '🚪', texte: 'Ne pas claquer la porte en entrant ou sortant' },
  { emoji: '👥', texte: 'Pas d\'invités non prévus — la capacité est de 4 personnes maximum' },
  { emoji: '⚖️', texte: 'Aucune activité illégale dans le logement' },
  { emoji: '♻️', texte: 'Pensez au tri sélectif (voir section Déchets)' },
  { emoji: '🐾', texte: 'Animaux bienvenus ! Le jardin clôturé est à leur disposition — pensez à ramasser les déjections dans la pelouse' },
  { emoji: '🛋️', texte: 'Le canapé et le lit ne sont pas réservés aux animaux' },
  { emoji: '🚭', texte: 'Non-fumeur dans le logement — fumez côté jardin en ramassant vos mégots' },
  { emoji: '🪑', texte: 'Ranger le mobilier extérieur après utilisation' },
];

export default function SectionRegles() {
  return (
    <LivretSection id="regles" icon={ShieldCheck} title="Règles de la maison" accent="sea">
      <p>
        Quelques règles simples pour que le séjour se passe bien pour vous,
        vos voisins et les prochains voyageurs.
      </p>
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
