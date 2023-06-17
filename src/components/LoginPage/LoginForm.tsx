import { AxiosError } from "axios";
import React, { FC, FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { authService } from "../../api/authService";
import useFetchToken from "../../hooks/auth/useFetchToken";
import { isValidEmail } from "../../utils/isValidEmail";
import UIErrorIndicator from "../UICommon/UIErrorIndicator";
import UIInput from "../UICommon/UIInput";
import UILoadingIndicatorSmall from "../UICommon/UILoadingIndicatorSmall";
import UISubmit from "../UICommon/UISubmit";

const LoginForm: FC = () => {
  const [formValues, setFormValues] = useState({
    email: authService.getUserEmailFromLocalStorage(),
    password: authService.getUserPasswordFromLocalStorage(),
  });
  const [formErrorMessages, setFormErrorMessages] = useState({email: '', password: ''});
  const {error, isLoading, isError, isSuccess, mutate} = useFetchToken(
    formValues.email as string,
    formValues.password as string,
  );
  const is401 = error instanceof AxiosError && error?.response?.status === 401;
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate('/')
    }
  }, [isSuccess, navigate]);

  const onChange = (event: any) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onKeyPress = (event: any) => {
    const key = event.key.toLowerCase();

    if (key === 'enter') {
      submit();
    }
  };

  const validate = () => {
    const errors = {email: '', password: ''};
    if (!formValues.email) {
      errors.email = 'Type in your e-mail.';
    } else if (!isValidEmail(formValues.email)) {
      errors.email = 'Email must be valid email address';
    }
    if (!formValues.password) {
      errors.password = 'Type in your password';
    }
    setFormErrorMessages(errors);
    return errors.email.length === 0 && errors.password.length === 0;
  };

  const submit = (event?: FormEvent) => {
    event && event.preventDefault();
    if (validate()) {
      mutate();
    }
  };

  return (
    <form className="w-full" onKeyPress={(e) => onKeyPress(e)}>
      <div className="w-full grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <UIInput
            type="text"
            label="Email"
            name="email"
            placeholder="Type here..."
            onChange={onChange}
            formErrorMessage={formErrorMessages.email}
            // value={formValues.email}
          />
        </div>
        <div className="col-span-1">
          <UIInput
            type="password"
            label="Password"
            name="password"
            placeholder="Type here..."
            onChange={onChange}
            formErrorMessage={formErrorMessages.password}
            // value={formValues.password}
          />
        </div>
        <div className="col-span-2">
          <div className="flex justify-start">
            <UISubmit
              label="Sign in"
              onClick={submit}
            />
          </div>
        </div>
        <div className="col-span-2">
          {isLoading && <UILoadingIndicatorSmall/>}
          {isError && <UIErrorIndicator
            message={is401 ?
                  'Your e-mail or password is incorrect.' :
                  'An error has occurred.'
            } />
          }
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
