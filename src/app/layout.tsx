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
  title: "L'Atelier des Sardines — Location Wimereux | Côte d'Opale",
  description:
    "Appartement de charme à Wimereux, à 5 min de la plage. Location courte durée sur la Côte d'Opale. Idéal pour 2 à 4 personnes. Wifi, cuisine équipée, télétravail.",
  keywords: [
    'location Wimereux',
    'appartement Wimereux',
    "Côte d'Opale",
    'location vacances Wimereux',
    "location bord de mer Côte d'Opale",
    'atelier des sardines',
    'villa la walkyrie',
  ],
  openGraph: {
    title: "L'Atelier des Sardines — Location à Wimereux",
    description:
      "Appartement de charme à 5 min de la plage de Wimereux. Ambiance atelier, confort moderne, vue Côte d'Opale.",
    locale: 'fr_FR',
    type: 'website',
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
