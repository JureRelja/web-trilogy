import Link from 'next/link';
import React from 'react';
import type { StudentGroup } from '../../lib/studentGroups';
import { placeholderImage } from '../../lib/placeholders';

type Props = { group: StudentGroup };

const StudentGroupCard: React.FC<Props> = ({ group }) => {
  const img = group.image || placeholderImage('400x220', group.name);

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <Link href={`/student-groups/${group.id}`} className="block">
        <img src={img} alt={group.name} className="w-full h-44 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{group.name}</h3>
          {group.city && <p className="text-sm text-gray-500">{group.city}</p>}
        </div>
      </Link>
    </article>
  );
};

export default StudentGroupCard;
