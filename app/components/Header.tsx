import React from 'react';
import Link from 'next/link';

const Header = () => {
  // Placeholder user; replace with auth/user context later
  const user = {
    name: 'Student User',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      'Student User',
    )}&background=0D8ABC&color=fff&size=128`,
  };

  return (
    <header className="w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: simple text logo */}
        <div className="text-lg font-bold text-blue-600">
          <Link href="/">Aplikacija za karijerno savjetovanje</Link>
        </div>

        {/* Right: user name and avatar */}
        <div className="flex items-center space-x-3">
          <span className="hidden sm:inline text-sm text-gray-700">{user.name}</span>
          <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-full border border-gray-200 object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
