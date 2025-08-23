import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CourseCard from '../layouts/CLayout';
import courseData from '../sections/CData';
const createCourseCard = (courseData) => {
    return(
        <CourseCard 
            key={courseData.key}
            img={courseData.img}
            title={courseData.title}
            subtitle={courseData.subtitle}
            price={courseData.price}
            status={courseData.status}
        />
    )
}
const CoursesList = () => {
    return ( 
        <div className=''>
            {courseData.map(createCourseCard)}
        </div>
     );
}
 
export default CoursesList;