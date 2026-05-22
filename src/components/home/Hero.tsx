'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { ChevronDown, MapPin, Users, Star } from 'lucide-react';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Coucher de soleil sur la plage de Wimereux, Côte d'Opale"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sea-900/60 via-sea-900/40 to-sea-900/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-sand-300" />
          <span>{t('badge')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
        >
          {t('title1')}
          <br />
          <span className="text-sand-300">{t('title2')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Users, text: t('badge_guests') },
            { icon: MapPin, text: t('badge_beach') },
            { icon: Star, text: t('badge_comfort') },
          ].map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-4 py-2 text-sm"
            >
              <Icon className="w-4 h-4 text-sand-300" />
              <span>{text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/#reservation"
            className="bg-sea-500 hover:bg-sea-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-sea-900/30 hover:-translate-y-0.5"
          >
            {t('cta_disponibilites')}
          </Link>
          <Link
            href="/#logement"
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full text-lg transition-all border border-white/30"
          >
            {t('cta_decouvrir')}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
