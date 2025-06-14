import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import about from './img/agenda.png';
import { Link } from 'react-router-dom';

const Agenda = () => {
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
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    const imageVariants = {
        hidden: { scale: 0.95, opacity: 0 },
        visible: {
            scale: 1,
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
        <div className='bg-black py-20 px-0 md:max-lg:px-10 pb-0 md:pb-20 md:py-40 flex flex-col h-fit gap-70 mt-30 md:mt-0' id='Agenda'>
            {/* First Section */}
            <div className='flex justify-center items-center h-max relative border md:pt-10'>
                {/* Static Background Circles */}
                <div className="w-[630px] h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center">
                    <div className="w-[818px] h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center">
                        <div className="w-[990px] h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center">
                            <div className="w-[1144px] h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714]"></div>
                        </div>
                    </div>
                </div>

                {/* Animated Content */}
                <motion.div 
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className='absolute grid md:grid-cols-2 md:grid-rows-auto w-[90%] p-1 justify-items-center mx-auto gap-x-10 gap-y-10 p-2 text-white inset-x-0 -top-50 md:top-30'
                >
                    <motion.div variants={itemVariants} className='flex flex-col gap-y-5 h-max justify-self-start'>
                        <span className='flex gap-x-3'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g opacity="0.9">
                                        <g opacity="0.9">
                                            <path d="M4.11768 16.7821H16.7828V4.11694" stroke="#7D1AFF" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/>
                                        </g>
                                        <g opacity="0.9">
                                            <path d="M4.11768 4.11694L15.5167 15.5159" stroke="#7D1AFF" strokeWidth="3.48327" strokeMiterlimit="20" strokeLinecap="square"/>
                                        </g>
                                    </g>
                                </svg>
                            </div>
                            <h3 className='flex justify-center font-link font-semibold uppercase tracking-wide hidden md:flex'>My pdm tutor</h3>
                        </span>
                        <h3 className='Headings w-50 md:w-max'>Our Agenda</h3>
                    </motion.div>
                    
                    <motion.p variants={itemVariants} className='flex md:max-w-160 font-link text-md leading-6 font-medium h-max md:row-start-2 md:text-sm text-justify md:text-left'>
                        We're a team of experienced tutors with deep expertise in Python Programming, Data Analysis, and Machine Learning.
                        Our specialty lies in breaking down advanced concepts like data wrangling, exploratory data analysis, and model development.
                    </motion.p>
                    
                    <motion.div variants={imageVariants} className='w-fit md:w-100 h-full rounded-4xl md:row-span-3 h-max'>
                        <img src={about} alt="" className='rounded-4xl h-auto w-fit'/>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className='flex gap-x-4 items-center col-start-1 md:row-start-3 md:justify-self-start w-full justify-evenly md:justify-center md:justify-start'>
                        <Link to="/join">
                            <motion.a
                                variants={buttonVariants}
                                whileHover="hover"
                                whileTap="tap"
                                className='flex items-center px-4 py-4 w-max rounded-2xl bg-white text-black justify-center tracking-wider font-medium shadow-[inset_-4px_-4px_4px_rgba(0,0,0,0.1),_inset_4px_4px_4px_rgba(255,255,255,0.1)]'
                            >
                                Get started🔥
                            </motion.a>
                        </Link>
                        <motion.a
                            variants={buttonVariants}
                            whileHover="hover"
                            whileTap="tap"
                            className='flex items-center px-4 py-4 w-max rounded-2xl text-link border border-link justify-center'
                        >
                            Learn more
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Second Section */}
            <div className='flex justify-center items-center h-max relative inset-x-0 top-20 md:-top-0'>
                {/* Static Background Circles */}
                <div className="w-[630px] h-[629px] flex-shrink-0 rounded-[630px] border-[3px] border-dashed border-[#0D0F2B] opacity-90 bg-[#060714] flex justify-center items-center hidden md:flex">
                    <div className="w-[818px] h-[817px] flex-shrink-0 rounded-[818px] border-[3px] border-solid border-[#0D0F2B] opacity-80 bg-[#060714] flex justify-center items-center hidden md:flex">
                        <div className="w-[990px] h-[989px] flex-shrink-0 rounded-[990px] border-[3px] border-dashed border-[#0D0F2B] opacity-70 bg-[#060714] flex justify-center items-center hidden md:flex">
                            <div className="w-[1144px] h-[1143px] flex-shrink-0 rounded-[1144px] border-[3px] border-solid border-[#0D0F2B] opacity-60 bg-[#060714] hidden md:flex"></div>
                        </div>
                    </div>
                </div>

                {/* Animated Content */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={containerVariants}
                    className='grid grid-rows-auto grid-cols-auto w-[90%] h-fit text-white relative md:absolute p-1 -top-40 md:top-10 gap-10 md:gap-x-10 justify-center inset-x-0 place-self-center'
                >
                    <motion.div variants={itemVariants} className=''>
                        <h3 className='w-fit font-link font-bold text-5xl/20 md:w-[95%] md:max-lg:text-5xl lg:text-6xl/20'>
                            Got Questions? <span className="hidden md:inline-flex"> - </span>Let's Talk About Your Programming Goals!
                        </h3>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className='flex md:flex-col gap-y-2 row-start-4 w-50 justify-between md:col-start-2 md:row-start-1 md:w-fit'>
                        <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} href="https://web.facebook.com/mypdmtutor">
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="51" viewBox="0 0 50 51" fill="none">
                                <path d="M25.0059 50.1495C38.8097 50.1495 50 39.0236 50 25.2991C50 11.5746 38.8097 0.44873 25.0059 0.44873C11.202 0.44873 0.0117188 11.5746 0.0117188 25.2991C0.0117188 39.0236 11.202 50.1495 25.0059 50.1495Z" fill="#D9D9D9"/>
                                <path d="M23.7062 32.6462L23.6858 26.387H21.0078V23.7044H23.6858V21.9161C23.6858 19.5025 25.1778 18.3394 27.3272 18.3394C28.3568 18.3394 29.2417 18.4161 29.4995 18.4505V20.9728L28.0088 20.9735C26.8399 20.9735 26.6135 21.5299 26.6135 22.3464V23.7044H29.9343L29.0416 26.387H26.6135V32.6462H23.7062Z" fill="#2A27C9"/>
                            </svg>
                        </motion.a>
                        
                        {/* Other social icons with same animation */}
                    </motion.div>
                    
                    <motion.form variants={containerVariants} className='p-2 flex flex-col gap-5 row-start-2'>
                        <motion.div variants={itemVariants} className="flex flex-col gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                            <label htmlFor="" className='mx-2'>Your Name</label>
                            <input type="text" className="w-full outline-none bg-transparent" placeholder=""/>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="flex flex-col mt-3 gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                            <label htmlFor="" className='mx-2'>Email Address</label>
                            <input type='email' className="w-full outline-none bg-transparent" placeholder=""/>
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="flex flex-col gap-0 pb-2 px-2.5 pt-2 border-b border-[#CACACA] flex-1">
                            <label htmlFor="" className='mx-2'>What would you like to know?</label>
                            <input type="text" className="w-full outline-none bg-transparent h-10" placeholder=""/>
                        </motion.div>
                    </motion.form>
                    
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        type="button"
                        className='flex gap-x-0 bg-[#2A27C9] w-max items-center p-3 py-4 rounded-2xl row-start-3'
                        onClick={() => alert('Button Clicked')}
                    >
                        <p className='input-text'>Leave us a Message</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M5 12.5H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5.5L19 12.5L12 19.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </motion.button>
                </motion.div>
            </div>
        </div>
    );
}

export default Agenda;