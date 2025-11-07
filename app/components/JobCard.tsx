import Link from 'next/link';
import React from 'react';
import type { Job } from '../../lib/jobs';
import { placeholderImage } from '../../lib/placeholders';

type Props = { job: Job };

const JobCard: React.FC<Props> = ({ job }) => {
  const avatar = job.image || placeholderImage('96x96', job.company || job.title, job.imageColor);

  return (
    <article className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white">
      <Link href={`/jobs/${job.id}`} className="block">
        <div className="p-4 flex items-center gap-4">
          <img
            src={avatar}
            alt={job.company || job.title}
            className="w-16 h-16 rounded-full object-cover flex-shrink-0 border"
          />

          <div className="min-w-0">
            <h3 className="text-lg font-semibold truncate">{job.title}</h3>
            <p className="text-sm text-gray-500 truncate">
              {job.company} — {job.location}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default JobCard;
