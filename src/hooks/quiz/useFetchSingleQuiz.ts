import {useSetRecoilState} from 'recoil';
import {useQuery} from 'react-query';
import actions from '../../api/quiz';
import { singleQuiz } from '../../state/quiz/quiz';

const useFetchSingleQuiz = (id: string | undefined) => {
  const setQuiz = useSetRecoilState(singleQuiz);
  return useQuery('fetchSingleQuiz', async () => {
    if (id != null) {
      const quiz = await actions.fetchSingleQuiz(id);
      setQuiz(quiz?.data);
      return quiz;
    }
  });
};

export default useFetchSingleQuiz;
