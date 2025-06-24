// import React, { useState, useEffect } from "react";
// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const ParentSpeak = () => {
//   // Theme configuration (consistent with BlogComponent)
//   const theme = {
//     primaryColor: "#EE2341",
//     secondaryColor: "#6C63FF",
//     textColor: "#111827",
//     accentTextColor: "#6B7280",
//     cardBgColor: "#FFFFFF",
//     cardShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
//   };

//   const testimonials = [
//     {
//       id: 1,
//       name: "Ms. Natasha Gupta",
//       relation: "Mother of Karen",
//       location: "Nursery - Eurekita Panchkula, Haryana",
//       quote:
//         "I'm thankful to have found amazing teachers for my daughter who emphasize academic excellence, training and a positive learning environment, leading to her remarkable development.",
//       avatar: "👩",
//       rating: 5,
//     },
//     {
//       id: 2,
//       name: "Ms. Isha Kaushal",
//       relation: "Mother of Aviraj",
//       location: "Eurekita Pro School | Panchkula, Haryana",
//       quote:
//         "EuroKids is a unique and incomparable option for me as a parent. I have faith in EuroKids and feel secure knowing my children are in their care.",
//       avatar: "👩‍🦰",
//       rating: 4,
//     },
//     {
//       id: 3,
//       name: "Mr. Rajesh Sharma",
//       relation: "Father of Aarav",
//       location: "EuroKids Pre-School | Chandigarh",
//       quote:
//         "The curriculum and teaching methods at EuroKids have helped my child develop confidence and social skills along with academic knowledge.",
//       avatar: "👨",
//       rating: 5,
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [direction, setDirection] = useState("right");
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const nextTestimonial = () => {
//     setDirection("right");
//     setCurrentIndex((prevIndex) =>
//       prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevTestimonial = () => {
//     setDirection("left");
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
//     );
//   };

//   // Auto-rotate testimonials with pause on hover
//   useEffect(() => {
//     let interval;
//     if (isAutoPlaying) {
//       interval = setInterval(() => {
//         nextTestimonial();
//       }, 6000);
//     }
//     return () => clearInterval(interval);
//   }, [currentIndex, isAutoPlaying]);

//   const renderStars = (rating) => {
//     return (
//       <div className='flex justify-center md:justify-start space-x-1 mt-2'>
//         {[...Array(5)].map((_, i) => (
//           <svg
//             key={i}
//             className={`w-5 h-5 ${
//               i < rating ? "text-yellow-400" : "text-gray-300"
//             }`}
//             fill='currentColor'
//             viewBox='0 0 20 20'
//           >
//             <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
//           </svg>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <section className='py-16 px-4 sm:px-6 lg:px-8 bg-white'>
//       <div className='max-w-6xl mx-auto'>
//         {/* Section Header */}
//         <div className='text-center mb-16'>
//           <h1 className='text-4xl md:text-5xl font-bold text-[#00008B] mb-4'>
//             Parent <span className='text-[#E91E63]'>Testimonials</span>
//           </h1>

//           <div
//             className='w-20 h-1 mx-auto mb-6'
//             style={{ backgroundColor: theme.primaryColor }}
//           ></div>
//           <p
//             className='text-xl max-w-2xl mx-auto'
//             style={{ color: theme.accentTextColor }}
//           >
//             Hear what parents say about their experience with us
//           </p>
//         </div>

//         {/* Testimonial Carousel */}
//         <div
//           className='relative h-auto md:h-96 mb-12'
//           onMouseEnter={() => setIsAutoPlaying(false)}
//           onMouseLeave={() => setIsAutoPlaying(true)}
//         >
//           {/* Testimonial Card */}
//           <div
//             key={testimonials[currentIndex].id}
//             className={`relative bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500 ease-in-out ${
//               direction === "right"
//                 ? "animate-slide-in-right"
//                 : "animate-slide-in-left"
//             }`}
//             style={{
//               boxShadow: theme.cardShadow,
//               minHeight: "400px",
//             }}
//           >
//             {/* Quote Icon */}
//             <FaQuoteLeft
//               className='absolute top-6 left-6 text-3xl opacity-10'
//               style={{ color: theme.primaryColor }}
//             />

//             <div className='flex flex-col md:flex-row gap-8 items-center'>
//               {/* Avatar */}
//               <div className='flex-shrink-0 relative'>
//                 <div
//                   className='w-32 h-32 rounded-full flex items-center justify-center text-6xl relative overflow-hidden'
//                   style={{ backgroundColor: `${theme.primaryColor}20` }}
//                 >
//                   {testimonials[currentIndex].avatar}
//                   <div
//                     className='absolute inset-0 rounded-full border-4 opacity-30'
//                     style={{ borderColor: theme.primaryColor }}
//                   ></div>
//                 </div>
//               </div>

//               {/* Content */}
//               <div className='text-center md:text-left'>
//                 {/* Rating */}
//                 {renderStars(testimonials[currentIndex].rating)}

//                 {/* Quote */}
//                 <blockquote className='my-6 text-lg md:text-xl relative'>
//                   <p style={{ color: theme.textColor }}>
//                     {testimonials[currentIndex].quote}
//                   </p>
//                 </blockquote>

//                 {/* Author Info */}
//                 <div className='mt-6'>
//                   <h3
//                     className='text-xl font-bold'
//                     style={{ color: theme.primaryColor }}
//                   >
//                     {testimonials[currentIndex].name}
//                   </h3>
//                   <p className='text-gray-600'>
//                     {testimonials[currentIndex].relation}
//                   </p>
//                   <p
//                     className='text-sm mt-1'
//                     style={{ color: theme.secondaryColor }}
//                   >
//                     {testimonials[currentIndex].location}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <FaQuoteRight
//               className='absolute bottom-6 right-6 text-3xl opacity-10'
//               style={{ color: theme.primaryColor }}
//             />
//           </div>
//         </div>

//         {/* Navigation Controls */}
//         <div className='flex flex-col items-center'>
//           {/* Dots */}
//           <div className='flex space-x-3 mb-8'>
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => {
//                   setDirection(index > currentIndex ? "right" : "left");
//                   setCurrentIndex(index);
//                 }}
//                 className={`w-3 h-3 rounded-full transition-all ${
//                   currentIndex === index ? "w-6 bg-indigo-600" : "bg-gray-300"
//                 }`}
//                 aria-label={`View testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Arrows */}
//           <div className='flex space-x-6'>
//             <button
//               onClick={prevTestimonial}
//               className='p-3 rounded-full shadow-md hover:shadow-lg transition-all'
//               style={{
//                 backgroundColor: theme.cardBgColor,
//                 color: theme.primaryColor,
//               }}
//               aria-label='Previous testimonial'
//             >
//               <FiChevronLeft className='w-6 h-6' />
//             </button>

//             <button
//               onClick={nextTestimonial}
//               className='p-3 rounded-full shadow-md hover:shadow-lg transition-all'
//               style={{
//                 backgroundColor: theme.cardBgColor,
//                 color: theme.primaryColor,
//               }}
//               aria-label='Next testimonial'
//             >
//               <FiChevronRight className='w-6 h-6' />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Animation Styles */}
//       <style jsx global>{`
//         @keyframes slideInRight {
//           from {
//             transform: translateX(30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         @keyframes slideInLeft {
//           from {
//             transform: translateX(-30px);
//             opacity: 0;
//           }
//           to {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }
//         .animate-slide-in-right {
//           animation: slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
//         }
//         .animate-slide-in-left {
//           animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ParentSpeak;


import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const ParentSpeak = () => {
  // Theme configuration (consistent with BlogComponent)
  const theme = {
    primaryColor: '#EE2341',
    secondaryColor: '#6C63FF',
    textColor: '#111827',
    accentTextColor: '#6B7280',
    cardBgColor: '#FFFFFF',
    cardShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
  };

  const testimonials = [
    {
      id: 1,
      name: "Mrs. Meera Mishra",
      relation: "Parent of a Bunny Nursery student",
      location: "BunnyTots Pre-School",
      quote: "From the moment we walked into the BunnyTots, we knew it was the right place for our daughter. The warmth of the teachers, the safe environment, and the thoughtful researched curriculum BunnyLearn have helped her grow in confidence and curiosity. Every day, she comes home excited to share what she’s learned. We can see holistic development in my child. We couldn’t ask for a better start to her educational journey!",
      avatar: "👩",
      rating: 5
    },
    {
      id: 2,
      name: "Mr. Rajiv Sharma",
      relation: "Parent of a Bunny Toddler student",
      location: "BunnyTots Pre-School",
      quote: "Our son was shy and reserved when he first joined, but within a few weeks, we saw an incredible transformation. The staff gave him the attention and encouragement he needed to open up and thrive. We are so grateful for the patience and dedication shown by every teacher. It’s clear BunnyTots truly care about each child’s development. They have trained & qualified teachers, maids are neat and tidy, polite and well behaved",
      avatar: "👩‍🦰",
      rating: 4
    },
    {
      id: 3,
      name: "Mrs. Anjali Rathore,",
      relation: "Parent of a KG student",
      location: "BunnyTots Pre-School",
      quote: "What sets BunnyTots apart is the way they involve parents in every step. From regular updates and fun events to parent-teacher meetings, we always feel informed and connected. Our daughter is not only learning academics but also valuable life skills and overall development. We wholeheartedly recommend BunnyTots to every parent!",
      avatar: "👨",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection("left");
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  // Auto-rotate testimonials with pause on hover
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextTestimonial();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const renderStars = (rating) => {
    return (
      <div className="flex justify-center md:justify-start space-x-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
            Parent <span className="text-[#E91E63]">Testimonials</span>
          </h1>
             
          <div className="w-20  h-1 mx-auto mb-6" style={{ backgroundColor: theme.primaryColor }}></div>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: theme.accentTextColor }}>
            Hear what parents say about their experience with us
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className="relative h-auto md:h-96 mb-12"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Testimonial Card */}
          <div 
            key={testimonials[currentIndex].id}
            className={`relative bg-white rounded-xl shadow-lg p-8 md:p-10 transition-all duration-500 ease-in-out ${direction === "right" ? "animate-slide-in-right" : "animate-slide-in-left"}`}
            style={{
              boxShadow: theme.cardShadow,
              minHeight: '400px'
            }}
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="absolute top-6 left-6 text-3xl opacity-10" style={{ color: theme.primaryColor }} />
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-32 h-32 rounded-full flex items-center justify-center text-6xl relative overflow-hidden"
                  style={{ backgroundColor: `${theme.primaryColor}20` }}
                >
                  {testimonials[currentIndex].avatar}
                  <div 
                    className="absolute inset-0 rounded-full border-4 opacity-30"
                    style={{ borderColor: theme.primaryColor }}
                  ></div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center md:text-left">
                {/* Rating */}
                {renderStars(testimonials[currentIndex].rating)}
                
                {/* Quote */}
                <blockquote className="my-6 text-lg text-justify md:text-xl relative">
                  <p style={{ color: theme.textColor }}>
                    {testimonials[currentIndex].quote}
                  </p>
                </blockquote>
                
                {/* Author Info */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold" style={{ color: theme.primaryColor }}>
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-gray-600">{testimonials[currentIndex].relation}</p>
                  <p className="text-sm mt-1" style={{ color: theme.secondaryColor }}>
                    {testimonials[currentIndex].location}
                  </p>
                </div>
              </div>
            </div>
            
            <FaQuoteRight className="absolute bottom-6 right-6 text-3xl opacity-10" style={{ color: theme.primaryColor }} />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center">
          {/* Dots */}
          <div className="flex space-x-3 mb-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? "right" : "left");
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'w-6 bg-indigo-600' : 'bg-gray-300'}`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Arrows */}
          <div className="flex space-x-6">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              style={{ 
                backgroundColor: theme.cardBgColor,
                color: theme.primaryColor
              }}
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full shadow-md hover:shadow-lg transition-all"
              style={{ 
                backgroundColor: theme.cardBgColor,
                color: theme.primaryColor
              }}
              aria-label="Next testimonial"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx global>{`
        @keyframes slideInRight {
          from { 
            transform: translateX(30px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from { 
            transform: translateX(-30px);
            opacity: 0;
          }
          to { 
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }
      `}</style>
    </section>
  );
};

export default ParentSpeak;