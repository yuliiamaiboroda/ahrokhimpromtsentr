'use client';

import Link from 'next/link';
import { NAVIGATION_LINKS } from '../Navigation/Navigation';
import { usePathname } from 'next/navigation';

interface IProps {
  setIsMobileMenuShown: Function;
  isMobileMenuShown: boolean;
}

export default function MobileMenu({
  setIsMobileMenuShown,
  isMobileMenuShown,
}: IProps) {
  const pathname = usePathname();

  return (
    <div className="z-100 fixed bottom-0 left-0 right-0 top-0 flex h-screen w-full items-center justify-center bg-dark-gradient md:hidden">
      <button
        className="fixed right-4 top-4 h-5 w-5"
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
      >
        <svg className="h-5 w-5 fill-accent stroke-accent">
          <use href="/images/icons.svg#cross"></use>
        </svg>
      </button>
      <ul className="flex flex-wrap md:hidden ">
        {NAVIGATION_LINKS.map(({ href, title }) => (
          <li
            className="w-full border-t border-[#F7E1AB] px-7 py-3 last:border-b"
            key={href}
          >
            <Link
              href={href}
              className={`text-shadow-navigation block w-full font-body text-xl font-bold 
                          duration-300 active:text-accent ${
                            pathname.split('/')[1] === href.split('/')[1]
                              ? 'text-accent'
                              : 'text-primary'
                          }`}
              onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
