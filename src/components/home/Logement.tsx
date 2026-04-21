import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';

export default function Logement() {
  return (
    <section id="logement" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Texte */}
          <FadeIn direction="right">
            <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-3">
              Le logement
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-sea-900 leading-tight mb-6">
              À deux pas
              <br />
              <span className="text-sand-500">de la digue</span>
            </h2>
            <div className="w-16 h-0.5 bg-sand-400 mb-8" />
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                Niché au sein de la Villa La Walkyrie, <strong>L&apos;Atelier des Sardines</strong> est
                un appartement pensé pour ceux qui veulent vivre Wimereux de
                l&apos;intérieur — loin des hôtels sans âme, près de tout ce qui
                compte.
              </p>
              <p>
                Son nom ? Un hommage tendre à l&apos;histoire ouvrière et maritime de
                la Côte d&apos;Opale. Ses pierres, ses volumes, sa lumière qui change
                avec les marées.
              </p>
              <p>
                L&apos;appartement allie le charme authentique de l&apos;architecture
                locale avec un confort contemporain soigné : matériaux de
                qualité, literie premium, cuisine entièrement équipée. Tout ce
                qu&apos;il faut pour souffler, explorer, ou travailler à distance
                dans un cadre inspirant.
              </p>
              <p>
                À <strong>5 minutes à pied</strong> de la digue, des commerces
                et de la gare. La mer est au bout de la rue.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-sand-200">
              {[
                { value: '4', label: 'Personnes max' },
                { value: '5\'', label: 'De la plage' },
                { value: '100%', label: 'Équipé' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-bold text-sea-700">
                    {value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Images */}
          <FadeIn direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80"
                    alt="Salon de l'Atelier des Sardines"
                    width={400}
                    height={530}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80"
                    alt="Cuisine équipée"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80"
                    alt="Espace de détente"
                    width={400}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
