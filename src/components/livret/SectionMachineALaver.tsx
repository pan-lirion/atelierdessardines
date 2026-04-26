import LivretSection, { Steps, InfoBox } from './LivretSection';
import { WashingMachine } from 'lucide-react';

export default function SectionMachineALaver() {
  return (
    <LivretSection id="machine-laver" icon={WashingMachine} title="La machine à laver" accent="sea">
      <p>
        Des <strong>dosettes sont à votre disposition</strong> — la dosette
        pour la machine à laver est celle sans poudre (pas celle du
        lave-vaisselle). Un étendoir à linge est également disponible.
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment l&apos;utiliser</p>
        <Steps
          items={[
            'Chargez le linge en ne dépassant pas les 3/4 du tambour',
            'Placez une dosette directement dans le tambour (pas dans le bac)',
            'Sélectionnez le programme : Coton 40°C pour le quotidien, Délicat pour les sous-vêtements',
            'Appuyez sur Start',
            'Récupérez le linge dès la fin pour éviter les faux plis',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🧺 Étendage</p>
        <p>Un étendoir à linge est disponible dans l&apos;appartement.</p>
      </div>

      <InfoBox type="tip">
        Évitez de lancer une machine la nuit par égard pour les voisins.
      </InfoBox>
    </LivretSection>
  );
}
