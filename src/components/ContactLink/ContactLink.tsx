import { AnchorHTMLAttributes } from 'react';

interface IProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export default function ContactLink({ children, ...rest }: IProps) {
  return (
    <a
      {...rest}
      className="contact flex grow items-center justify-center px-5 py-3 font-body text-base font-bold hover:shadow-hover"
    >
      {children}
    </a>
  );
}
