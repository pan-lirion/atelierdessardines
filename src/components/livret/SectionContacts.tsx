import LivretSection, { InfoBox } from './LivretSection';
import { Phone } from 'lucide-react';

const contacts = [
  {
    cat: 'Urgences',
    items: [
      { label: 'SAMU', tel: '15', note: 'Urgences médicales' },
      { label: 'Police / Gendarmerie', tel: '17' },
      { label: 'Pompiers', tel: '18' },
      { label: 'Numéro d\'urgence européen', tel: '112' },
    ],
  },
  {
    cat: 'Santé à Wimereux',
    items: [
      { label: 'Pharmacie de Wimereux', tel: '[À compléter]', note: 'Rue Carnot' },
      { label: 'Médecin généraliste', tel: '[À compléter]', note: 'Cabinet local' },
      { label: 'Centre hospitalier de Boulogne', tel: '03 21 99 33 33', note: 'Urgences adultes & pédiatriques' },
    ],
  },
  {
    cat: 'Pratique',
    items: [
      { label: 'Taxi Wimereux / Boulogne', tel: '[À compléter]' },
      { label: 'Propriétaire — [Prénom]', tel: '[À compléter]', note: 'SMS ou WhatsApp de préférence' },
    ],
  },
];

export default function SectionContacts() {
  return (
    <LivretSection id="contacts" icon={Phone} title="Contacts utiles" accent="red">
      <div className="space-y-6">
        {contacts.map(({ cat, items }) => (
          <div key={cat}>
            <p className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-2">
              {cat}
            </p>
            <div className="space-y-2">
              {items.map(({ label, tel, note }) => (
                <div
                  key={label}
                  className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-xs"
                >
                  <div>
                    <p className="font-medium text-sm text-gray-800">{label}</p>
                    {note && <p className="text-xs text-gray-400">{note}</p>}
                  </div>
                  <a
                    href={`tel:${tel.replace(/\s/g, '')}`}
                    className="flex items-center gap-1.5 bg-sea-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-sea-500 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {tel}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="info">
        En cas de problème avec l&apos;appartement (panne, dégât...), contactez
        d&apos;abord le propriétaire avant de faire appel à un prestataire extérieur.
      </InfoBox>
    </LivretSection>
  );
}
