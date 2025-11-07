export type Job = {
  id: string;
  title: string;
  company: string;
  location?: string;
  description?: string;
  image?: string;
  imageColor?: string;
};

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend pripravnik',
    company: 'Acme Tech',
    location: 'Zagreb',
    description:
      '3-mjesečna praksa rada na React aplikacijama s mentoriranjem. Sudjelovanje u razvoju novih komponenti, sitnim popravcima bugova i pisanju osnovnih testova. Idealno za studente koji žele naučiti standardne timske procese (Git, code review, CI/CD).',
    imageColor: 'orange',
  },
  {
    id: '2',
    title: 'Analitičar podataka',
    company: 'Insight Labs',
    location: 'Split',
    description:
      'Početnička pozicija za analitičara podataka. Radi se na pripremi skupova podataka, pisanju SQL upita, izradi izvještaja i osnovnoj analitici u Pythonu. Poželjno poznavanje Pandasa i alata za vizualizaciju (Metabase, Power BI).',
    imageColor: 'teal',
  },
  {
    id: '3',
    title: 'Asistent/ica u marketingu',
    company: 'Creative Co.',
    location: 'Rijeka',
    description:
      'Podrška marketinškim kampanjama, društvenim mrežama i izradi sadržaja. Suradnja s dizajn timom, priprema newslettera i analiza učinka kampanja. Od kandidata se očekuje odlična pismenost i proaktivnost.',
    imageColor: 'coral',
  },
  {
    id: '4',
    title: 'Backend developer',
    company: 'NovaSoft',
    location: 'Zagreb',
    description:
      'Razvoj REST/GraphQL API-ja u Node.js-u te rad s relacijskim i NoSQL bazama. Sudjelovanje u dizajnu arhitekture, code reviewu i automatiziranim testovima. Poznavanje TypeScripta je prednost.',
    imageColor: 'indigo',
  },
  {
    id: '5',
    title: 'UX/UI dizajner',
    company: 'Studio Kreativa',
    location: 'Split',
    description:
      'Dizajn korisničkih sučelja i prototipiranje uz suradnju s proizvodnim timom. Istraživanje potreba korisnika, izrada žičanih okvira i vođenje testiranja upotrebljivosti. Prednost je poznavanje Figma alata.',
    imageColor: 'fuchsia',
  },
  {
    id: '6',
    title: 'DevOps inženjer',
    company: 'CloudWorks',
    location: 'Rijeka',
    description:
      'Postavljanje i održavanje CI/CD procesa, automatizacija buildova i deploya, praćenje sustava te optimizacija troškova. Rad s Dockerom i Kubernetesom uz IaC prakse (Terraform).',
    imageColor: 'slategray',
  },
  {
    id: '7',
    title: 'QA inženjer',
    company: 'TestLab',
    location: 'Zagreb',
    description:
      'Automatizacija testova i ručno testiranje web aplikacija. Pisanje test planova, definiranje slučajeva testiranja i rad s alatima za automatizaciju (Playwright/Cypress). Suradnja s timom na poboljšanju kvalitete.',
    imageColor: 'gold',
  },
  {
    id: '8',
    title: 'Product manager',
    company: 'MarketLead',
    location: 'Zagreb',
    description:
      'Vođenje razvoja proizvoda kroz definiranje vizije, prioriteta i roadmapa. Uska suradnja s dizajnom, inženjeringom i prodajom. Prikupljanje povratnih informacija od korisnika i mjerenje uspješnosti izdanja.',
    imageColor: 'olive',
  },
  {
    id: '9',
    title: 'Poslovni analitičar',
    company: 'BizConsult',
    location: 'Split',
    description:
      'Analiza poslovnih zahtjeva, izrada specifikacija i modela procesa. Fasilitacija komunikacije između dionika i tehničkih timova te podrška u testiranju i rolloutu novih rješenja.',
    imageColor: 'peru',
  },
  {
    id: '10',
    title: 'Asistent za istraživanje',
    company: 'Sveučilište u Zagrebu',
    location: 'Zagreb',
    description:
      'Pomoć pri akademskim istraživanjima, prikupljanje podataka i izrada analitičkih izvještaja. Sudjelovanje u pripremi publikacija i prezentacija uz mentorstvo voditelja projekta.',
    imageColor: 'khaki',
  },
  {
    id: '11',
    title: 'Pripravnik za UI/UX',
    company: 'DesignHub',
    location: 'Zagreb',
    description:
      'Pripravništvo u dizajnu sučelja i izradi vizualnih rješenja. Učenje kroz rad s iskusnim mentorima, izrada prototipova i prilagodba dizajna temeljem povratnih informacija korisnika.',
    imageColor: 'plum',
  },
  {
    id: '12',
    title: 'Služba za korisnike',
    company: 'Supporto',
    location: 'Dubrovnik',
    description:
      'Rad u korisničkoj podršci, komunikacija s klijentima i rješavanje upita putem više kanala. Dokumentiranje slučajeva, eskalacija složenijih problema i suradnja s proizvodnim timom na poboljšanjima.',
    imageColor: 'turquoise',
  },
];

export function getJobById(id: string) {
  return jobs.find((j) => j.id === id) || null;
}
