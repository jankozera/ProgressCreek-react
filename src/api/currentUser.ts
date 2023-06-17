import { authService } from './authService';
import client from './client';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

/**
 * @typedef {Object} CurrentUser
 */

const URL = 'current-user/';

const fetchCurrentUser = async () => {
  const accessToken = authService.getAccessTokenFromLocalStorage();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  if (accessToken === null) return null;
  return client.get(URL, {headers});
};

const actions = {
  fetchCurrentUser,
};

export default actions;
