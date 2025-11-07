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
    bio: 'Inženjer računarstva s iskustvom u razvoju softvera i mentoriranju studenata.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'indigo',
  },
  {
    id: '2',
    name: 'Marko Marin',
    bio: 'Poduzetnik i mentor za startupe, fokusira se na proizvod i rast.',
    college: 'Ekonomski fakultet, Zagreb',
    imageColor: 'amber',
  },
  {
    id: '3',
    name: 'Ivana Kovač',
    bio: 'Stručnjakinja za digitalni marketing s iskustvom u vođenju kampanja za različite industrije.',
    college: 'Likovna akademija, Zagreb',
    imageColor: 'fuchsia',
  },
  {
    id: '4',
    name: 'Luka Perić',
    bio: 'Backend developer i DBA; pomažem studentima s bazama podataka i arhitekturom sustava.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'teal',
  },
  {
    id: '5',
    name: 'Petra Novak',
    bio: 'Konzultantica za karijere i HR; savjetujem kako napisati dobar CV i pripremiti se za intervjue.',
    college: 'Filozofski fakultet, Zagreb',
    imageColor: 'sky',
  },
  {
    id: '6',
    name: 'Tomislav Radić',
    bio: 'Software architect s iskustvom u cloud rješenjima i DevOps praksama.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'slategray',
  },
  {
    id: '7',
    name: 'Marija Jurić',
    bio: 'Data scientist; mentorira studente u Pythonu, strojnome učenju i analizi podataka.',
    college: 'Prirodoslovno-matematički fakultet, Zagreb',
    imageColor: 'green',
  },
  {
    id: '8',
    name: 'Đuro Kovačić',
    bio: 'Iskusni dizajner proizvoda, fokusiran na UX i dizajn misija.',
    college: 'Arhitektonski fakultet, Zagreb',
    imageColor: 'purple',
  },
  {
    id: '9',
    name: 'Ana-Maria Šimić',
    bio: 'Financijska analitičarka; može pomoći s temama iz financija i poslovne analize.',
    college: 'Ekonomski fakultet, Zagreb',
    imageColor: 'gold',
  },
  {
    id: '10',
    name: 'Karlo Babić',
    bio: 'Inženjer elektrotehnike s iskustvom u robotici i automatizaciji.',
    college: 'Tehničko veleučilište, Rijeka',
    imageColor: 'crimson',
  },
  {
    id: '11',
    name: 'Ivana Dukić',
    bio: 'Stručnjakinja za marketing i društvene mreže; mentorira studente u izgradnji brenda.',
    college: 'Fakultet političkih znanosti, Zagreb',
    imageColor: 'coral',
  },
  {
    id: '12',
    name: 'Dario Lukić',
    bio: 'DevOps inženjer i instruktor za CI/CD alate i prakse.',
    college: 'Fakultet elektrotehnike i računarstva, Zagreb',
    imageColor: 'navy',
  },
  {
    id: '13',
    name: 'Maja Perković',
    bio: 'Stručnjakinja za ljudske resurse i razvoj karijera; pomaže u umrežavanju i pronalasku praksi.',
    college: 'Ekonomski fakultet, Split',
    imageColor: 'olive',
  },
  {
    id: '14',
    name: 'Željko Novak',
    bio: 'Poduzetnik u području zdravstva i tehnologije; mentor za projekte s društvenim utjecajem.',
    college: 'Medicinski fakultet, Zagreb',
    imageColor: 'maroon',
  },
  {
    id: '15',
    name: 'Sara Kralj',
    bio: 'UX researcher s iskustvom u istraživanjima korisničkog iskustva i testiranju produkta.',
    college: 'Fakultet organizacije i informatike, Varaždin',
    imageColor: 'plum',
  },
];

export function getMentorById(id: string) {
  return mentors.find((m) => m.id === id) || null;
}
