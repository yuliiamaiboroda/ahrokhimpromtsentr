'use client';

import { useState } from 'react';
import Link from 'next/link';
import MobileMenuBtn from '../MobileMenuBtn';
import LogoImage from '../LogoImage';
import MobileMenu from '../MobileMenu';
import Navigation from '../Navigation';

export default function Header() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-30 mt-1 h-20 w-full">
      <div className="flex items-center justify-around md:justify-center">
        <MobileMenuBtn
          isMobileMenuShown={isMobileMenuShown}
          setIsMobileMenuShown={setIsMobileMenuShown}
        />
        <LogoImage />
        <Link href="/contacts" className="h-5 w-5 md:hidden">
          <svg className="h-5 w-5 stroke-phoneScreenBtn">
            <use href="/images/icons.svg#phone"></use>
          </svg>
        </Link>
        {/* Tablet and desktop screen navigation */}
        <Navigation />
      </div>
      {/* Mobile screen navigation */}
      {isMobileMenuShown && (
        <MobileMenu
          isMobileMenuShown={isMobileMenuShown}
          setIsMobileMenuShown={setIsMobileMenuShown}
        />
      )}
    </header>
  );
}
