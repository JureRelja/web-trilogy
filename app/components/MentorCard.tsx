import Link from 'next/link';
import React from 'react';
import type { Mentor } from '../../lib/mentors';
import { placeholderImage } from '../../lib/placeholders';

type Props = { mentor: Mentor };

const MentorCard: React.FC<Props> = ({ mentor }) => {
  const img = mentor.image || placeholderImage('400x400', mentor.name);

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <Link href={`/mentors/${mentor.id}`} className="block">
        <div className="w-full h-44 flex items-center justify-center overflow-hidden bg-gray-50">
          <img src={img} alt={mentor.name} className="w-28 h-28 rounded-full object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{mentor.name}</h3>
          {mentor.college && <p className="text-sm text-gray-500">{mentor.college}</p>}
        </div>
      </Link>
    </article>
  );
};

export default MentorCard;
