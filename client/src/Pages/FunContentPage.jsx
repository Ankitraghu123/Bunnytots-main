// import React, { useRef, useState, useEffect } from 'react';
// import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// // import { MdCelebration, MdMenuBook, MdScience } from "react-icons/md";
// import {
//   MdPalette,
//   MdMenuBook,
//   MdColorLens,
//   MdCelebration,
//   MdScience,
//   MdPerson,
//   MdChildCare,
//   MdMusicNote,
//   MdElderlyWoman

// } from "react-icons/md";

// import {
//   GiWatermelon,
//   GiCircle,
//   GiTriangleTarget,
//   GiMeditation,
//   // GiOldWoman,
//   GiRose,
//   GiFruitBowl,
//   GiPencilBrush,
//   GiRecycle,
//   GiCookingPot,
//   GiClothes
// } from "react-icons/gi";

// import { FaSquareFull, FaMusic } from "react-icons/fa";
// import { MdForest } from "react-icons/md";
// import { WiRain } from "react-icons/wi";

// import bunny from "../assets/img/bunny.png"

// const FunContentPage = () => {
//   const scrollContainerRef = useRef(null);
//   const [showLeftButton, setShowLeftButton] = useState(false);
//   const [showRightButton, setShowRightButton] = useState(true);

//   const funActivities = [
//     { id: 1, title: "Blue Day", icon: <MdPalette size={40} className="text-[#E91E63]" /> },
//     { id: 2, title: "Watermelon Day", icon: <GiWatermelon size={40} className="text-[#E91E63]" /> },
//     { id: 3, title: "Environment Day", icon: <MdForest size={40} className="text-[#E91E63]" /> },
//     { id: 4, title: "Circle Day", icon: <GiCircle size={40} className="text-[#E91E63]" /> },
//     { id: 5, title: "Square Day", icon: <FaSquareFull size={40} className="text-[#E91E63]" /> },
//     { id: 6, title: "Triangle Day", icon: <GiTriangleTarget size={40} className="text-[#E91E63]" /> },
//     { id: 7, title: "Story Telling Day", icon: <MdMenuBook size={40} className="text-[#E91E63]" /> },
//     { id: 8, title: "Colouring Day", icon: <MdColorLens size={40} className="text-[#E91E63]" /> },
//     { id: 9, title: "Rhyme Day", icon: <FaMusic size={40} className="text-[#E91E63]" /> },
//     { id: 10, title: "Annual Day", icon: <MdCelebration size={40} className="text-[#E91E63]" /> },
//     { id: 11, title: "Rainy Day", icon: <WiRain size={40} className="text-[#E91E63]" /> },
//     { id: 12, title: "Science Day", icon: <MdScience size={40} className="text-[#E91E63]" /> },
//     { id: 13, title: "Yoga Day", icon: <GiMeditation size={40} className="text-[#E91E63]" /> },
//     { id: 14, title: "Grandparents Day", icon: <MdElderlyWoman size={40} className="text-[#E91E63]" /> },
//     { id: 15, title: "Rose Day", icon: <GiRose size={40} className="text-[#E91E63]" /> },
//     { id: 16, title: "Teachers Day", icon: <MdPerson size={40} className="text-[#E91E63]" /> },
//     { id: 17, title: "Children Day", icon: <MdChildCare size={40} className="text-[#E91E63]" /> },
//     { id: 18, title: "Fruits & Vegetables identification", icon: <GiFruitBowl size={40} className="text-[#E91E63]" /> },
//     { id: 19, title: "Arts & Craft Activity", icon: <GiPencilBrush size={40} className="text-[#E91E63]" /> },
//     { id: 20, title: "Best out of waste Activity", icon: <GiRecycle size={40} className="text-[#E91E63]" /> },
//     { id: 21, title: "Fireless Cooking Activity", icon: <GiCookingPot size={40} className="text-[#E91E63]" /> },
//     { id: 22, title: "Singing & Dance Activity", icon: <MdMusicNote size={40} className="text-[#E91E63]" /> },
//     { id: 23, title: "Fancy Dress Competition", icon: <GiClothes size={40} className="text-[#E91E63]" /> },
//   ];

//   const duplicatedActivities = [...funActivities, ...funActivities];

//   const checkScrollPosition = () => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
//       setShowLeftButton(scrollLeft > 0);
//       setShowRightButton(scrollLeft < scrollWidth - clientWidth);
//     }
//   };

//   const scrollLeft = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollContainerRef.current) {
//       scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     const container = scrollContainerRef.current;
//     if (container) {
//       container.addEventListener('scroll', checkScrollPosition);
//       return () => container.removeEventListener('scroll', checkScrollPosition);
//     }
//   }, []);

//   return (
//     <div className="relative bg-[#FFFFFF]  overflow-hidden py-12">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
//       <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
//             Fun at <span className="text-[#E91E63]">BunnyTots</span>
//           </h1>
//           <p className="text-xl text-gray-700 max-w-2xl mx-auto">
//             We're all about making learning fun
//           </p>
//           <div className="w-24 h-1 bg-[#EE2341] mx-auto mt-4"></div>
//         </div>

