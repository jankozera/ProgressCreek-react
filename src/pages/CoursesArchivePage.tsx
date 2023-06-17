import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import UIErrorIndicator from '../components/UICommon/UIErrorIndicator';
import UILoadingIndicator from '../components/UICommon/UILoadingIndicator';
import UIStarRating from '../components/UICommon/UIStarRating';
import useFetchCourses from '../hooks/courses/useFetchCourses';
import { coursesArray } from '../state/courses/courses';

const CoursesPageArchive: FC = () => {
  const {isLoading, isError} = useFetchCourses();
  const courses = useRecoilValue(coursesArray);

  console.log(courses);

  if (isLoading) {
    return <UILoadingIndicator />
  }

  if (isError) {
    return <UIErrorIndicator />
  }

  return (
    <div className='w-full h-full'>
      <h1 className='text-bold text-black-primary border-b border-black-primary text-3xl font-bold pb-2 mb-8'>Courses</h1>
      <div className="w-full h-full grid grid-cols-4 gap-8">
        {courses && courses.length > 0 && courses.map((el: any) => (
          <div key={el.id}>
            <Link to={`/courses/${el.id}/`}>
                <img src={`http://localhost:8000${el.avatar}`} className="w-full h-44 object-cover mb-2" alt="" />
                <UIStarRating rating={el.rating} />
                <h2 className='mt-2 font-semibold text-black-brimary'>{el.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPageArchive;
