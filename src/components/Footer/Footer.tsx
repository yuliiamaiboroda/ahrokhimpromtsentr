import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 border-t border-subtitle p-3 md:flex-row md:gap-20 md:p-6 lg:gap-40 xl:gap-60">
      <p className="inline-block">&copy; Агрохімпромцентр 2023</p>
      <Link
        href="/"
        className="inline-block hover:text-accent active:text-accent"
      >
        Політика конфіденційності
      </Link>
      <Link
        href="/"
        className="inline-block hover:text-accent active:text-accent"
      >
        by YIY-Soft
      </Link>
    </footer>
  );
}
