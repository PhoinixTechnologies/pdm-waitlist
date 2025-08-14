import React from 'react';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='space-y-6'>

            {/* Welcome message with 2 CTA*/}
            <div className='flex items-center gap-4'>

                {/* individual tab */}
                <div>
                    <h4 className='text-xl font-bold'>Hi, Ruben Amorim</h4>
                    <span className='text-gray-400'>Let's learn something new today!</span>
                </div>
                {/* end of welcome person div */}

                {/* button divs */}
                <div className='div-button'>
                    <button>
                        <img src='' />
                        <h5>Customize</h5>
                    </button>
                    <button>
                        <img src='' />
                        <h5>Add new</h5>
                    </button>
                </div>
                {/* End of button div */}
            </div>

            {/* Progress, Profile Tab */}
            <div className='progress-div'>
                {/* First TAB */}
                <div className='tab-div'>
                    {/* Profile with coins mini section */}
                    <div className='person'>
                        <img src='' />
                        <span>Student .Python</span>
                        <div>
                            <img src='' />
                            <h5>110</h5>
                            <span>Earned coins</span>
                        </div>
                        </div>

                        {/* Grided inner section */}
                        <div className='div-inner'>
                            <div className='each-grid'>
                            <img src='' />
                            <h5>01</h5>
                            <span>Course in Progress</span>
                            </div>

                            <div className='each-grid'>
                            <img src='' />
                            <h5>00</h5>
                            <span>Course COmpleted</span>
                            </div>

                            <div className='each-grid'>
                            <img src='' />
                            <h5>72h</h5>
                            <span>Watch Time</span>
                            </div>

                            <div className='each-grid'>
                            <img src='' />
                            <h5>00</h5>
                            <span>Certificate Earned</span>
                            </div>
                        </div>
                        {/* End of inner div */}

                        {/* My Progress div */}
                        <div className='My-progress'>
                            <div className=''>
                                <h4>My Progress</h4>
                                <div>
                                    <span>Last Activity:</span>
                                    <span>2 days ago</span>
                                </div>
                            </div>
                            {/* List */}
                            <div className=''>
                                <span>Current Course</span>
                                <a>Python</a>

                                <span>Lessons Completed</span>
                                <a>8/12</a>

                                <span>Assessment</span>
                                <a>2/3</a>

                                <div className='progress-circle'>
                                    {/* progress circle */}
                                </div>
                            </div>
                        </div>

                        {/* Calendar, Bookmarkes & Recent Activity Tab */}

                </div>
            </div>

        </div>

    )
}


export default Dashboard;