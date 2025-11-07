import React from 'react';
import DashboardCard from './components/DashboardCard';

export default async function Home() {
  const cards: { title: string; href: string; imageColor?: string; icon?: string }[] = [
    { title: 'Sastanice', href: '/colleges', imageColor: 'indigo', icon: 'meetings' },
    { title: 'Studentske udruge', href: '/student-groups', imageColor: 'teal', icon: 'groups' },
    { title: 'Mentori', href: '/mentors', imageColor: 'fuchsia', icon: 'mentors' },
    { title: 'Ponuda poslova', href: '/jobs', imageColor: 'orange', icon: 'jobs' },
    { title: 'Pronađi savršeni fakultet', href: '/survey/college', imageColor: 'sky', icon: 'college' },
    { title: 'Pronađi savršeni posao', href: '/survey/job', imageColor: 'green', icon: 'search-job' },
    { title: 'Pronađi savršenog mentora', href: '/survey/mentor', imageColor: 'purple', icon: 'search-job' },
  ];

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12">
      <div className="w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-stretch">
          {cards.map((c) => (
            <div key={c.href} className="flex justify-center">
              <DashboardCard title={c.title} href={c.href} imageColor={c.imageColor} icon={c.icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
