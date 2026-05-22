import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';

export default async function Logement() {
  const t = await getTranslations('Logement');

  return (
    <section id="logement" className="section-padding bg-cream">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="right">
            <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-3">
              {t('label')}
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-sea-900 leading-tight mb-6">
              {t('title1')}
              <br />
              <span className="text-sand-500">{t('title2')}</span>
            </h2>
            <div className="w-16 h-0.5 bg-sand-400 mb-8" />
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>{t.rich('p1', { b: (c) => <strong>{c}</strong> })}</p>
              <p>{t('p2')}</p>
              <p>{t('p3')}</p>
              <p>{t.rich('p4', { b: (c) => <strong>{c}</strong> })}</p>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-sand-200">
              {[
                { value: t('stat1_value'), label: t('stat1_label') },
                { value: t('stat2_value'), label: t('stat2_label') },
                { value: t('stat3_value'), label: t('stat3_label') },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-bold text-sea-700">{value}</div>
                  <div className="text-xs text-gray-500 mt-1">{label}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src="/images/salon-fresque.jpg"
                    alt="Salon avec la grande fresque sardines"
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
                    alt="Cuisine bleue équipée"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/terrasse.jpg"
                    alt="Terrasse avec salon de jardin"
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
