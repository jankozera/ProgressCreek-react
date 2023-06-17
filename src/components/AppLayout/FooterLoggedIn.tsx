import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/logo.png';

const FooterLoggedIn: FC = () => {
    return (
        <div className="w-full bg-black-primary">
          <div className="max-w-container mx-auto h-[88px] flex items-center justify-between w-full px-4">
            <div className="flex items-center justify-center">
              <Link className="text-white mr-4" to="/">Courses</Link>
              <Link className="text-white mr-4" to="/">Profile</Link>
              <Link className="text-white mr-4" to="/">Subscriptions</Link>
            </div>
            <Link to="/">
              <img src={img} alt="ProgressCreek" />
            </Link>
          </div>
        </div>
    )
};

export default FooterLoggedIn;
