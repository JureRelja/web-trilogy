import React from 'react';
import { getStudentGroupById } from '../../../lib/studentGroups';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { placeholderImage } from '../../../lib/placeholders';

type Props = { params: Promise<{ id: string }> };

export default async function StudentGroupDetails({ params }: Props) {
  const paramsAwaited = await params;
  const group = getStudentGroupById(paramsAwaited.id);
  if (!group) notFound();

  const img = group.image || placeholderImage('800x360', group.name);

  return (
    <div className="py-8">
      <Link href="/student-groups" className="text-sm text-blue-600 hover:underline">
        ← Povratak na udruge
      </Link>

      <header className="mt-4 mb-6">
        <h1 className="text-3xl font-bold">{group?.name}</h1>
        {group?.city && <p className="text-gray-600">{group.city}</p>}
      </header>

      <img src={img} alt={group?.name} className="w-full h-60 object-cover rounded-md mb-6" />

      <section>
        <h2 className="text-xl font-semibold mb-2">Opis</h2>
        <p className="text-gray-700">{group?.description}</p>
      </section>
    </div>
  );
}
