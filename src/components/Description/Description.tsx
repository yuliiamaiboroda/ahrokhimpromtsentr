interface IProps {
  description: string;
}

// TODO discuss prettier string wrap problem and different spaces in pages

export default function Description({ description }: IProps) {
  return (
    <p className="mx-auto w-[276px] md:w-[654px] font-body text-primary text-center font-bold text-base	md:text-xl xl:text-2xl">
      {description}
    </p>
  );
}
