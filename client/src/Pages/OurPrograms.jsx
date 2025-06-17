import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whychoose from "../assets/whychoose.png";
import Junior from "../assets/Junior.png";
import Nursery from "../assets/Nursery.png";
import Bunny from "../assets/Bunny.png";
import Senior from "../assets/Senior.png";
import {
  FiHome,
  FiShield,
  FiUsers,
  FiActivity,
  FiUserCheck,
  FiTruck,
  FiSmartphone,
  FiBook,
  FiHeart,
  FiClock,
} from "react-icons/fi";

const OurPrograms = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const programs = [
    {
      title: "Bunny Toddlers ",
      age: "1.8 to 2.5 years",
      shortDescription:
        "Safe, nurturing and stimulating environment with focus on social-emotional skills, motor skills, and language development through play, music, and storytelling",
      image: Bunny,
      icon: "🐰",
      details: {
        description:
          "Our Bunny Play Group program is designed to provide a safe, nurturing, and stimulating environment where young children begin their first journey into structured learning. At this stage, children explore the world around them through play, sensory activities, music, and storytelling.",
        focusAreas: [
          "Social and emotional skills through group interactions",
          "Motor skills with hands-on activities and movement-based play",
          "Language development through rhymes, picture books, and conversations",
          "Cognitive skills through puzzles, colors, shapes, and more",
        ],
        benefits:
          "Our trained educators ensure that every child feels secure and confident while developing a love for learning. The Bunny Play Group experience lays the foundation for lifelong learning by nurturing curiosity, creativity, and independence.",
      },
    },
    {
      title: "Bunny Nursery ",
      age: "2.5 to 3.5 years",
      shortDescription:
        "Play-based + structured learning to build early literacy, communication, motor skills, and social values like empathy and independence..",
      image: Nursery,
      icon: "🍼",
      details: {
        description:
          "Our Bunny Nursery program follows a blended approach, combining the best of play-based learning with structured early education for 'Overall Development' of your child. This ensures that children not only enjoy their learning experience but also build a strong foundation for future academic success.",
        focusAreas: [
          "Explore pre-literacy and numeracy through stories, songs, games, and hands-on activities",
          "Develop communication skills in a language-rich setting with group discussions and role play",
          "Enhance motor skills with creative art, free play, and outdoor physical activities",
          "Learn social values like sharing, empathy, and independence through guided interactions",
        ],
        benefits:
          "Our child-centered curriculum integrates elements of exploration, creativity, and structure, helping each child grow at their own pace while preparing them for the next level of learning and overall development.",
      },
    },
    {
      title: "Bunny Junior",
      age: "4 to 5 years",
      shortDescription:
        "Foundation for formal learning with activities in literacy, numeracy, spoken English, motor and social-emotional skills through joyful discovery",
      image: Junior,
      icon: "🎒",
      details: {
        description:
          "Our BUNNY JUNIOR program is designed for children age 4-5 years to nurture young minds as they take their first steps into formal learning. At this stage, children explore a world filled with colors, sounds, stories, and hands-on experiences that promote curiosity and creativity.",
        focusAreas: [
          "Early literacy and numeracy concepts",
          "Development of spoken English skills",
          "Fine and gross motor development",
          "Social and emotional skills",
          "Communication and self-expression",
          "Sensory and experiential learning",
        ],
        benefits:
          "This program follows a blended approach, combining the best of play-based learning with structured early education for 'Overall Development' of your child. At this vital stage, we believe learning should be fun, engaging, and full of discovery!",
      },
    },
    {
      title: "Bunny Senior",
      age: "5 to 6 years",
      shortDescription:
        "Structured learning with focus on reading, writing, English skills, numeracy, creativity, science, and life values—preparing for primary school",
      image: Senior,
      icon: "📘",
      details: {
        description:
          "Our BUNNY SENIOR program is designed for children aged 5 to 6 years, preparing them for a smooth and confident transition into primary school. At this stage, we focus on building strong foundational skills in literacy, numeracy, language development, and critical thinking through playful, engaging, and hands-on activities for overall development of the child   ",

        deatil:
          "Children in BUNNY SENIOR begin to develop more structured learning habits while still enjoying the joy of discovery through stories, songs, experiments, art, and interactive play. We nurture each child’s curiosity, independence, and love for learning, while also emphasizing social skills, emotional well-being, and classroom etiquette.",
        focusAreas: [
          "Introduction to better reading and writing in English and the mother tongue",
          "Development of better spoken English skills",
          "Number concepts, basic addition and subtraction",
          "Storytelling, rhymes, and vocabulary-building activities",
          "Creative expression through art, music, and role-play",
          "Basic science and environmental awareness",
          "Life skills, moral values, and group activities",
        ],
        benefits:
          "Our experienced educators ensure that every child feels supported and encouraged, setting the stage for academic success and a lifelong love of learning.",
      },
    },
  ];

  return (
    <div className='relative bg-white py-5 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      <div className='absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

      <div className='max-w-7xl mx-auto relative z-10'>
        <section className='bg-whaite shadow-xl mb-4 py-14 px-6 md:px-20 rounded-3xl'>
          <div className='max-w-6xl mx-auto text-center '>
            <h2 className='text-4xl md:text-5xl font-bold text-[#00008B] mb-4'>
              Why the Early{" "}
              <span className='text-[#E91E63] '> Years Matter?</span>
            </h2>
            <img src={whychoose} alt='' />
            <p className='text-lg text-gray-700 mb-2'>
              Did you know that{" "}
              <span className='text-[#E91E63] font-semibold'>
                90% of your child’s brain growth
              </span>{" "}
              happens between the age of 0–6 years?
            </p>
            <p className='text-gray-700 mb-2'>
              These first few years are more than just playtime—they are the
              building blocks for a lifetime of learning. From birth to age six,
              a child’s brain develops rapidly, forming millions of neural
              connections each day. This is when children learn how to think,
              feel, move, and interact with the world around them.
            </p>
            <p className='text-gray-700 mb-2'>
              At{" "}
              <span className='font-semibold text-yellow-700'>
                our preschool
              </span>
              , we understand the power of these early years. That’s why we
              create a warm, stimulating environment filled with rich
              experiences, nurturing relationships, and joyful learning. Every
              story read, every song sung, and every moment of exploration helps
              shape your child’s growing brain.
            </p>
            <p className='text-lg font-semibold text-[#E91E63]  mt-4'>
              Investing in early education is investing in your child’s future.
            </p>
            <p className='text-[#E91E63]  font-bold '>
              Let’s build a strong foundation—together.
            </p>
          </div>
        </section>

        <section className='bg-whaite shadow-xl mb-2 py-14 px-6 md:px-20 rounded-3xl'>
          {/* Section 1: Why the Early Years Matter */}

          {/* Section 2: Importance of Early Childhood Education */}
          <div className='max-w-6xl mx-auto text-left'>
            <h3 className='text-4xl md:text-5xl font-bold  text-[#00008B]  mb-3 text-center'>
              Importance of Early{" "}
              <span className='text-[#E91E63]'>Childhood Education</span>
            </h3>
            <ul className='space-y-3 text-gray-700'>
              <li>
                <span className='font-bold text-[#00008b]'>Social Skills:</span>{" "}
                ECE helps children learn how to interact with peers, share,
                cooperate, and resolve conflicts—skills essential for personal
                and academic success.
              </li>
              <li>
                <span className='font-bold text-[#00008b]'>
                  Emotional Development:
                </span>{" "}
                A nurturing environment builds confidence, independence, and
                emotional resilience in young children, helping them adapt
                better to new situations.
              </li>
              <li>
                <span className='font-bold  text-[#00008b]'>
                  Language and Communication:
                </span>{" "}
                Early exposure to language-rich settings enhances vocabulary,
                comprehension, and communication skills—key components for later
                literacy and academic success.
              </li>
              <li>
                <span className='font-bold text-[#00008b]'>
                  School Readiness:
                </span>{" "}
                Children who attend high-quality early childhood programs are
                better prepared for formal schooling. They demonstrate improved
                attention spans, problem-solving abilities, and academic
                performance.
              </li>
              <li>
                <span className='font-bold text-[#00008b]'>
                  Reduces Learning Gaps:
                </span>{" "}
                ECE helps bridge gaps caused by socio-economic disparities,
                giving all children an equal start in life.
              </li>
              <li>
                <span className='font-bold text-[#00008b]'>
                  Lifelong Benefits:
                </span>{" "}
                Studies show that children with access to quality early
                education are more likely to graduate, secure employment, and
                contribute positively to society.
              </li>
            </ul>

            <p className='text-lg font-medium text-gray-800 mt-6 text-center'>
              In summary, early childhood education is not just preparation for
              primary school—it’s the groundwork for a child’s future learning,
              behavior, and health. Investing in ECE yields high returns for
              individuals, families, and society.
            </p>
          </div>
        </section>

        <section className='bg-whaite shadow-xl mb-4 py-14 px-6 md:px-20 rounded-3xl'>
          <div className='text-center mb-16'>
            <span className='inline-block px-4 py-1 bg-[#EE2341]/10 text-[#EE2341] rounded-full text-sm font-medium mb-3'>
              Our Programs
            </span>
            <h1 className='text-4xl md:text-5xl font-bold text-[#00008B] mb-4'>
              Pre-school{" "}
              <span className='text-[#E91E63]'>Learning Journey</span>
            </h1>
            <div className='w-24 h-1 bg-[#EE2341] mx-auto mb-6'></div>
            <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
              With a nurturing environment and joyful discovery, we help
              children develop essential life skills, confidence, and a lifelong
              love for learning.
            </p>
          </div>
          {/* Program Tabs */}
          <div className='flex flex-wrap justify-center mb-8 gap-2'>
            {programs.map((program, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  activeTab === index
                    ? "bg-[#EE2341] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                {program.title}
              </button>
            ))}
          </div>

          {/* Program Details */}
          <div className='bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 mb-8'>
            <div className='relative h-64 md:h-96 overflow-hidden'>
              <img
                src={programs[activeTab].image}
                alt={`${programs[activeTab].title} program`}
                className='w-full h-full object-bottom'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
              <div className='absolute bottom-0 left-0 p-6 text-white'>
                <h2 className='text-3xl md:text-4xl font-bold mb-1'>
                  {programs[activeTab].title}
                </h2>
                <p className='text-lg md:text-xl font-medium'>
                  {programs[activeTab].age}
                </p>
              </div>
              <div className='absolute top-4 right-4 bg-white/90 p-3 rounded-full text-2xl'>
                {programs[activeTab].icon}
              </div>
            </div>

            <div className='p-6 md:p-8'>
              <div className='mb-6'>
                <h3 className='text-xl font-bold text-[#00008B] mb-3'>
                  Program Overview
                </h3>
                <p className='text-gray-700'>
                  {programs[activeTab].details.description}
                </p>
              </div>
              <div className='mb-2'>
                <p className='className="text-gray-700">'>
                  {programs[activeTab].details.deatil}
                </p>
              </div>

              <div className='mb-6'>
                <h3 className='text-xl font-bold text-[#00008B] mb-3'>
                  Focus Areas
                </h3>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                  {programs[activeTab].details.focusAreas.map((item, index) => (
                    <li key={index} className='flex items-start'>
                      <span className='text-[#EE2341] mr-2'>•</span>
                      <span className='text-gray-700'>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className='text-xl font-bold text-[#00008B] mb-3'>
                  Key Benefits
                </h3>
                <p className='text-gray-700'>
                  {programs[activeTab].details.benefits}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile View - Program Cards */}
      </div>

      {/* jjjdjdj */}
    </div>
  );
};

export default OurPrograms;
