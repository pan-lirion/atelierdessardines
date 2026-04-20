import { Waves } from 'lucide-react';

export default function LivretHero() {
  return (
    <div className="bg-sea-900 text-white px-4 pt-10 pb-16 text-center">
      <div className="max-w-3xl mx-auto">
        <Waves className="w-10 h-10 text-sand-300 mx-auto mb-4" />
        <h1 className="font-display text-4xl sm:text-5xl font-bold mb-3">
          Livret d&apos;accueil
        </h1>
        <p className="text-sea-300 text-lg">L&apos;Atelier des Sardines — Wimereux</p>
        <p className="mt-4 text-white/60 text-sm max-w-md mx-auto">
          Tout ce qu&apos;il vous faut pour un séjour parfait. Consultez ce guide
          depuis votre smartphone à tout moment.
        </p>
      </div>
    </div>
  );
}
