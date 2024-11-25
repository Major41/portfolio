import './services.scss';
import people from '../../Images/pexels-kevin-ku-577585.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

const textVariants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const [text, setText] = useState('');

  const handleAboutClick = () => {
    setText('about');
  };
  const handleEducationClick = () => {
    setText('education');
  };
  const handleExperienceClick = () => {
    setText('experince');
  };
  const handleHomeClick = () => {
    setText('home');
  };

  const code = '</>';

  return (
    <motion.div
      className="servicescontainer h-full pb-10 md:pb-0 md:h-screen overflow-hidden"
      id="about"
    >
      <motion.div
        className="services"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        <motion.div className="textContainer  -pb-22 " variants={textVariants}>
          <p>
            I create, customize and design websites <br /> tailored to your
            style
          </p>
          <hr className="w-[200px] md:w-[300px] border-t-1 border-white " />
        </motion.div>
        <motion.div className="titleContainer" variants={textVariants}>
          <div className="title">
            <img
              className="w-[100px] md:w-[220px] md:h-[80px] rounded-full object-cover"
              src={people}
              alt="people"
            />
            <h1 className=" md:text-5xl">
              <b>Unique</b> ideas
            </h1>
          </div>
          <div className="title">
            <h1 className=" md:text-4xl lg:text-5xl">
              <b>To Transform </b> Life.
            </h1>
            <button className="w-[100px] h-[40px] md:h-[80px] md:w-[220px]">
              WHO AM I{' '}
            </button>
          </div>
        </motion.div>
        <motion.div className="aboutMe" variants={textVariants}>
          <div className="buttons-container">
            <button className="p-[8px] md:p-[12px]" onClick={handleHomeClick}>
              Home
            </button>
            <button className="p-[8px] md:p-[12px]" onClick={handleAboutClick}>
              About
            </button>
            <button
              className="p-[8px] md:p-[12px]"
              onClick={handleEducationClick}
            >
              Education
            </button>
            <button
              className="p-[8px] md:p-[12px]"
              onClick={handleExperienceClick}
            >
              experince
            </button>
          </div>
          <div className="about-main">
            <div>
              {text === 'about' ? (
                <div className="about-me md:mt-5">
                  <p>
                    I'm a self-taught React Developer. Skillfull in{' '}
                    <span>
                      React, TypeScript, JavaScript, TailwindCSS and SCSS.
                    </span>{' '}
                    I'm working hard to add up level up my game in development
                    and problem solving.
                  </p>
                </div>
              ) : text === 'education' ? (
                <div className="education md:mt-5">
                  <div className="education-list list-none">
                    <li>
                      <h2 className="font-bold">2021</h2>
                      <p>
                        Started Coding with FreeCodeCamp, got a certificate in
                        Web design.
                      </p>
                    </li>
                    <li>
                      <h2 className="font-bold">2022</h2>
                      <p>
                        Joined South Eastern Kenya University for bachelor in
                        Education Arts{' '}
                      </p>
                    </li>
                  </div>
                </div>
              ) : text === 'experince' ? (
                <div className="experince md:mt-5  ">
                  <div className="experince-list list-none">
                    <li>
                      <h2 className="font-bold">2022</h2>
                      <p>
                        Started Freelancing as a web developer with HTML, CSS
                        and JavaScript as my languages.
                      </p>
                    </li>
                    <li>
                      <h2 className="font-bold">2023</h2>
                      <p>
                        Started using React in my freelancing, completeing small
                        projects and worked with private clients.
                      </p>
                    </li>
                    <li>
                      <h2 className="font-bold">2024 October</h2>
                      <p>
                        Joined VTECK Academy as a React and Javascript tutor
                        up-to-date.
                      </p>
                    </li>
                  </div>
                </div>
              ) : text === 'home' ? (
                <div className="main-show ">
                  <h2> {code} </h2>
                  <div className="grid grid-cols-2 gap-3 w-full ">
                    <p>React</p>
                    <p>scss</p>
                    <p className=" col-span-2 md:col-auto">JavaScript</p>

                    <p className="col-span-2 md:col-auto">TypeScript</p>
                    <p className="col-span-2 md:col-auto">TailwindCSS</p>
                  </div>
                </div>
              ) : (
                <div className="my-languages ">
                  <div className="para w-full grid grid-cols-2 gap-4 md:grid-cols-3 ">
                    <p>Developer</p>
                    <p>Leader</p>
                    <p className="col-span-2 md:col-span-1 ">Problem Solver</p>
                    <p>Collaborator</p>
                    <p>Thinker</p>
                    <p className="col-span-2 md:col-span-1 ">Gentle-man</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
