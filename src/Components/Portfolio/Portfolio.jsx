import './portfolio.scss';
import project1 from '../../Images/image1.jpg';
import myImage from '../../Images/pexels-kevin-ku-577585.jpg';
import maita from '../../Images/Maita 8.jpg';
import trade from '../../Images/trade.jpeg';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa6';
const projects = [
  {
    id: 1,
    title: 'South Sudan Commodity Trading',
    alt: 'South Sudan Commodity Trading',
    link: 'https://ssdsx1.netlify.app/',
    img: trade,
    description:
      'This is a React website that shows how commodity price changes daily and it indicates the percentage change. I used dummy data from the data in the tables.',
    languages: ['React', 'TailwindCSS', 'JavaScript', 'Node'],
  },
  {
    id: 2,
    title: 'Maita Luxury Website',
    alt: 'Maita Luxury Website',
    link: 'https://maitaluxury.netlify.app/',
    img: maita,
    description:
      'This is a resort website that showcases all the services offered by Maita resort in Kapsabet. I built this for practice and to gain more experience in online booking.',
    languages: ['React', 'TailwindCSS', 'JavaScript'],
  },
  {
    id: 3,
    title: 'E-commerce Sample',
    alt: 'E-commerce Sample',
    link: 'https://major-ecom2.netlify.app/',
    img: project1,
    description:
      'This is a simple e-commerce website created from a design my friend gave me. It features animations.',
    languages: ['React', 'TailwindCSS', 'JavaScript'],
  },
  {
    id: 4,
    title: 'My Portfolio',
    alt: 'My portfolio',
    link: 'https://main-major.netlify.app/',
    img: myImage,
    description: 'This is the website that you are currently in. ',
    languages: [
      'React',
      'TailwindCSS',
      'JavaScript',
      'Firebase',
      'Framer Motion',
    ],
  },
];

const projectMotion = {
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

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPreviousProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const showNextProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="project-container overflow-hidden" id="projects">
      <div className="projects">
        <h2 className="title">My Projects</h2>
        <motion.div
          variants={projectMotion}
          initial="initial"
          animate="animate"
          className="project-section flex flex-col md:flex-row"
        >
          <div className="project-slide">
            <div
              key={projects[currentIndex].id}
              className="project flex flex-col md:flex-row"
            >
              <div className="content1 w-full md:w-[300px]">
                <h2 className="text-2xl md:text-4xl">
                  {projects[currentIndex].title}
                </h2>
                <p>{projects[currentIndex].description}</p>
                <a
                  href={projects[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="hover:text-blue-500 text-2xl cursor-pointer" />
                </a>
                <div className="lang">
                  <h3>Languages:</h3>
                  <div className="flex flex-wrap gap-2 ">
                    {projects[currentIndex].languages.map((language, index) => (
                      <p
                        className="border-2 border-white px-2 py-1  rounded-lg"
                        key={index}
                      >
                        {language}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="image">
                <img
                  className="rounded-lg shadow-md shadow-white md:w-[300px] md:h-[250px] object-cover"
                  src={projects[currentIndex].img}
                  alt={projects[currentIndex].alt}
                  loading="lazy"
                />
                <div className="buttons">
                  <button
                    onClick={showPreviousProject}
                    className="arrow left-arrow"
                  >
                    &#8592;
                  </button>
                  <button
                    onClick={showNextProject}
                    className="arrow right-arrow"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
