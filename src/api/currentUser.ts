import client from './client';

/**
 * @typedef {import('axios').AxiosResponse} AxiosResponse
 */

/**
 * @typedef {Object} CurrentUser
 */

const URL = 'current-user/';

const fetchCurrentUser = async () => {
  return client.get(URL);
};

const actions = {
  fetchCurrentUser,
};

export default actions;
