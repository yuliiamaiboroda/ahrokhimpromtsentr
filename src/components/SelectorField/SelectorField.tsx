import { useState } from 'react';
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
  initialValue,
}: IProps) {
  const [, meta, helpers] = useField(name);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    initialValue || { label: '', value: '' }
  );
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

  return (
    <div className="relative cursor-pointer">
      <div
        className={`golden-edge ${
          meta.touched && meta.error ? 'warning-edge' : ''
        }`}
      >
        <input
          type="text"
          readOnly
          placeholder={placeholder}
          value={selectedOption.label}
          onClick={() => {
            switchDropdown();
          }}
          className="block h-full w-full cursor-pointer bg-transparent
                  px-3 py-5 outline-none transition 
                  duration-200 placeholder:text-placeholder 
                  focus:shadow-hover md:px-4 md:py-6 xl:px-6"
        />
      </div>
      {isMenuOpen && (
        <div
          className="absolute left-0
                    top-[110%] z-30 h-80 w-full overflow-hidden
                    rounded-xl border-2 border-solid border-accent
                    bg-dark-gradient"
        >
          <ul className="scroll h-full w-full overflow-y-auto">
            {optionsList.map(({ label, value }) => (
              <li
                key={value}
                onClick={() => {
                  setSelectedOption({ label, value });
                  helpers.setValue(value, true);
                  closeDropdown();
                }}
                className={`${
                  value === selectedOption.value
                    ? 'bg-light-gradient text-secondary'
                    : 'bg-transparent'
                } px-3 py-1 transition duration-200 hover:bg-accent hover:text-secondary
                md:px-4 md:py-2 xl:px-6`}
              >
                <p>{label}</p>
              </li>
            ))}
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
