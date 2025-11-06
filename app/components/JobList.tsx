import React from 'react';
import JobCard from './JobCard';
import type { Job } from '../../lib/jobs';

type Props = { jobs: Job[] };

const JobList: React.FC<Props> = ({ jobs }) => {
  return (
    <section>
      <div className="flex flex-col gap-6">
        {jobs.map((j) => (
          <JobCard key={j.id} job={j} />
        ))}
      </div>
    </section>
  );
};

export default JobList;
