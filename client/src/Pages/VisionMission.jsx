import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VisionMission = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className="relative bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl m mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <span className="inline-block px-4 py-1 bg-blue-50 text-[#E91E63] rounded-full text-sm font-medium mb-3">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#00008B] mb-4">
            Shaping <span className="text-[#E91E63]">Young Minds</span>
          </h2>
          <div className="w-24 h-1 bg-[#E91E63] mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building a nurturing and inspiring future for every child
          </p>
        </div>

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="relative group" data-aos="fade-right">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#EE2341] to-pink-200 rounded-2xl opacity-20 blur-lg transition-all duration-300"></div>
            <div className="relative h-full bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EE2341] to-pink-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EE2341]/10 text-[#EE2341] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00008B]">Our Vision</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  "To create a nurturing and stimulating environment that fosters the holistic development of young minds—cultivating intellectual curiosity, emotional resilience, social skills, and physical well-being. We aim to lay a strong foundation for lifelong learning, creativity, and compassionate citizenship."
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="relative group" data-aos="fade-left">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-[#EE2341] rounded-2xl opacity-20 blur-lg transition-all duration-300"></div>
            <div className="relative h-full bg-white rounded-2xl shadow-xl border border-gray-100">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#EE2341] to-pink-500"></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#EE2341]/10 text-[#EE2341] mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#00008B]">Our Mission</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
"Our mission is to provide a nurturing and stimulating environment where young minds flourish. We aim to foster curiosity, creativity, and a lifelong love for learning through play-based, experiential education. By focusing on social, emotional, cognitive, and physical development, we prepare children to become confident, compassionate, and independent individuals. We are committed to partnering with families and the community to create a strong foundation for lifelong success."                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
