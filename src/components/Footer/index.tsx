import Link from 'next/link';

export default function Footer() {
  return (
    <div className="mt-auto flex h-[15vh] w-full justify-center md:h-[10vh]">
      <footer className="flex w-full flex-col items-center justify-center gap-2 border-t border-subtitle bg-footer text-center md:flex-row md:gap-20 lg:gap-40 xl:gap-60 ">
        <p className="inline-block w-56 md:text-left">
          &copy; Агрохімпромцентр 2023
        </p>
        <Link
          href="/privacy-notice"
          className="inline-block w-56 hover:text-accent active:text-accent md:text-left"
        >
          Політика конфіденційності
        </Link>
        <Link
          href="/"
          className="inline-block w-56 hover:text-accent active:text-accent md:text-left"
        >
          by YIY-Soft
        </Link>
      </footer>
    </div>
  );
}

// <footer
//   className="mt-auto w-full border-t border-subtitle
//             py-4 text-center text-sm
//             md:py-6 "
// >
//   <div
//     className="mx-auto flex w-fit flex-col items-center justify-center
//                 gap-2 px-4"
//   >
//     <p className="inline-block">&copy; Агрохімпромцентр 2023</p>
//     <Link
//       href="/privacy-notice"
//       className="inline-block hover:text-accent active:text-accent"
//     >
//       Політика конфіденційності
//     </Link>
//     <Link
//       href="/"
//       className="inline-block hover:text-accent active:text-accent"
//     >
//       by YIY-Soft
//     </Link>
//   </div>
// </footer>;
