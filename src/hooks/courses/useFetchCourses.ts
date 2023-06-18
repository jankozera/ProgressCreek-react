import {useSetRecoilState} from 'recoil';
import {useQuery} from 'react-query';
import actions from '../../api/courses';
import { coursesArray } from '../../state/courses/courses';

const useFetchCourses = () => {
  const setCourses = useSetRecoilState(coursesArray);
  return useQuery('fetchCourses', async () => {
    const courses = await actions.fetchCourses();
    setCourses(courses?.data);
    return courses;
  });
};

export default useFetchCourses;
