import { AnchorHTMLAttributes } from 'react';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContactLink({ children, ...rest }: IProps) {
  return (
    <a
      {...rest}
      className="golden-edge flex w-[200px] items-center justify-center 
                break-all px-2 py-3 text-center font-body text-base 
                font-bold hover:shadow-hover md:w-1/2  md:py-5 md:text-xl xl:py-6 xl:text-2xl"
    >
      {children}
    </a>
  );
}
