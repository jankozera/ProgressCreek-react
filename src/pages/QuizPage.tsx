import React, { FC, useState } from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import UIErrorIndicator from "../components/UICommon/UIErrorIndicator";
import UILoadingIndicator from "../components/UICommon/UILoadingIndicator";
import { currentUser } from "../state/user/currentUser";
import useFetchSingleQuiz from "../hooks/quiz/useFetchSingleQuiz";
import { singleQuiz } from "../state/quiz/quiz";
import QuizSingleType from "../types/QuizSingleType";

import img from '../assets/woman.png';
import actions from "../api/quiz";
import { Link } from "react-router-dom";

const QuizPage: FC = () => {
  const {id} = useParams();
  const {isLoading, isError} = useFetchSingleQuiz(id);
  const quizData: QuizSingleType = useRecoilValue(singleQuiz);
  const userData = useRecoilValue(currentUser);
  const [answers, setAnswers] = useState<any>([]);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [passed, setPassed] = useState<boolean>(false);

  const handleChange = (questionId: number, answer: boolean) => {
    const answerIndex: any = answers.findIndex((res: any) => res.question === questionId);

    if (answerIndex > -1) {
      const updatedResponses: any = [...answers];
      updatedResponses[answerIndex].answer = answer;
      setAnswers(updatedResponses);
    } else {
      setAnswers([...answers, { question: questionId, answer }]);
    }
  };

  const isValid = () => {
    if (answers.length === quizData.questions.length) {
      return true;
    }
    return false;
  }

  const handleSubmit = () => {
    setSubmitted(true);
    if (isValid()) {
      actions.completeQuiz(answers).then((res: any) => {
        setMessage(`Earned ${res.data.points} out of ${quizData.questions.length} points! Your total points: ${res.data.total_points}`);
        if ((res.data.points / quizData.questions.length) * 100 > 80) {
          setPassed(true);
        } else {
          setPassed(false);
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  };

  if (isLoading || quizData == null || userData == null) {
    return <UILoadingIndicator />
  }

  if (isError) {
    return <UIErrorIndicator />
  }

  return (
    <div className="w-full h-full">
      <h1 className='text-bold text-black-primary border-black-primary text-3xl font-bold mb-4'>{quizData.title}</h1>
      <p className="text-sm text-black-primary mb-12 font-light leading-[17px]">{quizData.description}</p>
      <div className="flex w-full">
        <div className="flex flex-col w-1/2">
          {quizData.questions && quizData.questions.length > 0 && quizData.questions.map((el, index) => (
            <div key={`question-${index}`} className="w-full mb-12">
              <h3 className="text-black-primary text-2xl font-bold mb-2">Question {index + 1}</h3>
              <p className="text-black-primary mb-4">{el.content}</p>
              <label className={`answer ${answers.find((res: any) => res.question === el.id)?.answer === true ? 'selected' : ''}`}>
                <input
                  type="radio"
                  className="hidden"
                  checked={answers.find((res: any) => res.question === el.id)?.answer === true}
                  onChange={() => handleChange(el.id, true)}
                /> Yes
              </label>
              <label className={`answer ${answers.find((res: any) => res.question === el.id)?.answer === false ? 'selected' : ''}`}>
                <input
                  type="radio"
                  className="hidden"
                  checked={answers.find((res: any) => res.question === el.id)?.answer === false}
                  onChange={() => handleChange(el.id, false)}
                /> No
              </label>
              {submitted && !answers.find((res: any) => res.question === el.id) && 
                <p className="text-[#EB5757]">Choose answer</p>}
            </div>
          ))}
          <div className="flex w-full flex-col">
            {message !== '' ? (
              <>
                {passed ? (
                  <>
                    <h2 className="text-lg text-green-primary mb-2">Great work!</h2>
                    <p className="text-black-primary mb-4">{message}</p>
                  </>
                ) : (
                  <>
                    <h2 className="text-lg text-[#EB5757] mb-2">Whops, take another try!</h2>
                    <p className="text-black-primary mb-4">{message}</p>
                  </>
                )}
              <div>
                <button
                  className={
                    `bg-black-primary text-white text-sm ` +
                      `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
                      `focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
                  }
                  type='button'
                >
                  <Link to={`/courses/${quizData.course}/`}>
                    Back to the course
                  </Link>
                </button>
              </div>
              </>
            ) : (
              <>
                <div>
                  <button
                    className={
                      `bg-black-primary text-white text-sm ` +
                        `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
                        `focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
                    }
                    type='button'
                    onClick={() => handleSubmit()}
                  >
                    Submit your answers
                  </button>
                </div>
                {submitted && !isValid() && (
                  <p className="text-[#EB5757]">You have to answer all questions to finish the quiz.</p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="flex w-1/2 items-end">
          <img src={img} alt="" className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
