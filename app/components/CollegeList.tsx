import React from 'react';
import CollegeCard from './CollegeCard';
import type { College } from '../../lib/colleges';

type Props = {
  colleges: College[];
};

const CollegeList: React.FC<Props> = ({ colleges }) => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {colleges.map((c) => (
          <CollegeCard key={c.id} college={c} />
        ))}
      </div>
    </section>
  );
};

export default CollegeList;
