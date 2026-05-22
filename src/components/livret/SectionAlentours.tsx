import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox } from './LivretSection';
import { MapPin } from 'lucide-react';

const categories = [
  {
    key: 'cat0',
    items: [
      { name: 'La Speranza ⭐ Coup de cœur', note: 'Poissons & fruits de mer, produits frais — 600m', bold: true },
      { name: "L'Annexe", note: 'Bistronomique, cuisine soignée — 550m' },
      { name: 'La Bourriche Wimereusienne', note: 'Huîtres & produits de la mer — 550m' },
      { name: 'La Cahute (food truck)', note: 'Street food locale — 400m' },
      { name: 'Cascara', note: 'Café & restauration — 300m' },
      { name: 'La Maison Bohème', note: '400m' },
      { name: 'Le Loup de Mer', note: 'Cuisine de la mer, terrasse — Audresselles, 8km' },
      { name: "L'Abri-Côtier", note: 'Frites maison, burgers fermier — 7,4km' },
    ],
  },
  {
    key: 'cat1',
    items: [
      { name: 'Mardi & Vendredi matin', note: 'Wimereux — Place Albert 1er (hors saison)' },
      { name: 'Tous les jours', note: 'Boulogne-sur-Mer — Marché au poisson quai Gambetta' },
      { name: 'Mercredi & Samedi matin', note: 'Boulogne — Place Dalton' },
      { name: 'Dimanche matin', note: 'Boulogne — Place Vignon & quai Gambetta' },
    ],
  },
  {
    key: 'cat2',
    items: [
      { name: 'Wimkite School', note: 'Kitesurf & kitefoil — 06 81 76 82 05' },
      { name: 'Wimereux Surf School', note: 'Surf, paddle, longue côte — 06 62 80 14 91' },
      { name: 'Char à voile boulonnais', note: "Sensations sur la plage — Côte d'Opale" },
      { name: 'Tennis Club de Wimereux', note: '03 21 32 47 46' },
      { name: 'Golf de Wimereux', note: 'Parcours links depuis 1901, vue mer — 03 21 32 43 20' },
    ],
  },
  {
    key: 'cat3',
    items: [
      { name: 'Dunes de la Slack', note: 'Dunes, forêt, plage, falaises — parking Pointe des Pies' },
      { name: 'Vallée du Denacre', note: 'Sous-bois et ruisseaux — Wimille (5 min)' },
      { name: 'GR 120 — Sentier du Littoral', note: 'Falaises, dunes, panoramas' },
      { name: "Forêt domaniale d'Hardelot", note: 'Sentiers ombragés, pins maritimes — 22km' },
    ],
  },
  {
    key: 'cat4',
    items: [
      { name: 'Nausicaá', note: "Centre national de la Mer, le plus grand d'Europe — Boulogne" },
      { name: 'Hélicéa', note: 'Piscines, toboggans, patinoire — Boulogne' },
      { name: "Acro'Liane", note: 'Parcours dans les arbres, tyroliennes — Boulogne' },
      { name: 'Totemus', note: "Chasse au trésor sur smartphone — téléchargez l'appli" },
    ],
  },
  {
    key: 'cat5',
    items: [
      { name: 'Château comtal & Musée de Boulogne', note: 'Remparts médiévaux, vue panoramique' },
      { name: 'Basilique Notre-Dame de Boulogne', note: 'Dôme et crypte fascinante' },
      { name: 'Colonne de la Grande Armée', note: 'Monument napoléonien — Mont Lambert' },
      { name: "Fort d'Alprech", note: 'Panorama exceptionnel sur la mer' },
    ],
  },
  {
    key: 'cat6',
    items: [
      { name: 'Boulogne-sur-Mer', note: '10 min en train · 20 min à vélo' },
      { name: 'Cap Gris-Nez / Blanc-Nez', note: '35-45 min en bus · 1h30 à vélo' },
      { name: 'Calais', note: '25-30 min en train' },
      { name: 'Ambleteuse', note: '15 min en bus · 25 min à vélo' },
    ],
  },
] as const;

export default async function SectionAlentours() {
  const t = await getTranslations('SectionAlentours');

  return (
    <LivretSection id="alentours" icon={MapPin} title={t('title')} accent="sand">
      <p>{t('intro')}</p>

      <div className="space-y-6 pt-1">
        {categories.map(({ key, items }) => (
          <div key={key}>
            <p className="font-semibold text-gray-800 mb-2">{t(key)}</p>
            <div className="space-y-2">
              {items.map((item) => (
                <div key={item.name} className="bg-white rounded-xl px-4 py-3 shadow-xs">
                  <p className={`text-sm text-gray-800 ${'bold' in item && item.bold ? 'font-semibold' : 'font-medium'}`}>{item.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="tip">{t('tip')}</InfoBox>
    </LivretSection>
  );
}
