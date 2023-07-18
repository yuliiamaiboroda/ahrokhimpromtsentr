import { ButtonSizes, ButtonsVariants } from '@/helpers/constants';
import Link from 'next/link';

interface IProps {
  navigateTo: string;
  title: string;
  variant?: keyof typeof ButtonsVariants;
  size?: keyof typeof ButtonSizes;
}

//  Sizes : services(послуги)- s, vacancies(робота) - m, main(головна)- l - так як розміри відрізняються згідно макету на всіх сторінках

// Variants: primary : Кнопка повністю залита золотим градієнтом,secondary: Кнопка залалита темним градієнтом і обведена золотистою рамкою

export default function ButtonLink({
  navigateTo,
  title,
  variant = ButtonsVariants.primary,
  size = ButtonSizes.m,
}: IProps) {
  return (
    <Link
      href={navigateTo}
      className={`flex justify-center items-center w-[178px] py-3 md:py-5 rounded-xl  font-body font-bold text-sm	md:text-2xl	xl:text-3xl
       ${
         size === ButtonSizes.s
           ? 'md:w-[176px] xl:w-[206px] md:text-lg xl:text-xl md:py-4 xl:py-5'
           : ''
       } 
       ${size === ButtonSizes.m ? 'md:w-[302px] xl:w-[272px] xl:py-6' : ''}
       ${size === ButtonSizes.l ? 'md:w-[302px] xl:w-[312px]' : ''}    
       ${
         variant === ButtonsVariants.primary
           ? 'text-secondary bg-light-gradient border-transparent'
           : 'relative rounded-xl text-primary m-[1px] bg-dark-gradient after:content-[""] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:-z-[1] after:-m-[1px] after:bg-light-gradient after:rounded-xl'
       }
       `}
    >
      {title}
    </Link>
  );
}
