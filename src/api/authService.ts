import axios from 'axios';
import {BehaviorSubject} from 'rxjs';

const accessToken = new BehaviorSubject('');
const refreshToken = new BehaviorSubject('');
const ACCESS_TOKEN_KEY = 'accessToken';
const REFRESH_TOKEN_KEY = 'refreshToken';
const LOGIN_URL = 'http://localhost:8000/api/login/';
const REFRESH_URL = 'http://localhost:8000/api/token/refresh/';
const USER_EMAIL = 'userEmail';
const USER_PASS = 'userPassword';

const login = (email: string, password: string) => {
  return axios
      .post(LOGIN_URL, {
        'email': email,
        'password': password,
      })
      .then((res) => {
        accessToken.next(res.data.access);
        refreshToken.next(res.data.refresh);
        localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, res.data.refresh);
      });
};

const logout = () => {
  accessToken.next('');
  localStorage.removeItem(ACCESS_TOKEN_KEY);
  localStorage.removeItem(REFRESH_TOKEN_KEY);
  localStorage.removeItem(USER_EMAIL);
  localStorage.removeItem(USER_PASS);
};

const setRefreshTokenFromLocalStorage = () => {
  const tokenFromLocalStorage = localStorage.getItem(REFRESH_TOKEN_KEY);
  if (tokenFromLocalStorage) {
    setRefreshToken(tokenFromLocalStorage);
  }
};

const setAccessTokenFromLocalStorage = () => {
  const tokenFromLocalStorage = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (tokenFromLocalStorage) {
    setAccessToken(tokenFromLocalStorage);
  }
};

const getUserEmailFromLocalStorage = () => {
  return localStorage.getItem(USER_EMAIL);
};

const getUserPasswordFromLocalStorage = () => {
  return localStorage.getItem(USER_PASS);
};

const getAccessTokenFromLocalStorage = () => {
  const tokenFromLocalStorage = localStorage.getItem(ACCESS_TOKEN_KEY);
  return tokenFromLocalStorage;
};

const setAccessToken = (token: any) => {
  accessToken.next(token);
};

const setRefreshToken = (token: any) => {
  refreshToken.next(token);
};

const refreshAccessToken = () => {
  const data = {refresh: refreshToken.value};
  return axios
      .post(REFRESH_URL, data)
      .then((res) => {
        setAccessToken(res.data.access);
        setRefreshToken(res.data.refresh);
        localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access);
        localStorage.setItem(REFRESH_TOKEN_KEY, res.data.refresh);
      })
      .catch((res) => {
        if (res.response.status === 401) {
          setAccessToken('');
          setRefreshToken('');
        }
      });
};

export const authService = {
  login,
  logout,
  refreshAccessToken,
  setAccessTokenFromLocalStorage,
  setRefreshTokenFromLocalStorage,
  getAccessTokenFromLocalStorage,
  getUserEmailFromLocalStorage,
  getUserPasswordFromLocalStorage,
  currentToken: accessToken.asObservable(),
  get tokenValue() {
    return getAccessTokenFromLocalStorage();
  },
};
