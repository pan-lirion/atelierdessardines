import LivretSection, { InfoBox } from './LivretSection';
import { BedDouble } from 'lucide-react';

export default function SectionAlcove() {
  return (
    <LivretSection id="alcove" icon={BedDouble} title="L'alcôve" accent="sea">
      <p>
        L&apos;alcôve est un espace intime et cosy, pensé comme un vrai refuge.
        Le lit est encastré entre deux cloisons, créant une atmosphère de
        cabine de bateau — parfaite pour dormir au son imaginaire des vagues.
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🛏️ Literie</p>
        <p>
          Le lit est fait à votre arrivée avec des draps propres et des
          oreillers. Une couverture supplémentaire se trouve dans le{' '}
          <strong>meuble du salon</strong>.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">💡 Éclairage</p>
        <p>
          Des <strong>lampes murales</strong> équipent l&apos;alcôve, avec des
          prises intégrées pour recharger votre téléphone ou tout autre appareil
          sans quitter le lit.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🧳 Rangements</p>
        <p>
          Des <strong>cintres sont disponibles au niveau du nez de cloison</strong>,
          juste à l&apos;entrée de l&apos;alcôve, pour suspendre vos vêtements à portée de main.
        </p>
      </div>
    </LivretSection>
  );
}
