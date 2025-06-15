// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Plogo from './img/Plogo.png';
import logo from './img/My_PDM_Tutor_1-removebg-preview.png';

const Connect = () => {
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true
    });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
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

    const formVariants = {
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

    return (
        <div className='w-full bg-black pt-10 flex flex-col gap-y-5 h-max' id='connect'>
            {/* Connect Button */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                <motion.button 
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    type="button" 
                    className='input-btn place-self-center'
                >
                    <p className='input-text text-white'>
                        Connect with us Today
                    </p>
                </motion.button>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className='flex w-[90%] mx-auto md:gap-x-5 gap-y-10 justify-center text-white h-max lg:px-20 py-0 md:py-10 pb-2 flex-col sm:flex-row md:items-center md:max-lg:px-0 sm:max-md:justify-evenly'
            >
                <motion.div 
                    variants={itemVariants}
                    className='w-[50%] md:max-lg:pr-0 pr-10 font-link h-max p-0 md:max-lg:w-80'
                >
                    <p className='font-semibold text-6xl md:text-4xl/10 w-90 md:max-lg:w-fit'>
                        We are always happy to assist you
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={containerVariants}
                    className='flex flex-col md:flex-row gap-x-20 sm:max-lg:gap-x-6 p-2 font-logo md:w-[50%] w-100 text-xl md:text-sm gap-y-10'
                >
                    <motion.span variants={itemVariants} className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Email Address</h1>
                        <div className='border border-white w-5'></div>
                        <h1 className='input-text tracking-widest'>mypdmtutor@gmail.com</h1>
                        <div className='text-sm'>
                            <p className='font-light'>Assistance hours:</p>
                            <p className='font-light w-40'>Monday - Friday 6am to 8pm EST</p>
                        </div>
                    </motion.span>
                    
                    <motion.span variants={itemVariants} className='flex flex-col gap-y-3'>
                        <h1 className='input-text'>Number</h1>
                        <div className='border border-white w-5'></div>
                        <h1 className='input-text tracking-widest'>+234 803 986 7195</h1>
                        <div className='text-sm'>
                            <p className='font-light'>Assistance hours:</p>
                            <p className='font-light w-40'>Monday - Friday 6am to 8pm EST</p>
                        </div>
                    </motion.span>
                </motion.div>
            </motion.div>

            {/* Newsletter Section */}
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className='flex w-full gap-x-6 gap-y-5 justify-center text-white h-max py-7 bg-[#2A27C9] items-center flex-col sm:flex-row lg:px-20'
            >
                <motion.div 
                    variants={itemVariants}
                    className='w-[80%] sm:max-md:w-[45%] md:w-[50%] font-link h-max p-2 gap-y-5 flex flex-col md:items-start items-center  '
                >
                    <p className='font-semibold text-4xl/15 md:text-3xl/10 w-fit md:w-[100%]'>
                        Subscribe to our Newsletter
                    </p>
                    <p className='w-fit md:w-[100%] text-xl'>
                        Subscribe for Updates: Stay informed about the python programming, Data Analytics, Machine Learning by subscribing to our newsletter. 
                    </p>
                </motion.div>
                
                <motion.div 
                    variants={formVariants}
                    className='flex p-2 font-logo w-[90%] sm:max-md:w-[40%] md:w-[50%] h-max items-center sm:max-md:flex-col sm:max-md:gap-y-'
                >
                    <form 
                        onSubmit={(e) => {
                            e.preventDefault();
                            alert('You have subscribed successfully!');
                        }}
                        className="flex w-full max-w-md"
                    >
                        <input 
                            type="email" 
                            placeholder='Enter your email address' 
                            className='outline-none bg-white/10 pl-5 pr-10 py-5 rounded-l-2xl w-full sm:max-md:py-2 sm:max-md:px-2 sm:max-md:rounded-2xl' 
                            required 
                        />
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className='px-5 py-5 bg-white text-[#2A27C9] rounded-r-2xl font-semibold shadow-lg shadow-black/10 cursor-pointer sm:max-md:py-3 sm:max-md:rounded-2xl'
                        >
                            Subscribe
                        </motion.button>
                    </form>
                </motion.div>
            </motion.div>

            {/* Footer Section */}
            <motion.div 
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className='flex w-full gap-x-10 justify-center text-white h-max p-20 py-10 items-center'
            >
                <motion.div variants={itemVariants} className='flex flex-col gap-y-10 font-link'>
                    <div className='flex items-end gap-x-2'>
                        <img src={logo} alt="" className='w-10' />
                        <h1 className='font-bold text-3xl sm:text-xl'>My PDM Tutor</h1>
                    </div>
                    <div className='text-sm font-light flex flex-col gap-y-5 md:gap-y-2'>
                        <p>Phone: <b> +234 803 986 7195</b></p>
                        <p>Email: <a href="mailto:mypdmtutor@gmail.com">mypdmtutor@gmail.com</a></p>
                    </div>
                    <motion.div 
                        variants={containerVariants}
                        className='flex justify-between w-40'
                    >
                        {[
                            { href: "https://web.facebook.com/mypdmtutor", icon: "facebook" },
                            { href: "https://x.com/mypdmtutor", icon: "twitter" },
                            { href: "https://www.instagram.com/mypdmtutor", icon: "instagram" },
                            { href: "#", icon: "linkedin" }
                        ].map((social, index) => (
                            <motion.a 
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {/* Social icons here */}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>
                
                <motion.div variants={itemVariants} className='sm:flex flex-col gap-y-5 place-self-start p-3 hidden'>
                    <h3 className='input-text'>Company</h3>
                    <ul className='font-light text-sm flex flex-col gap-y-2'>
                        {['About us', 'Contact us', 'Agenda', 'Connect with us'].map((item, index) => (
                            <motion.li 
                                key={index}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
                
                <motion.div variants={itemVariants} className='sm:flex flex-col gap-y-5 place-self-start p-3 hidden'>
                    <h3 className='input-text'>Education</h3>
                    <ul className='font-light text-sm flex flex-col gap-y-2'>
                        {['Data Analytics', 'Python Programming', 'Machine Learning'].map((item, index) => (
                            <motion.li 
                                key={index}
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Connect;