import { useField } from 'formik';
import InputError from '../InputError';

interface IProps {
  name: string;
  label: string;
  placeholder?: string;
  fileRef: React.RefObject<HTMLInputElement>;
}

export default function UploadFileField({
  name,
  label,
  placeholder = 'Завантажити файл',
  fileRef,
}: IProps) {
  const [field, meta] = useField(name);

  return (
    <label>
      <input type="file" ref={fileRef} {...field} hidden />
      <div
        className={`golden-edge ${
          meta.touched && meta.error && 'warning-edge'
        }`}
      >
        <div
          placeholder={placeholder}
          className="h-full w-full cursor-pointer bg-transparent
                    py-5 pl-3 pr-28 outline-none transition 
                    duration-200 placeholder:text-placeholder 
                    hover:shadow-hover md:py-6 md:pl-4 md:pr-52 xl:pl-6"
        >
          {field.value ? (
            <p className="break-words">{field.value.split('\\').slice(-1)}</p>
          ) : (
            <p className="text-placeholder">{placeholder}</p>
          )}
          <div
            className="absolute right-0 top-0 flex h-full 
                      items-center justify-center rounded-md
                      bg-light-gradient px-8 py-3 text-secondary
                      md:px-2 md:py-7 md:text-xl xl:text-2xl"
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
