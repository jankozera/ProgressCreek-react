import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/logo.png';

const NavbarLoggedOut: FC = () => {
    return (
        <div className="w-full bg-black-primary fixed left-0 right-0 top-0">
          <div className="max-w-container mx-auto h-[88px] flex items-center justify-between w-full px-4">
            <Link to="/">
              <img src={img} alt="ProgressCreek" />
            </Link>
            <div className="flex">
              <Link className="text-white" to="/">Courses</Link>
              <Link className="ml-12 text-green-primary font-bold" to="/login/">Log in</Link>
            </div>
          </div>
        </div>
    )
};

export default NavbarLoggedOut;
