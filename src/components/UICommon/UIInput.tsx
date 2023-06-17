import {FC} from 'react';

type UIInputProps = {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  onChange: Function;
  formErrorMessage?: string;
  value?: any;
};

const UIInput: FC<UIInputProps> = ({
  type,
  label,
  name,
  placeholder,
  onChange,
  value,
  formErrorMessage,
}) => {
  return (
    <div className='relative w-full mb-3'>
      <input
        type={type}
        name={name}
        className='border-b border-black-primary pb-1 mb-1'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <label
        className='block text-xs font-bold mb-2'
        htmlFor={name}
      >
        {label}
      </label>
      {formErrorMessage && (
        <small className='text-red-600 font-semibold text-xs'>
          {formErrorMessage}
        </small>
      )}
    </div>
  );
};

export default UIInput;
