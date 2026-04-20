import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import { Wifi, Monitor, Coffee, Sun, CheckCircle } from 'lucide-react';

const avantages = [
  'Bureau mural dédié, ergonomique et bien éclairé',
  'Wifi fibre haut débit pour les appels visio',
  'Calme absolu en journée, hors saison',
  'Cuisine équipée pour cuisiner et s\'économiser',
  'Plage à 5 min pour décompresser entre deux réunions',
  'Gare à 5 min — Boulogne-sur-Mer en 10 min de train',
];

export default function Teletravail() {
  return (
    <section id="teletravail" className="section-padding bg-sea-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <FadeIn direction="right" className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80"
                  alt="Espace télétravail"
                  width={700}
                  height={525}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -right-4 bg-sand-400 text-white rounded-2xl p-5 shadow-xl">
                <Wifi className="w-6 h-6 mb-1" />
                <p className="text-xs font-semibold">Fibre</p>
                <p className="text-xs opacity-80">Haut débit</p>
              </div>
            </div>
          </FadeIn>

          {/* Texte */}
          <FadeIn direction="left" delay={0.15} className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-2">
                {[Monitor, Coffee, Sun].map((Icon, i) => (
                  <div key={i} className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-4 h-4 text-sand-300" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-sea-300 font-medium tracking-widest text-xs uppercase mb-3">
              Télétravail friendly
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-6">
              Travaillez avec
              <br />
              <span className="text-sand-300">la mer en fond</span>
            </h2>
            <div className="w-16 h-0.5 bg-sand-400 mb-8" />
            <p className="text-white/70 leading-relaxed mb-8">
              L&apos;Atelier des Sardines est pensé pour les nomades digitaux et
              les télétravailleurs. Profitez de la Côte d&apos;Opale sans sacrifier
              votre productivité — ou l&apos;inverse.
            </p>

            <ul className="space-y-3">
              {avantages.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sand-300 flex-shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
