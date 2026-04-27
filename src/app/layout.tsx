import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Location Wimereux avec jardin privatif & animaux acceptés | L'Atelier des Sardines",
  description:
    "Appartement de charme entièrement rénové à 5 min de la digue de Wimereux. Jardin privatif clôturé, animaux acceptés, idéal télétravail. Jusqu'à 4 personnes. À partir de 99€/nuit.",
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
    title: "L'Atelier des Sardines — Location Wimereux avec jardin privatif",
    description:
      "Appartement de charme à 5 min de la digue. Jardin clôturé, animaux acceptés, télétravail. À partir de 99€/nuit.",
    url: 'https://www.atelierdessardines.fr',
    siteName: "L'Atelier des Sardines",
    images: [
      {
        url: 'https://www.atelierdessardines.fr/images/salon-fresque.jpg',
        width: 1200,
        height: 630,
        alt: "Salon de l'Atelier des Sardines avec sa fresque de sardines, location Wimereux",
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "L'Atelier des Sardines — Location Wimereux avec jardin privatif",
    description:
      "Appartement de charme à 5 min de la digue. Jardin clôturé, animaux acceptés, télétravail. À partir de 99€/nuit.",
    images: ['https://www.atelierdessardines.fr/images/salon-fresque.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
