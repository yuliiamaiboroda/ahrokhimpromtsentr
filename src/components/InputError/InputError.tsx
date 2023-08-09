interface IProps {
  className?: string;
  children: React.ReactNode;
}

export default function InputError({ className = '', children }: IProps) {
  return (
    <p
      className={`${className} absolute left-0 top-[calc(100%+0.5rem)] z-20 w-full 
                rounded-xl border-2 border-solid border-transparent
                bg-accent px-3 py-3 font-body text-sm 
                text-warning shadow-hover transition duration-1000
                hover:-translate-y-2/3 md:px-4 md:text-base xl:px-6 `}
    >
      {children}
    </p>
  );
}
