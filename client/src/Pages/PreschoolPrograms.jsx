// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import train from "../assets/slider/slider.jpg"

// const PreschoolPrograms = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       easing: 'ease-in-out',
//       once: true,
//     });
//   }, []);

//   const programs = [
//     {
//       title: "Bunny Play Group",
//       age: "1.8 to 2.5 years",
//       description: "Safe, nurturing and stimulating environment with focus on social-emotional skills, motor skills, and language development through play, music, and storytelling.",
//       image: "https://images.unsplash.com/photo-1597294150808-a1211d9f6604?q=80&w=2070&auto=format&fit=crop",
//       icon: "🐰"
//     },
//     {
//       title: "Bunny Nursery",
//       age: "2.5 to 3.5 years",
//       description: "Play-based + structured learning to build early literacy, communication, motor skills, and social values like empathy and independence.",
//       image: "https://images.unsplash.com/photo-1655739285392-4944873ccf1b?q=80&w=2070&auto=format&fit=crop",
//       icon: "🍼"
//     },
//     {
//       title: "Bunny Junior",
//       age: "4 to 5 years",
//       description: "Foundation for formal learning with activities in literacy, numeracy, spoken English, motor and social-emotional skills through joyful discovery.",
//       image: "https://images.unsplash.com/photo-1709375635635-152e491a50a7?q=80&w=2070&auto=format&fit=crop",
//       icon: "🎒"
//     },
//     {
//       title: "Bunny Senior (KG 2)",
//       age: "5 to 6 years",
//       description: "Structured learning with focus on reading, writing, English skills, numeracy, creativity, science, and life values—preparing for primary school.",
//       image: "https://images.unsplash.com/flagged/photo-1567288252174-7b531d172130?q=80&w=2070&auto=format&fit=crop",
//       icon: "📘"
//     }
//   ];

//   return (
//     <div className="relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
//       <div className="absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

//       <div className="max-w-7xl mx-auto relative z-10">
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 bg-[#EE2341]/10 text-[#EE2341] rounded-full text-sm font-medium mb-3">
//             Our Programs
//           </span>
//           <h1 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
//             Pre-school <span className="text-[#E91E63]">Learning Journey</span>
//           </h1>
//           <img className='relative md:left-20' src={train} alt="" />
//           <div className="w-24 h-1 bg-[#EE2341] mx-auto mb-6"></div>
//           <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//             With a nurturing environment and joyful discovery, we help children develop essential life skills, confidence, and a lifelong love for learning.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {programs.map((program, index) => (
//             <div key={index} className="relative group">
//               <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300"></div>
//               <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100">
//                 <div className="relative h-48 overflow-hidden">
//                   <img
//                     src={program.image}
//                     alt={`${program.title} program`}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//                   <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full text-xl">
//                     {program.icon}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-start mb-3">
//                     <div className="flex-1">
//                       <h2 className="text-xl font-bold text-[#00008B]">{program.title}</h2>
//                       <p className="text-gray-700 font-medium text-sm">{program.age}</p>
//                     </div>
//                   </div>
//                   <p className="text-gray-600">{program.description}</p>

//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreschoolPrograms;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import train from "../assets/slider/slider.jpg";

import Junior1 from "../assets/Junior.png";
import Nursery2 from "../assets/Nursery.png";
import Bunny3 from "../assets/Bunny.png";
import Senior4 from "../assets/Senior.png";

const PreschoolPrograms = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const programs = [
    {
      title: "Bunny Play Group",
      age: "1.8 to 2.5 years",
      description:
        "Safe, nurturing and stimulating environment with focus on social-emotional skills, motor skills, and language development through play, music, and storytelling.",
      image: Bunny3,
      icon: "🐰",
    },
    {
      title: "Bunny Nursery",
      age: "2.5 to 3.5 years",
      description:
        "Play-based + structured learning to build early literacy, communication, motor skills, and social values like empathy and independence.",
      image: Nursery2,
      icon: "🍼",
    },
    {
      title: "Bunny Junior(KG1)",
      age: "4 to 5 years",
      description:
        "Foundation for formal learning with activities in literacy, numeracy, spoken English, motor and social-emotional skills through joyful discovery.",
      image: Junior1,
      icon: "🎒",
    },
    {
      title: "Bunny Senior (KG 2)",
      age: "5 to 6 years",
      description:
        "Structured learning with focus on reading, writing, English skills, numeracy, creativity, science, and life values—preparing for primary school.",
      image: Senior4,
      icon: "📘",
    },
  ];

  return (
    <div className='relative bg-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-1 bg-[#EE2341]/10 text-[#EE2341] rounded-full text-sm font-medium mb-3'>
            Our Programs
          </span>
          <h1 className='text-4xl md:text-5xl font-bold text-[#00008B] mb-4'>
            Pre-school <span className='text-[#E91E63]'>Learning Journey</span>
          </h1>
          <img className='relative md:left-20' src={train} alt='' />
          <div className='w-24 h-1 bg-[#EE2341] mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            With a nurturing environment and joyful discovery, we help children
            develop essential life skills, confidence, and a lifelong love for
            learning.
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {programs.map((program, index) => (
            <div key={index} className='relative group'>
              <div className='absolute -inset-1 bg-gradient-to-r rounded-2xl opacity-20 group-hover:opacity-30 blur transition-all duration-300'></div>
              <div className='relative h-full bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100'>
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={program.image}
                    alt={`${program.title} program`}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
                  <div className='absolute top-4 right-4 bg-white/90 p-2 rounded-full text-xl'>
                    {program.icon}
                  </div>
                </div>
                <div className='p-6'>
                  <div className='flex items-start mb-3'>
                    <div className='flex-1'>
                      <h2 className='text-xl font-bold text-[#00008B]'>
                        {program.title}
                      </h2>
                      <p className='text-gray-700 font-medium text-sm'>
                        {program.age}
                      </p>
                    </div>
                  </div>
                  <p className='text-gray-600'>{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreschoolPrograms;
