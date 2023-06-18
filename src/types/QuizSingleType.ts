type QuizSingleType = {
  id: number;
  course: number;
  title: string;
  description: string;
  min_correct_answers: number;
  questions: {
    id: number;
    content: string;
  }[];
};

export default QuizSingleType;
