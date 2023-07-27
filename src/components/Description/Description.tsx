interface IProps {
  description: string;
}

// TODO discuss prettier string wrap problem and different spaces in pages

export default function Description({ description }: IProps) {
  return (
    <p
      className="mx-auto text-center font-body text-base font-bold text-primary	
                  md:text-xl xl:text-2xl"
    >
      {description}
    </p>
  );
}
