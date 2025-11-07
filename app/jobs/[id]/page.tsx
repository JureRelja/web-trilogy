import React from 'react';
import { getJobById } from '../../../lib/jobs';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { placeholderImage } from '../../../lib/placeholders';

type Props = { params: Promise<{ id: string }> };

export default async function JobDetails({ params }: Props) {
  const paramsAwaited = await params;
  const job = getJobById(paramsAwaited.id);
  if (!job) notFound();

  const img = job.image || placeholderImage('800x360', job.title, job.imageColor);

  return (
    <div className="py-8">
      <Link href="/jobs" className="text-sm text-blue-600 hover:underline">
        ← Povratak na ponude
      </Link>

      <header className="mt-4 mb-6">
        <h1 className="text-3xl font-bold">{job?.title}</h1>
        <p className="text-gray-600">
          {job?.company} — {job?.location}
        </p>
      </header>

      <img src={img} alt={job?.title} className="w-full h-60 object-cover rounded-md mb-6" />

      <section>
        <h2 className="text-xl font-semibold mb-2">Opis</h2>
        <p className="text-gray-700">{job?.description}</p>
      </section>
    </div>
  );
}
