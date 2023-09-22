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
      className={`flex w-[178px] items-center justify-center rounded-xl py-3 font-body  text-sm font-bold md:py-5	md:text-2xl	xl:text-3xl 
       ${
         size === ButtonSizes.s
           ? 'md:w-[176px] md:py-4 md:text-lg xl:w-[206px] xl:py-5 xl:text-xl'
           : ''
       } 
       ${size === ButtonSizes.m ? 'md:w-[302px] xl:w-[272px] xl:py-6' : ''}
       ${size === ButtonSizes.l ? 'md:w-[302px] xl:w-[312px]' : ''}    
       ${
         variant === ButtonsVariants.primary
           ? 'primary__button '
           : 'secondary__button'
       }
       `}
    >
      {title}
    </Link>
  );
}
