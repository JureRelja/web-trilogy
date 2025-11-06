import React from 'react';
import StudentGroupList from '../components/StudentGroupList';
import { studentGroups } from '../../lib/studentGroups';

export default function StudentGroupsPage() {
  return (
    <div className="py-8">
      <header className="mb-6">
        <h2 className="text-3xl font-bold">Studentske udruge</h2>
        <p className="text-gray-600 mt-2">Pregled studentskih udruga i njihovih aktivnosti.</p>
      </header>

      <StudentGroupList groups={studentGroups} />
    </div>
  );
}
