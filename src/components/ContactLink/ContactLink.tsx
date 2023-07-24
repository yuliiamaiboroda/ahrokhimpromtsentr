import { AnchorHTMLAttributes } from 'react';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContactLink({ children, ...rest }: IProps) {
  return (
    <a
      {...rest}
      className="contact flex w-[200px] items-center justify-center 
                break-all px-5 py-3 text-center font-body text-base 
                font-bold hover:shadow-hover md:w-1/2 md:px-10 md:py-5 md:text-xl xl:text-2xl"
    >
      {children}
    </a>
  );
}
