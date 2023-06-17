import {atom} from 'recoil';
import CoursesListType from '../../types/CoursesListType';

export const coursesArray = atom<CoursesListType>({
  key: 'coursesArray',
  default: [],
});
