interface IProps {
  children: React.ReactNode;
}

export default function SmallCotainer({ children }: IProps) {
  return <div className="mx-auto mb-8 w-4/5 md:w-1/2">{children}</div>;
}
