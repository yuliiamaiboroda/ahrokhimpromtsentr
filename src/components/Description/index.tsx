interface IProps {
  description: string;
}

export default function Description({ description }: IProps) {
  return (
    <p
      className="mx-auto text-center font-body text-base font-bold text-primary	
                  first-letter:capitalize md:text-xl xl:text-2xl"
    >
      {description}
    </p>
  );
}
