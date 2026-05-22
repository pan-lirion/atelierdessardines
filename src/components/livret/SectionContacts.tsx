import { getTranslations } from 'next-intl/server';
import LivretSection, { InfoBox } from './LivretSection';
import { Phone } from 'lucide-react';

const contactData = [
  {
    catKey: 'cat0',
    items: [
      { label: 'SAMU', tel: '15', note: null },
      { label: 'Police / Gendarmerie', tel: '17', note: null },
      { label: 'Pompiers', tel: '18', note: null },
      { label: 'Numéro européen', tel: '112', note: null },
    ],
  },
  {
    catKey: 'cat1',
    items: [
      { label: 'Cabinet Dubroeucq, Boutoille, Delpierre', tel: '0321324245', telDisplay: '03.21.32.42.45', note: '117 rue Carnot, Wimereux — 180m' },
    ],
  },
  {
    catKey: 'cat2',
    items: [
      { label: 'Pharmacie Samarcq', tel: '0321324248', telDisplay: '03.21.32.42.48', note: '41 rue Carnot, Wimereux — 400m' },
      { label: 'Pharmacie Degrave', tel: '0321831632', telDisplay: '03.21.83.16.32', note: '84 Av. F. Mitterrand — distributeur 24h/24' },
    ],
  },
  {
    catKey: 'cat3',
    items: [
      { label: 'Centre Hospitalier de Boulogne', tel: '0321993333', telDisplay: '03.21.99.33.33', note: 'Rue Jacques Monod, Boulogne — Urgences' },
    ],
  },
  {
    catKey: 'cat4',
    items: [
      { label: 'Manu & Amélie', tel: '0781810869', telDisplay: '07.81.81.08.69', noteKey: 'host_note' },
    ],
  },
] as const;

export default async function SectionContacts() {
  const t = await getTranslations('SectionContacts');

  return (
    <LivretSection id="contacts" icon={Phone} title={t('title')} accent="red">
      <div className="space-y-5">
        {contactData.map(({ catKey, items }) => (
          <div key={catKey}>
            <p className="font-semibold text-gray-800 text-xs uppercase tracking-wide mb-2">
              {t(catKey)}
            </p>
            <div className="space-y-2">
              {items.map((item) => {
                const display = 'telDisplay' in item ? item.telDisplay : item.tel;
                const note = 'noteKey' in item ? t(item.noteKey as 'host_note') : ('note' in item ? item.note : null);
                return (
                  <div
                    key={item.label}
                    className="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow-xs gap-3"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm text-gray-800 truncate">{item.label}</p>
                      {note && <p className="text-xs text-gray-400">{note}</p>}
                    </div>
                    <a
                      href={`tel:${item.tel}`}
                      className="flex-shrink-0 flex items-center gap-1.5 bg-sea-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-sea-500 transition-colors"
                    >
                      <Phone className="w-3 h-3" />
                      {display}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <InfoBox type="info">{t('info')}</InfoBox>
    </LivretSection>
  );
}
