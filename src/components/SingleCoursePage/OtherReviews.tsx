import React, {FC} from 'react';
import UIStarRating from '../UICommon/UIStarRating';

type OtherReviewsProps = {
  reviews: any;
};

const OtherReviews: FC<OtherReviewsProps> = ({reviews}) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl text-black-primary mb-4">Other users reviews</h2>
      <div className="w-full grid grid-cols-2 gap-4">
        {reviews && reviews.length > 0 && reviews.map((el: any, index: number) => (
          <div key={`rev-${el.index}`} className="border border-black-primary p-4">
            <div className="flex justify-between items-center mb-2">
              <div className="flex">
                <div className="w-[30px] h-[30px] bg-black-primary rounded-full flex items-center justify-center font-bold text-green-primary text-[10px]">
                  {el.user.first_name.charAt(0)}
                  {el.user.last_name.charAt(0)}
                </div>
                <span className='text-black-primary font-bold ml-2'>{el.user.first_name} {el.user.last_name}</span>
              </div>
              <UIStarRating rating={el.rate} />
            </div>
            <div className="w-full">
              <p className='text-sm leading-[17px] text-black-primary'>{el.review}</p>
            </div>
          </div>
        ))}  
      </div>
    </div>
  );
};

export default OtherReviews;
