import LivretSection, { Checklist, InfoBox } from './LivretSection';
import { LogOut } from 'lucide-react';

const checklist = [
  'Remettre le canapé-lit en position canapé et replacer les coussins',
  'Retirer les draps des lits et les laisser pliés sur le lit / dans [À compléter]',
  'Faire la vaisselle ou lancer le lave-vaisselle',
  'Vider le réfrigérateur de vos aliments',
  'Sortir les poubelles si les bacs sont pleins',
  'Éteindre toutes les lumières et tous les appareils électriques',
  'Fermer toutes les fenêtres et volets',
  'Vérifier que le gaz / plaques de cuisson sont éteints',
  'Déposer les clés dans [À compléter : boîte à clés / chez le voisin / au propriétaire]',
  'Laisser l\'appartement dans l\'état où vous l\'avez trouvé',
];

export default function SectionDepart() {
  return (
    <LivretSection id="depart" icon={LogOut} title="Checklist de départ" accent="sand">
      <p>
        Merci de prendre quelques minutes pour cette checklist avant de
        quitter l&apos;appartement. L&apos;heure de départ est{' '}
        <strong>[À compléter : ex. avant 11h00]</strong>.
      </p>

      <Checklist items={checklist} />

      <InfoBox type="info">
        Un check-out tardif est parfois possible sur demande — contactez-nous
        la veille pour vérifier les disponibilités.
      </InfoBox>

      <p className="pt-2 text-base font-medium text-gray-800">
        Merci pour votre séjour ! 🐟 On espère vous revoir bientôt à
        l&apos;Atelier des Sardines.
      </p>
    </LivretSection>
  );
}
