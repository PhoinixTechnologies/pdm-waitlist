import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import mylogo from '../assets/img/logo.png'; 
import double_coin from '../assets/double_coin.png';
import Calendar from 'react-calendar';

// import tailwindcss from "@tailwindcss/vite";



const Dashboard = ()=> {
    const [date, setDate] =useState(new Date());

    return (
        <div className='container mx-auto space-y-6'>

            {/* Welcome message with 2 CTA*/}
            <div className='flex items-center w-full justify-between'>

                {/* individual tab */}
                <div>
                    <h4 className='text-xl font-bold'>Hi, Ruben Amorim</h4>
                    <span className='text-gray-400'>Let's learn something new today!</span>
                </div>
                {/* end of welcome person div */}

                {/* button divs */}
                <div className='flex items-center gap-4'>
                    <button className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition">
                        <img src='' />
                        Customize
                    </button>
                    <button className="text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-full transition">
                        <img src='' />
                        Add new
                    </button>
                </div>
                {/* End of button div */}
            </div>
            {/* ///////////// */}

            {/* Progress, Profile Tab */}
                {/* First TAB */}
                <div className='flex justify-between gap-x-5 overflow-hidden'>
                    {/* Profile with coins mini section */}
                    <div className='flex w-[65%] p-3 border-r border-gray-300 justify-between border rounded-lg'>
                        <div className='p-6 items-center gap-4'>
                        <img src='' className='w-12 h-12 rounded-full' />
                        <div>
                        <span className='block font-semibold'>Student .Python</span>
                        <div className='items-center gap-2 flex'>
                            <img src={double_coin} className='w-5 h-5'/>
                            <h5 className='font-bold'>110</h5>
                            <span className='text-sm text-black'>Earned coins</span>
                        </div>
                        </div>
                        </div>

                        {/* Grided inner section */}
                        <div className='grid grid-cols-2 grid-rows-2 '>
                            <div className='items-center justify-center border-r-2 border-b-2 border-gray-300 p-4'>
                            <img src='' />
                            <h5>01</h5>
                            <span>Course in Progress</span>
                            </div>

                            <div className='items-center justify-center border-b-2 border-gray-300 p-6'>
                            <img src='' />
                            <h5>00</h5>
                            <span>Course Completed</span>
                            </div>

                            <div className='items-center justify-center border-r-2 border-gray-300 p-6'>
                            <img src='' />
                            <h5>72h</h5>
                            <span>Watch Time</span>
                            </div>

                            <div className='items-center justify-center p-6'>
                            <img src='' />
                            <h5>00</h5>
                            <span>Certificate Earned</span>
                            </div>
                        </div>
                        {/* End of inner div */}
                    </div>
                        {/* My Progress div */}
                        <div className='p-5 w-[35%]  border border-gray-300 rounded-lg'>
                            <div className='flex justify-between'>
                                <h4>My Progress</h4>
                                <div className='flex flex-col'>
                                    <span>Last Activity:</span>
                                    <span>2 days ago</span>

                                    <div>
                                        <img src='' />
                                    </div>
                                </div>
                            </div>
                            {/* List */}
                            <div className='flex flex-col'>
                                <span>Current Course</span>
                                <a className='text-blue-600 font-medium'>Python</a>

                                <span>Lessons Completed</span>
                                <a className='text-blue-600 font-medium'>8/12</a>

                                <span>Assessment</span>
                                <a className='text-blue-600 font-medium'>2/3</a>

                                <div className='progress-circle'>
                                    {/* progress circle */}
                                </div>
                            </div>
                </div>
            </div>

                        {/* Calendar, Bookmarkes & Recent Activity Tab */}
                        <div className='flex border border-gray-300 rounded-lg overflow-hidden'>
                            <div className='w-[40%] p-4 border-r border-gray-300'>
                                <div>
                                    <img src='' />
                                    Calendar
                                </div>
                            </div>
                        </div>
                        


        </div>
    )
}


export default Dashboard;