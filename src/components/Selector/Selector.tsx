import Select from 'react-select';
import type { GroupBase, Props } from 'react-select';

export default function Selector<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
  return (
    <Select
      {...props}
      className={`golden-edge`}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          border: 'none',
          backgroundColor: 'transparent',
          boxShadow: state.isFocused ? 'var(--hover-shadow)' : 'none',
          cursor: 'pointer',
        }),
        valueContainer: (baseStyles, state) => ({
          ...baseStyles,
          padding: 0,
        }),
        input: (baseStyles, state) => ({
          ...baseStyles,
          padding: '1.25rem 0.75rem',
          margin: 0,
          color: 'var(--primary)',
        }),
        placeholder: (baseStyles, state) => ({
          ...baseStyles,
          padding: '1.25rem 0.75rem',
          margin: 0,
          color: 'var(--placeholder)',
        }),
        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          padding: '1.25rem 0.75rem',
          margin: 0,
          color: 'var(--primary)',
        }),
        indicatorSeparator: () => ({ display: 'none' }),
        dropdownIndicator: (baseStyles, state) => ({
          ...baseStyles,
          svg: {
            fill: 'var(--accent)',
            width: '24px',
            height: '24px',
            transform: `rotate(${state.isFocused ? '180deg' : '0deg'})`,
            transition: 'transform 200ms linear',
          },
        }),
      }}
    />
  );
}
