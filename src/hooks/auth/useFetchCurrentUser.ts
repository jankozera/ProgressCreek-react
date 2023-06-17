import {useSetRecoilState} from 'recoil';
import {useQuery} from 'react-query';
import actions from '../../api/currentUser';
import {currentUser} from '../../state/user/currentUser';

const useFetchCurrentUser = () => {
  const setCurrentUser = useSetRecoilState(currentUser);
  return useQuery('fetchCurrentUser', async () => {
    const user = await actions.fetchCurrentUser();
    setCurrentUser(user?.data);
    return user;
  }, {
    retry: false,
  });
};

export default useFetchCurrentUser;
