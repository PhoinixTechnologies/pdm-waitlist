import React from 'react';
import CourseCard from '../layouts/CLayout';
import courseData from './CData.js';

const createCpuresInProgressCard = (courseData) => {
    if(courseData.status === "In Progress" || courseData.status === "Completed" ){
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
}
const coursesInProgressOrCompleted = courseData.filter(course => course.status === "In Progress" || course.status === "Completed").length;



const MyCourses = () => {
    return ( 
         <div>
            {courseData.map(createCpuresInProgressCard)}
         </div>
     );
}
 
export default MyCourses;
export { coursesInProgressOrCompleted };