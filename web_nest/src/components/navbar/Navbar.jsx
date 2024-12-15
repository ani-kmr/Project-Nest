import React, { useState } from 'react';
import Logo from "../../assets/Logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Handle mouse enter and leave to toggle dropdown visibility
  const handleMouseEnter = (section) => {
    setActiveDropdown(section);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-2">
        <div className="container flex items-center justify-between px-4">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <a href="" className="flex items-center">
              <img src={Logo} alt="Logo" className="w-10 h-auto" />
              <span className="ml-2 text-lg font-bold text-gray-800 dark:text-white">Nest Hospitals</span>
            </a>
          </div>   

            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search Doctor or Hospital"
                className="w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-4 py-1 focus:outline-none focus:border-1 focus:border-pink-300 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800"
              />
              <IoMdSearch
                className="text-2xl text-gray-500 absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>

            

          {/* Contact Numbers */}
          <div className="flex items-center space-x-6">
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">Emergency</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">123-456-7890</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-white">Apollo Lifeline</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">098-765-4321</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* lower Navbar */}
      <div className="bg-gray-100 dark:bg-gray-800 py-2">
        <div className="container flex justify-around">
          {/* About Section */}
          <div 
            onMouseEnter={() => handleMouseEnter('about')} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              About
              <IoIosArrowDown className="ml-1 text-gray-600 dark:text-white" />
            </button>
            {activeDropdown === 'about' && (
              <div className="dropdown absolute bg-white shadow-lg dark:bg-gray-800 min-w-[250px] whitespace-nowrap">
                <a href="/about/mission" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Our Mission</a>
                <a href="/about/team" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Our Team</a>
                <a href="/about/history" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Our History</a>
              </div>
            )}
          </div>

          {/* Health Information Section */}
          <div 
            onMouseEnter={() => handleMouseEnter('health')} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              Health Information
              <IoIosArrowDown className="ml-1 text-gray-600 dark:text-white" />
            </button>
            {activeDropdown === 'health' && (
              <div className="dropdown absolute bg-white shadow-lg dark:bg-gray-800 min-w-[250px] whitespace-nowrap">
                <a href="/health/tips" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Health Tips</a>
                <a href="/health/resources" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Health Resources</a>
                <a href="/health/faq" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">FAQs</a>
              </div>
            )}
          </div>

          {/* Corporate Section */}
          <div 
            onMouseEnter={() => handleMouseEnter('corporate')} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              Corporate
              <IoIosArrowDown className="ml-1 text-gray-600 dark:text-white" />
            </button>
            {activeDropdown === 'corporate' && (
              <div className="dropdown absolute bg-white shadow-lg dark:bg-gray-800 min-w-[250px] whitespace-nowrap">
                <a href="/corporate/services" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Services</a>
                <a href="/corporate/partners" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Partners</a>
                <a href="/corporate/careers" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Careers</a>
              </div>
            )}
          </div>

          {/* Consultation Section */}
          <div 
            onMouseEnter={() => handleMouseEnter('consultation')} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              Consultation
              <IoIosArrowDown className="ml-1 text-gray-600 dark:text-white" />
            </button>
            {activeDropdown === 'consultation' && (
              <div className="dropdown absolute bg-white shadow-lg dark:bg-gray-800 min-w-[250px] whitespace-nowrap">
                <a href="/consultation/book" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Book Appointment</a>
                <a href="/consultation/online" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Online Consultation</a>
                <a href="/consultation/reviews" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Reviews</a>
              </div>
            )}
          </div>

          {/* Academic & Research Section */}
          <div 
            onMouseEnter={() => handleMouseEnter('academic')} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              Academic & Research
              <IoIosArrowDown className="ml-1 text-gray-600 dark:text-white" />
            </button>
            {activeDropdown === 'academic' && (
              <div className="dropdown absolute bg-white shadow-lg dark:bg-gray-800 min-w-[250px] whitespace-nowrap">
                <a href="/academic/publications" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Publications</a>
                <a href="/academic/events" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Events</a>
                <a href="/academic/grants" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Research Grants</a>
              </div>
            )}
          </div>

          {/* Hospitals Section */}
          <div 
            onMouseEnter={() => handleMouseEnter('hospitals')} 
            onMouseLeave={handleMouseLeave}
            className="relative"
          >
            <button className="text-sm font-semibold text-gray-800 dark:text-white flex items-center">
              Hospitals
              <IoIosArrowDown className="ml-1 text-gray-600 dark:text-white" />
            </button>
            {activeDropdown === 'hospitals' && (
              <div className="dropdown absolute bg-white shadow-lg dark:bg-gray-800 min-w-[250px] whitespace-nowrap">
                <a href="/hospitals/locations" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Our Locations</a>
                <a href="/hospitals/services" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Our Services</a>
                <a href="/hospitals/feedback" className="block px-4 py-2 text-sm text-gray-700 dark:text-white">Patient Feedback</a>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
