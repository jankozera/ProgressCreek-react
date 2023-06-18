import React, { FC, useState } from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import LessonItem from "../components/SingleCoursePage/LessonItem";
import UIErrorIndicator from "../components/UICommon/UIErrorIndicator";
import UILoadingIndicator from "../components/UICommon/UILoadingIndicator";
import useFetchSingleCourse from "../hooks/courses/useFetchSingleCourse";
import { singleCourse } from "../state/courses/courses";
import CoursesSingleType from "../types/CourseSingleType";
import ReviewForm from "../components/SingleCoursePage/ReviewForm";
import OtherReviews from "../components/SingleCoursePage/OtherReviews";
import { Link } from "react-router-dom";

const CoursesSinglePageLoggedOut: FC = () => {
  const {id} = useParams();
  const {isLoading, isError} = useFetchSingleCourse(id);
  const courseData: CoursesSingleType = useRecoilValue(singleCourse);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (isLoading || courseData == null) {
    return <UILoadingIndicator />
  }

  if (isError) {
    return <UIErrorIndicator />
  }

  return (
    <div className="w-full h-full">
      <h1 className='text-bold text-black-primary border-black-primary text-3xl font-bold mb-4'>{courseData.name}</h1>
      <div className="flex w-full border border-black-primary mb-12">
        <div className="w-2/3 p-8 relative">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-green-primary text-2xl font-bold mb-4">Login to unlock more features!</h2>
              <button
                className={
                  `bg-black-primary text-white text-sm ` +
                    `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
                    `focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150`
                }
                type='button'
              >
                <Link to="/login">
                  Log in
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className={`w-1/3 flex flex-col opacity-30`}>
          <h2 className="font-bold text-xl text-black-primary py-4 pl-8 border-b border-l border-black-primary">Lessons</h2>
          {courseData.lessons && courseData.lessons.length > 0 && courseData.lessons.map((el, index) => 
            <LessonItem
              key={index}
              id={el.id}
              index={index}
              title={el.name}
              description={el.description}
              youtubeLink={el.youtube_link}
              content={el.content}
              completed={el.completed}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            />
          )}
          <div className="w-full border-l py-4 pl-8 border-black-primary">
            <h2 className="font-bold text-xl text-black-primary mb-1">Quiz</h2>
            <p className="text-sm font-light text-black-primary mb-2">Check your knowledge after finish the course <br/>
                in that short quiz!</p>
            <button className={
              `bg-black-primary text-white text-sm ` +
                `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
                `focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ` +
                `opacity-30`
            }>
              Go to quiz
            </button>
          </div>
        </div>
      </div>
      <ReviewForm
        description={courseData.description}
        fName=''
        lName=''
        error='You have to be logged in to add review'
      />
      <OtherReviews reviews={courseData.reviews} />
    </div>
  );
};

export default CoursesSinglePageLoggedOut;
