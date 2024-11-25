import React from 'react';
import './Hero.scss';
import image from '../../Images/myimage.png';
import scroll from '../../Images/scroll.png';
import { motion } from 'framer-motion';

const imageVariant = {
  initial: {
    x: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const SliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-200%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div
      className="herosection overflow-hidden h-full pb-10 md:mt-[14px] md:pt-[100px] "
      id="home"
    >
      <div className="hero flex flex-col gap-0 md:gap-0 md:flex-row">
        <motion.div
          className="textcontent flex flex-col gap-2 md:gap-0"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="flex ">
            KELVIN KOECH
          </motion.h2>
          <motion.h1 variants={textVariants}>React Developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              className="my-4 hover:bg-gray-800"
            >
              <a href="/resume.pdf" download="resume.pdf">
                Download CV
              </a>
            </motion.button>
            <motion.button
              variants={textVariants}
              className="my-4 hover:bg-gray-800 ml-6"
            >
              <a href="#contact">Contact me</a>
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={scroll}
            alt="scroll img"
            className="hidden md:block"
          />
        </motion.div>
        <motion.div
          variants={SliderVariants}
          initial="initial"
          animate="animate"
          className="slidingtext absolute whitespace-nowrap text-gray-700 w-[50%] bottom-[40%] text-[30vh] md:text-[50vh] md:-bottom-[10px]"
        >
          Hire me
        </motion.div>
        <motion.div
          variants={imageVariant}
          initial="initial"
          animate="animate"
          className="image"
        >
          <img
            loading="lazy"
            src={image}
            alt="Your Image"
            class="w-32 h-full rounded-full shadow-lg shadow-gray-500 border border-gray-200"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