//         <div className="flex flex-col md:flex-row gap-8 items-start">
//           {/* Left Image Section - Cartoon Kid */}
//           <div className="w-full md:w-1/3 flex justify-center">
//             <div className="relative">
//               <img
//                 src={bunny}
//                 alt="Happy Kids"
//                 className="rounded-xl shadow-lg w-full h-auto max-h-[400px] object-contain"
//               />
//               <div className="absolute -bottom-4 -right-4 bg-[#EE2341] text-white px-4 py-2 rounded-lg shadow-md">
//                 Learning Through Play!
//               </div>
//             </div>
//           </div>

//           {/* Right Scrollable Section */}
//           <div className="w-full md:w-2/3 relative">
//             <h2 className="text-xl font-bold text-gray mb-6 flex items-center">
//               <FaCalendarAlt className="text-[#00008B] mr-3" />
//               Events & Celebrations
//             </h2>

//             {/* Scroll Buttons */}
//             {showLeftButton && (
//               <button
//                 onClick={scrollLeft}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-red-100   hover:text-white transition-all -ml-4"
//               >
//                 <FaChevronLeft className="text-[#EE2341] text-lg group-hover:text-white" />
//               </button>
//             )}

//             {showRightButton && (
//               <button
//                 onClick={scrollRight}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-red-100   hover:text-white transition-all -mr-4"
//               >
//                 <FaChevronRight className="text-[#EE2341] text-lg group-hover:text-white" />
//               </button>
//             )}

//             {/* Scrollable Activities */}
//             <div
//               ref={scrollContainerRef}
//               className="flex overflow-x-auto scrollbar-hide pb-2 scroll-smooth"
//               style={{ scrollbarWidth: 'none' }}
//             >
//               <div className="flex space-x-6 px-2">
//                 {duplicatedActivities.map((activity, index) => (
//                   <div
//                     key={`${activity.id}-${index}`}
//                     className={`flex-shrink-0 w-56 h-64 bg-transparent rounded-xl shadow-md border border-[#E91E63] flex flex-col items-center justify-center p-6`}
//                   >
//                     <div className="mb-5 bg-red-50 p-4 rounded-full shadow-sm">
//                       {activity.icon}
//                     </div>
//                     <h3 className="text-center font-bold text-[16px] text-[#4A5565] leading-tight">
//                       {activity.title}
//                     </h3>

//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Custom Scrollbar */}

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FunContentPage;

import React, { useRef, useState, useEffect } from "react";
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import funat from "../assets/funat.png";
// import { MdCelebration, MdMenuBook, MdScience } from "react-icons/md";
import {
  MdPalette,
  MdMenuBook,
  MdColorLens,
  MdCelebration,
  MdScience,
  MdPerson,
  MdChildCare,
  MdMusicNote,
  MdElderlyWoman,
} from "react-icons/md";

import {
  GiWatermelon,
  GiCircle,
  GiTriangleTarget,
  GiMeditation,
  // GiOldWoman,
  GiRose,
  GiFruitBowl,
  GiPencilBrush,
  GiRecycle,
  GiCookingPot,
  GiClothes,
} from "react-icons/gi";

import { FaSquareFull, FaMusic } from "react-icons/fa";
import { MdForest } from "react-icons/md";
import { WiRain } from "react-icons/wi";

import bunny from "../assets/img/bunny.png";

