import React from 'react';
import JobList from '../components/JobList';
import { jobs } from '../../lib/jobs';

export default function JobsPage() {
  return (
    <div className="py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Ponuda poslova</h2>
        <p className="text-gray-600 mt-2">Aktualne otvorene pozicije i prilike za studente.</p>
      </header>

      <JobList jobs={jobs} />
    </div>
  );
}
