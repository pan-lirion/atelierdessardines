import LivretSection, { InfoBox } from './LivretSection';
import { Heart, Wifi, Phone, Mail } from 'lucide-react';

export default function SectionBienvenue() {
  return (
    <LivretSection id="bienvenue" icon={Heart} title="Bienvenue !" accent="sand">
      <p className="text-base font-medium text-gray-800">
        Bienvenue à l&apos;Atelier des Sardines 🐟
      </p>
      <p>
        Nous sommes Manu & Amélie, et nous sommes ravis de vous accueillir dans
        cet appartement qui nous tient à cœur. Nous avons eu un véritable coup
        de cœur pour Wimereux et ses grandes plages, et nous avons voulu créer
        ici un lieu confortable où vous vous sentirez comme chez vous.
      </p>
      <p>
        Que vous soyez venus pour les balades sur la digue, les couchers de
        soleil sur la mer ou simplement vous reposer — profitez pleinement de
        chaque instant.
      </p>

      {/* Contact */}
      <div className="bg-white rounded-xl p-4 shadow-xs space-y-2">
        <p className="font-semibold text-gray-800 text-sm mb-3">📞 Vos hôtes — Manu & Amélie</p>
        <a
          href="tel:0781810869"
          className="flex items-center gap-3 text-sea-700 hover:text-sea-500 transition-colors"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span className="font-medium">07.81.81.08.69</span>
        </a>
        <a
          href="mailto:contact@atelierdessardines.fr"
          className="flex items-center gap-3 text-sea-700 hover:text-sea-500 transition-colors"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span>contact@atelierdessardines.fr</span>
        </a>
      </div>

      {/* WiFi */}
      <div className="bg-sea-600 text-white rounded-xl p-4 space-y-2">
        <div className="flex items-center gap-2 font-semibold mb-2">
          <Wifi className="w-4 h-4" />
          Connexion WiFi
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/15 rounded-lg p-3">
            <p className="text-xs text-white/70 mb-1">Réseau</p>
            <p className="font-mono font-bold text-sm">Livebox D-930</p>
          </div>
          <div className="bg-white/15 rounded-lg p-3">
            <p className="text-xs text-white/70 mb-1">Mot de passe</p>
            <p className="font-mono font-bold text-sm tracking-wide">Sardines62*</p>
          </div>
        </div>
      </div>

      <InfoBox type="tip">
        On espère que l&apos;air iodé de la Côte d&apos;Opale vous fera le plus
        grand bien. Nous vous souhaitons de très beaux moments à Wimereux ! 🌞
      </InfoBox>
    </LivretSection>
  );
}
