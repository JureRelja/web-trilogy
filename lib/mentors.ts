export type Mentor = {
  id: string;
  name: string;
  bio?: string;
  college?: string;
  image?: string;
  imageColor?: string;
};

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Ana Horvat',
    bio: 'Inženjer računarstva s 8+ godina iskustva u razvoju web i mobilnih aplikacija. Fokus na čistom kodu, testiranju i mentoriranju mladih developera kroz praktične zadatke.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'indigo',
  },
  {
    id: '2',
    name: 'Marko Marin',
    bio: 'Poduzetnik i mentor za startupe; iskustvo u validaciji ideja, fundraisingu i skaliranju SaaS proizvoda. Pomaže timovima da oblikuju MVP i mjerljive ciljeve rasta.',
    college: 'Ekonomski fakultet, Zagreb',
    imageColor: 'amber',
    
  },
  {
    id: '16',
    name: "Vlado Sruk",
    bio: 'Izvanredni profesor na Zavodu za elektroniku, mikroelektroniku, računalne i inteligentne sustave. Poseban interes: napredna digitalna elektronika, ugradbeni sustavi i mentorski rad na završnim projektima.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'amber',
    image: '/vlado_sruk.jpeg',
  },
  {
    id: '3',
    name: 'Ivana Kovač',
    bio: 'Stručnjakinja za digitalni marketing s iskustvom u kampanjama za e-trgovinu, edukaciju i B2B tehnologiju. Fokus na sadržajnom marketingu i analitici performansi.',
    college: 'Likovna akademija, Zagreb',
    imageColor: 'fuchsia',
  },
  {
    id: '4',
    name: 'Luka Perić',
    bio: 'Backend developer i DBA s fokusom na skalabilne sustave, optimizaciju upita i dizajn baza podataka. Mentorira najbolje prakse za API dizajn i sigurnost podataka.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'teal',
  },
  {
    id: '5',
    name: 'Petra Novak',
    bio: 'Konzultantica za karijere i HR. Pomaže studentima u pripremi CV-a, motivacijskih pisama i simulacijama tehničkih i behavioral intervjua.',
    college: 'Filozofski fakultet, Zagreb',
    imageColor: 'sky',
  },
  {
    id: '6',
    name: 'Tomislav Radić',
    bio: 'Software architect s iskustvom u cloud i distribuiranim sustavima. Fokus na mikroservisima, observability alatima i automatiziranoj isporuci.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'slategray',
  },
  {
    id: '7',
    name: 'Marija Jurić',
    bio: 'Data scientist s iskustvom u prediktivnom modeliranju i vizualizaciji podataka. Mentorira studente u Python ekosustavu (Pandas, scikit-learn) i osnovama MLOps-a.',
    college: 'Prirodoslovno-matematički fakultet, Zagreb',
    imageColor: 'green',
  },
  {
    id: '8',
    name: 'Đuro Kovačić',
    bio: 'Dizajner proizvoda fokusiran na UX istraživanja, dizajn sustave i pristupačnost. Radi na poboljšanju onboarding iskustva i optimizaciji korisničkih tokova.',
    college: 'Arhitektonski fakultet, Zagreb',
    imageColor: 'purple',
  },
  {
    id: '9',
    name: 'Ana-Maria Šimić',
    bio: 'Financijska analitičarka s iskustvom u modeliranju prihoda, planiranju budžeta i analizi profitabilnosti. Mentorira temeljne financijske metrike za tehnološke projekte.',
    college: 'Ekonomski fakultet, Zagreb',
    imageColor: 'gold',
  },
  {
    id: '10',
    name: 'Karlo Babić',
    bio: 'Inženjer elektrotehnike s fokusom na robotiku, automatizaciju i senzorske sustave. Pomaže u projektima iz mehatronike i kontrolnih algoritama.',
    college: 'Tehničko veleučilište, Rijeka',
    imageColor: 'crimson',
  },
  {
    id: '11',
    name: 'Ivana Dukić',
    bio: 'Stručnjakinja za digitalni marketing i društvene mreže. Fokus na strategiji sadržaja, rastu organskih kanala i analizi angažmana.',
    college: 'Fakultet političkih znanosti, Zagreb',
    imageColor: 'coral',
  },
  {
    id: '12',
    name: 'Dario Lukić',
    bio: 'DevOps inženjer i instruktor za CI/CD alate. Pomaže studentima u razumijevanju pipelinea, infrastrukture kao koda i monitoringa produkcijskih sustava.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'navy',
  },
  {
    id: '13',
    name: 'Maja Perković',
    bio: 'Stručnjakinja za ljudske resurse i razvoj karijera. Radi na programima umrežavanja, internim edukacijama i podršci studentima pri pronalasku prakse.',
    college: 'Ekonomski fakultet, Split',
    imageColor: 'olive',
  },
  {
    id: '14',
    name: 'Željko Novak',
    bio: 'Poduzetnik u području zdravstva i tehnologije; iskustvo u razvoju rješenja s društvenim utjecajem i partnerstvima s institucijama.',
    college: 'Medicinski fakultet, Zagreb',
    imageColor: 'maroon',
  },
  {
    id: '15',
    name: 'Sara Kralj',
    bio: 'UX researcher s iskustvom u kvalitativnim i kvantitativnim metodama istraživanja. Pomaže u testiranju prototipova, mapiranju korisničkih putanja i analizi heuristika.',
    college: 'Fakultet organizacije i informatike, Varaždin',
    imageColor: 'plum',
  },
];

export function getMentorById(id: string) {
  return mentors.find((m) => m.id === id) || null;
}
