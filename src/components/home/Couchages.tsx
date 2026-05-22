import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import FadeIn from '@/components/shared/FadeIn';
import { Sofa, BedDouble, Star, Baby } from 'lucide-react';

export default async function Couchages() {
  const t = await getTranslations('Couchages');

  const couchages = [
    {
      icon: Sofa,
      title: t('sofa_title'),
      subtitle: t('sofa_subtitle'),
      description: t('sofa_desc'),
      tags: [t('sofa_tag1'), t('sofa_tag2'), t('sofa_tag3')],
      image: '/images/canape.jpg',
      alt: 'Canape-lit confortable dans le salon',
    },
    {
      icon: BedDouble,
      title: t('alcove_title'),
      subtitle: t('alcove_subtitle'),
      description: t('alcove_desc'),
      tags: [t('alcove_tag1'), t('alcove_tag2'), t('alcove_tag3')],
      image: '/images/alcove-espace.jpg',
      alt: 'Alcove avec lit encastre et espace bureau',
    },
  ];

  return (
    <section id="couchages" className="section-padding bg-sea-50">
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
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {couchages.map(({ icon: Icon, title, subtitle, description, tags, image, alt }, i) => (
            <FadeIn key={title} delay={i * 0.15}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-sea-600" />
                    <span className="text-xs font-semibold text-sea-800">{subtitle}</span>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl font-bold text-sea-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-5">{description}</p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 bg-sea-50 text-sea-700 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        <Star className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-8">
          <div className="bg-white rounded-2xl p-6 flex items-start gap-5 shadow-sm border border-sand-100">
            <div className="w-12 h-12 bg-sand-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Baby className="w-6 h-6 text-sand-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sea-900 mb-1">{t('baby_title')}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{t('baby_desc')}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
