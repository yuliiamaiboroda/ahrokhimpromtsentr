interface IProps {
  onClick: () => void;
}

export function PrevArrow({ onClick }: IProps) {
  return (
    <button className="custom_arrow prev-arrow " onClick={onClick}>
      <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
        <use href="/images/icons.svg#left-arrow"></use>
      </svg>
    </button>
  );
}

export function NextArrow({ onClick }: IProps) {
  return (
    <button className="custom_arrow next-arrow" onClick={onClick}>
      <svg className="xl:h-auto xl:w-[84px] xl:fill-accent xl:stroke-accent">
        <use href="/images/icons.svg#right-arrow"></use>
      </svg>
    </button>
  );
}
