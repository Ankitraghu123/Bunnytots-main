// import React, { useState } from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
// import logo from "../assets/img/logo.png";

// const EuroKidsNavbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const location = useLocation();

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "Franchise Opportunity", path: "/franchise-create" },
//     { name: "Our Programs", path: "/our-programs" },
//     { name: "Admission form", path: "/admission-form" },
//     { name: "Our Blogs", path: "/blogs" },
//     { name: "Locate Us", path: "/locate-branch" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Careers", path: "/Career" },
//     { name: "Contact", path: "/contact" },
//     { name: "BunnyApp", path: "/login" },
//   ];

//   const socialLinks = [
//     { icon: <FaFacebook />, path: "https://facebook.com" },
//     { icon: <FaTwitter />, path: "https://twitter.com" },
//     { icon: <FaInstagram />, path: "https://instagram.com" },
//     { icon: <FaYoutube />, path: "https://youtube.com" },
//   ];

//   const toggleDropdown = (index) => {
//     setActiveDropdown(activeDropdown === index ? null : index);
//   };

//   const closeAll = () => {
//     setActiveDropdown(null);
//     setIsMobileMenuOpen(false);
//   };

//   const handleLinkClick = () => {
//     closeAll();
//     scrollToTop();
//   };

//   const renderNavText = (name) => (
//     <>
//       <span className='block whitespace-nowrap  leading-tight'>
//         {name.split(" ")[0]}
//       </span>
//       <span className='block  w leading-tight'>{name.split(" ")[1]}</span>
//     </>
//   );

//   const DesktopNavItem = ({ item, index }) => (
//     <div className='relative group' key={index}>
//       {item.dropdown ? (
//         <>
//           <button
//             onClick={() => toggleDropdown(index)}
//             className={` wh px-3 py-2 text-sm font-semibold rounded-md flex flex-col items-center
//               ${
//                 activeDropdown === index
//                   ? "bg-[#E91E63] text-white"
//                   : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
//               }`}
//           >
//             {renderNavText(item.name)}
//           </button>

//           {activeDropdown === index && (
//             <div className='absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md z-20'>
//               {item.dropdown.map((subItem, subIndex) => (
//                 <NavLink
//                   key={subIndex}
//                   to={subItem.path}
//                   className={({ isActive }) =>
//                     `block px-4 py-2 text-sm hover:bg-[#E91E63] hover:text-white ${
//                       isActive ? "bg-red-100 text-[#E91E63]" : "text-gray-800"
//                     }`
//                   }
//                   onClick={handleLinkClick}
//                 >
//                   {subItem.name}
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </>
//       ) : (
//         <NavLink
//           to={item.path}
//           className={({ isActive }) =>
//             `px-3 py-2 whitespace-nowrap text-sm font-semibold rounded-md flex flex-col items-center
//             ${
//               isActive
//                 ? "bg-[#E91E63] text-white"
//                 : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
//             }`
//           }
//           onClick={handleLinkClick}
//         >
//           {renderNavText(item.name)}
//         </NavLink>
//       )}
//     </div>
//   );

//   const MobileNavItem = ({ item, index }) => (
//     <div key={index}>
//       {item.dropdown ? (
//         <>
//           <button
//             onClick={() => toggleDropdown(index)}
//             className={`w-full px-4 py-3 text-left  flex justify-between items-center
//               ${
//                 activeDropdown === index
//                   ? "bg-red-300 text-white"
//                   : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
//               }`}
//           >
//             <div className='flex flex-col whitespace-nowrap text-[4px]  '>
//               {renderNavText(item.name)}
//             </div>
//             <svg
//               className={`h-4 w-4 transform ${
//                 activeDropdown === index ? "rotate-180" : ""
//               }`}
//             >
//               <path stroke='currentColor' strokeWidth={2} d='M19 9l-7 7-7-7' />
//             </svg>
//           </button>

