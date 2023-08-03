import { TextareaHTMLAttributes } from 'react';
import { useField } from 'formik';
import InputError from '../InputError';

interface IProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
}

export default function TextareaField({
  name,
  rows = 5,
  cols = 32,
  ...props
}: IProps) {
  const [field, meta] = useField(name);
  return (
    <label className="relative cursor-text">
      <div
        className={`golden-edge ${
          meta.touched && meta.error ? 'warning-edge' : ''
        }`}
      >
        <textarea
          {...field}
          {...props}
          rows={rows}
          cols={cols}
          className="block h-full w-full resize-none bg-transparent px-3 py-5
                  outline-none transition duration-200 focus:shadow-hover md:px-4 md:py-6 xl:px-6"
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
