import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Droplets } from 'lucide-react';

export default function SectionLaveVaisselle() {
  return (
    <LivretSection id="lave-vaisselle" icon={Droplets} title="Le lave-vaisselle" accent="sea">
      <p>
        Le lave-vaisselle est déjà rempli de sel et de liquide de rinçage.
        Une <strong>dosette est à disposition</strong> — celle avec la poudre
        est celle du lave-vaisselle (pas la machine à laver).
      </p>

      <div>
        <p className="font-semibold text-gray-800 mb-2">Comment l&apos;utiliser</p>
        <Steps
          items={[
            'Rincez grossièrement les plats et chargez-les',
            'Placez une dosette dans le compartiment de la porte',
            'Appuyez sur le bouton Power',
            'Fermez la porte — il démarre seul !',
            'Ouvrez légèrement la porte en fin de cycle pour laisser sécher',
          ]}
        />
      </div>

      <InfoBox type="tip">
        Le lave-vaisselle démarre automatiquement dès que vous fermez la porte
        après avoir appuyé sur Power. Pas besoin d&apos;appuyer sur Start.
      </InfoBox>

      <InfoBox type="warning">
        Ne mettez pas les couteaux de cuisine, les objets en bois ni la
        cafetière au lave-vaisselle — lavez-les à la main.
      </InfoBox>
    </LivretSection>
  );
}
