import LivretSection, { InfoBox } from './LivretSection';
import { Thermometer } from 'lucide-react';

export default function SectionSecheServiettes() {
  return (
    <LivretSection id="seche-serviettes" icon={Thermometer} title="Salle de bain & linge" accent="orange">
      <div>
        <p className="font-semibold text-gray-800 mb-2">🛁 Salle de bain</p>
        <ul className="space-y-1 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
            <span>Un <strong>jeu de serviettes par personne</strong> est disponible dans la salle de bain</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
            <span>Le <strong>sèche-cheveux</strong> se trouve dans le meuble de la salle de bain</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🌡️ Sèche-serviettes</p>
        <p>
          Le mode d&apos;emploi du sèche-serviettes est affiché directement dans
          la salle de bain.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">👔 Fer à repasser</p>
        <p>
          Le fer à repasser et la table à repasser se trouvent dans le
          <strong> meuble du salon</strong>.
        </p>
      </div>

      <InfoBox type="warning">
        Ne couvrez jamais entièrement le sèche-serviettes — cela bloque
        la circulation d&apos;air et peut surchauffer l&apos;appareil.
      </InfoBox>

      <InfoBox type="tip">
        Au départ, merci de laisser les serviettes usagées au sol dans la
        salle de bain.
      </InfoBox>
    </LivretSection>
  );
}
