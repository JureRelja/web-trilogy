'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  // Placeholder user; replace with auth/user context later
  const user = {
    name: 'Student User',
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      'Student User',
    )}&background=0D8ABC&color=fff&size=128`,
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (!menuRef.current) return;
      if (e.target && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    document.addEventListener('click', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <header className="w-full bg-gradient-to-r from-indigo-50 via-white to-cyan-50 border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: playful logo */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3 no-underline">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-pink-500 text-white shadow-md">
              {/* simple mortarboard / rocket icon (inline SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 2l7 4-7 4-7-4 7-4z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5 9v5a7 7 0 007 7 7 7 0 007-7V9"
                />
              </svg>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-pink-500">
                UniPath ZG
              </span>
              <span className="text-xs text-gray-500 -mt-0.5">fakulteti • mentori • poslovi</span>
            </div>
          </Link>
        </div>

        {/* Middle: search (hidden on xs) */}
        <div className="flex-1 max-w-xl">
          <div className="hidden sm:flex items-center bg-white rounded-full shadow-sm border border-gray-100 px-3 py-1.5">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z"
              ></path>
            </svg>
            <input
              aria-label="Search"
              placeholder="Pretraži fakultete, poslove, mentore..."
              className="ml-3 w-full text-sm bg-transparent outline-none"
            />
            <button className="ml-2 text-sm bg-indigo-600 text-white px-3 py-1 rounded-full">Search</button>
          </div>
        </div>

        {/* Right: actions */}
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm px-3 py-1 rounded-full shadow-sm">
            <span className="text-xs font-semibold">New</span>
            <span className="text-[10px] bg-rose-200 px-2 py-0.5 rounded-full">Beta</span>
          </button>

          <button className="p-2 rounded-full hover:bg-gray-100" title="Notifications">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h11z"
              ></path>
            </svg>
          </button>

          <div className="flex items-center gap-2 pl-2 border-l border-gray-100" ref={menuRef}>
            <span className="hidden sm:inline text-sm text-gray-700">{user.name}</span>
            <button
              aria-haspopup="true"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((s) => !s)}
              className="relative"
            >
              <Image
                src={user.avatar}
                alt={user.name}
                width={36}
                height={36}
                className="rounded-full border border-gray-200 object-cover"
                unoptimized
              />
            </button>

            {menuOpen && (
              <div className="absolute right-4 mt-12 bg-white rounded-xl shadow-lg w-44 py-2 text-sm z-50">
                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-50">
                  Profil
                </Link>
                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-50">
                  Postavke
                </Link>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-50">Odjavi se</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
