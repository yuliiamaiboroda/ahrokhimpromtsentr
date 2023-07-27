interface IProps {
  setIsMobileMenuShown: Function;
  isMobileMenuShown: boolean;
}

export default function MobileMenuBtn({
  setIsMobileMenuShown,
  isMobileMenuShown,
}: IProps) {

  return (
    <button
    className="h-5 w-5 md:hidden"
    onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
  >
    <svg className="h-5 w-5 stroke-phoneScreenBtn">
      <use href="/images/icons.svg#burger"></use>
    </svg>
  </button>
);
}
