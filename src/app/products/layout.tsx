import productsBackground from '../../../public/images/bg-products-screen.jpg';
import HeroSection from '@/components/HeroSection';
import BackgroundImage from '@/components/BackgroundImage';
import bushLeft from '../../../public/images/left-bottom-image@3x.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={productsBackground} alt="Поле пшениці" />
      {children}
      <div
        className="absolute -bottom-[86px] -left-[118px] -z-10 h-[400px] w-[240px] 
                  md:-bottom-[179px] md:-left-[200px] md:h-[712px] md:w-[420px] 
                  xl:-bottom-[189px] xl:-left-[209px] xl:h-[825px] xl:w-[487px]"
      >
        <BackgroundImage src={bushLeft} alt="Цвіт кукурудзи" />
      </div>
      <div
        className="absolute -bottom-[86px] -right-[118px] -z-10 h-[400px] w-[240px] -scale-x-100
                  md:-bottom-[179px] md:-right-[200px] md:h-[712px] md:w-[420px] 
                  xl:-bottom-[189px] xl:-right-[209px] xl:h-[825px] xl:w-[487px]"
      >
        <BackgroundImage src={bushLeft} alt="Цвіт кукурудзи" />
      </div>
    </main>
  );
}
