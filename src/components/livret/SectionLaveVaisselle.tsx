import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Droplets } from 'lucide-react';

export default function SectionLaveVaisselle() {
  return (
    <LivretSection id="lave-vaisselle" icon={Droplets} title="Le lave-vaisselle" accent="sea">
      <p>
        Le lave-vaisselle est à votre disposition. Les pastilles se trouvent
        dans <strong>[À compléter : sous l&apos;évier / tiroir / placard]</strong>.
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment l&apos;utiliser</p>
        <Steps
          items={[
            'Rincez grossièrement les plats avant de les charger',
            'Chargez les assiettes dans le panier inférieur, les verres en haut',
            'Placez une pastille dans le compartiment de la porte (ne pas utiliser de poudre)',
            'Sélectionnez le programme Eco (60°C) pour un usage quotidien',
            'Appuyez sur le bouton Start — le voyant clignote pendant le cycle',
            'Ouvrez légèrement la porte à la fin pour laisser sécher',
          ]}
        />
      </div>

      <InfoBox type="tip">
        Le programme Eco dure environ 2h30 mais consomme moins d&apos;énergie.
        Pour un lavage rapide, utilisez le programme 45min.
      </InfoBox>

      <InfoBox type="warning">
        Ne mettez pas les couteaux de cuisine, les objets en bois, ni la
        cafetière au lave-vaisselle — lavez-les à la main.
      </InfoBox>
    </LivretSection>
  );
}
