import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../public/logo@2x.png';

export default function LogoImage() {
  return (
    <div className="relative h-[54px] w-[68px] md:h-[132px] md:w-[166px] xl:h-[145px] xl:w-[181px]">
      <Link href="/">
        <Image
          fill
          src={Logo}
          alt="Company logo"
          sizes="100vh"
          quality={100}
          className="object-cover"
        />
      </Link>
    </div>
  );
}
