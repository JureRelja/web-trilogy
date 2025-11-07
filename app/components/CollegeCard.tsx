import Link from 'next/link';
import React from 'react';
import type { College } from '../../lib/colleges';
import { placeholderImage } from '../../lib/placeholders';

type Props = {
  college: College;
};

const CollegeCard: React.FC<Props> = ({ college }) => {
  const img = college.image || placeholderImage('400x220', college.name, college.imageColor);

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <Link href={`/colleges/${college.id}`} className="block">
        <img src={img} alt={college.name} className="w-full h-28 object-contain" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{college.name}</h3>
          {college.location && <p className="text-sm text-gray-500">{college.location}</p>}
        </div>
      </Link>
    </article>
  );
};

export default CollegeCard;
