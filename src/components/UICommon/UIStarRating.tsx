import React, {FC} from 'react';
import UIStar from './UIStar';

type UIStarRatingProps = {
  rating: number;
}

const UIStarRating: FC<UIStarRatingProps> = ({rating}) => {
  return (
    <div className="flex">
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <UIStar filled={ratingValue <= rating} />
          </label>
        );
      })}
    </div>
  );
};

export default UIStarRating;
