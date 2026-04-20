import FadeIn from '@/components/shared/FadeIn';
import { MapPin, Waves, ShoppingBag, Train, Coffee, Church, Utensils } from 'lucide-react';

const pointsInteret = [
  {
    icon: Waves,
    label: 'La digue & la plage',
    distance: '5 min à pied',
    color: 'bg-sea-100 text-sea-600',
  },
  {
    icon: ShoppingBag,
    label: 'Rue Carnot (commerces)',
    distance: '5 min à pied',
    color: 'bg-sand-100 text-sand-600',
  },
  {
    icon: Train,
    label: 'Gare de Wimereux',
    distance: '5 min à pied',
    color: 'bg-sea-100 text-sea-600',
  },
  {
    icon: Coffee,
    label: 'Cafés & boulangeries',
    distance: '5 min à pied',
    color: 'bg-sand-100 text-sand-600',
  },
  {
    icon: Utensils,
    label: 'Restaurants du front de mer',
    distance: '7 min à pied',
    color: 'bg-sea-100 text-sea-600',
  },
  {
    icon: Church,
    label: 'Centre-ville de Wimereux',
    distance: '5 min à pied',
    color: 'bg-sand-100 text-sand-600',
  },
];

export default function Localisation() {
  return (
    <section id="localisation" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-3">
            Localisation
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-sea-900 mb-4">
            Au cœur de Wimereux,
            <br />
            <span className="text-sand-500">à deux pas de tout</span>
          </h2>
          <div className="w-16 h-0.5 bg-sand-400 mx-auto" />
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Carte */}
          <FadeIn direction="right" className="lg:col-span-3">
            <div className="rounded-3xl overflow-hidden shadow-md aspect-[4/3]">
              <iframe
                title="Localisation L'Atelier des Sardines"
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.5950%2C50.7600%2C1.6150%2C50.7720&layer=mapnik&marker=50.7660%2C1.6050"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
            <p className="text-center text-sm text-gray-400 mt-3 flex items-center justify-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              7 rue du Maréchal de Lattre de Tassigny, 62930 Wimereux
            </p>
          </FadeIn>

          {/* Points d'intérêt */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-2">
            <div className="space-y-3">
              <h3 className="font-semibold text-sea-900 text-lg mb-5">
                Tout à portée de semelles
              </h3>
              {pointsInteret.map(({ icon: Icon, label, distance, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-xs"
                >
                  <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-800 text-sm">{label}</p>
                  </div>
                  <span className="text-xs font-semibold text-sea-600 bg-sea-50 rounded-full px-2.5 py-1 flex-shrink-0">
                    {distance}
                  </span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
