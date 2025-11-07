import React from 'react';
import CollegeList from '../components/CollegeList';
import { colleges } from '../../lib/colleges';

export default async function CollegesPage() {
  return (
    <div className="py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Sastavnice Sveučilišta u Zagrebu</h2>
        <p className="text-gray-600 mt-2">Istraži sastavnice i klikni na jednu za više detalja.</p>
      </header>

      <CollegeList colleges={colleges} />
    </div>
  );
}
