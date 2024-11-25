import React, { useState } from 'react';
import { db } from '../../../firebaseConfig';
import { addDoc, collection } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    websiteType: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, 'contacts'), formData);
      console.log('Document written with ID', docRef.id);
      setFormData({ name: '', phone: '', websiteType: '', description: '' });
      toast.success('Message sent successfully! 🎉');
    } catch (error) {
      console.log('message not sent');
      toast.error('Messase DID NOT submit succefully, please try again');
    }
  };

  return (
    <div className="bg-gray-950 pb-10" id="contact">
      <div className="w-[90%] mx-auto">
        <h2 className="p-8 text-center font-bold text-3xl">Contact me</h2>
        <div className="  flex flex-col lg:flex-row p-8 border-2 border-gray-200 rounded-3xl">
          {/* Contact Form */}
          <div className="flex-1 mb-8 lg:mb-0 lg:mr-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-gray-900">
              Get in touch
            </h2>
            <form onSubmit={handleSubmit}>
              {/* Name Input */}
              <div className="mb-4">
                <label
                  className="block text-gray-900 font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full text-black  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Phone Number Input */}
              <div className="mb-4">
                <label
                  className="block text-gray-900 font-semibold mb-2"
                  htmlFor="phone"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="w-full text-black  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Type of Website Dropdown */}
              <div className="mb-4">
                <label
                  className="block text-gray-900 font-semibold mb-2"
                  htmlFor="website-type"
                >
                  Type of Website
                </label>
                <select
                  id="website-type"
                  name="websiteType"
                  value={formData.websiteType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select the type of website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="portfolio">Portfolio</option>
                  <option value="business">Business</option>
                  <option value="blog">Blog</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description Text Box */}
              <div className="mb-4">
                <label
                  className="block text-gray-900 font-semibold mb-2"
                  htmlFor="description"
                >
                  Description of Website
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your website requirements"
                  className="w-full text-black  px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="4"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gray-950  text-white py-2 rounded-lg hover:bg-gray-800"
              >
                Submit
              </button>
            </form>
            <ToastContainer
              position="top-right"
              autoClose={3000} // Toast auto-closes after 3 seconds
              hideProgressBar={false}
              newestOnTop={true}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
          </div>

          {/* Contact Details */}
          <div className="flex-1 lg:ml-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-50">
              My Contact Information
            </h2>
            <p className="text-gray-50 mb-2">
              <span className="font-semibold">Phone:</span> +254790809501
            </p>
            <p className="text-gray-50 mb-2">
              <span className="font-semibold">Email:</span>{' '}
              kevinkoech041@gmail.com
            </p>

            {/* Download CV Button */}
            <a
              href="/resume.pdf"
              download="My_resume.pdf"
              className="mt-4 inline-block border-2 border-gray-100  text-white py-2 px-4 rounded-lg hover:bg-gray-900"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
