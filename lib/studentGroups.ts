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
    image: '/student-groups/eestec_logo.png',
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
