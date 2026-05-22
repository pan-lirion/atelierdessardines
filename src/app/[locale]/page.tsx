import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import Hero from '@/components/home/Hero';
import Logement from '@/components/home/Logement';
import Couchages from '@/components/home/Couchages';
import Equipements from '@/components/home/Equipements';
import Exterieur from '@/components/home/Exterieur';
import Localisation from '@/components/home/Localisation';
import Teletravail from '@/components/home/Teletravail';
import CTAReservation from '@/components/home/CTAReservation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('home_title'),
    description: t('home_description'),
    keywords: [
      'location Wimereux',
      'appartement Wimereux',
      "Côte d'Opale",
      'location vacances Wimereux',
      "location bord de mer Côte d'Opale",
      'atelier des sardines',
      'villa la valkyrie',
    ],
    openGraph: {
      title: t('home_og_title'),
      description: t('home_og_description'),
      url: 'https://www.atelierdessardines.fr',
      siteName: "L'Atelier des Sardines",
      images: [
        {
          url: 'https://www.atelierdessardines.fr/images/salon-fresque.jpg',
          width: 1200,
          height: 630,
          alt: t('home_og_alt'),
        },
      ],
      locale: locale === 'fr' ? 'fr_FR' : locale === 'en' ? 'en_GB' : locale === 'de' ? 'de_DE' : 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('home_og_title'),
      description: t('home_og_description'),
      images: ['https://www.atelierdessardines.fr/images/salon-fresque.jpg'],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.atelierdessardines.fr/${locale}`,
      languages: {
        'fr': 'https://www.atelierdessardines.fr/fr',
        'en': 'https://www.atelierdessardines.fr/en',
        'de': 'https://www.atelierdessardines.fr/de',
        'nl': 'https://www.atelierdessardines.fr/nl',
      },
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Logement />
        <Couchages />
        <Equipements />
        <Exterieur />
        <Localisation />
        <Teletravail />
        <CTAReservation />
      </main>
      <Footer />
    </>
  );
}
