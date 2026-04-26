import LivretSection, { InfoBox } from './LivretSection';
import { UtensilsCrossed } from 'lucide-react';

const inventaire = [
  { cat: 'Cuisson', items: ['Four combiné / Micro-ondes', 'Plaques de cuisson', 'Plancha électrique', 'Raclette à la bougie (saison)'] },
  { cat: 'Boissons & petit-déjeuner', items: ['Machine à café / Bouilloire', 'Dosettes café, thé, tisanes & sucre fournies', 'Cafetière'] },
  { cat: 'Réfrigération', items: ['Réfrigérateur avec freezer', 'Pain de glace disponible dans le freezer (pour pique-niques !)'] },
  { cat: 'Ustensiles', items: ['Poêles (2 tailles)', 'Casseroles (2 tailles)', 'Passoire', 'Plat à four', 'Planche à découper', 'Couteaux de cuisine', 'Spatules, louches, fouet'] },
  { cat: 'Vaisselle', items: ['Assiettes plates & creuses', 'Verres & mugs', 'Couverts complets', 'Saladier', 'Ouvre-boîte, décapsuleur, tire-bouchon'] },
];

export default function SectionCuisine() {
  return (
    <LivretSection id="cuisine" icon={UtensilsCrossed} title="La cuisine — inventaire" accent="green">
      <p>
        La cuisine est entièrement équipée. Vous trouverez également des
        dosettes de café, thé et tisanes pour vos pauses détente.
      </p>

      <div className="space-y-4 pt-1">
        {inventaire.map(({ cat, items }) => (
          <div key={cat}>
            <p className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-1.5">
              {cat}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                  <span className="w-1.5 h-1.5 bg-sea-400 rounded-full flex-shrink-0 mt-1.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <InfoBox type="tip">
        Un supermarché et des épiceries se trouvent rue Carnot à 5 min à pied.
        Le marché a lieu le mardi et vendredi matin place Albert 1er (hors saison).
      </InfoBox>
    </LivretSection>
  );
}
