import { getTranslations } from 'next-intl/server';
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

export default async function Equipements() {
  const t = await getTranslations('Equipements');

  const equipements = [
    { icon: UtensilsCrossed, titleKey: 'cuisine_title', descKey: 'cuisine_desc' },
    { icon: WashingMachine, titleKey: 'lv_title', descKey: 'lv_desc' },
    { icon: WashingMachine, titleKey: 'ml_title', descKey: 'ml_desc' },
    { icon: Laptop, titleKey: 'bureau_title', descKey: 'bureau_desc' },
    { icon: Wifi, titleKey: 'wifi_title', descKey: 'wifi_desc' },
    { icon: Thermometer, titleKey: 'seche_title', descKey: 'seche_desc' },
    { icon: Droplets, titleKey: 'linge_title', descKey: 'linge_desc' },
    { icon: Coffee, titleKey: 'bienvenue_title', descKey: 'bienvenue_desc' },
    { icon: Trees, titleKey: 'jardin_title', descKey: 'jardin_desc' },
    { icon: Sun, titleKey: 'terrasses_title', descKey: 'terrasses_desc' },
    { icon: Dog, titleKey: 'animaux_title', descKey: 'animaux_desc' },
    { icon: Baby, titleKey: 'bebe_title', descKey: 'bebe_desc' },
  ] as const;

  return (
    <section id="equipements" className="section-padding bg-white">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {equipements.map(({ icon: Icon, titleKey, descKey }, i) => (
            <FadeIn key={titleKey} delay={i * 0.07}>
              <div className="group bg-sand-50 hover:bg-sea-50 rounded-2xl p-6 transition-colors cursor-default">
                <div className="w-12 h-12 bg-sea-100 group-hover:bg-sea-200 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5 text-sea-600" />
                </div>
                <h3 className="font-semibold text-sea-900 mb-2">{t(titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(descKey)}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
