import LivretSection, { Steps, InfoBox } from './LivretSection';
import { Flame } from 'lucide-react';

export default function SectionCuisson() {
  return (
    <LivretSection id="cuisson" icon={Flame} title="Le four & micro-ondes" accent="orange">
      <div>
        <p className="font-semibold text-gray-800 mb-2">📡 Micro-ondes combiné</p>
        <p className="mb-2">
          Le mode d&apos;emploi complet se trouve dans le <strong>placard
          au-dessus</strong> du micro-ondes.
        </p>
        <Steps
          items={[
            "Placez votre plat dans le micro-ondes (pas de métal ni d'alu !)",
            'Sélectionnez la puissance et le temps',
            'Appuyez sur Start',
          ]}
        />
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🍳 Plaques vitrocéramique</p>
        <p>
          Les plaques sont en <strong>vitrocéramique</strong>. Attendez
          qu&apos;elles soient complètement refroidies avant de les nettoyer.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">
          🧀 Raclette à la bougie{' '}
          <span className="text-xs font-normal text-gray-400">(automne / hiver)</span>
        </p>
        <p>
          Besoin de réconfort par temps froid ? Des poêlons à raclette à la
          bougie sont à votre disposition !
        </p>
        <ul className="mt-2 space-y-1 text-sm">
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
            Les bougies sont fournies
          </li>
          <li className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-orange-400 rounded-full flex-shrink-0 mt-1.5" />
            2 à 3 bougies sont nécessaires pour une bonne chauffe
          </li>
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">
          🔥 Plancha électrique{' '}
          <span className="text-xs font-normal text-gray-400">(printemps / été)</span>
        </p>
        <p>
          Une plancha électrique est disponible en saison pour vos grillades —
          idéale sur la terrasse.
        </p>
      </div>

      <InfoBox type="warning">
        Ne laissez jamais les plaques allumées sans surveillance. Vérifiez
        qu&apos;elles sont bien éteintes avant de quitter la cuisine.
      </InfoBox>
    </LivretSection>
  );
}
