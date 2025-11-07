export type StudentGroup = {
  id: string;
  name: string;
  description: string;
  city?: string;
  image?: string;
  imageColor?: string;
  events?: Event[];
};

export type Event = {
  id: string;
  title: string;
  image: string;
  description: string;
  dates?: string;
  edition?: string;
  categories?: string[];
};

export const studentGroups: StudentGroup[] = [
  {
    id: '1',
    name: 'EESTEC LC Zagreb',
    description: 'Studentska udruga za razvoj tehničkih i društvenih vještina u području elektrotehnike i računarstva.',
    city: 'Zagreb',
    imageColor: 'navy',
    image: '/student-groups/eestec_logo.png',
    events: [
      {
        id: 'plc-2025',
        title: 'PLC (Programmable Logic Controllers)',
        image: '/student-groups/PLC_logo.svg',
        description:
          'Projektiranje sustava pomoću PLC-ova, programerske tehnike i 24-satno natjecanje.',
        dates: '13. – 27. listopada 2025.',
        edition: '4. izdanje',
        categories: ['Radionica', 'Automatizacija', '24h natjecanje'],
      },
      {
        id: 'web-trilogy-2025',
        title: 'Web Trilogy',
        image: '/student-groups/WEB_logo.png',
        description:
          'Tri međusobno povezana modula: dizajn, frontend i backend. Polaznici prolaze cijeli razvojni ciklus kroz zadatke i mini-projekt.',
        dates: '3. - 8. studenog 2025.',
        categories: ['Web', 'Frontend', 'Backend', 'UI/UX'],
      },
      {
        id: 'dosasce-2025',
        title: 'Došašće++',
        image: '/student-groups/Dosasce_Logo.png',
        description:
          'Online božićno optimizacijsko natjecanje inspirirano Advent of Codeom (2 kola). Organizirano u suradnji s X.FER-om.',
        dates: '1. - 25. prosinca 2025.',
        categories: ['Natjecanje', 'Online', 'Optimizacija'],
      },
      {
        id: 'neodata-2025',
        title: 'NEODATA – Data Science radionica',
        image: '/student-groups/NeoData_Logo.png',
        description:
          'Predavanja o obradi podataka i analitici uz strojno učenje, s završnim hackathonom.',
        dates: '8. – 14. prosinca 2025.',
        categories: ['Data Science', 'ML', 'Hackathon'],
      },
      {
        id: 'wes-2026',
        title: 'WES (Workshop on Embedded Systems)',
        image: '/student-groups/WES_Logo.svg',
        description:
          'WES je radionica na temu ugradbenih računalnih sustava i dio je dugogodišnje tradicije EESTEC-a. Teorijska predavanja završavaju 24-satnim hackathonom.',
        dates: '16. – 29. ožujka 2026.',
        edition: '10. izdanje',
        categories: ['Radionica', '24h hackathon'],
      },
      {
        id: 'algotrade-2026',
        title: 'AlgoTrade Hackathon',
        image: '/student-groups/Algotrade_Logo.svg',
        description:
          'Algotrade je najveći studentski hackathon u Europi posvećen algoritamskom trgovanju, koji okuplja preko 300 studenata, organiziran u suradnji s X.FER-om.',
        dates: '4. – 10. svibnja 2026.',
        edition: '4. izdanje',
        categories: ['Hackathon', 'FinTech'],
      },
    ],
  },
  {
    id: '2',
    name: 'BEST Zagreb',
    description: 'Studentska udruga koja potiče profesionalni razvoj kroz edukacije i razmjenu iskustava.',
    city: 'Zagreb',
    imageColor: 'teal',
    image: '/student-groups/best_logo.jpg',
  },
  {
    id: '3',
    name: 'KSET',
    description: 'Klub studenata elektrotehnike i računarstva, poznat po organizaciji evenata i radionica.',
    city: 'Zagreb',
    imageColor: 'purple',
    image: '/student-groups/kset_logo.png',
  },
  {
    id: '4',
    name: 'E student',
    description: 'Studentska udruga usmjerena na promicanje tehničkog obrazovanja i inovacija.',
    city: 'Zagreb',
    imageColor: 'indigo',
    image: '/student-groups/estudent_logo.png',
  },
  {
    id: '5',
    name: 'HAZef',
    description: 'Hrvatska akademska zajednica za zaštitu okoliša i prirode.',
    city: 'Zagreb',
    imageColor: 'seagreen',
    image: '/student-groups/hazef_logo.png',
  },
  {
    id: '6',
    name: 'Financijski klub',
    description: 'Studentska udruga fokusirana na financije i poduzetništvo.',
    city: 'Zagreb',
    imageColor: 'seagreen',
    image: '/student-groups/financijski_klub_logo.png',
  },
];

export function getStudentGroupById(id: string) {
  return studentGroups.find((s) => s.id === id) || null;
}
