import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import { Sun, Trees, Dog, Baby } from 'lucide-react';

const atouts = [
  {
    icon: Trees,
    title: 'Jardin privatif & clôturé',
    desc: 'Un jardin rien que pour vous — pelouse, allée gravillonnée et mur en briques. Aucun vis-à-vis, et depuis plusieurs endroits du jardin, on aperçoit la mer au loin entre les maisons.',
  },
  {
    icon: Sun,
    title: '2 terrasses pour tout le soleil',
    desc: 'Une terrasse de repos côté rue, une terrasse de jardin côté sud. Le soleil vous suit toute la journée — avec une échappée sur la mer en fond.',
  },
  {
    icon: Dog,
    title: 'Animaux bienvenus',
    desc: 'Votre compagnon est le bienvenu. Le jardin clôturé est parfait pour lui laisser de la liberté en toute sécurité.',
  },
  {
    icon: Baby,
    title: 'Lit bébé disponible',
    desc: 'Un lit bébé est mis à disposition sur demande pour accueillir les tout-petits dans les meilleures conditions.',
  },
];

export default function Exterieur() {
  return (
    <section id="exterieur" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-3">
            Extérieur
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-sea-900 mb-4">
            Un jardin privatif,
            <br />
            <span className="text-sand-500">c&apos;est rare à Wimereux</span>
          </h2>
          <div className="w-16 h-0.5 bg-sand-400 mx-auto" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">
            Profitez d&apos;un espace extérieur entièrement clôturé, avec deux terrasses
            orientées pour capter le soleil du matin au soir — et depuis plusieurs
            endroits du jardin, une échappée sur la mer entre les maisons.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          {/* Photos */}
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/jardin-privatif.jpg"
                  alt="Jardin privatif clôturé avec mur en briques et terrasse"
                  width={500}
                  height={667}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/terrasse-jardin.jpg"
                    alt="Terrasse de jardin avec table en bois et fleurs"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/terrasse.jpg"
                    alt="Terrasse de repos avec salon de jardin"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Atouts */}
          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-5">
              {atouts.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-sand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-sand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sea-900 mb-1">{title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
