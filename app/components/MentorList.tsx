import React from 'react';
import MentorCard from './MentorCard';
import type { Mentor } from '../../lib/mentors';

type Props = { mentors: Mentor[] };

const MentorList: React.FC<Props> = ({ mentors }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mentors.map((m) => (
          <MentorCard key={m.id} mentor={m} />
        ))}
      </div>
    </section>
  );
};

export default MentorList;
