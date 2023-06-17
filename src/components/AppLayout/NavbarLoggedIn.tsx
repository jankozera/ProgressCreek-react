import React, {FC} from 'react';
import { Link } from 'react-router-dom';

import img from '../../assets/logo.png';
import UserDropdown from './UserDropdown';

const NavbarLoggedIn: FC = () => {
    return (
        <div className="w-full bg-black-primary fixed left-0 right-0 top-0">
          <div className="max-w-container mx-auto h-[88px] flex items-center justify-between w-full px-4">
            <Link to="/">
              <img src={img} alt="ProgressCreek" />
            </Link>
            <div className="flex items-center justify-center">
              <Link className="text-white mr-12" to="/">Courses</Link>
              <UserDropdown/>
            </div>
          </div>
        </div>
    )
};

export default NavbarLoggedIn;
