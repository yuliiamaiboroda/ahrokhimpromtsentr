// import { useField } from 'formik';
import Selector from '../Selector/Selector';
import type { SingleValue } from 'react-select';

interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  name?: string;
  options: ISelectOption[];
  onChange: (option: SingleValue<ISelectOption>) => void;
}

export default function PositionSelector({ name, options, onChange }: IProps) {
  // const [field, meta] = useField(name);
  return (
    <Selector
      // {...field}
      options={options}
      onChange={onChange}
    />
  );
}
