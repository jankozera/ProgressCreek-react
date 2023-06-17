import React, {FC} from 'react';

type UILoadingIndicatorProps = {
  isAbsolute?: boolean
}

const UILoadingIndicator: FC<UILoadingIndicatorProps> = ({isAbsolute=true}) => {
  return (
    <div className={`p-6 flex flex-col h-full w-full items-center justify-center text-navy-primary
     left-0 top-0 z-20 mx-auto text-center ${isAbsolute ? 'absolute' : ''}`}>
      <div className="loader"></div>
    </div>
  );
};

export default UILoadingIndicator;
