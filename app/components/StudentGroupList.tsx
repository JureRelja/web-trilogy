import React from 'react';
import StudentGroupCard from './StudentGroupCard';
import type { StudentGroup } from '../../lib/studentGroups';

type Props = { groups: StudentGroup[] };

const StudentGroupList: React.FC<Props> = ({ groups }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((g) => (
          <StudentGroupCard key={g.id} group={g} />
        ))}
      </div>
    </section>
  );
};

export default StudentGroupList;
