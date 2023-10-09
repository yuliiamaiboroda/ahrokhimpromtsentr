import { useState, useMemo } from 'react';
import { useField } from 'formik';
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
}: IProps) {
  const [field, meta, helpers] = useField(name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [optionsList] = useState(() =>
    options.filter(
      (option, index, array) =>
        array.findIndex(({ value }) => value === option.value) === index
    )
  );

  const handleOutsideClick = () => {
    closeDropdown();
  };

  const handleEscapePress = (e: KeyboardEvent) => {
    const ESCAPE_CODE = 'Escape';
    if (e.code === ESCAPE_CODE) {
      closeDropdown();
    }
  };

  const closeDropdown = () => {
    setIsMenuOpen(false);
    document.removeEventListener('click', handleOutsideClick);
    window.removeEventListener('keydown', handleEscapePress);
  };

  const switchDropdown = () => {
    setIsMenuOpen(prevState => {
      if (prevState) {
        document.removeEventListener('click', handleOutsideClick);
        return false;
      } else {
        document.addEventListener('click', handleOutsideClick);
        window.addEventListener('keydown', handleEscapePress);
        return true;
      }
    });
  };

  const selectedOption = useMemo(() => {
    return optionsList.find(option => option.value === field.value);
  }, [optionsList, field.value]);

  return (
    <div className="relative cursor-pointer">
      <div
        className={`golden-edge 
        first-letter:uppercase
        ${meta.touched && meta.error ? 'warning-edge' : ''}`}
      >
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          value={selectedOption ? selectedOption.label : ''}
          onClick={() => {
            switchDropdown();
          }}
          className="block h-full w-full cursor-pointer bg-transparent
                  py-5 pl-3 pr-9 outline-none transition duration-200 
                  placeholder:text-placeholder focus:shadow-hover 
                  md:py-6 md:pl-4 md:pr-12 xl:pl-6 xl:pr-14"
        />
        <svg
          className={`${
            isMenuOpen ? '-rotate-90' : 'rotate-90'
          } absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 fill-accent transition duration-200 md:right-5 md:h-5 md:w-5
          xl:right-6 xl:h-6 xl:w-6`}
        >
          <use href="/images/icons.svg#next"></use>
        </svg>
      </div>
      {isMenuOpen && (
        <div
          className="absolute left-0 top-[110%] z-30 flex
                    w-full items-center justify-center overflow-hidden rounded-xl
                    bg-light-gradient
                    p-0.5"
        >
          <ul className="scroll  max-h-80 w-full overflow-y-auto rounded-xl bg-dark-gradient">
            {optionsList.length ? (
              optionsList.map(({ label, value }) => (
                <li
                  key={value}
                  onClick={() => {
                    helpers.setValue(value, true);
                    closeDropdown();
                  }}
                  className={`${
                    value === field.value
                      ? 'bg-light-gradient text-secondary'
                      : 'bg-transparent'
                  } px-3 py-1 transition duration-200 hover:bg-accent hover:text-secondary
                md:px-4 md:py-2 xl:px-6`}
                >
                  <p className="first-letter:uppercase">{label}</p>
                </li>
              ))
            ) : (
              <li
                className="px-3 py-1 text-placeholder
                          md:px-4 md:py-2 xl:px-6"
              >
                <p>Немає списку: {placeholder}</p>
              </li>
            )}
          </ul>
        </div>
      )}
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
