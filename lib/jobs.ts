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
    description: '3-mjesečna praksa rada na React aplikacijama.',
    imageColor: 'orange',
  },
  {
    id: '2',
    title: 'Analitičar podataka',
    company: 'Insight Labs',
    location: 'Split',
    description: 'Početnička pozicija za analitičara; poželjno poznavanje SQL-a i Pythona.',
    imageColor: 'teal',
  },
  {
    id: '3',
    title: 'Asistent/ica u marketingu',
    company: 'Creative Co.',
    location: 'Rijeka',
    description: 'Podrška marketinškim kampanjama i upravljanju društvenim mrežama.',
    imageColor: 'coral',
  },
  {
    id: '4',
    title: 'Backend developer',
    company: 'NovaSoft',
    location: 'Zagreb',
    description: 'Razvoj REST/GraphQL API-ja u Node.js-u, rad s bazama podataka.',
    imageColor: 'indigo',
  },
  {
    id: '5',
    title: 'UX/UI dizajner',
    company: 'Studio Kreativa',
    location: 'Split',
    description: 'Dizajn korisničkih sučelja, prototipiranje i testiranje upotrebljivosti.',
    imageColor: 'fuchsia',
  },
  {
    id: '6',
    title: 'DevOps inženjer',
    company: 'CloudWorks',
    location: 'Rijeka',
    description: 'Postavljanje CI/CD procesa, automatizacija i upravljanje infrastrukturom.',
    imageColor: 'slategray',
  },
  {
    id: '7',
    title: 'QA inženjer',
    company: 'TestLab',
    location: 'Zagreb',
    description: 'Automatizacija testova i ručno testiranje web aplikacija.',
    imageColor: 'gold',
  },
  {
    id: '8',
    title: 'Product manager',
    company: 'MarketLead',
    location: 'Zagreb',
    description: 'Vođenje razvoja proizvoda, definiranje roadmapa i suradnja s timovima.',
    imageColor: 'olive',
  },
  {
    id: '9',
    title: 'Poslovni analitičar',
    company: 'BizConsult',
    location: 'Split',
    description: 'Analiza zahtjeva i komunikacija s dionicima u projektima.',
    imageColor: 'peru',
  },
  {
    id: '10',
    title: 'Asistent za istraživanje',
    company: 'Sveučilište u Zagrebu',
    location: 'Zagreb',
    description: 'Pomoć pri akademskim istraživanjima i analiza podataka.',
    imageColor: 'khaki',
  },
  {
    id: '11',
    title: 'Pripravnik za UI/UX',
    company: 'DesignHub',
    location: 'Zagreb',
    description: 'Pripravništvo u dizajnu sučelja i izradi vizualnih rješenja.',
    imageColor: 'plum',
  },
  {
    id: '12',
    title: 'Služba za korisnike',
    company: 'Supporto',
    location: 'Dubrovnik',
    description: 'Rad u korisničkoj podršci, komunikacija s klijentima i rješavanje upita.',
    imageColor: 'turquoise',
  },
];

export function getJobById(id: string) {
  return jobs.find((j) => j.id === id) || null;
}
