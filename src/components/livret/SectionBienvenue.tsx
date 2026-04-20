import LivretSection from './LivretSection';
import { Heart } from 'lucide-react';

export default function SectionBienvenue() {
  return (
    <LivretSection id="bienvenue" icon={Heart} title="Bienvenue !" accent="sand">
      <p className="text-base font-medium text-gray-800">
        Bienvenue à l&apos;Atelier des Sardines 🐟
      </p>
      <p>
        Nous sommes ravis de vous accueillir dans ce petit appartement qui nous
        tient à cœur. Vous êtes désormais chez vous — profitez de chaque
        instant, que ce soit pour une escapade en amoureux, des vacances en
        famille ou quelques jours de télétravail au grand air.
      </p>
      <p>
        Ce livret contient tout ce qu&apos;il vous faut pour votre séjour. En
        cas de question, n&apos;hésitez pas à nous contacter — nos coordonnées
        sont dans la section <em>Contacts utiles</em>.
      </p>
      <p>
        On espère que l&apos;air iodé de la Côte d&apos;Opale vous fera le plus
        grand bien. Bonne découverte de Wimereux !
      </p>
    </LivretSection>
  );
}
