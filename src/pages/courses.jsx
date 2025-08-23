import React, { useState } from 'react';
import CoursesList from '../sections/CList.jsx';
import MyCourses from '../sections/MyCourses.jsx';

const Courses = () => {
    const [activeButton, setActiveButton] = useState('allCourses'); // 'allCourses' or 'myCourses'

    return (
        <div className='flex flex-col gap-1 mt-5'>
            {/* Header section - always visible */}
            <div>
                <h1 className='text-[#000] font-poppins text-xl font-semibold'>
                    Hi, Ruben Amorin
                </h1>
                <p className='text-[#adadad] font-poppins text-lg font-medium'>
                    Let's continue where you left off
                </p>
                <nav className='flex flex-row gap-4 mt-4'>
                    <button
                        onClick={() => setActiveButton('allCourses')}
                        className={`inline-flex px-3 py-2 items-center justify-center rounded-lg  font-poppins text-lg font-normal cursor-pointer hover:bg-[#0056b3] ${
                            activeButton === 'allCourses' 
                                ? 'bg-[#00f] text-white' 
                                : 'bg-white border-2 border-[#A4A2A278] text-black hover:bg-[#f0f0f0]'
                        }`}
                    >
                        All Courses
                    </button>
                    <button
                        onClick={() => setActiveButton('myCourses')}
                        className={ `inline-flex px-3 py-2 items-center justify-center rounded-lg font-poppins text-lg font-normal gap-2 cursor-pointer ${
                            activeButton === 'myCourses' 
                                ? 'bg-[#00f] text-white' 
                                : 'bg-white border-2 border-[#A4A2A278] text-black hover:bg-[#f0f0f0]'
                        }`}
                    >
                        My Courses 
                        <span className='flex px-1.5 flex-col justify-center items-center rounded-md bg-[#00f] text-white font-poppins text-md font-medium'>
                            1
                        </span>
                    </button>
                </nav>
            </div>
            {/* Content section - changes based on active button */}
            <main className='mt-6'>
                {activeButton === 'allCourses' ? <CoursesList /> : <MyCourses />}
            </main>
        </div>
    );
};

export default Courses;