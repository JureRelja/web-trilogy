export type StudentGroup = {
  id: string;
  name: string;
  description: string;
  city?: string;
  image?: string;
};

export const studentGroups: StudentGroup[] = [
  {
    id: '1',
    name: 'EESTEC LC Zagreb',
    description: 'Studentska udruga za razvoj tehničkih i društvenih vještina u području elektrotehnike i računarstva.',
    city: 'Zagreb',
  },
  {
    id: '2',
    name: 'Best',
    description: 'Studentska udruga koja se fokusira na osobni i profesionalni razvoj studenata.',
    city: 'Zagreb',
  },
  {
    id: '3',
    name: 'KSET',
    description: 'Klub studenata elektrotehnike i računarstva, poznat po organizaciji evenata i radionica.',
    city: 'Zagreb',
  },
  {
    id: '4',
    name: 'E-student',
    description: 'Studentska udruga koja promiče poduzetništvo, inovacije i tehnološki razvoj među studentima.',
    city: 'Zagreb',
  },
  {
    id: '5',
    name: 'HAZef',
    description: 'Hrvatska akademska zajednica Ekonomskog fakulteta u Zagrebu',
    city: 'Zagreb',
  },
];

export function getStudentGroupById(id: string) {
  return studentGroups.find((s) => s.id === id) || null;
}
