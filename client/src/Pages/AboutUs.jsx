


import React from 'react';
import safety from "../assets/img/safety.jpg"
import { FiStar, FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';
import photo1 from "../assets/slider/photo1.png"

const AboutUs = () => {

  const theme = {
    primaryColor: '#E91E63',
    secondaryColor: '#6C63FF',
    textColor: '#111827',
    accentTextColor: '#6B7280',
    cardBgColor: '#FFFFFF',
  };

  const features = [
    {
      icon: <FiStar className="w-8 h-8" />,
      title: "Holistic Development",
      description: "Our curriculum nurtures cognitive, social, emotional, and physical growth"
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: "Passionate Educators",
      description: "Certified teachers dedicated to early childhood development"
    },
    {
      icon: <FiAward className="w-8 h-8" />,
      title: "Proven Methodology",
      description: "7 years of experience in shaping young minds effectively"
    },
    {
      icon: <FiBookOpen className="w-8 h-8" />,
      title: "Play-Based Learning",
      description: "BunnyLearn curriculum blends play with structured learning"
    }
  ];

  return (
    <div className="bg-">
      {/* Hero Section */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto"> {/* Changed from 7xl to 5xl */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative z-10">
              <h1 className="text-2xl md:text-4xl font-bold  text-center mb-6 text-[#00008b]">
                Welcome to <span style={{ color: theme.primaryColor }}>BunnyTots</span> International Preschool
              </h1>
              <p className="text-lg mb-4" style={{ color: theme.accentTextColor }}>
                Where young minds blossom and every child shines!
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-6 py-2 rounded-full font-bold text-white transition-all hover:shadow-lg" 
                  style={{ backgroundColor: theme.primaryColor }}>
                  Enquire Now
                </button>
                
              </div>
            </div>
            <div className="relative">
              {/* <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="Children learning" 
                  className="w-full h-auto object-cover"
                />
              </div> */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full" 
                style={{ backgroundColor: theme.secondaryColor, opacity: 0.2 }}></div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full" 
                style={{ backgroundColor: theme.primaryColor, opacity: 0.2 }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className=" px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center"> {/* Reduced width */}
          <div className=''>
          <img src={photo1} alt="" className='' />
          </div>
          <h2 className="text-4xl font-bold mb-2 mt-4 text-[#E91E63]" >
            Our Philosophy
          </h2>
          <div className="relative">
            <blockquote className="text-xl leading-relaxed mb-8" style={{ color: theme.accentTextColor }}>
              "We believe early childhood education is not just about academics but about fostering creativity, curiosity, and confidence."
            </blockquote>
            <div className="absolute -top-6 -left-6 text-6xl opacity-10" style={{ color: theme.primaryColor }}>"</div>
            <div className="absolute -bottom-6 -right-6 text-6xl opacity-10" style={{ color: theme.primaryColor }}>"</div>
          </div>
          <p className="text-md mb-8" style={{ color: theme.accentTextColor }}>
            Our BunnyLearn curriculum blends play-based learning with structured activities, ensuring holistic development in a safe and stimulating environment.
          </p>
          <div className="w-20 h-1 mx-auto" style={{ backgroundColor: theme.primaryColor }}></div>
        </div>
      </section>
    

      {/* Features Section */}
      <section className="py-2 px-4 sm:px-6 lg:px-8 bg-white ">
        <div className="max-w-5xl mx-auto "> {/* Reduced width */}
        <img className='mb-4' src={safety} alt="" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Adjusted gap */}
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-4" 
                  style={{ backgroundColor: `${theme.primaryColor}20`, color: theme.primaryColor }}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: theme.textColor }}>{feature.title}</h3>
                <p className="text-sm " style={{ color: theme.accentTextColor }}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto"> {/* Reduced width */}
          <div className="grid md:grid-cols-2 gap-8 items-center"> {/* Reduced gap */}
            <div className="order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4" style={{ color: theme.textColor }}>
                Our Story
              </h2>
              <div className="space-y-4 text-justify text-sm" style={{ color: theme.accentTextColor }}>
                <p>
                  Founded 7 years ago, BunnyTots International Preschool began with a simple mission: to create a nurturing space where children could develop a lifelong love for learning.
                </p>
                <p>
                  What started as a small preschool has grown into a respected institution known for its child-centric approach and innovative curriculum.
                </p>
                <p>
                  Today, we take pride in our modern infrastructure, passionate educators, and the warm, welcoming atmosphere that makes learning joyful for every child.
                </p>
              </div>
              <div className="mt-6 flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" 
                  style={{ backgroundColor: theme.primaryColor }}>
                  <FiUsers className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-sm" style={{ color: theme.textColor }}></p>
                  <p className="text-xs" style={{ color: theme.accentTextColor }}>Numerous Happy Kids</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 relative">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1604881991720-f91add269bed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                  alt="BunnyTots classroom" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-lg bg-yellow-100 opacity-70 -z-10"></div>
              <div className="absolute -top-3 -right-3 w-16 h-16 rounded-lg bg-blue-100 opacity-70 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-4 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: theme.primaryColor }}>
        <div className="max-w-3xl mx-auto text-center text-white"> {/* Reduced width */}
          <h2 className="text-2xl font-bold mb-4">Join Us in Shaping Bright Futures</h2>
          <p className="text-lg mb-6 opacity-90">
            One little learner at a time!
          </p>
          <button className="px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg bg-white" 
            style={{ color: theme.primaryColor }}>
            Schedule a Visit
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
