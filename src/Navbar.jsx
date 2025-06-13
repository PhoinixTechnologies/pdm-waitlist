import React,{ useState } from 'react';
import logo from './img/My_PDM_Tutor_1-removebg-preview.png';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import {easeInOut, motion,AnimatePresence} from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const navAnimate ={
  initial:{
    y:-70, 
    opacity:0
  },
  visible: {
    y:-0, 
    opacity:1,
    transition:{
          delay:1.5,
    duration: 1.0,
    type:'spring',
        // Animation duration in seconds
    ease: "easeOut"      // Easing function
    }
  }
}

const logoTextAnimate ={
 hover: {
    scale:1.1,
    textShadow:"0px 0px 2px #fff",
    transition: {
      type:'tween',
      duration:0.3,
      repeat:1,
      repeatType: "reverse", // This replaces yoyo
      ease: "easeInOut"
    }
  }
  }


const linkHoveAnimate ={
  hover: {
    scale:1.1,
    textShadow:"0px 0px 2px #fff",
    transition: {
      type:'tween',
      duration:0.3,
      repeat:1,
      repeatType: "reverse", // This replaces yoyo
      ease: "easeInOut"
    }
  }
}

const dropDownAnimate = {
  initial: {
    height:0,
    opacity:0.6
  },
  visible: {
    height:400,
    opacity:1,
    transition: {
      duration:1.0
    }
  },
  exit:{
    height:0,
    opacity:0,
    transition:{
      when:"beforeChildren"
    }
  }
}

const linkAnimate = {
  initial: {
    height:0
  },
  visible:{
    height:100
  },
  exit:{
    height:0,
    opacity:0
  }
}
const joinAnimate = {
  initial: {
    height:0
  },
  visible:{
    height:50
  },
  exit:{
    height:0,
    opacity:0
  }
}


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    return (
        <AnimatePresence>
            <motion.nav
                variants={navAnimate}
                initial='initial'
                animate='visible'
                className="bg-black/60 flex flex-col md:flex-row md:justify-between md:items-center py-3 absolute inset-x-0 top-0 h-15"
            >
                <div className='flex justify-between px-10 items-center'>
                    <div className="text-white flex items-center gap-3 h-max text-lg font-semibold max-w-50">
                        <LazyLoadImage src={logo} alt="" className='w-12' />
                        <a href="#">
                            <motion.h3 
                                variants={logoTextAnimate}
                                whileHover='hover'
                                className='font-logo tracking-wide hidden md:block'
                            >
                                My PDM Tutor
                            </motion.h3>
                        </a>
                    </div>
                    <div className='flex md:hidden' onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect width="24" height="24" fill="black" fillOpacity="0.32"/>
                            <path d="M3 17H21V15H3V17Z" fill="white"/>
                            <path d="M3 9H21V7H3V9Z" fill="white"/>
                        </svg>
                    </div>
                </div>

                {/* Desktop View - Always Visible */}
                <div className=' w-[70%] hidden justify-between md:flex md:items-center md:gap-x-10 md:pr-10'>
                    <div className="w-[60%] text-white flex items-center justify-evenly font-normal font-link gap-x-10">
                        <motion.a 
                            variants={linkHoveAnimate}
                            whileHover='hover'
                            href="#about"
                        >
                            About
                        </motion.a>
                        <motion.a 
                            variants={linkHoveAnimate}
                            whileHover='hover'
                            href="#Agenda"
                        >
                            Agenda
                        </motion.a>
                        <motion.a 
                            variants={linkHoveAnimate}
                            whileHover='hover'
                            href="#connect"
                        >
                            Connect with us
                        </motion.a>
                    </div>
                    <motion.div variants={joinAnimate}>
                        <Link to="/join" className="flex  justify-evenly bg-white rounded-full px-6 py-3 items-center">
                            Join Waitlist
                        </Link>
                    </motion.div>
                </div>

                {/* Mobile View - Conditional with Animation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            variants={dropDownAnimate}
                            initial='initial'
                            animate='visible'
                            exit='exit'
                            className='md:hidden mt-2 bg-black/60 px-10 py-2 flex flex-col items-end gap-y-3'
                        >
                            <motion.div 
                                variants={linkAnimate}
                                className="overflow-hidden flex text-white flex-col gap-y-3 font-normal font-link"
                            >
                                <motion.a 
                                    variants={linkHoveAnimate}
                                    whileHover='hover'
                                    href="#about"
                                >
                                    About
                                </motion.a>
                                <motion.a 
                                    variants={linkHoveAnimate}
                                    whileHover='hover'
                                    href="#Agenda"
                                >
                                    Agenda
                                </motion.a>
                                <motion.a 
                                    variants={linkHoveAnimate}
                                    whileHover='hover'
                                    href="#connect"
                                >
                                    Connect with us
                                </motion.a>
                            </motion.div>
                            <motion.div variants={joinAnimate} className='overflow-hidden'>
                                <Link to="/join" className="flex justify-center bg-white rounded-full px-6 py-3 items-center">
                                    Join Waitlist
                                </Link>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>
        </AnimatePresence>
    );
};

export default Navbar;
