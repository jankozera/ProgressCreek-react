import { authService } from './authService';
import client from './client';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

/**
 * @typedef {Object} Courses
 */

const URL = 'courses/';
const COMPLETE_URL = 'complete-quiz/';

const fetchSingleQuiz = async (id: string) => {
  const accessToken = authService.getAccessTokenFromLocalStorage();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return client.get(URL + id + '/quiz/', {headers});
};

const completeQuiz = async (data: any) => {
  const accessToken = authService.getAccessTokenFromLocalStorage();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return client.post(COMPLETE_URL, data, {headers});
};

const actions = {
  fetchSingleQuiz,
  completeQuiz,
};

export default actions;
