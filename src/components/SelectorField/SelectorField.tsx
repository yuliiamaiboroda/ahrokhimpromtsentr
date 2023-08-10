'use client';

import { useState, useRef, useEffect } from 'react';
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
  const selector = useRef<HTMLLabelElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      console.log('handleOutsideClick');
      if (
        event.target &&
        selector.current &&
        !selector.current.contains(event.target as HTMLElement)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <label className="relative cursor-pointer" ref={selector}>
      <div
        className={`golden-edge ${
          meta.touched && meta.error ? 'warning-edge' : ''
        }`}
      >
        <input
          type="text"
          readOnly
          onClick={() => setIsMenuOpen(prevState => !prevState)}
          placeholder={placeholder}
          value={selectedOption.label}
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
                }}
                className={`${
                  value === selectedOption.value
                    ? 'bg-accent text-secondary'
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
    </label>
  );
}
