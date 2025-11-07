import React from 'react';
import { getCollegeById } from '../../../lib/colleges';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { placeholderImage } from '../../../lib/placeholders';

type Props = {
  params: Promise<{ id: string }>;
};

export default async function CollegeDetailsPage({ params }: Props) {
  const paramsAwaited = await params;
  const college = getCollegeById(paramsAwaited.id);

  if (!college) {
    notFound();
  }

  const img =
    college?.image || placeholderImage('800x360', college?.name || 'College', college?.imageColor || undefined);

  return (
    <div className="py-8">
      <Link href="/colleges" className="text-sm text-blue-600 hover:underline">
        ← Povratak na sve sastanice
      </Link>

      <header className="mt-4 mb-6">
        <h1 className="text-3xl font-bold">{college?.name}</h1>
        {college?.location && <p className="text-gray-600">{college.location}</p>}
      </header>

      <img src={img} alt={college?.name} className="w-full h-60 object-cover rounded-md mb-6" />

      <section>
        <h2 className="text-xl font-semibold mb-2">O sastanici</h2>
        <p className="text-gray-700">{college?.description}</p>
      </section>
    </div>
  );
}
