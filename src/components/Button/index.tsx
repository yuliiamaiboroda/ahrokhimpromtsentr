import { ButtonsVariants } from '@/helpers/constants';
import { ButtonHTMLAttributes } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof ButtonsVariants;
}

// Variants: primary : Кнопка повністю залита золотим градієнтом,secondary: Кнопка залалита темним градієнтом і обведена золотистою рамкою

export default function Button({
  type = 'button',
  disabled = false,
  variant = ButtonsVariants.primary,
  children,
  ...props
}: IProps) {
  return (
    <div className={`${disabled ? 'blur-[2px]' : ''}`}>
      <button
        type={type}
        disabled={disabled}
        {...props}
        className={` flex w-[178px] items-center justify-center rounded-xl py-3 font-body text-sm font-bold md:w-[302px]  md:py-5 md:text-2xl xl:w-[272px] xl:py-6	xl:text-[28px]
        ${
          variant === ButtonsVariants.primary
            ? 'primary__button'
            : 'secondary__button'
        }   
      ${disabled ? 'hover:shadow-none' : ''}`}
      >
        {children}
      </button>
    </div>
  );
}
