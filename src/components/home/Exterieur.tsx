import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import { Sun, Trees, Dog } from 'lucide-react';

export default async function Exterieur() {
  const t = await getTranslations('Exterieur');

  const atouts = [
    { icon: Trees, titleKey: 'atout1_title', descKey: 'atout1_desc' },
    { icon: Sun, titleKey: 'atout2_title', descKey: 'atout2_desc' },
    { icon: Dog, titleKey: 'atout3_title', descKey: 'atout3_desc' },
  ] as const;

  return (
    <section id="exterieur" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="text-center mb-14">
          <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-3">
            {t('label')}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-sea-900 mb-4">
            {t('title1')}
            <br />
            <span className="text-sand-500">{t('title2')}</span>
          </h2>
          <div className="w-16 h-0.5 bg-sand-400 mx-auto" />
          <p className="mt-6 text-gray-500 max-w-xl mx-auto">{t('desc')}</p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-14">
          <FadeIn direction="right">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <Image
                  src="/images/jardin-privatif.jpg"
                  alt="Jardin privatif"
                  width={500}
                  height={667}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-4 pt-6">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <Image
                    src="/images/terrasse-jardin.jpg"
                    alt="Terrasse de jardin"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/terrasse.jpg"
                    alt="Terrasse de repos"
                    width={500}
                    height={375}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.15}>
            <div className="space-y-5">
              {atouts.map(({ icon: Icon, titleKey, descKey }) => (
                <div key={titleKey} className="flex gap-4 items-start">
                  <div className="w-11 h-11 bg-sand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-sand-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sea-900 mb-1">{t(titleKey)}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{t(descKey)}</p>
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
