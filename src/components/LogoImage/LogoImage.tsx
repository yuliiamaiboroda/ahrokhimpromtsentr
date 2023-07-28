import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/images/logo.svg';

export default function LogoImage() {
  return (
    <Link
      href="/"
      className="relative block h-[54px] w-[68px] md:h-[132px] md:w-[166px] xl:h-[145px] xl:w-[181px]"
    >
      <Image
        fill
        src={Logo}
        alt="Company logo"
        sizes="(min-width: 1280px) 181px, (min-width: 768px) 166px, 68px"
        quality={100}
        className="object-cover"
      />
    </Link>
  );
}
