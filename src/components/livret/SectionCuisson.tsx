import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Flame } from 'lucide-react';

export default function SectionCuisson() {
  return (
    <LivretSection id="cuisson" icon={Flame} title="Le four & micro-ondes" accent="orange">
      <div>
        <p className="font-semibold text-gray-800 mb-2">🔥 Four</p>
        <p className="mb-3">
          Le four est de type <strong>[À compléter : électrique / chaleur
          tournante]</strong>. Il chauffe jusqu&apos;à 250°C.
        </p>
        <Steps
          items={[
            'Tournez le bouton de gauche pour sélectionner le mode de cuisson (conventionnel, chaleur tournante, gril)',
            'Tournez le bouton de droite pour régler la température',
            'Le voyant lumineux s\'éteint quand la température est atteinte',
            'Après utilisation, ramenez les deux boutons sur 0',
          ]}
        />
      </div>

      <InfoBox type="warning">
        Ne laissez jamais le four allumé sans surveillance. Pensez à l&apos;éteindre
        après utilisation.
      </InfoBox>

      <div>
        <p className="font-semibold text-gray-800 mb-2">📡 Micro-ondes</p>
        <Steps
          items={[
            'Placez votre plat dans le micro-ondes (pas de métal !)',
            'Tournez le bouton de gauche pour régler la puissance (800W recommandé)',
            'Tournez le bouton de droite pour régler le temps',
            'Appuyez sur Start ou le bouton central',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🍳 Plaques de cuisson</p>
        <p>[À compléter : induction / vitrocéramique / gaz, mode d&apos;emploi.]</p>
      </div>
    </LivretSection>
  );
}
