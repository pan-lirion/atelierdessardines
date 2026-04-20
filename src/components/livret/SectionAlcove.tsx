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
        <p className="font-semibold text-gray-800 mb-2">📍 Accès</p>
        <p>
          [À compléter : position dans l&apos;appartement, accès par escalier /
          couloir, etc.]
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🛏️ Literie</p>
        <p>
          Le lit est fait à votre arrivée avec des draps propres et des
          oreillers. Vous trouverez une couverture supplémentaire dans{' '}
          <strong>[À compléter]</strong>.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">💡 Éclairage</p>
        <p>[À compléter : lampe de chevet, interrupteur, veilleuse, etc.]</p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🧳 Rangements</p>
        <p>
          [À compléter : espace de rangement disponible dans l&apos;alcôve,
          patères, tiroirs.]
        </p>
      </div>

      <InfoBox type="tip">
        L&apos;alcôve est conçue pour 2 personnes. La hauteur sous plafond est
        [À compléter] cm — pensez-y si vous êtes très grand(e) !
      </InfoBox>
    </LivretSection>
  );
}
