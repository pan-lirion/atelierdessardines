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
        <p className="font-semibold text-gray-800 mb-2">📦 Où trouver la literie</p>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-sand-400 rounded-full flex-shrink-0 mt-1.5" />
            <span><strong>La couette</strong> se trouve dans le meuble du salon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-sand-400 rounded-full flex-shrink-0 mt-1.5" />
            <span><strong>Les oreillers</strong> sont dans le rangement intérieur du canapé-lit</span>
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment le déplier</p>
        <Steps
          items={[
            'Retirez les coussins du canapé et posez-les de côté',
            'Tirez sur la lanière située au centre du dossier du canapé',
            'Dépliez le matelas en tirant la structure vers vous jusqu\'à ce qu\'elle soit à plat',
            'Récupérez la couette dans le meuble du salon et les oreillers dans le rangement intérieur',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment le replier au départ</p>
        <Steps
          items={[
            'Retirez les draps',
            'Rangez la couette dans le meuble du salon',
            'Repliez le matelas en poussant la structure vers le canapé',
            'Ramenez l\'assise en position canapé et replacez les coussins',
          ]}
        />
      </div>

      <InfoBox type="tip">
        Merci de replier le canapé-lit avant votre départ — voir la checklist
        dans la section Départ.
      </InfoBox>
    </LivretSection>
  );
}
