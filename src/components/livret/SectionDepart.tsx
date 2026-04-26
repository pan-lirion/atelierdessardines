import LivretSection, { Checklist, InfoBox } from './LivretSection';
import { LogOut, Star } from 'lucide-react';

const checklist = [
  'Remettre le canapé-lit en position canapé et replacer les coussins',
  'Laisser les serviettes usagées au sol dans la salle de bain',
  'Vider le réfrigérateur de vos aliments',
  'Vider et/ou lancer le lave-vaisselle avant de partir',
  'Sortir les poubelles et les vider',
  'Faire la vaisselle restante',
  'Vérifier les placards, tiroirs et le chauffage',
  'Ramasser les déjections canines dans la pelouse (si vous avez un animal)',
  'Ranger le mobilier extérieur si vous l\'avez utilisé',
  'Éteindre toutes les lumières',
  'Fermer toutes les fenêtres et la porte',
  'Déposer les clés dans la boîte à clé',
];

export default function SectionDepart() {
  return (
    <LivretSection id="depart" icon={LogOut} title="Checklist de départ" accent="sand">
      <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
        <p className="font-bold text-amber-800 text-base">
          ⏰ Départ avant 11h00
        </p>
        <p className="text-sm text-amber-700 mt-0.5">
          Arrivée à partir de 15h00 pour le séjour suivant
        </p>
      </div>

      <Checklist items={checklist} />

      <InfoBox type="info">
        Départ tardif possible sur demande — contactez Manu la veille au{' '}
        <strong>07.81.81.08.69</strong>.
      </InfoBox>

      {/* Appel à l'avis */}
      <div className="bg-sea-50 border border-sea-200 rounded-xl p-4 mt-2">
        <div className="flex items-center gap-2 font-semibold text-sea-800 mb-2">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          Un petit geste qui fait une grande différence ✨
        </div>
        <p className="text-sm text-sea-700 leading-relaxed">
          Si vous avez passé un bon séjour, sachez que sur Airbnb,{' '}
          <strong>5 étoiles correspond simplement à "tout s&apos;est bien passé"</strong>.
          Votre note nous aide énormément à continuer cette aventure.
        </p>
        <p className="text-sm text-sea-700 mt-2">
          Si quelque chose peut être amélioré, dites-le nous directement —
          votre retour est précieux ❤️
        </p>
      </div>

      <p className="pt-2 text-base font-medium text-gray-800 text-center">
        Merci pour votre séjour ! 🐟<br />
        Nous espérons vous revoir très bientôt.<br />
        <span className="text-sm font-normal text-gray-500">Amélie & Manu</span>
      </p>
    </LivretSection>
  );
}
