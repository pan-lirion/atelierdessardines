import LivretSection, { InfoBox } from './LivretSection';
import { MapPin } from 'lucide-react';

const categories = [
  {
    emoji: '🍽️',
    cat: 'Restaurants — nos coups de cœur',
    items: [
      { name: 'La Speranza ⭐ Coup de cœur', note: 'Poissons & fruits de mer, produits frais, ambiance cosy — 600m', bold: true },
      { name: "L'Annexe", note: 'Bistronomique, cuisine soignée, parfait pour un dîner un peu chic — 550m' },
      { name: 'La Bourriche Wimereusienne', note: 'Huîtres & produits de la mer, esprit bord de mer authentique — 550m' },
      { name: 'La Cahute (food truck)', note: 'Street food locale — 400m' },
      { name: 'Cascara', note: 'Café & restauration — 300m' },
      { name: 'La Maison Bohème', note: '400m' },
      { name: 'Le Loup de Mer', note: 'Cuisine de la mer, terrasse bord de mer — Audresselles, 8km' },
      { name: "L'Abri-Côtier (Audresselles)", note: 'Frites maison croustillantes, burgers fermier, portions généreuses — 7,4km' },
    ],
  },
  {
    emoji: '🛒',
    cat: 'Marchés',
    items: [
      { name: 'Mardi & Vendredi matin', note: 'Wimereux — Place Albert 1er (hors saison) ou rue Pierre-André Wimet (en saison)' },
      { name: 'Tous les jours', note: 'Boulogne-sur-Mer — Marché au poisson quai Gambetta' },
      { name: 'Mercredi & Samedi matin', note: 'Boulogne — Place Dalton' },
      { name: 'Dimanche matin', note: 'Boulogne — Place Vignon & quai Gambetta' },
    ],
  },
  {
    emoji: '🌊',
    cat: 'Activités nautiques & sportives',
    items: [
      { name: 'Wimkite School', note: 'Kitesurf & kitefoil — Bd Alfred Thiriez (Club Nautique) · 06 81 76 82 05' },
      { name: 'Wimereux Surf School', note: 'Surf, paddle, longue côte — 2 Bd Alfred Thiriez · 06 62 80 14 91' },
      { name: 'Char à voile boulonnais', note: 'Sensations sur la plage, porté par le vent — Côte d\'Opale' },
      { name: 'Tennis Club de Wimereux', note: 'Terrains intérieurs & extérieurs · 03 21 32 47 46' },
      { name: 'Golf de Wimereux', note: 'Parcours links depuis 1901, vue sur la mer — Av. F. Mitterrand · 03 21 32 43 20' },
    ],
  },
  {
    emoji: '🌿',
    cat: 'Balades nature',
    items: [
      { name: 'Dunes de la Slack à Wimereux', note: 'Dunes, forêt, plage, falaises — départ parking Pointe des Pies' },
      { name: 'Vallée du Denacre', note: 'Sous-bois et ruisseaux — Route de Rupembert, Wimille (5 min)' },
      { name: 'GR 120 — Sentier du Littoral', note: 'Falaises, dunes, panoramas — étape 4 incontournable' },
      { name: "Forêt domaniale d'Hardelot", note: 'Sentiers ombragés, pins maritimes — 22km (30 min)' },
    ],
  },
  {
    emoji: '👨‍👩‍👧',
    cat: 'Pour les enfants',
    items: [
      { name: 'Nausicaá', note: 'Centre national de la Mer, le plus grand d\'Europe — Boulogne' },
      { name: 'Hélicéa', note: 'Piscines, toboggans, patinoire — Boulogne' },
      { name: "Acro'Liane", note: 'Parcours dans les arbres, tyroliennes — Boulogne' },
      { name: 'Totemus', note: 'Chasse au trésor sur smartphone — téléchargez l\'appli' },
    ],
  },
  {
    emoji: '🏰',
    cat: 'Patrimoine',
    items: [
      { name: 'Château comtal & Musée de Boulogne', note: 'Remparts médiévaux, vue panoramique' },
      { name: 'Basilique Notre-Dame de Boulogne', note: 'Dôme et crypte fascinante' },
      { name: 'Colonne de la Grande Armée', note: 'Monument napoléonien — Mont Lambert' },
      { name: 'Fort d\'Alprech', note: 'Panorama exceptionnel sur la mer' },
    ],
  },
  {
    emoji: '🚂',
    cat: 'Depuis Wimereux en transports',
    items: [
      { name: 'Boulogne-sur-Mer', note: '10 min en train · 20 min à vélo' },
      { name: 'Cap Gris-Nez / Blanc-Nez', note: '35-45 min en bus · 1h30 à vélo' },
      { name: 'Calais', note: '25-30 min en train' },
      { name: 'Ambleteuse', note: '15 min en bus · 25 min à vélo' },
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
              {items.map(({ name, note, bold }) => (
                <div key={name} className="bg-white rounded-xl px-4 py-3 shadow-xs">
                  <p className={`text-sm text-gray-800 ${bold ? 'font-semibold' : 'font-medium'}`}>{name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="tip">
        En été, Wimereux s&apos;anime beaucoup le week-end. Pour la plage au
        calme, préférez les sorties en semaine ou tôt le matin.
      </InfoBox>
    </LivretSection>
  );
}
