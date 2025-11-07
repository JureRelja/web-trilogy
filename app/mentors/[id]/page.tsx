import React from 'react';
import { getMentorById } from '../../../lib/mentors';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { placeholderImage } from '../../../lib/placeholders';

type Props = { params: { id: string } };

export default function MentorDetails({ params }: Props) {
  const mentor = getMentorById(params.id);
  if (!mentor) notFound();

  const img = mentor.image || placeholderImage('400x400', mentor.name);

  return (
    <div className="py-8">
      <Link href="/mentors" className="text-sm text-blue-600 hover:underline">
        ← Povratak na mentore
      </Link>

      <header className="mt-4 mb-6 flex items-center gap-4">
        <img src={img} alt={mentor?.name} className="w-20 h-20 rounded-full object-cover" />
        <div>
          <h1 className="text-3xl font-bold">{mentor?.name}</h1>
          {mentor?.college && <p className="text-gray-600">{mentor.college}</p>}
        </div>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-2">O mentoru</h2>
        <p className="text-gray-700">{mentor?.bio}</p>
      </section>
    </div>
  );
}
