import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from '../img/My_PDM_Tutor_1-removebg-preview.png';
import bg_waitlist from '../img/bg_waitlist.png';
import logo_enlarge from '../img/logo_enlarge.png';
import py from '../img/polygon.png';
import da from '../img/polytwo.png';
import ml from '../img/polythree.png';

const Join = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const formItemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const buttonVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        },
        hover: { scale: 1.05 },
        tap: { scale: 0.98 }
    };

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className='border border-black'
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
            <motion.div
                variants={imageVariants}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '500px',
                    height: 'auto',
                    zIndex: 10
                }}
            >
                <LazyLoadImage src={logo_enlarge} />
            </motion.div>

            <div className='flex z-100 w-full justify-evenly'>
                {/* Left Side - Images */}
                <motion.div 
                    variants={containerVariants}
                    className='h-[60%] lg:grid grid-cols-1 items-center justify-center relative gap-0 w-[50%] hidden'
                >
                    <motion.div 
                        variants={imageVariants}
                        className='flex justify-center p-0 mt-30'
                    >
                        <img src={py} alt="" className='w-80 h-80 -mb-15' />
                    </motion.div>
                    <motion.div 
                        variants={containerVariants}
                        className='row-start-2 grid grid-cols-2 gap-0 p-0'
                    >
                        <motion.img 
                            variants={imageVariants}
                            src={da} 
                            alt="" 
                            className='m-0 w-100' 
                        />
                        <motion.img 
                            variants={imageVariants}
                            src={ml} 
                            alt="" 
                            className='m-0 w-100' 
                        />
                    </motion.div>
                </motion.div>

                {/* Right Side - Form */}
                <motion.div 
                    variants={containerVariants}
                    className='sm:max-md:w-[60%] md:max-lg:w-[70%] w-[90%] lg:w-[40%] h-[100%] flex flex-col gap-y-10 items-center'
                >
                    {/* Logo and Title */}
                    <motion.div 
                        variants={itemVariants}
                        className='flex gap-x-2 items-center'
                    >
                        <img src={logo} alt="Logo" className='w-10' />
                        <h1 className='font-bold font-logo text-xl'>My PDM Tutor</h1>
                    </motion.div>

                    {/* Form Card */}
                    <motion.div 
                        variants={itemVariants}
                        className='w-full flex flex-col gap-y-10 rounded-xl border border-[#E2E8F0] py-5 shadow-[0px_2px_4px_-2px_rgba(0,0,0,0.10),0px_4px_6px_-1px_rgba(0,0,0,0.10)]'
                    >
                        <motion.h1 
                            variants={itemVariants}
                            className='font-semibold font-logo text-2xl self-center'
                        >
                            Create an account
                        </motion.h1>
                        
                        <form action="" className='px-10 gap-y-7 flex flex-col'>
                            {/* Full Name */}
                            <motion.div 
                                variants={formItemVariants}
                                className='flex flex-col px-1 gap-2'
                            >
                                <label className='font-link text-lg font-medium'>Full Name</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.02 }}
                                    type="text" 
                                    placeholder="Enter your full name" 
                                    className="w-full outline-none bg-transparent border-2 py-3 px-3 rounded-xl border-[#9EA2AE]" 
                                />
                            </motion.div>

                            {/* Email Address */}
                            <motion.div 
                                variants={formItemVariants}
                                className='flex flex-col px-1 gap-1'
                            >
                                <label className='font-link text-lg font-medium'>Email Address</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.02 }}
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="w-full outline-none bg-transparent border-2 py-3 px-3 rounded-xl border-[#9EA2AE]" 
                                />
                            </motion.div>

                            {/* Password */}
                            <motion.div 
                                variants={formItemVariants}
                                className='flex flex-col px-1 gap-1'
                            >
                                <label className='font-link text-lg font-medium'>Password</label>
                                <motion.input 
                                    whileFocus={{ scale: 1.02 }}
                                    type='password' 
                                    placeholder="Enter your password" 
                                    className="w-full outline-none bg-transparent border-2 py-3 px-3 rounded-xl border-[#9EA2AE]" 
                                />
                            </motion.div>

                            {/* Select Course */}
                            <motion.div 
                                variants={formItemVariants}
                                className='flex flex-col px-1 gap-1'
                            >
                                <label className='font-link text-lg font-medium'>What do you want to learn?</label>
                                <motion.select 
                                    whileFocus={{ scale: 1.02 }}
                                    className='w-full outline-none bg-transparent border-2 rounded-xl py-3 px-3 border-[#9EA2AE]'
                                >
                                    <option value="0">Select Course:</option>
                                    <option value="1">Python Programming</option>
                                    <option value="2">Machine Learning</option>
                                    <option value="3">Artificial Intelligence</option>
                                </motion.select>
                            </motion.div>

                            {/* Are you a student? */}
                            <motion.div 
                                variants={formItemVariants}
                                className='flex flex-col px-1 gap-2'
                            >
                                <label className='font-link text-lg font-medium'>Are you a Student?</label>
                                <div className='flex gap-6'>
                                    <motion.span 
                                        whileHover={{ scale: 1.05 }}
                                        className='flex gap-2 items-center'
                                    >
                                        <label className='font-link text-lg font-medium'>Yes</label>
                                        <input type="checkbox" className='w-5 h-5 border-2 rounded-xl border-[#9EA2AE]' />
                                    </motion.span>
                                    <motion.span 
                                        whileHover={{ scale: 1.05 }}
                                        className='flex gap-2 items-center'
                                    >
                                        <label className='font-link text-lg font-medium'>No</label>
                                        <input type="checkbox" className='w-5 h-5 border-2 rounded-xl border-[#9EA2AE]' />
                                    </motion.span>
                                </div>
                            </motion.div>

                            {/* Submit Button */}
                            <motion.button
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                type="submit"
                                className='mt-4 w-full bg-[#2A27C9] text-white py-3 rounded-xl font-semibold'
                            >
                                Create Account
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Join;