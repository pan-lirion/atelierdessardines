import LivretSection, { InfoBox } from './LivretSection';
import { MapPin } from 'lucide-react';

const categories = [
  {
    emoji: '🥐',
    cat: 'Boulangeries & cafés',
    items: [
      { name: '[Boulangerie locale]', note: 'Ouverture tôt, viennoiseries fraîches · [rue à compléter]' },
      { name: '[Café du centre]', note: 'Terrasse face à la mer, idéal pour le brunch · [rue à compléter]' },
    ],
  },
  {
    emoji: '🍽️',
    cat: 'Restaurants',
    items: [
      { name: 'Atlantic Bar', note: 'Fruits de mer & poissons sur le front de mer · incontournable' },
      { name: 'L\'Épuisette', note: 'Cuisine locale, ambiance bistrot · vue sur la Manche' },
      { name: '[Restaurant à compléter]', note: '[Cuisine, ambiance, adresse]' },
    ],
  },
  {
    emoji: '🛒',
    cat: 'Commerces & courses',
    items: [
      { name: 'Rue Carnot', note: 'La rue commerçante principale · épiceries, pharmacie, boulangeries' },
      { name: 'Supermarché [À compléter]', note: 'Ouvert 7j/7 · [distance]' },
    ],
  },
  {
    emoji: '🌊',
    cat: 'Activités & sorties',
    items: [
      { name: 'La plage de Wimereux', note: 'Plage de galets et de sable · baignade, kite, promenades' },
      { name: 'La digue', note: 'Promenade le long du front de mer, couchers de soleil magnifiques' },
      { name: 'Cap Gris-Nez / Cap Blanc-Nez', note: 'À 20-30 min en voiture · randonnées et paysages époustouflants' },
      { name: 'Boulogne-sur-Mer', note: 'À 10 min en train · Nausicaá, vieille ville fortifiée, marché' },
    ],
  },
  {
    emoji: '🚂',
    cat: 'Transports depuis Wimereux',
    items: [
      { name: 'Gare de Wimereux', note: '5 min à pied · liaisons vers Boulogne (10 min) et Calais (30 min)' },
      { name: 'Location de vélos', note: '[À compléter si disponible à Wimereux]' },
    ],
  },
];

export default function SectionAlentours() {
  return (
    <LivretSection id="alentours" icon={MapPin} title="Aux alentours — nos coups de cœur" accent="sand">
      <p>
        Voici nos recommandations pour profiter au maximum de Wimereux et de
        la Côte d&apos;Opale. Bonne exploration !
      </p>

      <div className="space-y-6 pt-1">
        {categories.map(({ emoji, cat, items }) => (
          <div key={cat}>
            <p className="font-semibold text-gray-800 mb-2">
              {emoji} {cat}
            </p>
            <div className="space-y-2">
              {items.map(({ name, note }) => (
                <div key={name} className="bg-white rounded-xl px-4 py-3 shadow-xs">
                  <p className="font-medium text-sm text-gray-800">{name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="tip">
        En été, Wimereux s&apos;anime beaucoup le week-end. Pour profiter de la
        plage au calme, préférez les sorties en semaine ou tôt le matin.
      </InfoBox>

      <p className="text-xs text-gray-400 pt-2">
        * Ces recommandations reflètent nos coups de cœur personnels. Les
        horaires et disponibilités peuvent varier selon la saison.
      </p>
    </LivretSection>
  );
}
