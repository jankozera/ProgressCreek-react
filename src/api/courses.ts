import client from './client';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

/**
 * @typedef {Object} Courses
 */

const URL = 'courses/';

const fetchCourses = async () => {
  return client.get(URL);
};

const fetchSingleCourse = async (id: string) => {
  return client.get(URL + id + '/');
};

const actions = {
  fetchCourses,
  fetchSingleCourse,
};

export default actions;
