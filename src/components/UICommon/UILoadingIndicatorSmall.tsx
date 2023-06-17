import React, {FC} from 'react';

const UILoadingIndicatorSmall: FC = () => {
  return (
    <div className="p-6 flex flex-col w-full h-full mx-auto my-auto items-center justify-center text-navy-primary
      text-center ">
      <div className="loader"></div>
    </div>
  );
};

export default UILoadingIndicatorSmall;
