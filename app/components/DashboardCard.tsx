import Link from 'next/link';
import React from 'react';
import { placeholderImage } from '../../lib/placeholders';

type Props = {
  title: string;
  href: string;
  image?: string;
  imageColor?: string;
};

const DashboardCard: React.FC<Props> = ({ title, href, image, imageColor }) => {
  const img = image || placeholderImage('480x270', title, imageColor);

  return (
    <Link href={href} className="block max-w-xs w-full">
      <article className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-200">
        <div className="w-full h-28 md:h-40 lg:h-44 overflow-hidden">
          <img src={img} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
      </article>
    </Link>
  );
};

export default DashboardCard;
