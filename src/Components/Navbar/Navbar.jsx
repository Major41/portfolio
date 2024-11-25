import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6'; // Import FaBars
import { MdClose } from 'react-icons/md';
import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" bg-gray-900 overflow-hidden ">
      <div className="  z-10 w-full bg-gray-900">
        <div className=" h-14  w-full bg-gray-900  mx-auto flex items-center justify-around   ">
          <h2 className="font-bold text-2xl">Kevin .</h2>
          <div className="hidden md:block">
            <li className="flex gap-20 font-semibold">
              <a href="#home" className="hover:overline decoration-gray-100 ">
                Home
              </a>
              <a href="#about" className="hover:overline decoration-gray-100 ">
                About
              </a>
              <a
                href="#projects"
                className="hover:overline decoration-gray-100 "
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="hover:overline decoration-gray-100 "
              >
                Contact
              </a>
            </li>
          </div>
          <div className="flex gap-4 text-2xl">
            <a
              href="https://www.facebook.com/kevo.major.98"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaFacebook className="cursor-pointer hover:scale-[1.1] text-2xl" />{' '}
            </a>
            <a
              href="https://wa.me/+254790809501"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaWhatsapp className="cursor-pointer hover:scale-[1.1] text-2xl" />{' '}
            </a>
            <a
              href="https://www.linkedin.com/in/koechDev254"
              target="_blank"
              rel="noopener noreferrer"
            >
              {' '}
              <FaLinkedin className="cursor-pointer hover:scale-[1.1] text-2xl" />{' '}
            </a>
          </div>
          <div className="md:hidden block ">
            {' '}
            <button onClick={toogleMenu} className="text-2xl">
              {isOpen ? <MdClose /> : <FaBars />}
            </button>{' '}
          </div>
          {isOpen && (
            <div className="absolute h-[50%] bg-gray-900 z-50 right-0 top-14">
              <li className="flex bg-gray-900 w-[200px] text-center  flex-col gap-10 font-semibold p-10">
                <a
                  href="#home"
                  className="hover:overline decoration-gray-100 text-center"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="hover:overline decoration-gray-100 "
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="hover:overline decoration-gray-100 "
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  className="hover:overline decoration-gray-100 "
                >
                  Contact
                </a>
              </li>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
