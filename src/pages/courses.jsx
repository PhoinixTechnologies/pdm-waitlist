import React from 'react';
import { NavLink } from 'react-router-dom';

const Courses= () => {
    return (
        <div className='div'>
            <div className='flex flex-col gap-1 mt-5'>
                <h1
                className='text-[#000] font-poppins text-xl font-semibold'
                >Hi, Ruben Amorin</h1>
                <p
                className='text-[#adadad] font-poppins 
                text-lg font-medium'
                >Let's continue where you left off</p>
                <div className='flex flex-row gap-4 mt-4'>
                    <button
                    className='inline-flex px-3 py-2 flex items-center jusify-center bg-[#00f] rounded-lg text-white font-poppins text-lg font-normal cursor-pointer hover:bg-[#0056b3]'
                    >All Courses</button>
                    <button
                    className='inline-flex px-3 py-2 flex items-center jusify-center bg-white border-2 border-[#A4A2A278] rounded-lg text-black font-poppins text-lg font-normal gap-2 cursor-pointer hover:bg-[#f0f0f0]'
                    >My Courses <span className='flex px-1.5  flex-col justify-center items-center rounded-md bg-[#00f] text-white font-poppins text-md font-medium'>1</span></button>
                </div>
            </div>

        </div>
    )
}


export default Courses;