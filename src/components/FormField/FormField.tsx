import { InputHTMLAttributes } from 'react';
import { useField } from 'formik';
import InputError from '../InputError';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export default function FormField({ name, ...props }: IProps) {
  const [field, meta] = useField(name);
  return (
    <label className="relative">
      <div
        className={`golden-edge ${
          meta.touched && meta.error ? 'warning-edge' : ''
        }`}
      >
        <input
          {...field}
          {...props}
          className="block h-full w-full bg-transparent px-3
                  py-5 outline-none transition duration-200 
                  focus:shadow-hover md:px-4 md:py-6 xl:px-6"
        />
      </div>
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
