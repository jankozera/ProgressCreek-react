import React, {FC} from 'react';

type UIHeadingProps = {
  title: string;
}

const UIHeading: FC<UIHeadingProps> = ({title}) => {
    return (
        <div className='w-full text-green-primary font-bold text-3xl mb-2'>
            {title}
        </div>
    )
}

export default UIHeading;
