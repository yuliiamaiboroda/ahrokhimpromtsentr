import { ButtonsVariants } from '@/helpers/constants';

interface IProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  isDisabled?: boolean;
  variant?: keyof typeof ButtonsVariants;
  onClick: () => void;
}

// Variants: primary : Кнопка повністю залита золотим градієнтом,secondary: Кнопка залалита темним градієнтом і обведена золотистою рамкою

// TODO discuss about disabled variant for secondary vsriant

export default function Button({
  type,
  title,
  isDisabled = false,
  variant = ButtonsVariants.primary,
  onClick,
}: IProps) {
  return (
    <div className={`${isDisabled ? 'blur-[2px]' : ''}`}>
      <button
        type={type}
        onClick={onClick}
        disabled={isDisabled ? true : false}
        className={` flex w-[178px] items-center justify-center rounded-xl py-3 font-body text-sm font-bold md:w-[302px]  md:py-5 md:text-2xl xl:w-[272px] xl:py-6	xl:text-[28px]
        ${
          variant === ButtonsVariants.primary
            ? 'primary__button'
            : 'secondary__button'
        }   
      ${isDisabled ? 'hover:shadow-none' : ''}`}
      >
        {title}
      </button>
    </div>
  );
}
