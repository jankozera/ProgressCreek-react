import {useMutation} from 'react-query';
import {authService} from '../../api/authService';

/**
 *
 * @param {MutateOptions} options options passed to the useQuery hook
 * @return {UseMutationResult<void, unknown, void, unknown>}
 */


const useFetchToken = (email: string, password: string) => {
  return useMutation( async () => {
    await authService.login(email, password);
  }, {retry: false});
};

export default useFetchToken;
