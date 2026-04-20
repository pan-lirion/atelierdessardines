import LivretSection, { InfoBox } from './LivretSection';
import { UtensilsCrossed } from 'lucide-react';

const inventaire = [
  { cat: 'Cuisson', items: ['Four électrique', 'Micro-ondes', 'Plaques de cuisson', 'Bouilloire', 'Cafetière filtre / expresso'] },
  { cat: 'Ustensiles', items: ['Poêles (2 tailles)', 'Casseroles (2 tailles)', 'Passoire / égouttoir', 'Plat à four', 'Planche à découper', 'Couteaux de cuisine'] },
  { cat: 'Vaisselle', items: ['Assiettes plates & creuses (4)', 'Verres & mugs (4)', 'Couverts complets (4)', 'Saladier', 'Carafe'] },
  { cat: 'Petits équipements', items: ['Ouvre-boîte', 'Décapsuleur / tire-bouchon', 'Économe', 'Spatules & louches', 'Fouet'] },
  { cat: 'Réfrigération', items: ['Réfrigérateur avec freezer', 'Bacs à glaçons disponibles'] },
];

export default function SectionCuisine() {
  return (
    <LivretSection id="cuisine" icon={UtensilsCrossed} title="La cuisine — inventaire" accent="green">
      <p>
        La cuisine est entièrement équipée. Voici ce que vous trouverez à
        votre disposition :
      </p>

      <div className="space-y-4 pt-1">
        {inventaire.map(({ cat, items }) => (
          <div key={cat}>
            <p className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-1.5">
              {cat}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-600">
                  <span className="w-1.5 h-1.5 bg-sea-400 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <InfoBox type="tip">
        Si vous manquez de quelque chose (épices, huile d&apos;olive de base...), un
        supermarché et des épiceries se trouvent rue Carnot à 5 min à pied.
      </InfoBox>

      <p className="text-xs text-gray-400">
        * La liste peut varier légèrement selon les séjours. En cas d&apos;équipement
        manquant, contactez-nous.
      </p>
    </LivretSection>
  );
}
