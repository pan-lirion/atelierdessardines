'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, MapPin, Users, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=85"
          alt="Plage de la Côte d'Opale"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-sea-900/60 via-sea-900/40 to-sea-900/70" />
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-center text-white">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 text-sm mb-8"
        >
          <MapPin className="w-3.5 h-3.5 text-sand-300" />
          <span>Wimereux — Côte d&apos;Opale</span>
        </motion.div>

        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6"
        >
          L&apos;Atelier
          <br />
          <span className="text-sand-300">des Sardines</span>
        </motion.h1>

        {/* Accroche */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl text-white/85 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Un appartement de caractère à deux pas de la digue,
          <br className="hidden sm:block" />
          où l&apos;air iodé entre par les fenêtres.
        </motion.p>

        {/* Badges info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {[
            { icon: Users, text: 'Jusqu\'à 4 personnes' },
            { icon: MapPin, text: '5 min de la plage' },
            { icon: Star, text: 'Confort premium' },
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

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#reservation"
            className="bg-sea-500 hover:bg-sea-400 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:shadow-xl hover:shadow-sea-900/30 hover:-translate-y-0.5"
          >
            Voir les disponibilités
          </Link>
          <Link
            href="#logement"
            className="bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white font-medium px-8 py-4 rounded-full text-lg transition-all border border-white/30"
          >
            Découvrir le logement
          </Link>
        </motion.div>
      </div>

      {/* Flèche scroll */}
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
