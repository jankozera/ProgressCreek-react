import {atom} from 'recoil';
import CoursesSingleType from '../../types/CourseSingleType';
import CoursesListType from '../../types/CoursesListType';

export const coursesArray = atom<CoursesListType>({
  key: 'coursesArray',
  default: [],
});

export const singleCourse = atom<CoursesSingleType>({
  key: 'singleCourse',
  default: undefined,
});
