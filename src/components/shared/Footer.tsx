import Link from 'next/link';
import { Waves, MapPin, BookOpen, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sea-900 text-white/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Identité */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Waves className="w-5 h-5 text-sea-300" />
            <span className="font-display text-white font-semibold text-lg">
              L&apos;Atelier des Sardines
            </span>
          </div>
          <p className="text-sm leading-relaxed">
            Un appartement de caractère au cœur de Wimereux, à quelques pas de
            la Côte d&apos;Opale.
          </p>
          <p className="text-xs mt-4 text-white/50">
            Villa La Walkyrie
          </p>
        </div>

        {/* Adresse */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-sea-300" />
            Adresse
          </h3>
          <address className="not-italic text-sm leading-relaxed">
            7 rue du Maréchal de Lattre de Tassigny
            <br />
            62930 Wimereux
            <br />
            Hauts-de-France
          </address>
        </div>

        {/* Liens */}
        <div>
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sea-300" />
            Liens utiles
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/livret" className="hover:text-white transition-colors">
                Livret d&apos;accueil
              </Link>
            </li>
            <li>
              <Link href="#reservation" className="hover:text-white transition-colors">
                Réserver sur Airbnb
              </Link>
            </li>
            <li>
              <Link href="#localisation" className="hover:text-white transition-colors">
                Comment venir
              </Link>
            </li>
            <li>
              <a
                href="/livret.pdf"
                download="Livret-Atelier-des-Sardines.pdf"
                className="hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                Livret en PDF
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} L&apos;Atelier des Sardines — Wimereux
      </div>
    </footer>
  );
}
