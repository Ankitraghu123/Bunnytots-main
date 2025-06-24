// import React from 'react';
// import logo from  "../assets/img/logo.png"
// import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-18 px-6 md:px-12 lg:px-24">
//       {/* Main Footer Content */}
//       <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">

//         {/* About Section */}
//         <div className="relative bottom-10 ">
//           <div className=" items-center"  >
//             <img
//               src={logo}
//               alt="BunnyTots Logo"
//               className="h-20 w-auto "
//             />
//           <p className="text-gray-300 leading-relaxed">
// BunnyTots is internationally recognised as a leading early childhood education brand, dedicated to nurturing young minds, with a commitment to excellence and innovation, BunnyTots provides a nurturing environment that fosters holistic development, laying a strong foundation for lifelong learning          </p>
//           <div className="flex space-x-4  relative top-5">
//             <a href="#" className="text-ray-300 hover:text-[#E91E63] transition-colors">
//               <FaFacebook className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors">
//               <FaTwitter className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors">
//               <FaInstagram className="h-6 w-6" />
//             </a>
//             <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors">
//               <FaYoutube className="h-6 w-6" />
//             </a>
//           </div>
//         </div>
//           </div>

//         {/* Quick Links */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-bold text-white border-b-2 border-[#E91E63] pb-2 inline-block">
//             Quick Links
//           </h3>
//           <ul className="space-y-3">
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Home</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>About Us</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Our Programs</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Admissions</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Franchise Opportunity</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Contact Us</span>
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Programs */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-bold text-white border-b-2 border-[#E91E63] pb-2 inline-block">
//             Our Programs
//           </h3>
//           <ul className="space-y-3">
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Bunny Toddlers   </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Bunny Nursery  </span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span>Bunny Junior</span>
//               </a>
//             </li>
//             <li>
//               <a href="#" className="text-gray-300 hover:text-[#E91E63] transition-colors flex items-start">
//                 <span className="mr-2 text-[#E91E63]">•</span>
//                 <span> Bunny Senior </span>
//               </a>
//             </li>

//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-6">
//           <h3 className="text-xl font-bold text-white border-b-2 border-[#E91E63] pb-2 inline-block">
//             Contact Us
//           </h3>
//           <div className="space-y-4">
//             <div className="flex items-start">
//               <FaMapMarkerAlt className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
//               <p className="text-gray-300">
//                Heaven's Life, Katara Hills Bhopal 462043
//               </p>
//             </div>
//             <div className="flex items-center">
//               <FaPhone className="text-[#E91E63] mr-3 flex-shrink-0" />
//               <a href="tel:+91 8435470955" className="text-gray-300 hover:text-[#E91E63] transition-colors">
//                 +91 8435470955

//               </a>
//             </div>
//             <div className="flex items-center">
//               <FaEnvelope className="text-[#E91E63] mr-3 flex-shrink-0" />
//               <a href="mailto:info@eurokids.example.com" className="text-gray-300 hover:text-[#E91E63] transition-colors">
//                 info@BunnyTots.example.com
//               </a>
//             </div>
//             <div className="flex items-start">
//               <FaClock className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
//               <p className="text-gray-300 whitespace-nowrap">
//                 Monday - Friday: 9:00 AM to 6:00  PM<br />
//                 Saturday: 9:00 AM to 2:00 PM
//                 :
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Divider */}
//       <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8 mb-2"></div>

