import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import { useRecoilValue } from "recoil";
import LessonItem from "../components/SingleCoursePage/LessonItem";
import UIErrorIndicator from "../components/UICommon/UIErrorIndicator";
import UILoadingIndicator from "../components/UICommon/UILoadingIndicator";
import useFetchSingleCourse from "../hooks/courses/useFetchSingleCourse";
import { singleCourse } from "../state/courses/courses";
import CoursesSingleType from "../types/CourseSingleType";
import { currentUser } from "../state/user/currentUser";
import ReviewForm from "../components/SingleCoursePage/ReviewForm";
import OtherReviews from "../components/SingleCoursePage/OtherReviews";
import actions from "../api/courses";
import { Link } from "react-router-dom";

const CoursesSinglePage: FC = () => {
  const {id} = useParams();
  const {isLoading, isError} = useFetchSingleCourse(id);
  const courseData: CoursesSingleType = useRecoilValue(singleCourse);
  const userData = useRecoilValue(currentUser);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  const getEmbedId = (url: string) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get('v');
  }

  useEffect(() => {
    if (id != null) {
      actions.checkProgression(id).then((res) => {
        setCurrentProgress(res.data.progression);
      })
    }
  }, [id, userData, courseData, activeIndex]);

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
          {!userData.subscription ? (
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-[#EB5757] text-2xl font-bold mb-2">Your subscription has expired :(</h2>
                <p className="text-black-primary font-light">Contact with your employer for more details</p>
              </div>
            </div>
          ) : (
            <>
            {courseData?.lessons[activeIndex]?.content ? (
              <div className="course-content" dangerouslySetInnerHTML={{__html: courseData.lessons[activeIndex].content as string}}></div>
            ) : (
              <div className="absolute inset-0">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${getEmbedId(courseData.lessons[activeIndex].youtube_link as string)}`}
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            )}
            </>
          )}
        </div>
        <div className={`w-1/3 flex flex-col ${!userData.subscription && 'opacity-30'}`}>
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
          <div className={`w-full border-l py-4 pl-8 border-black-primary ${currentProgress !== 100 && 'group'}`}>
            <h2 className="font-bold text-xl text-black-primary mb-1">Quiz</h2>
            <p className="text-sm font-light text-black-primary mb-2">Check your knowledge after finish the course <br/>
                in that short quiz!</p>
            <button className={
              `bg-black-primary text-white text-sm ` +
                `font-bold px-6 py-3 shadow hover:shadow-xl outline-none ` +
                `focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ` +
                `${currentProgress !== 100 && 'cursor-not-allowed group opacity-30'}`
            }>
              {currentProgress !== 100 ? (
                <span>Go to quiz</span>
              ) : (
                <Link to={`/courses/${id}/quiz/`}>Go to quiz</Link>
              )}
            </button>
            <p className="text-sm font-light text-[#EB5757] mt-2 opacity-0 group-hover:opacity-100">You need to complete all lessons to make the quiz!</p>
          </div>
        </div>
      </div>
      <ReviewForm
        description={courseData.description}
        fName={userData.first_name}
        lName={userData.last_name}
      />
      <OtherReviews reviews={courseData.reviews} />
    </div>
  );
};

export default CoursesSinglePage;
