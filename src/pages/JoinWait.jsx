import logo from '../img/My_PDM_Tutor_1-removebg-preview.png';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import bg_waitlist from '../img/bg_waitlist.png';
import logo_enlarge from '../img/logo_enlarge.png';
import polyone from '../img/polygon.png';
import polytwo from '../img/polytwo.png';
import polythree from '../img/polythree.png';


const Join = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${bg_waitlist})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                padding: '2rem'
            }}
        >
          
          {/* Top-left-image */}
          <LazyLoadImage src={logo_enlarge} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '500px',
                    height: 'auto',
                    zIndex: 10
                }} />

                <div style={{ flex: '0 20% 40%',marginTop: '50px' }}>
               <LazyLoadImage 
          src={polyone} 
          alt="Left side decorative image"
          style={{ width: '200px', height: 'auto', objectFit: 'contain' }} 
          />
          </div>
            <div className='sm:max-md:w-[60%] w-[90%] lg:w-[40%] h-[100%] flex flex-col gap-y-10 items-center'>
                
                {/* Logo and Title */}
                <div className='flex gap-x-2 items-center'>
                    <img src={logo} alt="Logo" className='w-10' />
                    <h1 className='font-bold font-logo text-xl'>My PDM Tutor</h1>
                </div>

                {/* Form Card */}
                <div className='w-full flex flex-col gap-y-10 rounded-xl border border-[#E2E8F0] py-5 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]'>
                    <h1 className='font-semibold font-logo text-2xl self-center'>Create an account</h1>
                    
                    <form action="" className='px-10 gap-y-7 flex flex-col'>
                        {/* Full Name */}
                        <div className='flex flex-col px-1 gap-2'>
                            <label className='font-link text-lg font-medium'>Full Name</label>
                            <input type="text" placeholder="Enter your full name" className="w-full outline-none bg-transparent border-2 py-3 px-3 rounded-xl border-[#9EA2AE]" />
                        </div>

                        {/* Email Address */}
                        <div className='flex flex-col px-1 gap-1'>
                            <label className='font-link text-lg font-medium'>Email Address</label>
                            <input type="email" placeholder="Enter your email address" className="w-full outline-none bg-transparent border-2 py-3 px-3 rounded-xl border-[#9EA2AE]" />
                        </div>

                        {/* Password */}
                        <div className='flex flex-col px-1 gap-1'>
                            <label className='font-link text-lg font-medium'>Password</label>
                            <input type='password' placeholder="Enter your password" className="w-full outline-none bg-transparent border-2 py-3 px-3 rounded-xl border-[#9EA2AE]" />
                        </div>

                        {/* Select Course */}
                        <div className='flex flex-col px-1 gap-1'>
                            <label className='font-link text-lg font-medium'>What do you want to learn?</label>
                            <select className='w-full outline-none bg-transparent border-2 rounded-xl py-3 px-3 border-[#9EA2AE]'>
                                <option value="0">Select Course:</option>
                                <option value="1">Python Programming</option>
                                <option value="2">Machine Learning</option>
                                <option value="3">Artificial Intelligence</option>
                            </select>
                        </div>

                        {/* Are you a student? */}
                        <div className='flex flex-col px-1 gap-2'>
                            <label className='font-link text-lg font-medium'>Are you a Student?</label>
                            <div className='flex gap-6'>
                                <span className='flex gap-2 items-center'>
                                    <label className='font-link text-lg font-medium'>Yes</label>
                                    <input type="checkbox" className='w-5 h-5 border-2 rounded-xl border-[#9EA2AE]' />
                                </span>
                                <span className='flex gap-2 items-center'>
                                    <label className='font-link text-lg font-medium'>No</label>
                                    <input type="checkbox" className='w-5 h-5 border-2 rounded-xl border-[#9EA2AE]' />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Join;


