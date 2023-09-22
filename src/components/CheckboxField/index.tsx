import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import InputError from '../InputError';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export default function CheckboxField({ label, name }: IProps) {
  const [field, meta] = useField(name);
  return (
    <label
      className="relative flex cursor-pointer items-center gap-4
                text-base font-semibold text-placeholder
                transition duration-200 hover:text-primary
                md:text-xl xl:text-2xl [&>div]:hover:shadow-hover"
    >
      <input {...field} type="checkbox" className="absolute -z-0 scale-0" />
      <div
        className="relative h-9 w-9 shrink-0 rounded-md 
                    border-2 border-solid border-accent 
                    transition duration-200 md:h-10 md:w-10"
      >
        <svg
          className={`${
            field.value ? 'opacity-100' : 'opacity-0'
          } absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/3 -translate-y-[60%]
          fill-accent stroke-secondary transition duration-200
          md:h-10 md:w-10`}
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
