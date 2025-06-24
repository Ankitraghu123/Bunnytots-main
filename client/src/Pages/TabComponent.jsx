// export default TabsComponent;
// import React, { useState, useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// import {
//   FaSmile,
//   FaBookOpen,
//   FaChartLine,
//   FaComments,
//   FaBrain,
//   FaLanguage,
//   FaChalkboardTeacher,
//   FaClock,
//   FaUsers,
//   FaAward,
//   FaGraduationCap,
// } from "react-icons/fa";

// const TabsComponent = () => {
//   const [activeTab, setActiveTab] = useState("early");

//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className='w-full max-w-6xl mx-auto py-12 px-4 sm:px-6'>
//       {/* Tabs Buttons */}
//       <div className='flex justify-center mb-10'>
//         <div className='inline-flex bg-gray-100 p-1 rounded-full'>
//           <button
//             className={`px-6 py-3 rounded-full font-semibold text-sm md:text-lg  transition-all duration-300 ${
//               activeTab === "early"
//                 ? "bg-[#E91E63] text-white shadow-md"
//                 : "text-[#1A237E]  hover:bg-gray-200"
//             }`}
//             onClick={() => setActiveTab("early")}
//           >
//             Importance of Early Childhood Education
//           </button>
//           <button
//             className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
//               activeTab === "expertise"
//                 ? "bg-[#E91E63] text-white shadow-md"
//                 : "text-[#1A237E] hover:bg-gray-200"
//             }`}
//             onClick={() => setActiveTab("expertise")}
//           >
//             BunnyTots Expertise
//           </button>
//         </div>
//       </div>

//       {/* Content */}
//       <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
//         {activeTab === "early" && (
//           <div className='p-8' data-aos='fade-up'>
//             <div className='mb-8' data-aos='zoom-in'>
//               <h2 className='text-2xl font-bold text-[#1A237E] mb-3'>
//                 Brain Development Progression
//               </h2>
//               <div className='bg-[#FEEBEF] p-4 rounded-lg'>
//                 <p className='text-gray-700 font-medium'>
//                   Scientific studies of children have shown that, between birth
//                   and the age of six, the brain quadruples in size and reaches
//                   90% of its adult size.
//                 </p>
//                 <p className='text-[#E91E63] font-semibold mt-2'>
//                   Maximum connections are made at 9 Months
//                 </p>
//               </div>
//             </div>

//             <h3
//               className='text-xl font-semibold text-gray-800 mb-6'
//               data-aos='fade-right'
//             >
//               Here's what your child could miss without early schooling:
//             </h3>

//             <div className='grid grid-cols-1 text-center  sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//               {[
//                 {
//                   text: "This powerful fact highlights the extraordinary potential of early childhood education. During these formative years, a child’s brain is developing at an incredible pace—building the foundation for lifelong learning, behavior, and health.",
//                 },
//                 {
//                   text: "At BunnyTots, we don’t just care for children—we nurture their minds. Our programs are designed to stimulate curiosity, creativity, language, motor skills, and social-emotional development in an environment that’s safe, engaging, and joyful.",
//                 },
//                 {
//                   text: "Through purposeful play, guided exploration, and meaningful interaction with trained educators, your child will build the social, cognitive and emotional skills needed to thrive—not just in school, but in life.",
//                 },
//                 // { icon: <FaBrain className="text-3xl" />, text: "" },
//                 // { icon: <FaLanguage className="text-3xl" />, text: "" }
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   data-aos='fade-up'
//                   data-aos-delay={index * 100}
//                   className='flex items-start space-x-4 p-4 bg-gray-100 rounded-lg transition-colors'
//                 >
//                   <p className='text-gray-700 flex-1'>{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === "expertise" && (
//           <div className='p-8'>
//             <h2
//               className='text-3xl font-bold text-center text-[#E91E63] mb-12'
//               data-aos='fade-up'
//             >
//               BunnyTots <span className='text-gray-800'>Expertise</span>
//             </h2>

