import {FC} from 'react';

type UISubmitProps = {
  label: string;
  onClick: Function;
};

const UISubmit: FC<UISubmitProps> = ({
  label,
  onClick,
}) => {
  return (
    <div className='text-center'>
      <button
        className={
          `bg-black-primary text-white text-sm ` +
            `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
            `focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150`
        }
        type='button'
        onClick={(e) => onClick(e)}
      >
        {label}
      </button>
    </div>
  );
};

export default UISubmit;
