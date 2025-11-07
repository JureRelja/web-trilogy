export type College = {
  id: string;
  name: string;
  description: string;
  location?: string;
  image?: string;
  imageColor?: string;
  programs?: string[];
  tags?: string[];
};

export const colleges: College[] = [
  {
    id: '1',
    name: 'Fakultet elektrotehnike i računarstva',
    description:
      'Fakultet elektrotehnike i računarstva Sveučilišta u Zagrebu (FER) vodeća je institucija za obrazovanje i istraživanje u području elektrotehnike, računarstva i informacijskih tehnologija u Hrvatskoj.',
    location: 'Zagreb',
    imageColor: 'indigo',
    image: '/colleges/fer_logo.png',
    tags: ['engineering', 'computer-science', 'it'],
  },
  {
    id: '2',
    name: 'Građevinski fakultet',
    description:
      'Građevinski fakultet Sveučilišta u Zagrebu nudi dinamične programe u inženjerstvu, umjetnosti i pomorskim znanostima.',
    location: 'Zagreb',
    imageColor: 'teal',
    image: '/colleges/gradjevina_logo.png',
    tags: ['engineering', 'civil', 'practical'],
  },
  {
    id: '3',
    name: 'Likovna akademija',
    description:
      'Likovna akademija Sveučilišta u Zagrebu nudi programe u području likovne umjetnosti, dizajna i vizualnih komunikacija.',
    location: 'Zagreb',
    imageColor: 'fuchsia',
    image: '/colleges/likovna_akademija.png',
    tags: ['art', 'design', 'creative'],
  },
  {
    id: '4',
    name: 'Ekonomski fakultet',
    description: 'Ekonomski fakultet Sveučilišta u Zagrebu nudi raznolike preddiplomske i diplomske programe.',
    location: 'Zagreb',
    imageColor: 'amber',
    image: '/colleges/efzg_logo.png',
    tags: ['business', 'economics', 'social'],
  },
  {
    id: '5',
    name: 'Agronomski fakultet',
    description:
      'Agronomski fakultet Sveučilišta u Zagrebu nudi programe u području poljoprivrede, prehrambene tehnologije i okolišnih znanosti.',
    location: 'Zagreb',
    imageColor: 'green',
    image: '/colleges/agronomski_logo.png',
    tags: ['agriculture', 'environment', 'practical'],
  },
  {
    id: '6',
    name: 'Tehničko veleučilište u Zagrebu',
    description:
      'Tehničko veleučilište u Zagrebu pruža stručne programe usmjerene na praktične vještine i tehnička znanja.',
    location: 'Zagreb',
    imageColor: 'slateblue',
    image: '/colleges/tz_logo.svg',
    tags: ['technical', 'vocational', 'practical'],
  },
  {
    id: '7',
    name: 'Medicinski fakultet',
    description:
      'Medicinski fakultet Sveučilišta u Zagrebu nudi vrhunske programe iz područja medicine i zdravstvenih znanosti.',
    location: 'Zagreb',
    imageColor: 'crimson',
    image: '/colleges/medicina_logo.png',
    tags: ['medicine', 'health', 'research'],
  },
  {
    id: '8',
    name: 'Stomatološki fakultet',
    description:
      'Stomatološki fakultet Sveučilišta u Zagrebu specijaliziran je za obrazovanje i istraživanje u području dentalne medicine.',
    location: 'Zagreb',
    imageColor: 'coral',
    image: '/colleges/stomatoloski_logo.png',
    tags: ['dental', 'health', 'practical'],
  },
  {
    id: '9',
    name: 'Fakultet strojarstva i brodogradnje',
    description:
      'Fakultet strojarstva i brodogradnje Sveučilišta u Zagrebu nudi programe iz područja strojarstva i brodogradnje.',
    location: 'Zagreb',
    imageColor: 'sky',
    image: '/colleges/fsb_logo.png',
    tags: ['mechanical', 'engineering', 'practical'],
  },
  {
    id: '10',
    name: 'Filozofski fakultet',
    description:
      'Filozofski fakultet Sveučilišta u Zagrebu nudi programe iz područja filozofije, sociologije i psihologije.',
    location: 'Zagreb',
    imageColor: 'lime',
    image: '/colleges/ffzg_logo.png',
    tags: ['social', 'humanities', 'theory'],
  },
];

export function getCollegeById(id: string) {
  return colleges.find((c) => c.id === id) || null;
}
