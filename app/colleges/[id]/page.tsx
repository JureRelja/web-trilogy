import React from 'react';
import { getCollegeById } from '../../../lib/colleges';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
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
        ← Povratak na sve sastavnice
      </Link>

      <header className="mt-4 mb-6">
        <h1 className="text-3xl font-bold">{college?.name}</h1>
        {college?.location && <p className="text-gray-600">{college.location}</p>}
      </header>

      <Image
        src={img}
        alt={college?.name || 'College image'}
        width={1200}
        height={360}
        className="w-full h-60 object-cover rounded-md mb-6"
      />

      <section>
        <h2 className="text-xl font-semibold mb-2">O sastanici</h2>
        {college?.description && (
          <p className="text-gray-700 leading-relaxed">
            {college.description
              .split(/<br\s*\/?>(?:\s*<br\s*\/?>)*/i) // split on one or multiple <br> groups
              .map((segment, idx, arr) => (
                <React.Fragment key={idx}>
                  {segment.trim()}
                  {idx < arr.length - 1 && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </React.Fragment>
              ))}
          </p>
        )}
      </section>
    </div>
  );
}
