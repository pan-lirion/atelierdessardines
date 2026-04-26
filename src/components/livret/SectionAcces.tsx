import LivretSection, { InfoBox, Steps } from './LivretSection';
import { KeyRound } from 'lucide-react';

export default function SectionAcces() {
  return (
    <LivretSection id="acces" icon={KeyRound} title="Accès & stationnement" accent="sea">
      <div className="bg-white rounded-xl p-4 shadow-xs">
        <p className="text-xs text-gray-400 mb-1">Adresse</p>
        <p className="font-semibold text-gray-800">
          7 rue du Maréchal de Lattre de Tassigny
          <br />62930 Wimereux — Villa La Valkyrie
        </p>
      </div>

      {/* Horaires */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-green-700">15h00</p>
          <p className="text-xs text-green-600 mt-1">Arrivée à partir de</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-2xl font-bold text-amber-700">11h00</p>
          <p className="text-xs text-amber-600 mt-1">Départ au plus tard</p>
        </div>
      </div>

      <InfoBox type="tip">
        Arrivée anticipée ou départ tardif possible selon disponibilités —
        contactez Manu au <strong>07.81.81.08.69</strong> en amont.
      </InfoBox>

      <div className="bg-white rounded-xl p-4 shadow-xs space-y-2">
        <p className="font-semibold text-gray-800 mb-1">🔑 Récupération des clés</p>
        <p className="text-sm text-gray-600">
          La boîte à clé se trouve sur la <strong>porte d&apos;accès au jardin privatif,
          sur le côté droit de la villa</strong>.
        </p>
        <p className="text-sm text-gray-600">
          Le code de la boîte à clé vous a été communiqué par SMS avant votre arrivée.
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🚗 Stationnement</p>
        <p>
          Le stationnement est <strong>gratuit dans la rue</strong> devant le
          logement. Profitez-en !
        </p>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">⚡ Recharge électrique</p>
        <ul className="space-y-1 text-sm">
          {[
            'Carrefour Market de Wimille — à quelques minutes en voiture',
            'Place Foch à Wimereux',
            'Auchan Saint-Martin-lès-Boulogne',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 bg-sea-400 rounded-full flex-shrink-0 mt-1.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-semibold text-gray-800 mb-2">🚂 En train</p>
        <Steps
          items={[
            "Depuis Paris Gare du Nord : TER Côte d'Opale jusqu'à Boulogne-sur-Mer (~2h30)",
            'Correspondance TER ou bus jusqu\'à la gare de Wimereux',
            'Depuis la gare de Wimereux : 5 min à pied jusqu\'à l\'appartement',
          ]}
        />
      </div>
    </LivretSection>
  );
}
