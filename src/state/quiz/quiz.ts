import {atom} from 'recoil';
import QuizSingleType from '../../types/QuizSingleType';


export const singleQuiz = atom<QuizSingleType>({
  key: 'singleQuiz',
  default: undefined,
});
