import { ButtonsVariants } from '@/helpers/constants';

interface IProps {
  type: 'button' | 'submit' | 'reset';
  title: string;
  isDisabled?: boolean;
  variant?: keyof typeof ButtonsVariants;
  onClick: () => void;
}

// TODO transition only on scale, change disabled styled, deside about custom sizes

export default function Button({
  type,
  title,
  isDisabled = false,
  variant = ButtonsVariants.primary,
  onClick,
}: IProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled ? true : false}
      className={`
      flex justify-center items-center w-[178px] md:w-[302px] xl:w-[272px] py-3 md:py-5 xl:py-6 rounded-xl  font-body font-bold text-sm	md:text-2xl	xl:text-3xl
      ${
        variant === ButtonsVariants.primary
          ? 'text-secondary bg-light-gradient border-transparent'
          : 'relative rounded-xl text-primary m-[1px] bg-dark-gradient after:content-[""] after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:-z-[1] after:-m-[1px] after:bg-light-gradient after:rounded-xl'
      }
       `}
    >
      {title}
    </button>
  );
}
