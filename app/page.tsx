import React from 'react';
import DashboardCard from './components/DashboardCard';

export default async function Home() {
  const cards = [
    { title: 'Sastanice', href: '/colleges' },
    { title: 'Studentske udruge', href: '/student-groups' },
    { title: 'Ponuda poslova', href: '/jobs' },
    { title: 'Pronađi savršeni fakultet', href: '/survey/college' },
    { title: 'Pronađi savršeni posao', href: '/survey/job' },
    { title: 'Pronađi savršenog mentora', href: '/survey/mentor' },
    { title: 'Mentori', href: '/mentors' },
  ];

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {cards.map((c) => (
            <div key={c.href} className="flex justify-center">
              <DashboardCard title={c.title} href={c.href} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
