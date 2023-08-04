import Select from 'react-select';
import type { GroupBase, Props } from 'react-select';

export default function Selector<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>(props: Props<Option, IsMulti, Group>) {
  return <Select {...props} classNamePrefix="selector" />;
}
