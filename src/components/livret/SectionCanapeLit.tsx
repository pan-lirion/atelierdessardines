import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Sofa } from 'lucide-react';

export default function SectionCanapeLit() {
  return (
    <LivretSection id="canape-lit" icon={Sofa} title="Le canapé-lit" accent="sand">
      <p>
        Le canapé-lit se trouve dans le salon. Il peut accueillir confortablement
        2 personnes avec son matelas de qualité supérieure.
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment le déplier</p>
        <Steps
          items={[
            'Retirez les coussins du canapé et posez-les de côté',
            'Soulevez légèrement l\'assise vers vous et tirez',
            'Dépliez le matelas en tirant la structure vers vous jusqu\'à ce qu\'elle soit à plat',
            'Assurez-vous que les pieds/roulettes sont bien stabilisés',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">📦 Les draps et la literie</p>
        <p>
          Les draps propres et les oreillers se trouvent dans{' '}
          <strong>[À compléter : placard / tiroir / meuble]</strong>.
          Une couverture supplémentaire est disponible dans{' '}
          <strong>[À compléter]</strong>.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment le replier au départ</p>
        <Steps
          items={[
            'Retirez les draps et pliez-les proprement',
            'Repliez le matelas en poussant la structure vers le canapé',
            'Ramenez l\'assise en position canapé',
            'Replacez les coussins',
          ]}
        />
      </div>

      <InfoBox type="tip">
        Merci de replier le canapé-lit avant votre départ — consultez la
        checklist dans la section Départ.
      </InfoBox>
    </LivretSection>
  );
}
