import React, {FC, useState} from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { authService } from '../../api/authService';
import { currentUser } from '../../state/user/currentUser';

const UserDropdown: FC = () => {
  const [toggled, setToggled] = useState(false);
  const userData = useRecoilValue(currentUser);

  return (
      <div className="relative">
        <div
          className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl font-bold text-green-primary cursor-pointer"
          onClick={() => setToggled(!toggled)}
        >
          {userData?.first_name.charAt(0)}
          {userData?.last_name.charAt(0)}
        </div>
        <div className={`absolute right-0 w-64 mt-2 rounded-sm bg-white border border-[#F0F0F0] shadow-md py-4 ${toggled ? 'flex' : 'hidden'} flex-col`}>
          <div className="flex items-center px-4 pb-4">
            <div className="1/4">
              <div className="w-12 h-12 bg-black-primary rounded-full flex items-center justify-center text-xl font-bold text-green-primary">
                {userData?.first_name.charAt(0)}
                {userData?.last_name.charAt(0)}
              </div>
            </div>
            <div className="3/4 pl-4">
              <h2 className='text-black-primary font-bold'>{userData?.first_name} {userData?.last_name}</h2>
              <h3 className='text-black-primary opacity-30 text-xs'>{userData?.email}</h3>
            </div>
          </div>
          <div className="flex flex-col py-4 border-t border-b border-[#F0F0F0] px-4">
            <ul>
              <li><Link className='text-black-primary text-sm pb-2 block' to="/">Profile settings</Link></li>
              <li><Link className='text-black-primary text-sm pb-2 block' to="/">Company dashboard</Link></li>
              <li><Link className='text-black-primary text-sm block' to="/">Courses</Link></li>
            </ul>
          </div>
          <div className="flex px-4 pt-4">
            <span className="text-[#EB5757] cursor-pointer text-sm" onClick={() => authService.logout()}>Log out</span>
          </div>
        </div>
      </div>
  )
};

export default UserDropdown;
