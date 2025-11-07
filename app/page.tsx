import React from 'react';
import DashboardCard from './components/DashboardCard';

export default async function Home() {
  const cards: { title: string; href: string; imageColor?: string }[] = [
    { title: 'Sastanice', href: '/colleges', imageColor: 'indigo' },
    { title: 'Studentske udruge', href: '/student-groups', imageColor: 'teal' },
    { title: 'Mentori', href: '/mentors', imageColor: 'fuchsia' },
    { title: 'Ponuda poslova', href: '/jobs', imageColor: 'orange' },
    { title: 'Pronađi savršeni fakultet', href: '/survey/college', imageColor: 'sky' },
    { title: 'Pronađi savršeni posao', href: '/survey/job', imageColor: 'green' },
    { title: 'Pronađi savršenog mentora', href: '/survey/mentor', imageColor: 'purple' },
  ];

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {cards.map((c) => (
            <div key={c.href} className="flex justify-center">
              <DashboardCard title={c.title} href={c.href} imageColor={c.imageColor} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
