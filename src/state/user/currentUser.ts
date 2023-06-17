import {atom} from 'recoil';
import CurrentUserType from '../../types/CurrentUserType';

export const currentUser = atom<CurrentUserType>({
  key: 'currentUser',
  default: undefined,
});
