import LivretSection, { Steps, InfoBox } from './LivretSection';
import { WashingMachine } from 'lucide-react';

export default function SectionMachineALaver() {
  return (
    <LivretSection id="machine-laver" icon={WashingMachine} title="La machine à laver" accent="sea">
      <p>
        La machine à laver se trouve{' '}
        <strong>[À compléter : dans la salle de bain / cuisine / couloir]</strong>.
        La lessive se trouve dans{' '}
        <strong>[À compléter : meuble / étagère / sous l&apos;évier]</strong>.
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment l&apos;utiliser</p>
        <Steps
          items={[
            'Chargez le linge en ne dépassant pas les 3/4 du tambour',
            'Versez la lessive dans le bac marqué "II" (lavage principal)',
            'Sélectionnez le programme adapté : Coton 40°C pour le quotidien, Délicat pour les sous-vêtements',
            'Appuyez sur Start',
            'Récupérez le linge dès la fin du cycle pour éviter les faux plis',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🧺 Étendage</p>
        <p>
          [À compléter : étendoir disponible / corde à linge dans le jardin /
          balcon, etc.]
        </p>
      </div>

      <InfoBox type="tip">
        Évitez de lancer une machine la nuit si les voisins sont proches — les
        vibrations peuvent s&apos;entendre.
      </InfoBox>
    </LivretSection>
  );
}
