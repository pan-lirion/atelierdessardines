import LivretSection, { InfoBox, Steps } from './LivretSection';
import { KeyRound } from 'lucide-react';

export default function SectionAcces() {
  return (
    <LivretSection id="acces" icon={KeyRound} title="Accès & stationnement" accent="sea">
      <InfoBox type="info">
        Adresse : 7 rue du Maréchal de Lattre de Tassigny, 62930 Wimereux —
        Villa La Walkyrie.
      </InfoBox>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🔑 Récupération des clés</p>
        <p>
          [À compléter par le propriétaire : boîte à clés / remise en mains
          propres / autre système.]
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🚗 Stationnement</p>
        <p>
          [À compléter : rue, parking public proche, gratuité / zones horaires,
          etc.]
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🚂 En train</p>
        <Steps
          items={[
            'Depuis Paris Gare du Nord : TER Côte d\'Opale jusqu\'à Boulogne-sur-Mer (~2h30)',
            'Depuis Boulogne-sur-Mer : TER ou bus jusqu\'à la gare de Wimereux',
            'Depuis la gare de Wimereux : 5 min à pied jusqu\'à l\'appartement',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🏠 Entrée dans l&apos;appartement</p>
        <p>[À compléter : code de la porte, étage, digicode, etc.]</p>
      </div>

      <InfoBox type="tip">
        La gare de Wimereux est à 5 minutes à pied. Pratique pour arriver sans
        voiture et explorer la Côte d&apos;Opale en train !
      </InfoBox>
    </LivretSection>
  );
}
