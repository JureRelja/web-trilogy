import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { placeholderImage } from '../../lib/placeholders';

type Props = {
  title: string;
  href?: string;
  onClick?: () => void;
  image?: string;
  imageColor?: string;
  icon?: string; // optional icon key
};

const DashboardCard: React.FC<Props> = ({ title, href, onClick, image, imageColor = 'gray', icon }) => {
  const img = image || placeholderImage('480x270', title, imageColor);

  const renderIcon = (key: string) => {
    const common = { className: 'w-12 h-12 text-white' };
    switch (key) {
      case 'meetings':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            <rect x="3" y="5" width="18" height="14" rx="2" strokeWidth="1.5" />
            <path d="M16 3v4M8 3v4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'groups':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            {/* center head */}
            <circle cx="12" cy="7.5" r="2.6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            {/* left and right heads */}
            <circle cx="7" cy="9" r="1.9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="17" cy="9" r="1.9" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            {/* shoulders / bodies */}
            <path
              d="M3.5 18c1.8-2.6 5.1-4 8.5-4s6.7 1.4 8.5 4"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 14.5c.7-.7 1.9-1.1 3-1.1s2.3.4 3 1.1"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case 'mentors':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
            <path d="M5.5 21a6.5 6.5 0 0113 0" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'jobs':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            <rect x="2" y="7" width="20" height="14" rx="2" strokeWidth="1.5" />
            <path d="M16 3H8v4h8V3z" strokeWidth="1.5" />
          </svg>
        );
      case 'college':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            <path d="M12 2L2 7l10 5 10-5-10-5z" strokeWidth="1.5" />
            <path d="M2 17l10 5 10-5" strokeWidth="1.5" />
            <path d="M2 12l10 5 10-5" strokeWidth="1.5" />
          </svg>
        );
      case 'search-job':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            <circle cx="11" cy="11" r="5" strokeWidth="1.5" />
            <path d="M21 21l-4.35-4.35" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        );
      case 'search-mentor':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" {...common}>
            {/* person */}
            <circle cx="9" cy="8" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M4 20c1-3 6-5 10-5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            {/* magnifier */}
            <circle cx="17" cy="15" r="3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M19.2 17.2l2 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  const bgStyle = (color: string) => {
    // simple mapping to tailwind-like backgrounds via inline gradient
    const mapping: Record<string, string> = {
      indigo: 'linear-gradient(135deg,#6366f1,#ec4899)',
      teal: 'linear-gradient(135deg,#14b8a6,#06b6d4)',
      fuchsia: 'linear-gradient(135deg,#d946ef,#f97316)',
      orange: 'linear-gradient(135deg,#fb923c,#f97316)',
      sky: 'linear-gradient(135deg,#38bdf8,#60a5fa)',
      green: 'linear-gradient(135deg,#10b981,#34d399)',
      purple: 'linear-gradient(135deg,#7c3aed,#a78bfa)',
      gray: 'linear-gradient(135deg,#9ca3af,#d1d5db)',
    };
    return mapping[color] || mapping.gray;
  };

  const inner = (
    <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
      <div
        className="w-full h-28 md:h-40 lg:h-44 overflow-hidden flex items-center justify-center"
        style={{ background: icon ? bgStyle(imageColor) : undefined }}
      >
        {icon ? (
          <div className="flex items-center justify-center">{renderIcon(icon)}</div>
        ) : (
          <div className="relative w-full h-full">
            <Image src={img} alt={title} className="object-cover" fill unoptimized />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
      </div>
    </article>
  );

  if (onClick) {
    return (
      <div
        role="button"
        tabIndex={0}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClick();
        }}
        className="block max-w-xs w-full cursor-pointer"
      >
        {inner}
      </div>
    );
  }

  return (
    <Link href={href || '#'} className="block max-w-xs w-full">
      {inner}
    </Link>
  );
};

export default DashboardCard;