//       {/* Bottom Footer */}
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
//         <p className="text-gray-400 text-sm  md:mb-0">
//           &copy; {new Date().getFullYear()} BunnyTots International Preschool. All Rights Reserved
//         </p>
//         <div className="flex space-x-6">
//           <a href="#" className="text-gray-400 hover:text-[#E91E63] text-sm transition-colors">
//             Privacy Policy
//           </a>
//           <a href="#" className="text-gray-400 hover:text-[#E91E63] text-sm transition-colors">
//             Terms of Service
//           </a>
//           <a href="#" className="text-gray-400 hover:text-[#E91E63] text-sm transition-colors">
//             Sitemap
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import logo from "../assets/img/logo.png";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-white pt-16 pb-18 px-6 md:px-12 lg:px-24'>
      {/* Main Footer Content */}
      <div className='max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 '>
        {/* About Section */}
        <div className='relative bottom-10 '>
          <div className=' items-center'>
            <img src={logo} alt='BunnyTots Logo' className='h-20 w-auto ' />
            <p className='text-gray-300 text-sm text-justify leading-relaxed'>
              BunnyTots is internationally recognised as a leading early
              childhood education brand, dedicated to nurturing young minds,
              with a commitment to excellence and innovation, BunnyTots provides
              a nurturing environment that fosters holistic development, laying
              a strong foundation for lifelong learning
            </p>
            <div className='flex space-x-4  relative top-5'>
              <a
                href='https://www.facebook.com/bunny.tots.94?mibextid=b06tZ0'
                className='text-ray-300 hover:text-[#E91E63] transition-colors'
              >
                <FaFacebook className='h-6 w-6' />
              </a>
            
              <a
                href='https://instagram.com/bunnytots_official?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D'
                className='text-gray-300 hover:text-[#E91E63] transition-colors'
              >
                <FaInstagram className='h-6 w-6' />
              </a>
              <a
                href='https://youtube.com/@bunnytots-pe9be?si=9nyGoyKoLUQsj8ce'
                className='text-gray-300 hover:text-[#E91E63] transition-colors'
              >
                <FaYoutube className='h-6 w-6' />
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className='space-y-6'>
          <h3 className='text-xl font-bold text-white border-b-2 border-[#E91E63] pb-2 inline-block'>
            Quick Links
          </h3>
          <ul className='space-y-3'>
            <li>
              <a
                href='/'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href='/about'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>About Us</span>
              </a>
            </li>
            <li>
              <a
                href='/our-programs'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Our Programs</span>
              </a>
            </li>
            <li>
              <a
                href='/admission-form'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Admissions</span>
              </a>
            </li>
            <li>
              <a
                href='/franchise-create'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Franchise Opportunity</span>
              </a>
            </li>
            <li>
              <a
                href='/contact'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Contact Us</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Programs */}
        <div className='space-y-6'>
          <h3 className='text-xl font-bold text-white border-b-2 border-[#E91E63] pb-2 inline-block'>
            Our Programs
          </h3>
          <ul className='space-y-3'>
            <li>
              <a
                href='#'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Bunny Toddlers </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Bunny Nursery </span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span>Bunny Junior(KG1)</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-gray-300 hover:text-[#E91E63] transition-colors flex items-start'
              >
                <span className='mr-2 text-[#E91E63]'>•</span>
                <span> Bunny Senior </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='space-y-6'>
          <h3 className='text-xl font-bold text-white border-b-2 border-[#E91E63] pb-2 inline-block'>
            Contact Us
          </h3>
          <div className='space-y-4'>
            {/* <div className="flex items-start">
              <FaMapMarkerAlt className="text-[#E91E63] mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-300">
               Heaven's Life, Katara Hills Bhopal 462043
              </p>
            </div> */}
            <div className='flex items-center'>
              <FaPhone className='text-[#E91E63] mr-3 flex-shrink-0' />
              <a
                href='tel:+91 8435470955'
                className='text-gray-300 hover:text-[#E91E63] transition-colors'
              >
                +91 8435470955
              </a>
            </div>
            <div className='flex items-center'>
              <FaEnvelope className='text-[#E91E63] mr-3 flex-shrink-0' />
              <a
                href='mailto:info@eurokids.example.com'
                className='text-gray-300 hover:text-[#E91E63] transition-colors'
              >
              info@bunnytotsindia.com
              </a>
            </div>
            <div className='flex items-start'>
              <FaClock className='text-[#E91E63] mt-1 mr-3 flex-shrink-0' />
              <p className='text-gray-300 whitespace-nowrap'>
                Monday - Friday: 9:00 AM to 6:00 PM
                <br />
                Saturday: 9:00 AM to 2:00 PM :
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className='max-w-7xl mx-auto border-t border-gray-700 mt-8 mb-2'></div>

      {/* Bottom Footer */}
      <div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <p className='text-gray-400 text-sm  md:mb-0'>
          &copy; {new Date().getFullYear()} BunnyTots International Preschool.
          All Rights Reserved
        </p>
        <div className='flex space-x-6'>
          <a
            href='#'
            className='text-gray-400 hover:text-[#E91E63] text-sm transition-colors'
          >
            Privacy Policy
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-[#E91E63] text-sm transition-colors'
          >
            Terms of Service
          </a>
          <a
            href='#'
            className='text-gray-400 hover:text-[#E91E63] text-sm transition-colors'
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
