import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import InputError from '../InputError';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

// 1: h-6 w-6 x-1/3 y-[60%];
// 2: h-6 w-6 x-1/2 y-1/2;
// 3: h-8 w-8 x-1/2 y-1/2;

export default function CheckboxField({ label, name }: IProps) {
  const [field, meta] = useField(name);
  return (
    <label className="relative flex cursor-pointer items-center gap-2">
      <input {...field} type="checkbox" className="absolute -z-0 scale-0" />
      <div className="relative h-6 w-6 rounded-[4px] border-2 border-solid border-accent ">
        <svg
          className={`${
            field.value ? 'opacity-100' : 'opacity-0'
          } absolute left-1/2 top-1/2 h-6 w-6 
          -translate-x-1/3 -translate-y-[60%] fill-accent stroke-secondary
          transition duration-200`}
        >
          <use href="/images/icons.svg#check-mark"></use>
        </svg>
      </div>
      {label}
      <InputError
        className={
          meta.touched && meta.error
            ? 'translate-y-0 scale-100'
            : ' -translate-y-full scale-0'
        }
      >
        {meta.error}
      </InputError>
    </label>
  );
}
