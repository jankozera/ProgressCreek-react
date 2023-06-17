import React, {FC} from 'react';

import img from '../assets/man.png';
import LoginForm from '../components/LoginPage/LoginForm';
import UIHeading from '../components/UICommon/UIHeading';

const LoginPage: FC = () => {
    return (
        <div className='w-full flex space-x-12 pt-8'>
            <div className="w-2/3 flex justify-end pr-16">
                <img src={img} alt="" />
            </div>
            <div className="w-1/3 pt-16">
                <UIHeading title='Log in' />
                <p className='font-normal text-black-primary mb-8'>
                    Complete the fields below to access your account.
                </p>
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage;
