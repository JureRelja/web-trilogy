export type StudentGroup = {
  id: string;
  name: string;
  description: string;
  city?: string;
  image?: string;
  imageColor?: string;
};

export const studentGroups: StudentGroup[] = [
  {
    id: '1',
    name: 'EESTEC LC Zagreb',
    description: 'Studentska udruga za razvoj tehničkih i društvenih vještina u području elektrotehnike i računarstva.',
    city: 'Zagreb',
    imageColor: 'navy',
  },
  {
    id: '2',
    name: 'BEST Zagreb',
    description: 'Studentska udruga koja potiče profesionalni razvoj kroz edukacije i razmjenu iskustava.',
    city: 'Zagreb',
    imageColor: 'teal',
  },
  {
    id: '3',
    name: 'KSET',
    description: 'Klub studenata elektrotehnike i računarstva, poznat po organizaciji evenata i radionica.',
    city: 'Zagreb',
    imageColor: 'purple',
  },
  {
    id: '4',
    name: 'Robotics Club Zagreb',
    description: 'Studentski klub fokusiran na robotiku i natjecanja.',
    city: 'Zagreb',
    imageColor: 'indigo',
  },
  {
    id: '5',
    name: 'Environmental Action Group',
    description: 'Udruga za održivost i projekte vezane uz okoliš.',
    city: 'Rijeka',
    imageColor: 'seagreen',
  },
];

export function getStudentGroupById(id: string) {
  return studentGroups.find((s) => s.id === id) || null;
}
