import LivretSection, { InfoBox } from './LivretSection';
import { Thermometer } from 'lucide-react';

export default function SectionSecheServiettes() {
  return (
    <LivretSection id="seche-serviettes" icon={Thermometer} title="Le sèche-serviettes" accent="orange">
      <p>
        Le sèche-serviettes se trouve dans la salle de bain. Il est électrique
        et fonctionne en permanence à basse température pour garder vos
        serviettes chaudes et sèches.
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Fonctionnement</p>
        <p>
          [À compléter : interrupteur au mur / bouton sur l&apos;appareil / toujours allumé.]
        </p>
      </div>

      <InfoBox type="warning">
        ⚠️ Ne couvrez jamais entièrement le sèche-serviettes avec des vêtements
        ou serviettes épaisses — cela bloque la circulation d&apos;air et peut
        surchauffer l&apos;appareil.
      </InfoBox>

      <InfoBox type="tip">
        En saison humide sur la Côte d&apos;Opale, le sèche-serviettes est votre
        meilleur ami ! Accrochez simplement vos serviettes mouillées dessus
        après la douche.
      </InfoBox>
    </LivretSection>
  );
}