//           {activeDropdown === index && (
//             <div className='pl-6 bg-gray-50'>
//               {item.dropdown.map((subItem, subIndex) => (
//                 <NavLink
//                   key={subIndex}
//                   to={subItem.path}
//                   className={({ isActive }) =>
//                     `block   py-3 text-sm ${
//                       isActive
//                         ? "bg-red-100 text-[#E91E63]"
//                         : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
//                     }`
//                   }
//                   onClick={handleLinkClick}
//                 >
//                   {subItem.name}
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </>
//       ) : (
//         <NavLink
//           to={item.path}
//           className={({ isActive }) =>
//             `block px-4 py-3 ${
//               isActive
//                 ? "bg-[#E91E63] text-white"
//                 : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
//             }`
//           }
//           onClick={handleLinkClick}
//         >
//           <div className='flex flex-col text-[12px]'>
//             {renderNavText(item.name)}
//           </div>
//         </NavLink>
//       )}
//     </div>
//   );

//   return (
//     <nav className='bg-white shadow-md sticky top-0 z-50'>
//       <div className='max-w-7xl mx-auto px-4'>
//         <div className='flex justify-between items-center h-24'>
//           <NavLink to='/' onClick={handleLinkClick} className='flex-shrink-0'>
//             <img
//               className='h-28 w-auto mb-4 relative  md:right-[30px] '
//               src={logo}
//               alt='EuroKids Logo'
//             />
//           </NavLink>

//           <div className='hidden lg:flex  items-center space-x-4'>
//             {navItems.map((item, index) => (
//               <DesktopNavItem item={item} index={index} key={index} />
//             ))}
//             <div className='flex items-center ml-4 space-x-4'>
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.path}
//                   target='_blank'
//                   rel='noopener noreferrer'
//                   className='text--[#E91E63] hover:text-[#E91E63] text-lg'
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className='lg:hidden p-2 text-gray'
//           >
//             <svg
//               className='w-6 h-6'
//               fill='none'
//               stroke='currentColor'
//               viewBox='0 0 24 24'
//             >
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth={2}
//                 d='M4 6h16M4 12h16M4 18h16'
//               />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div
//           className='fixed inset-0 bg- bg-opacity-40 z-40'
//           onClick={() => setIsMobileMenuOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed top-23 left-0 h-full w-60 bg-white shadow-lg z-50 trannamesform transition-transform duration-300 ${
//           isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
//         } overflow-y-auto`}
//       >
//         <div className='p-2 mb-2'>
//           <button
//             onClick={() => setIsMobileMenuOpen(false)}
//             className='text-[#E91E63] hover:text-[#E91E63]  relative left-4 mt-2'
//           >
//             ✖
//           </button>
//           <div className='  '>
//             {navItems.map((item, index) => (
//               <MobileNavItem
//                 key={index}
//                 item={item}
//                 index={index}
//                 className='whitespace-nowrap'
//               />
//             ))}
//           </div>
//           <div className='flex justify-center space-x-6 pt-4 pb-3'>
//             {socialLinks.map((social, index) => (
//               <a
//                 key={index}
//                 href={social.path}
//                 target='_blank'
//                 rel='noopener noreferrer'
//                 className='text-[#E91E63] hover:text-[#E91E63] text-xl text-gray-'
//               >
//                 {social.icon}
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default EuroKidsNavbar;

import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/img/logo.png";

import AOS from "aos";
import "aos/dist/aos.css";

const EuroKidsNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false }); // once: false = repeat animation on scroll
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Franchise Opportunity", path: "/franchise-create" },
    { name: "Our Programs", path: "/our-programs" },
    { name: "Admission form", path: "/admission-form" },
    { name: "Our Blogs", path: "/blogs" },
    { name: "Locate Us", path: "/locate-branch" },
    { name: "Gallery", path: "/gallery" },
    { name: "Careers", path: "/Career" },
    { name: "Contact", path: "/contact" },
    { name: "BunnyApp", path: "/login" },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, path: "https://facebook.com" },
    { icon: <FaTwitter />, path: "https://twitter.com" },
    { icon: <FaInstagram />, path: "https://instagram.com" },
    { icon: <FaYoutube />, path: "https://youtube.com" },
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const closeAll = () => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeAll();
    scrollToTop();
  };

  const renderNavText = (name) => (
    <>
      <span className='block whitespace-nowrap  leading-tight'>
        {name.split(" ")[0]}
      </span>
      <span className='block  w leading-tight'>{name.split(" ")[1]}</span>
    </>
  );

  const DesktopNavItem = ({ item, index }) => (
    <div className='relative group' key={index}>
      {item.dropdown ? (
        <>
          <button
            onClick={() => toggleDropdown(index)}
            className={` wh px-3 py-2 text-sm font-semibold rounded-md flex flex-col items-center 
              ${
                activeDropdown === index
                  ? "bg-[#E91E63] text-white"
                  : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
              }`}
          >
            {renderNavText(item.name)}
          </button>

          {activeDropdown === index && (
            <div className='absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-b-md z-20'>
              {item.dropdown.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path}
                  className={({ isActive }) =>
                    `   block px-4 py-2 text-sm hover:bg-[#E91E63] hover:text-white ${
                      isActive ? "bg-red-100 text-[#E91E63]" : "text-gray-800"
                    }
               `
                  }
                  onClick={handleLinkClick}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `px-3 py-2 whitespace-nowrap text-sm font-semibold rounded-md flex flex-col items-center 
            ${
              isActive
                ? "bg-[#E91E63] text-white"
                : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
            }`
          }
          onClick={handleLinkClick}
        >
          {renderNavText(item.name)}
        </NavLink>
      )}
    </div>
  );

  const MobileNavItem = ({ item, index }) => (
    <div key={index}>
      {item.dropdown ? (
        <>
          <button
            onClick={() => toggleDropdown(index)}
            className={`w-full px-4 py-3 text-left  flex justify-between items-center 
              ${
                activeDropdown === index
                  ? "bg-red-300 text-white"
                  : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
              }`}
          >
            <div className='flex flex-col whitespace-nowrap text-[4px]  '>
              {renderNavText(item.name)}
            </div>
            <svg
              className={`h-4 w-4 transform ${
                activeDropdown === index ? "rotate-180" : ""
              }`}
            >
              <path stroke='currentColor' strokeWidth={2} d='M19 9l-7 7-7-7' />
            </svg>
          </button>

          {activeDropdown === index && (
            <div className='pl-6 bg-gray-50'>
              {item.dropdown.map((subItem, subIndex) => (
                <NavLink
                  key={subIndex}
                  to={subItem.path}
                  className={({ isActive }) =>
                    ` block   py-3 text-sm ${
                      isActive
                        ? "bg-red-100 text-[#E91E63]"
                        : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
                    }`
                  }
                  onClick={handleLinkClick}
                >
                  {subItem.name}
                </NavLink>
              ))}
            </div>
          )}
        </>
      ) : (
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `   block px-4 py-3 ${
              isActive
                ? "bg-[#E91E63] text-white"
                : "text-gray-800 hover:bg-[#E91E63] hover:text-white"
            }
       `
          }
          onClick={handleLinkClick}
        >
          <div className='flex flex-col text-[12px]'>
            {renderNavText(item.name)}
          </div>
        </NavLink>
      )}
    </div>
  );

  return (
    <nav className='bg-white shadow-md sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex justify-between items-center h-24'>
          <NavLink to='/' onClick={handleLinkClick} className='flex-shrink-0'>
            <img
              className='h-28 w-auto mb-4 relative  md:right-[30px] '
              src={logo}
              alt='EuroKids Logo'
            />
          </NavLink>

          <div className='hidden lg:flex  items-center space-x-4'>
            {navItems.map((item, index) => (
              <DesktopNavItem item={item} index={index} key={index} />
            ))}
            <div className='flex items-center ml-4 space-x-4'>
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.path}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text--[#E91E63] hover:text-[#E91E63] text-lg'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='lg:hidden p-2 text-gray'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className='fixed inset-0 bg- bg-opacity-40 z-40'
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-23 left-0 h-full w-60 bg-white shadow-lg z-50 trannamesform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className='p-2 mb-2'>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className='text-[#E91E63] hover:text-[#E91E63]  relative left-4 mt-2'
          >
            ✖
          </button>
          <div className='  '>
            {navItems.map((item, index) => (
              <MobileNavItem
                key={index}
                item={item}
                index={index}
                className='whitespace-nowrap'
              />
            ))}
          </div>
          <div className='flex justify-center space-x-6 pt-4 pb-3'>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.path}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#E91E63] hover:text-[#E91E63] text-xl text-gray-'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className='w-full h-8 bg-gradient-to-r from-[#E91E63] to-red-500 py-3 shadow-lg'
        data-aos='fade-right'
      >
        <h1 className='text-white text-center relative bottom-2 text-xl md:text-xl font-bold tracking-wide drop-shadow-md animate-pulse'>
          Little feet......Successful Strides!
        </h1>
      </div>
    </nav>
  );
};

export default EuroKidsNavbar;