//             <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
//               {[
//                 {
//                   icon: <FaChalkboardTeacher className='text-4xl' />,
//                   text: "Certified and trained teachers",
//                 },
//                 {
//                   icon: <FaClock className='text-4xl' />,
//                   text: "23+ Years of experience",
//                 },
//                 {
//                   icon: <FaUsers className='text-4xl' />,
//                   text: "7 lakh+ students nurtured",
//                 },
//                 {
//                   icon: <FaBookOpen className='text-4xl' />,
//                   text: "35,000+ hours curriculum research",
//                 },
//                 { icon: <FaAward className='text-4xl' />, text: "60+ awards" },
//                 {
//                   icon: <FaGraduationCap className='text-4xl' />,
//                   text: "6 lakh+ hours of partner training",
//                 },
//               ].map((item, index) => (
//                 <div
//                   key={index}
//                   data-aos='zoom-in-up'
//                   data-aos-delay={index * 100}
//                   className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-sm transition-all'
//                 >
//                   <div className='bg-[#EE2341]/10 p-4 rounded-full text-[#E91E63] mb-4'>
//                     {item.icon}
//                   </div>
//                   <h3 className='text-lg font-semibold text-gray-800'>
//                     {item.text}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TabsComponent;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaSmile,
  FaBookOpen,
  FaChartLine,
  FaComments,
  FaBrain,
  FaLanguage,
  FaChalkboardTeacher,
  FaClock,
  FaUsers,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("early");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className='w-full max-w-6xl mx-auto py-12 px-4 sm:px-6'>
      {/* Tabs Buttons */}
      <div className='flex justify-center mb-10'>
        <div className='inline-flex bg-gray-100 p-1 rounded-full'>
          <button
            className={`px-6 py-3 rounded-full font-semibold text-sm md:text-lg  transition-all duration-300 ${
              activeTab === "early"
                ? "bg-[#E91E63] text-white shadow-md"
                : "text-[#1A237E]  hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("early")}
          >
            Importance of Early Childhood Education
          </button>
          <button
            className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
              activeTab === "expertise"
                ? "bg-[#E91E63] text-white shadow-md"
                : "text-[#1A237E] hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("expertise")}
          >
            BunnyTots Expertise
          </button>
        </div>
      </div>

      {/* Content */}
      <div className='bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100'>
        {activeTab === "early" && (
          <div className='p-8' data-aos='fade-up'>
            <div className='mb-8' data-aos='zoom-in'>
              <h2 className='text-2xl font-bold text-[#1A237E] mb-3'>
                Brain Development Progression
              </h2>
              <div className='bg-[#FEEBEF] p-4 rounded-lg'>
                <p className='text-gray-700 text-justify font-medium'>
                  Scientific studies of children have shown that, between birth
                  and the age of six, the brain quadruples in size and reaches
                  90% of its adult size.
                </p>
              </div>
            </div>

            <h3
              className='text-xl font-semibold text-gray-800 mb-6'
              data-aos='fade-right'
            >
              Here's what your child could miss without early schooling:
            </h3>

            <div className='grid grid-cols-1 text-center  sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {[
                {
                  text: "This powerful fact highlights the extraordinary potential of early childhood education. During these formative years, a child’s brain is developing at an incredible pace—building the foundation for lifelong learning, behavior, and health.",
                },
                {
                  text: "At BunnyTots, we don’t just care for children—we nurture their minds. Our programs are designed to stimulate curiosity, creativity, language, motor skills, and social-emotional development in an environment that’s safe, engaging, and joyful.",
                },
                {
                  text: "Through purposeful play, guided exploration, and meaningful interaction with trained educators, your child will build the social, cognitive and emotional skills needed to thrive—not just in school, but in life.",
                },
                // { icon: <FaBrain className="text-3xl" />, text: "" },
                // { icon: <FaLanguage className="text-3xl" />, text: "" }
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos='fade-up'
                  data-aos-delay={index * 100}
                  className='flex items-start space-x-4 p-4 bg-gray-100 rounded-lg transition-colors'
                >
                  <p className='text-gray-700 flex-1'>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "expertise" && (
          <div className='p-8'>
            <h2
              className='text-3xl font-bold text-center text-[#E91E63] mb-12'
              data-aos='fade-up'
            >
              BunnyTots <span className='text-gray-800'>Expertise</span>
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {[
                {
                  icon: <FaChalkboardTeacher className='text-4xl' />,
                  text: "Fastest Growing Preschool",
                },
                {
                  icon: <FaClock className='text-4xl' />,
                  text: "A proven track record spanning  7+ years",
                },
                {
                  icon: <FaUsers className='text-4xl' />,
                  text: "Thousands of young minds nurtured with care and dedication",
                },
                {
                  icon: <FaBookOpen className='text-4xl' />,
                  text: "2000+ Rapidly expanding locations nationwide ",
                },
                {
                  icon: <FaAward className='text-4xl' />,
                  text: "International Presence",
                },
                {
                  icon: <FaGraduationCap className='text-4xl' />,
                  text: "61320 +hrs of preschools education for successful students ",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  data-aos='zoom-in-up'
                  data-aos-delay={index * 100}
                  className='flex flex-col items-center text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-sm transition-all'
                >
                  <div className='bg-[#EE2341]/10 p-4 rounded-full text-[#E91E63] mb-4'>
                    {item.icon}
                  </div>
                  <h3 className='text-lg font-semibold text-gray-800'>
                    {item.text}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabsComponent;
