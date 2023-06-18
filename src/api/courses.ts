import { authService } from './authService';
import client from './client';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

/**
 * @typedef {Object} Courses
 */

const URL = 'courses/';
const URL_PROGRESSION = 'check-progression/';

const fetchCourses = async () => {
  return client.get(URL);
};

const fetchSingleCourse = async (id: string) => {
  const accessToken = authService.getAccessTokenFromLocalStorage();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  if (accessToken != null) {
    return client.get(URL + id + '/', {headers});
  }
  return client.get(URL + id + '/');
};

const checkProgression = async (id: string) => {
  const accessToken = authService.getAccessTokenFromLocalStorage();
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  return client.post(URL_PROGRESSION, {course: id as unknown as number}, {headers});
};

const actions = {
  fetchCourses,
  fetchSingleCourse,
  checkProgression,
};

export default actions;
