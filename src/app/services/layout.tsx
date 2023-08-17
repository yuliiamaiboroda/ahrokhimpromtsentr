import servicesBackgound from '../../../public/images/bg-services-screen.jpg';
import HeroSection from '@/components/HeroSection';
import BackgroundImage from '@/components/BackgroundImage/BackgroundImage';
import cornFlowerLeft from '../../../public/images/corn-flower-left@3x.png';
import cornFlowerRight from '../../../public/images/corn-flower-right@3x.png';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative overflow-hidden">
      <HeroSection src={servicesBackgound} alt="Комбайни в ряд на полі" />
      {children}
      <div
        className="absolute -left-[37px] bottom-0 -z-10 h-[253px] w-[115px] 
                  md:-left-[18px] md:h-[550px] md:w-[250px] 
                  xl:-bottom-[24px] xl:-left-[51px] xl:h-[651px] xl:w-[326px]"
      >
        <BackgroundImage src={cornFlowerLeft} alt="Цвіт кукурудзи" />
      </div>
      <div
        className="absolute -right-[37px] bottom-0 -z-10 h-[253px] w-[115px] -scale-x-100
                  md:-right-[18px] md:h-[550px] md:w-[250px] 
                  xl:-bottom-[24px] xl:-right-[51px] xl:h-[651px] xl:w-[326px]"
      >
        <BackgroundImage src={cornFlowerLeft} alt="Цвіт кукурудзи" />
      </div>
    </main>
  );
}
