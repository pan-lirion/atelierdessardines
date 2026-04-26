import LivretSection, { InfoBox } from './LivretSection';
import { Phone } from 'lucide-react';

const contacts = [
  {
    cat: 'Urgences',
    items: [
      { label: 'SAMU', tel: '15', note: 'Urgences médicales' },
      { label: 'Police / Gendarmerie', tel: '17' },
      { label: 'Pompiers', tel: '18' },
      { label: "Numéro d'urgence européen", tel: '112' },
    ],
  },
  {
    cat: 'Médecins à Wimereux',
    items: [
      {
        label: 'Cabinet Dubroeucq, Boutoille, Delpierre',
        tel: '0321324245',
        telDisplay: '03.21.32.42.45',
        note: '117 rue Carnot, Wimereux — 180m',
      },
    ],
  },
  {
    cat: 'Pharmacies',
    items: [
      {
        label: 'Pharmacie Samarcq',
        tel: '0321324248',
        telDisplay: '03.21.32.42.48',
        note: '41 rue Carnot, Wimereux — 400m',
      },
      {
        label: 'Pharmacie Degrave',
        tel: '0321831632',
        telDisplay: '03.21.83.16.32',
        note: '84 Av. F. Mitterrand — distributeur auto 24h/24',
      },
    ],
  },
  {
    cat: 'Hôpital',
    items: [
      {
        label: 'Centre Hospitalier de Boulogne',
        tel: '0321993333',
        telDisplay: '03.21.99.33.33',
        note: 'Rue Jacques Monod, Boulogne — Urgences',
      },
    ],
  },
  {
    cat: 'Vos hôtes',
    items: [
      {
        label: 'Manu & Amélie',
        tel: '0781810869',
        telDisplay: '07.81.81.08.69',
        note: 'SMS ou WhatsApp de préférence',
      },
    ],
  },
];

export default function SectionContacts() {
  return (
    <LivretSection id="contacts" icon={Phone} title="Contacts utiles" accent="red">
      <div className="space-y-5">
        {contacts.map(({ cat, items }) => (
          <div key={cat}>
            <p className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-2">
              {cat}
            </p>
            <div className="space-y-2">
              {items.map(({ label, tel, note, ...rest }) => {
                const telDisplay = 'telDisplay' in rest
                  ? (rest as { telDisplay: string }).telDisplay
                  : undefined;
                return (
                  <div
                    key={label}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-xs gap-3"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-gray-800 truncate">{label}</p>
                      {note && <p className="text-xs text-gray-400">{note}</p>}
                    </div>
                    <a
                      href={`tel:${tel}`}
                      className="flex-shrink-0 flex items-center gap-1.5 bg-sea-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-sea-500 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      {telDisplay ?? tel}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="info">
        Un distributeur automatique médical est disponible devant la Pharmacie
        Degrave, ouvert 7j/7 et 24h/24.
      </InfoBox>
    </LivretSection>
  );
}
