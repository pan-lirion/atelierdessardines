import FadeIn from '@/components/shared/FadeIn';
import {
  UtensilsCrossed,
  WashingMachine,
  Wifi,
  Thermometer,
  Laptop,
  Coffee,
  Droplets,
  Dog,
  Baby,
  Trees,
  Sun,
} from 'lucide-react';

const equipements = [
  {
    icon: UtensilsCrossed,
    title: 'Cuisine équipée',
    desc: 'Four, micro-ondes, plaques, réfrigérateur, cafetière, bouilloire et tout le nécessaire.',
  },
  {
    icon: WashingMachine,
    title: 'Lave-vaisselle',
    desc: 'Parce que les vacances, c\'est aussi ne pas faire la vaisselle à la main.',
  },
  {
    icon: WashingMachine,
    title: 'Machine à laver',
    desc: 'Pour les longs séjours ou le télétravail — partez léger, lavez sur place.',
  },
  {
    icon: Laptop,
    title: 'Bureau mural',
    desc: 'Un espace de travail dédié avec bureau rabattable, parfait pour une journée de télétravail.',
  },
  {
    icon: Wifi,
    title: 'Wifi haut débit',
    desc: 'Connexion fiable pour les appels visio, le streaming ou le travail à distance.',
  },
  {
    icon: Thermometer,
    title: 'Sèche-serviettes',
    desc: 'Vos serviettes toujours chaudes et sèches, même en pleine saison humide.',
  },
  {
    icon: Droplets,
    title: 'Linge de maison',
    desc: 'Draps et serviettes de qualité fournis pour chaque séjour.',
  },
  {
    icon: Coffee,
    title: 'Kit de bienvenue',
    desc: 'Café, thé et quelques petits extras pour démarrer votre séjour du bon pied.',
  },
  {
    icon: Trees,
    title: 'Jardin privatif clôturé',
    desc: 'Un jardin entièrement clos, sans vis-à-vis. Rare à Wimereux — profitez-en !',
  },
  {
    icon: Sun,
    title: '2 terrasses',
    desc: 'Une terrasse de repos et une terrasse de jardin orientée plein sud. Soleil toute la journée.',
  },
  {
    icon: Dog,
    title: 'Animaux acceptés',
    desc: 'Votre animal de compagnie est le bienvenu. Le jardin clôturé lui offre une liberté en toute sécurité.',
  },
  {
    icon: Baby,
    title: 'Lit bébé disponible',
    desc: 'Un lit bébé est mis à disposition sur demande pour accueillir les tout-petits.',
  },
];

export default function Equipements() {
  return (
    <section id="equipements" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-3">
            Équipements
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-sea-900 mb-4">
            Tout ce qu&apos;il faut,
            <br />
            <span className="text-sand-500">rien de superflu</span>
          </h2>
          <div className="w-16 h-0.5 bg-sand-400 mx-auto" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            L&apos;Atelier des Sardines est pensé pour votre autonomie totale —
            vous n&apos;aurez besoin de rien acheter ni emprunter.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipements.map(({ icon: Icon, title, desc }, i) => (
            <FadeIn key={title} delay={i * 0.07}>
              <div className="group bg-sand-50 hover:bg-sea-50 rounded-2xl p-6 transition-colors cursor-default">
                <div className="w-12 h-12 bg-sea-100 group-hover:bg-sea-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-sea-600" />
                </div>
                <h3 className="font-semibold text-sea-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
