import {useSetRecoilState} from 'recoil';
import {useQuery} from 'react-query';
import actions from '../../api/courses';
import { singleCourse } from '../../state/courses/courses';

const useFetchSingleCourse = (id: string | undefined) => {
  const setCourse = useSetRecoilState(singleCourse);
  return useQuery('fetchSingleCourse', async () => {
    if (id != null) {
      const course = await actions.fetchSingleCourse(id);
      setCourse(course?.data);
      return course;
    }
  });
};

export default useFetchSingleCourse;
