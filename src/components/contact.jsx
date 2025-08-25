 import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

import { Link } from 'react-router-dom';

function Contact() {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/'); // Redirect to home
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Heading */}
      <div className="text-center mt-8 relative">
        <h1 className="text-3xl font-bold py-10 text-blue-500">Contact Us</h1>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex justify-center items-center px-6 py-0">
        <form className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter your email"
              />
            </div>

            {/* Mobile */}
            <div>
              <label className="block text-sm font-medium mb-1">Mobile No.</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                placeholder="Write your message..."
                rows={4}
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="text-center my-12">
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300 text-lg font-semibold shadow-lg">
              Back to Home
            </button>
          </Link>
        </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Contact;
