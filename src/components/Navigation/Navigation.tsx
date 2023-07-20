'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const NAVIGATION_LINKS = [
  { href: '/', title: 'Головна' },
  { href: '/about', title: 'Про нас' },
  { href: '/products', title: 'Продукти компанії' },
  { href: '/services', title: 'Послуги' },
  { href: '/vacancies', title: 'Робота' },
  { href: '/contacts', title: 'Контакти' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul
        className="hidden flex-wrap  justify-center gap-9 
                    p-4 md:flex xl:gap-20"
      >
        {NAVIGATION_LINKS.map(({ href, title }) => (
          <li
            key={href}
            className="relative 
            [&:not(:first-child)]:before:absolute
            [&:not(:first-child)]:before:bottom-[6px]
            [&:not(:first-child)]:before:right-[calc(50%+6px)]
            [&:not(:first-child)]:before:h-0
            [&:not(:first-child)]:before:w-[calc(50%+13px)]
            [&:not(:first-child)]:before:border
            [&:not(:first-child)]:before:border-solid
            [&:not(:first-child)]:before:border-navigation
            xl:[&:not(:first-child)]:before:w-[calc(50%+35px)]
            [&:not(:last-child)]:after:absolute
            [&:not(:last-child)]:after:bottom-[6px]
            [&:not(:last-child)]:after:left-[calc(50%+6px)]
            [&:not(:last-child)]:after:h-0
            [&:not(:last-child)]:after:w-[calc(50%+13px)]
            [&:not(:last-child)]:after:border
            [&:not(:last-child)]:after:border-solid
            [&:not(:last-child)]:after:border-navigation
            xl:[&:not(:last-child)]:after:w-[calc(50%+35px)]
                        "
          >
            <Link
              href={href}
              className="text-shadow-navigation flex flex-col items-center 
                        gap-1.5 font-body text-lg font-bold text-navigation
                        xl:gap-1 xl:text-xl "
            >
              {title}
              <svg
                className={`h-3.5 w-3.5 stroke-navigation ${
                  pathname === href ? 'fill-navigation' : 'fill-none'
                }`}
              >
                <use href="/images/icons.svg#point-outline"></use>
              </svg>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
