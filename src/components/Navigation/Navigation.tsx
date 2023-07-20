'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import css from './Navigation.module.css';

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
      <ul className="flex  flex-wrap  justify-center  gap-4 p-4">
        {NAVIGATION_LINKS.map(({ href, title }) => (
          <li
            key={href}
            className="relative [&:not(:last-child)]:after:absolute [&:not(:last-child)]:after:bottom-[6px] [&:not(:last-child)]:after:left-[calc(50%+6px)] [&:not(:last-child)]:after:h-0 [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:border [&:not(:last-child)]:after:border-solid [&:not(:last-child)]:after:border-black
                        [&:not(:last-child)]:after:content-[''] [&:not(:first-child)]:before:absolute [&:not(:first-child)]:before:bottom-[6px] [&:not(:first-child)]:before:right-[calc(50%+6px)] [&:not(:first-child)]:before:h-0 [&:not(:first-child)]:before:w-1/2 [&:not(:first-child)]:before:border [&:not(:first-child)]:before:border-solid [&:not(:first-child)]:before:border-black
                        [&:not(:first-child)]:before:content-['']
                        "
          >
            <Link
              href={href}
              className="text-shadow-navigation relative flex flex-col items-center font-body text-lg
                         font-bold text-navigation "
            >
              {title}
              <svg
                className={`h-[14px] w-[14px] stroke-black ${
                  pathname === href ? 'fill-black' : 'fill-none'
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
