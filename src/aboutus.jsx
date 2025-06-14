// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import about from './img/about.png'
import { Link } from 'react-router-dom';

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
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

    const imageVariants = {
        hidden: { scale: 0.9, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className='flex bg-black flex-col w-full border items-center' 
            id='about'
        >
            <div className='flex p-20 px-10 md:px-20 justify-around text-white items-center gap-x-10 w-fit'>
                <motion.div 
                    variants={containerVariants}
                    className='grid md:grid-cols-2 md:grid-rows-auto w-full p-1 justify-items-center gap-x-10 gap-y-10'
                >
                    <motion.div 
                        variants={itemVariants}
                        className='flex flex-col gap-y-5 h-max justify-self-start'
                    >
                        <span className='flex gap-x-3'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.9">
                                        <g opacity="0.9">
                                            <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                        <g opacity="0.9">
                                            <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide hidden md:flex'>Outline</h3>
                        </span>
                        <h3 className='Headings'>About Us</h3>
                    </motion.div>
                    
                    <motion.p 
                        variants={itemVariants}
                        className='flex md:max-w-160 font-link text-md leading-6 font-medium h-max md:row-start-2 md:text-sm text-justify md:text-left'
                    >
                        We are a passionate team of educators dedicated to helping students and professionals discover and unleash their full potential in Python Programming, Data Analysis, and Machine Learning.
                        By combining a hands-on, learner-centered approach with real-world applications, we simplify complex topics and make learning both enjoyable and effective.
                        Our mission is to equip you with the practical skills and deep understanding needed to thrive in today's data-driven world. Whether you're just beginning or seeking to level up, we're here to walk the journey with you.....Every step of the way.
                    </motion.p>
                    
                    <motion.div 
                        variants={imageVariants}
                        className='w-80 md:w-100 h-full rounded-4xl md:row-span-3 h-max'
                    >
                        <img src={about} alt="" className='rounded-4xl h-auto w-full max-w-full'/>
                    </motion.div>
                    
                    <motion.div 
                        variants={itemVariants}
                        className='flex gap-x-4 items-center col-start-1 md:row-start-3 md:justify-self-start w-full justify-evenly md:justify-center md:justify-start'
                    >
                        <Link to="/join">
                            <motion.a 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='flex items-center px-4 py-4 w-max rounded-2xl bg-white text-black justify-center tracking-wide font-medium inset-shadow-sm inset-shadow-black-500'
                            >
                                Get started 🔥
                            </motion.a>
                        </Link>
                        <motion.a 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='flex items-center px-4 py-4 w-max md:px-4 md:py-4 rounded-2xl text-link border border-link w-max justify-center'
                        >
                            Learn more
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
            
            <div className='text-white p-20 pt-0 md:px-20 px-10'>
                <motion.div 
                    variants={containerVariants}
                    className='flex flex-col p-2 h-max gap-y-5 w-full'
                >
                    <motion.span 
                        variants={itemVariants}
                        className='flex flex-col gap-y-2'
                    >
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <g opacity="0.9">
                                    <g opacity="0.9">
                                        <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                    </g>
                                    <g opacity="0.9">
                                        <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#2A27C9" stroke-width="3.48327" stroke-miterlimit="20" stroke-linecap="square"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                        <h3 className='Headings'>Our Courses</h3>
                    </motion.span>
                    
                    <motion.div 
                        variants={containerVariants}
                        className='h-full flex lg:flex-row lg:justify-between md:gap-x-10 w-full flex-col items-center justify-center gap-y-10 p-1'
                    > 
                        <motion.div 
                            variants={cardVariants}
                            className='w-full sm:w-fit lg:w-[30%] flex flex-col'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="185" height="21" viewBox="0 0 185 21" fill="none">
                                <path d="M0 10C0 4.47715 4.47715 0 10 0H156.429C161.902 0 167.136 2.2433 170.911 6.2069L185 21H0V10Z" fill="#504E52"/>
                            </svg>
                            <div className="card-bg bg-[url('./img/Python.png')] rounded-tr-4xl">
                                <div className="card-gradient bg-gradient-to-b from-top/100 via-mid/40 to-black rounded-tr-4xl"></div>
                                <div className="card-content">
                                    <h1 className="text-2xl font-bold tracking-wider font-sora">Python Programming</h1>
                                    <p className='pText'>Key Python concepts include variables, control flow, functions, data structures, object-oriented programming, and error handling.</p>
                                    <Link to="/join">
                                        <motion.a 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='getStartedButton'
                                        >
                                            Get Started
                                        </motion.a>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            variants={cardVariants}
                            className='w-full sm:w-fit lg:w-[30%] flex flex-col'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="185" height="21" viewBox="0 0 185 21" fill="none">
                                <path d="M0 10C0 4.47715 4.47715 0 10 0H156.429C161.902 0 167.136 2.2433 170.911 6.2069L185 21H0V10Z" fill="#D0D0EC"/>
                            </svg>
                            <div className="card-bg bg-[url('./img/ml.png')] rounded-r-4xl rounded-bl-4xl">
                                <div className="card-gradient bg-gradient-to-b from-top2/80 via-mid/30 to-black/70 rounded-r-4xl rounded-bl-4xl"></div>
                                <div className="card-content">
                                    <h1 className="text-2xl font-bold tracking-wider font-sora">Data Analytics</h1>
                                    <p className='pText'>Key data analytics concepts include data collection, cleaning, exploratory analysis, visualization, statistical modeling, and deriving actionable insights.</p>
                                    <Link to="/join">
                                        <motion.a 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='getStartedButton'
                                        >
                                            Get Started
                                        </motion.a>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            variants={cardVariants}
                            className='w-full sm:w-fit lg:w-[30%] flex flex-col'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="185" height="21" viewBox="0 0 185 21" fill="none">
                                <path d="M0 10C0 4.47715 4.47715 0 10 0H156.429C161.902 0 167.136 2.2433 170.911 6.2069L185 21H0V10Z" fill="#B5C0DC"/>
                            </svg>
                            <div className="card-bg bg-[url('./img/DA.png')] rounded-r-4xl rounded-bl-4xl">
                                <div className="bg-gradient-to-b from-top3/90 via-mid/30 to-black/40 card-gradient rounded-r-4xl rounded-bl-4xl"></div>
                                <div className="card-content">
                                    <h1 className="text-2xl font-bold tracking-wider font-sora">Machine Learning</h1>
                                    <p className='pText'>Key machine learning concepts include data preprocessing, feature engineering, model selection, training, evaluation, and tuning for accurate predictions.</p>
                                    <Link to="/join">
                                        <motion.a 
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className='getStartedButton'
                                        >
                                            Get Started
                                        </motion.a>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default About;