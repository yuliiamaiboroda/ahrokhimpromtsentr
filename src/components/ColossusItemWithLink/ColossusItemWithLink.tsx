interface IProps {
  title: string;
  linkTo: string;
  shownLink: string;
}

export default function ColossusItemWithLink({
  title,
  linkTo,
  shownLink,
}: IProps) {
  return (
    <span className="overflow-hidden text-ellipsis py-5 font-body text-base font-bold	text-primary max-md:max-w-[210px] max-md:whitespace-nowrap	md:py-9	 md:text-xl xl:text-2xl">
      {title}:{' '}
      <a
        href={linkTo}
        target="_blank"
        rel="noreferrer noopener"
        className="text-accent"
      >
        {shownLink}{' '}
      </a>
    </span>
  );
}
