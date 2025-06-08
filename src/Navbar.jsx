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

const Navbar = () => {
    const [isvisible, setIsvisible] = useState(false)
    
  return (
    <motion.nav
    variants={navAnimate}
    initial='initial'
    animate='visible'
    className="bg-black/60 flex flex-col md:flex-row  md:justify-between md:items-center py-3 px-10 absolute inset-x-0 top-0 h-max">
      <div className='flex justify-between  items-center'>
      <div className="text-white flex items-center gap-3 h-max text-lg font-semibold max-w-50">
          <LazyLoadImage src={logo} alt="" className='w-12' />
          <a href="#"><motion.h3 
          variants={logoTextAnimate}
          whileHover='hover'
          className='font-logo tracking-wide hidden md:block'>My PDM Tutor</motion.h3></a>
        </div>
        <div className='flex' className='border' onClick={() => setIsvisible(!isvisible)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" id='btn1' className='md:hidden'>
          <rect width="24" height="24" fill="black" fillOpacity="0.32"/>
          <path d="M3 17H21V15H3V17Z" fill="white"/>
          <path d="M3 9H21V7H3V9Z" fill="white"/>
        </svg>
        </div>
     </div>
      <AnimatePresence>
        {isvisible && (
          <motion.div 
            initial={{opacity:0, y:-30}}
            animate={{opacity:1, y:0}}
            exit={{opacity:0, y:-30}}
            transition={{
              duration:1.0,
              type:'tween'

            }}
            className='flex flex-col md:flex-row items-end md:items-center gap-y-3 gap-x-3 md:min-w-[70%] md:justify-between  md:flex'>
            <div className=" flex text-white gap-x-10 items-end md:items-center md:justify-center font-normal font-link max-w-80 flex-col md:flex-row gap-y-3 " >
                <motion.a 
                variants={linkHoveAnimate}
                whileHover='hover'
                href="#about">About</motion.a>
                <motion.a 
                variants={linkHoveAnimate}
                whileHover='hover'
                href="#Agenda">Agenda</motion.a>
                <motion.a 
              variants={linkHoveAnimate}
                whileHover='hover'
                href="#connect">Connect with us</motion.a>
              </div>
            <Link to="/join" className=" font- flex justify-center bg-white rounded-full px-6 py-3 max-w-40 items-center">Join Waitlist</Link>
          
     </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
