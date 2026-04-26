import FadeIn from '@/components/shared/FadeIn';
import { ExternalLink, Calendar, Shield, MessageCircle } from 'lucide-react';

const AIRBNB_URL = 'https://airbnb.fr/h/atelierdessardines';

const garanties = [
  { icon: Shield, text: 'Paiement sécurisé via Airbnb' },
  { icon: Calendar, text: 'Annulation flexible' },
  { icon: MessageCircle, text: 'Réponse en moins de 24h' },
];

export default function CTAReservation() {
  return (
    <section
      id="reservation"
      className="section-padding relative overflow-hidden"
    >
      {/* Fond dégradé */}
      <div className="absolute inset-0 bg-gradient-to-br from-sand-100 via-cream to-sea-50" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-sea-100 rounded-full opacity-40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sand-200 rounded-full opacity-40 blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <FadeIn>
          <p className="text-sea-500 font-medium tracking-widest text-xs uppercase mb-4">
            Réservation
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-sea-900 leading-tight mb-6">
            Prêt à entendre
            <br />
            <span className="text-sand-500">le bruit des vagues ?</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto mb-10">
            Réservez directement sur Airbnb pour voir les disponibilités et
            sécuriser votre séjour à Wimereux.
          </p>

          {/* CTA principal */}
          <a
            href={AIRBNB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-sea-600 hover:bg-sea-500 text-white font-semibold px-10 py-5 rounded-full text-lg transition-all hover:shadow-2xl hover:shadow-sea-300/40 hover:-translate-y-1"
          >
            <Calendar className="w-5 h-5" />
            Voir les disponibilités
            <ExternalLink className="w-4 h-4 opacity-70" />
          </a>

          {/* Garanties */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 pt-10 border-t border-sand-200">
            {garanties.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-gray-500 text-sm">
                <Icon className="w-4 h-4 text-sea-400 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
