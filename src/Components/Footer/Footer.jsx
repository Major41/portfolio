import React from 'react';
import { FaFacebook, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex justify-between items-start py-10 gap-8">
        {/* Brand & Hire Me */}
        <div className="flex flex-col items-start">
          <h2 className="text-3xl font-bold mb-5">Kelvin .</h2>
          <p className=" md:w-[200px]">
            Self-taught Dev with 3 years of experince, Full-Stack Dev, Front-End
            heavy. <br /> Looking forward to hear from you.
          </p>
        </div>

        {/* Languages */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Languages</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {['React', 'TypeScript', 'JavaScript', 'TailwindCSS', 'SCSS'].map(
              (lang) => (
                <p
                  key={lang}
                  className="border-2 border-orange-500 py-2 px-3 rounded-lg text-center"
                >
                  {lang}
                </p>
              )
            )}
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-2xl font-bold mb-5">Links</h2>
          <div className="flex flex-col gap-4">
            {['Home', 'About', 'Portfolio', 'Contact'].map((link) => (
              <p key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="font-semibold hover:text-orange-500 transition-colors"
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        </div>

        {/* Social Links and Contact */}
        <div className="flex flex-col items-start">
          <div className="flex gap-6 text-3xl mt-5 mb-4">
            <a
              href="https://www.facebook.com/kevo.major.98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://wa.me/+254790809501"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/koechDev254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:scale-110 transition-transform" />
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-block border-2 border-gray-100 text-white py-2 px-4 rounded-lg hover:bg-gray-900"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              download="my_resume.pdf"
              className="inline-block border-2 border-gray-100 text-white py-2 px-4 rounded-lg hover:bg-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center py-4 border-t border-gray-700">
        <p className="text-sm">&copy; {date} Kelvin. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
