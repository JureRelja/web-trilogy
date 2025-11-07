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
      'Fakultet elektrotehnike i računarstva (FER) vodeća je institucija u Hrvatskoj za obrazovanje i istraživanje u području elektrotehnike, računarstva i informacijskih tehnologija. <br><br>Programi pokrivaju sve od digitalne logike, strojnog učenja i obrade signala do energetskih sustava, komunikacija i razvoja softvera, uz snažan naglasak na interdisciplinarnim projektima. <br><br>Studenti imaju pristup modernim laboratorijima, natjecanjima (hackathoni, robotika, AI izazovi) i suradnji s industrijom kroz stručne prakse, centre izvrsnosti i zajedničke istraživačke projekte. <br><br>FER intenzivno potiče poduzetništvo i inovacije kroz startup inkubatore, mentorstvo, predakceleracijske programe i povezivanje s investitorima. <br><br>Aktivna zajednica studentskih udruga (poput KSET-a, IEEE, EESTEC, AI sekcija) pruža prilike za neformalno učenje, vodstvo i organizaciju konferencija, radionica i tehničkih natjecanja. <br><br>Uz formalnu nastavu, naglasak je na praktičnoj primjeni znanja: projektni timovi, open-source doprinosi, istraživačke grupe i suradnja s međunarodnim partnerima pripremaju studente za globalno tržište rada. <br><br>Kultura stalnog napretka, dostupnost mentora i otvorenost prema novim tehnologijama čine FER okruženjem koje motivira, izaziva i ubrzava profesionalni razvoj.',
    location: 'Zagreb',
    imageColor: 'indigo',
    image: '/colleges/fer_logo.png',
    tags: ['engineering', 'computer-science', 'it'],
  },
  {
    id: '2',
    name: 'Građevinski fakultet',
    description:
      'Građevinski fakultet Sveučilišta u Zagrebu pokriva područja konstrukcija, geotehnike, hidrotehnike, prometnica i materijala. Studenti stječu snažnu teorijsku podlogu uz praktične projekte i laboratorijski rad.',
    location: 'Zagreb',
    imageColor: 'teal',
    image: '/colleges/gradjevina_logo.png',
    tags: ['engineering', 'civil', 'practical'],
  },
  {
    id: '3',
    name: 'Likovna akademija',
    description:
      'Likovna akademija nudi studije slikarstva, grafike, kiparstva i novih medija. Naglasak je na kreativnom izrazu, razvoju vizualnog identiteta i eksperimentiranju s različitim tehnikama.',
    location: 'Zagreb',
    imageColor: 'fuchsia',
    image: '/colleges/likovna_akademija.png',
    tags: ['art', 'design', 'creative'],
  },
  {
    id: '4',
    name: 'Ekonomski fakultet',
    description: 'Ekonomski fakultet Sveučilišta u Zagrebu nudi raznolike preddiplomske i diplomske programe.',
    // Expanded description kept concise to avoid duplication
    location: 'Zagreb',
    imageColor: 'amber',
    image: '/colleges/efzg_logo.png',
    tags: ['business', 'economics', 'social'],
  },
  {
    id: '5',
    name: 'Agronomski fakultet',
    description:
      'Agronomski fakultet nudi programe iz poljoprivrede, hortikulture, prehrambene tehnologije i okolišnih znanosti. Studenti sudjeluju u terenskim istraživanjima, pokusnim nasadima i projektima održivosti.',
    location: 'Zagreb',
    imageColor: 'green',
    image: '/colleges/agronomski_logo.png',
    tags: ['agriculture', 'environment', 'practical'],
  },
  {
    id: '6',
    name: 'Tehničko veleučilište u Zagrebu',
    description:
      'Tehničko veleučilište u Zagrebu fokusira se na stručne programe usmjerene na praktične vještine, primijenjeno inženjerstvo i pripremu za tržište rada kroz laboratorijsku nastavu i projekte.',
    location: 'Zagreb',
    imageColor: 'slateblue',
    image: '/colleges/tz_logo.svg',
    tags: ['technical', 'vocational', 'practical'],
  },
  {
    id: '7',
    name: 'Medicinski fakultet',
    description:
      'Medicinski fakultet nudi programe medicine i zdravstvenih znanosti uz kliničku praksu u bolnicama. Studenti prolaze kroz temeljne i napredne medicinske discipline te sudjeluju u istraživačkim projektima.',
    location: 'Zagreb',
    imageColor: 'crimson',
    image: '/colleges/medicina_logo.png',
    tags: ['medicine', 'health', 'research'],
  },
  {
    id: '8',
    name: 'Stomatološki fakultet',
    description:
      'Stomatološki fakultet specijaliziran je za dentalnu medicinu; studenti uče kroz simulacije zahvata, kliničku praksu i istraživanja vezana uz oralno zdravlje.',
    location: 'Zagreb',
    imageColor: 'coral',
    image: '/colleges/stomatoloski_logo.png',
    tags: ['dental', 'health', 'practical'],
  },
  {
    id: '9',
    name: 'Fakultet strojarstva i brodogradnje',
    description:
      'Fakultet strojarstva i brodogradnje (FSB) pokriva mehaniku, termotehniku, energetiku i brodogradnju. Naglasak na projektnoj nastavi, laboratorijima i suradnji s industrijskim partnerima.',
    location: 'Zagreb',
    imageColor: 'sky',
    image: '/colleges/fsb_logo.png',
    tags: ['mechanical', 'engineering', 'practical'],
  },
  {
    id: '10',
    name: 'Filozofski fakultet',
    description:
      'Filozofski fakultet pokriva širok spektar društvenih i humanističkih disciplina uključujući filozofiju, sociologiju, psihologiju i lingvistiku. Potiče kritičko razmišljanje i interdisciplinarni pristup.',
    location: 'Zagreb',
    imageColor: 'lime',
    image: '/colleges/ffzg_logo.png',
    tags: ['social', 'humanities', 'theory'],
  },
];

export function getCollegeById(id: string) {
  return colleges.find((c) => c.id === id) || null;
}
