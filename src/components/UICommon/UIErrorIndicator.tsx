import React, {FC} from 'react';

type UIErrorIndicatorProps = {
  message?: string;
}

const UIErrorIndicator: FC<UIErrorIndicatorProps> = ({
  message = 'Ett oväntat fel inträffade',
}) => {
  return (
    <div className='text-red-600 text-center text-sm font-semibold py-4'>{message}</div>
  );
};

export default UIErrorIndicator;
