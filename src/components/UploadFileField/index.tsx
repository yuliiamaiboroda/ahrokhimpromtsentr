import { useField } from 'formik';
import InputError from '../InputError';

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  fileRef: React.RefObject<HTMLInputElement>;
  accept?: string;
}

export default function UploadFileField({
  name,
  label,
  placeholder = 'Завантажити файл',
  fileRef,
  accept,
}: IProps) {
  const [field, meta] = useField(name);

  return (
    <label className="relative cursor-pointer">
      <input type="file" accept={accept} ref={fileRef} {...field} hidden />
      <div
        className={`golden-edge ${
          meta.touched && meta.error && 'warning-edge'
        }`}
      >
        <div
          placeholder={placeholder}
          className="flex h-full w-full
                    justify-between bg-transparent
                    outline-none transition 
                    duration-200 placeholder:text-placeholder 
                    hover:shadow-hover "
        >
          {field.value ? (
            <p
              className="w-2/3 break-words py-5 pl-3 pr-2 md:w-3/5 
                        md:py-6 md:pl-4 xl:pl-6"
            >
              {field.value.split('\\').slice(-1)}
            </p>
          ) : (
            <p
              className="w-2/3 break-words py-5 pl-3 pr-2 text-placeholder md:w-3/5 
                        md:py-6 md:pl-4 xl:pl-6"
            >
              {placeholder}
            </p>
          )}
          <div
            className="flex w-1/3 items-center justify-center 
                      rounded-md bg-light-gradient
                      p-2 text-secondary md:w-2/5
                      md:text-xl"
          >
            <svg className="h-8 w-8 fill-current md:hidden">
              <use href="/images/icons.svg#plus"></use>
            </svg>
            <p className="hidden md:block">{label}</p>
          </div>
        </div>
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
