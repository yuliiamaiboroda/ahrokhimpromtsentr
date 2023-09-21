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
    <>
      {title}:{' '}
      <a
        href={linkTo}
        target="_blank"
        rel="noreferrer noopener"
        className="text-accent"
      >
        {shownLink}
      </a>
    </>
  );
}
