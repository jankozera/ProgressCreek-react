import React, {FC} from 'react';

type UIStarProps = {
  filled: boolean;
}

const UIStar: FC<UIStarProps> = ({filled}) => {
  return (
    <svg 
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mr-1"
    >
      <path d="M8.25513 12.132L8.00051 11.981L7.74563 12.1316L3.86574 14.4244L3.86485 14.4249C3.51294 14.6338 3.13403 14.3153 3.21361 13.9797L4.24196 9.65117L4.31278 9.35307L4.07932 9.15463L0.648195 6.23823L0.648018 6.23808C0.372551 6.00416 0.504307 5.54333 0.896171 5.51276L0.896172 5.51276L0.898765 5.51255L5.41439 5.13654L5.71277 5.11169L5.83174 4.83692L7.59872 0.755803L7.59872 0.755805L7.59956 0.753842C7.74439 0.415386 8.25561 0.415386 8.40043 0.753843L8.40112 0.755428L10.1681 4.84572L10.287 5.12084L10.5856 5.14571L15.1012 5.52172V5.52173L15.1038 5.52193C15.4957 5.55251 15.6274 6.01333 15.352 6.24725L15.3518 6.2474L11.9207 9.1638L11.6872 9.36224L11.758 9.66034L12.7864 13.9888C12.866 14.3245 12.4871 14.643 12.1351 14.4341L12.135 14.434L8.25513 12.132Z" fill={`${filled ? '#06D6A0' : '#fff'}`} stroke="#06D6A0"/>
    </svg>
  );
};

export default UIStar;
