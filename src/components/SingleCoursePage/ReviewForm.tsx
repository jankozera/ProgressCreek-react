import React, {FC} from 'react';
import UIStarRating from '../UICommon/UIStarRating';

import img from '../../assets/man-reversed.png';

type ReviewFormProps = {
  description: string;
  fName: string;
  lName: string;
  error?: string;
};

const ReviewForm: FC<ReviewFormProps> = ({description, fName, lName, error}) => {
  return (
    <div className="flex w-full">
        <div className="w-3/5 pr-8">
          <h2 className="font-bold text-2xl text-black-primary mb-2">About the course</h2>
          <p className="text-sm text-black-primary mb-12 font-light leading-[17px]">{description}</p>
          <h2 className={`font-bold text-2xl text-black-primary ${!error && 'mb-2'}`}>Add review</h2>
          {error && <p className='text-[#EB5757] text-sm'>{error}</p>}
          <p className="text-sm text-black-primary mb-4 leading-[17px]">Share your opinion about the course with other users</p>
          <form className={`${error && 'opacity-30'}`}>
            <div className="w-full flex justify-between relative">
              <div
                className='border-b border-black-primary text-black-primary pb-1 mb-1 w-full'
              >
                {fName ? fName : 'Name'} {lName ? lName : 'Last name'}
              </div>
              <div className="stars flex absolute right-0 top-1">
                <UIStarRating rating={0} />
              </div>
            </div>
            <textarea className="w-full border-b border-black-primary text-black-primary py-2 mb-4" name="" id="" cols={30} rows={7} defaultValue="Your review..."></textarea>
            <div className="w-full flex justify-end">
              <button className={
                `bg-green-primary text-black-primary text-sm ` +
                  `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
                  `focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
              }>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="w-2/5">
          <img src={img} className="object-contain" alt="" />
        </div>
      </div>
  );
};

export default ReviewForm;
