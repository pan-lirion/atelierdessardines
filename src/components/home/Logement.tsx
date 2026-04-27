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
                Niché au sein de la Villa La Valkyrie, <strong>L&apos;Atelier des Sardines</strong>&nbsp;est
                un appartement pensé pour ceux qui veulent vivre Wimereux de
                l&apos;intérieur — loin des hôtels sans âme, près de tout ce qui
                compte.
              </p>
              <p>
                Son nom ? Un hommage tendre à l&apos;histoire ouvrière et maritime de
                la Côte d&apos;Opale — jusqu&apos;à la grande fresque de sardines qui
                habille le mur du salon.
              </p>
              <p>
                L&apos;appartement, entièrement rénové, marie l&apos;esprit de la
                Côte d&apos;Opale à un confort contemporain soigné : isolation
                neuve, literie premium, cuisine entièrement équipée. Tout le
                charme du bord de mer, sans les défauts des vieux logements
                (humidité, courants d&apos;air).
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
                { value: 'Jardin', label: 'Sans vis-à-vis' },
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
                {/* Photo signature : fresque sardines + alcôve */}
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/salon-fresque.jpg"
                    alt="Salon avec la grande fresque sardines et vue sur l'alcôve"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/cuisine.jpg"
                    alt="Cuisine bleue entièrement équipée"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/terrasse.jpg"
                    alt="Terrasse avec salon de jardin et vue sur les villas"
                    width={500}
                    height={375}
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