const FunContentPage = () => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  const funActivities = [
    {
      id: 1,
      title: "Blue Day",
      icon: <MdPalette size={40} className='text-[#E91E63]' />,
    },
    {
      id: 2,
      title: "Watermelon Day",
      icon: <GiWatermelon size={40} className='text-[#E91E63]' />,
    },
    {
      id: 3,
      title: "Environment Day",
      icon: <MdForest size={40} className='text-[#E91E63]' />,
    },
    {
      id: 4,
      title: "Circle Day",
      icon: <GiCircle size={40} className='text-[#E91E63]' />,
    },
    {
      id: 5,
      title: "Square Day",
      icon: <FaSquareFull size={40} className='text-[#E91E63]' />,
    },
    {
      id: 6,
      title: "Triangle Day",
      icon: <GiTriangleTarget size={40} className='text-[#E91E63]' />,
    },
    {
      id: 7,
      title: "Story Telling Day",
      icon: <MdMenuBook size={40} className='text-[#E91E63]' />,
    },
    {
      id: 8,
      title: "Colouring Day",
      icon: <MdColorLens size={40} className='text-[#E91E63]' />,
    },
    {
      id: 9,
      title: "Rhyme Day",
      icon: <FaMusic size={40} className='text-[#E91E63]' />,
    },
    {
      id: 10,
      title: "Annual Day",
      icon: <MdCelebration size={40} className='text-[#E91E63]' />,
    },
    {
      id: 11,
      title: "Rainy Day",
      icon: <WiRain size={40} className='text-[#E91E63]' />,
    },
    {
      id: 12,
      title: "Science Day",
      icon: <MdScience size={40} className='text-[#E91E63]' />,
    },
    {
      id: 13,
      title: "Yoga Day",
      icon: <GiMeditation size={40} className='text-[#E91E63]' />,
    },
    {
      id: 14,
      title: "Grandparents Day",
      icon: <MdElderlyWoman size={40} className='text-[#E91E63]' />,
    },
    {
      id: 15,
      title: "Rose Day",
      icon: <GiRose size={40} className='text-[#E91E63]' />,
    },
    {
      id: 16,
      title: "Teachers Day",
      icon: <MdPerson size={40} className='text-[#E91E63]' />,
    },
    {
      id: 17,
      title: "Children Day",
      icon: <MdChildCare size={40} className='text-[#E91E63]' />,
    },
    {
      id: 18,
      title: "Fruits & Vegetables identification",
      icon: <GiFruitBowl size={40} className='text-[#E91E63]' />,
    },
    {
      id: 19,
      title: "Arts & Craft Activity",
      icon: <GiPencilBrush size={40} className='text-[#E91E63]' />,
    },
    {
      id: 20,
      title: "Best out of waste Activity",
      icon: <GiRecycle size={40} className='text-[#E91E63]' />,
    },
    {
      id: 21,
      title: "Fireless Cooking Activity",
      icon: <GiCookingPot size={40} className='text-[#E91E63]' />,
    },
    {
      id: 22,
      title: "Singing & Dance Activity",
      icon: <MdMusicNote size={40} className='text-[#E91E63]' />,
    },
    {
      id: 23,
      title: "Fancy Dress Competition",
      icon: <GiClothes size={40} className='text-[#E91E63]' />,
    },
  ];

  const duplicatedActivities = [...funActivities, ...funActivities];

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollPosition);
      return () => container.removeEventListener("scroll", checkScrollPosition);
    }
  }, []);

  return (
    <div className='relative bg-[#FFFFFF]  overflow-hidden py-12'>
      {/* Decorative elements */}
      <div className='absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

      <div className='max-w-7xl mx-auto px-4'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#00008B] mb-4'>
            Fun at <span className='text-[#E91E63]'>BunnyTots</span>
          </h1>
          <p className='text-xl text-gray-700 max-w-2xl mx-auto'>
            We're all about making learning fun
          </p>
          <div className='w-24 h-1 bg-[#EE2341] mx-auto mt-4'></div>

          <img src={funat} alt='' className='mt-2  object-contain' />
        </div>

        <div className='flex flex-col md:flex-row gap-8 items-start'>
          {/* Left Image Section - Cartoon Kid */}
          <div className='w-full md:w-1/3 flex justify-center'>
            <div className='relative  right- '>
              <img
                src={bunny}
                alt='Happy Kids'
                className='rounded-xl shadow-lg w-full h-auto max-h-[300px] mt-10 object-contain hidden md:flex'
              />
              <div className=' absolute  -bottom-4 hidden md:flex -right-4 bg-[#EE2341] text-white px-4 py-2 rounded-lg shadow-md'>
                Learning Through Play!
              </div>
            </div>
          </div>

          {/* Right Scrollable Section */}
          <div className='w-full md:w-2/3 relative'>
            <h2 className='text-xl font-bold text-gray mb-6 flex items-center'>
              <FaCalendarAlt className='text-[#00008B] mr-3' />
              Events & Celebrations
            </h2>

            {/* Scroll Buttons */}
            {showLeftButton && (
              <button
                onClick={scrollLeft}
                className='absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-red-100   hover:text-white transition-all -ml-4'
              >
                <FaChevronLeft className='text-[#EE2341] text-lg group-hover:text-white' />
              </button>
            )}

            {showRightButton && (
              <button
                onClick={scrollRight}
                className='absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg border border-gray-200 hover:bg-red-100   hover:text-white transition-all -mr-4'
              >
                <FaChevronRight className='text-[#EE2341] text-lg group-hover:text-white' />
              </button>
            )}

            {/* Scrollable Activities */}
            <div
              ref={scrollContainerRef}
              className='flex overflow-x-auto scrollbar-hide pb-2 scroll-smooth'
              style={{ scrollbarWidth: "none" }}
            >
              <div className='flex space-x-6 px-2'>
                {duplicatedActivities.map((activity, index) => (
                  <div
                    key={`${activity.id}-${index}`}
                    className={`flex-shrink-0 w-56 h-64 bg-transparent rounded-xl shadow-md border border-[#E91E63] flex flex-col items-center justify-center p-6`}
                  >
                    <div className='mb-5 bg-red-50 p-4 rounded-full shadow-sm'>
                      {activity.icon}
                    </div>
                    <h3 className='text-center font-bold text-[16px] text-[#4A5565] leading-tight'>
                      {activity.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Scrollbar */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunContentPage;
