import React from 'react';
import MentorList from '../components/MentorList';
import { mentors } from '../../lib/mentors';

export default function MentorsPage() {
  return (
    <div className="py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Mentori</h2>
        <p className="text-gray-600 mt-2">Iskusni mentori koji su voljni pomoći studentima.</p>
      </header>

      <MentorList mentors={mentors} />
    </div>
  );
}
