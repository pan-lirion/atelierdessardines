import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import LivretNav from '@/components/livret/LivretNav';
import LivretHero from '@/components/livret/LivretHero';
import SectionBienvenue from '@/components/livret/SectionBienvenue';
import SectionAcces from '@/components/livret/SectionAcces';
import SectionRegles from '@/components/livret/SectionRegles';
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
import { Link } from '@/i18n/navigation';
import { ArrowLeft, Download } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('livret_title'),
    description: t('livret_description'),
    robots: { index: false },
  };
}

export default async function LivretPage() {
  const t = await getTranslations('LivretPage');

  return (
    <div className="min-h-screen bg-cream font-body">
      {/* Barre supérieure */}
      <div className="bg-sea-900 text-white/80 py-3 px-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back')}
          </Link>
          <a
            href="/livret.pdf"
            download="Livret-Atelier-des-Sardines.pdf"
            className="inline-flex items-center gap-2 bg-sand-400 hover:bg-sand-500 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            {t('download_pdf')}
          </a>
        </div>
      </div>

      <LivretHero />
      <LivretNav />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 space-y-2 pt-2">
        <SectionBienvenue />
        <SectionAcces />
        <SectionRegles />
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

      <footer className="bg-sea-900 text-white/60 py-8 px-4">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span>{t('footer_address')}</span>
          <a
            href="/livret.pdf"
            download="Livret-Atelier-des-Sardines.pdf"
            className="inline-flex items-center gap-2 hover:text-white transition-colors"
          >
            <Download className="w-4 h-4" />
            {t('footer_pdf')}
          </a>
        </div>
      </footer>
    </div>
  );
}
