import { useField } from 'formik';
import Selector from '../Selector/Selector';
import InputError from '../InputError';

interface ISelectOption {
  value: string;
  label: string;
}

interface IProps {
  name: string;
  options: ISelectOption[];
  placeholder?: string;
  initialValue?: ISelectOption;
}

export default function SelectorField({
  name,
  options,
  placeholder = 'Обрати...',
  initialValue,
}: IProps) {
  const [, meta, helpers] = useField(name);
  return (
    <div className="relative">
      <Selector
        id={name}
        options={options}
        placeholder={placeholder}
        onChange={option => {
          helpers.setValue(option?.value, true);
        }}
        defaultValue={initialValue || null}
      />
      <InputError
        className={
          meta.touched && meta.error
            ? 'translate-y-0 scale-100'
            : ' -translate-y-full scale-0'
        }
      >
        {meta.error}
      </InputError>
    </div>
  );
}
