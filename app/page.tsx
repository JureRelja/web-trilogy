'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const LandingGrid = dynamic(() => import('./components/LandingGrid'), { ssr: false });

export default function Home() {
  return <LandingGrid />;
}
