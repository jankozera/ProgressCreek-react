import { authService } from './authService';
import client from './client';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

const URL = 'complete-lesson/';

const completeLesson = async (data: any) => {
  const accessToken = authService.getAccessTokenFromLocalStorage();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return client.post(URL, data, {headers});
};

const actions = {
  completeLesson,
};

export default actions;
