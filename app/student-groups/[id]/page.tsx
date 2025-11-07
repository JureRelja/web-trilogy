import React from 'react';
import { getStudentGroupById } from '../../../lib/studentGroups';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { placeholderImage } from '../../../lib/placeholders';

type Props = { params: Promise<{ id: string }> };

export default async function StudentGroupDetails({ params }: Props) {
  const paramsAwaited = await params;
  const group = getStudentGroupById(paramsAwaited.id);
  if (!group) notFound();

  const img = group.image || placeholderImage('800x360', group.name, group.imageColor);

  return (
    <div className="py-8">
      <Link href="/student-groups" className="text-sm text-blue-600 hover:underline">
        ← Povratak na udruge
      </Link>

      <header className="mt-4 mb-6">
        <h1 className="text-3xl font-bold">{group?.name}</h1>
        {group?.city && <p className="text-gray-600">{group.city}</p>}
      </header>

      <div className="w-full h-60 relative mb-6 rounded-md overflow-hidden">
        <Image src={img} alt={group?.name || 'group image'} fill className="object-cover" unoptimized />
      </div>

      <section>
        <h2 className="text-xl font-semibold mb-2">Opis</h2>
        <p className="text-gray-700">{group?.description}</p>
      </section>

      {group?.events && group.events.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Događaji</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {group.events.map((ev) => (
              <article key={ev.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative w-full h-40 bg-gray-100">
                  <Image src={ev.image} alt={ev.title} fill className="object-contain" unoptimized />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{ev.title}</h3>
                  {ev.dates && <div className="text-sm text-gray-500 mt-1">{ev.dates}</div>}
                  {ev.edition && <div className="text-sm text-gray-500">{ev.edition}</div>}
                  <p className="text-sm text-gray-700 mt-2">{ev.description}</p>
                  {ev.categories && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {ev.categories.map((c) => (
                        <span key={c} className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
