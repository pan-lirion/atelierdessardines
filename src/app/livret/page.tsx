import type { Metadata } from 'next';
import LivretNav from '@/components/livret/LivretNav';
import LivretHero from '@/components/livret/LivretHero';
import SectionBienvenue from '@/components/livret/SectionBienvenue';
import SectionAcces from '@/components/livret/SectionAcces';
import SectionCanapeLit from '@/components/livret/SectionCanapeLit';
import SectionAlcove from '@/components/livret/SectionAlcove';
import SectionCuisson from '@/components/livret/SectionCuisson';
import SectionLaveVaisselle from '@/components/livret/SectionLaveVaisselle';
import SectionMachineALaver from '@/components/livret/SectionMachineALaver';
import SectionSecheServiettes from '@/components/livret/SectionSecheServiettes';
import SectionCuisine from '@/components/livret/SectionCuisine';
import SectionDechets from '@/components/livret/SectionDechets';
import SectionDepart from '@/components/livret/SectionDepart';
import SectionContacts from '@/components/livret/SectionContacts';
import SectionAlentours from '@/components/livret/SectionAlentours';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Livret d'accueil — L'Atelier des Sardines, Wimereux",
  description:
    "Tout ce qu'il faut savoir pour votre séjour à L'Atelier des Sardines : accès, équipements, bons plans à Wimereux, contacts utiles.",
  robots: { index: false },
};

export default function LivretPage() {
  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Retour accueil */}
      <div className="bg-sea-900 text-white/80 py-3 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour au site
          </Link>
        </div>
      </div>

      <LivretHero />
      <LivretNav />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-2">
        <SectionBienvenue />
        <SectionAcces />
        <SectionCanapeLit />
        <SectionAlcove />
        <SectionCuisson />
        <SectionLaveVaisselle />
        <SectionMachineALaver />
        <SectionSecheServiettes />
        <SectionCuisine />
        <SectionDechets />
        <SectionDepart />
        <SectionContacts />
        <SectionAlentours />
      </main>

      {/* Footer minimal */}
      <footer className="bg-sea-900 text-white/60 text-center py-6 text-sm">
        L&apos;Atelier des Sardines — 7 rue du Maréchal de Lattre de Tassigny, 62930 Wimereux
      </footer>
    </div>
  );
}
