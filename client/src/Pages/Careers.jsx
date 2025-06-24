import React, { useState } from "react";

import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";
import axios from "../config/axios";

import carers from "../assets/carers.png";

import {
  FaChalkboardTeacher,
  FaChild,
  FaUsers,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaHandsHelping,
} from "react-icons/fa";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    city: "",
    location: "",
    experience: "",
    qualification: "",
    resume: null,
    message: "",
  });

  const positions = [
    {
      id: 1,
      title: "Preschool Teacher",
      branches: "Multiple branches available",
      description:
        "Lead classroom activities and create engaging learning experiences for children aged 2-6 years.",
    },
    {
      id: 2,
      title: "Assistant Teacher",
      branches: "Multiple branches available",
      description:
        "Support lead teachers in implementing our curriculum and caring for young learners.",
    },
    {
      id: 3,
      title: "Center Head",
      branches: "Selected locations",
      description: "Oversee preschool operations and lead a team of educators.",
    },
    {
      id: 4,
      title: "Caregiver/Support Staff",
      branches: "Multiple branches available",
      description:
        "Assist in daily activities and provide nurturing care to children.",
    },
  ];

  const perks = [
    {
      icon: <FaMapMarkerAlt className='text-3xl text-[#E91E63]' />,
      title: "Multi-Branch Network",
      description: "Opportunities across various locations",
    },
    {
      icon: <FaGraduationCap className='text-3xl text-[#E91E63]' />,
      title: "Professional Development",
      description: "Ongoing training and mentorship",
    },
    {
      icon: <FaUsers className='text-3xl text-[#E91E63]' />,
      title: "Positive Work Culture",
      description: "Respect and collaboration",
    },
    {
      icon: <FaHandsHelping className='text-3xl text-[#E91E63]' />,
      title: "Impactful Work",
      description: "Shape children's first learning experiences",
    },
  ];

  const cities = [
    "Bhopal",
    "Indore",
    "Raipur",
    "New Delhi",
    "Bombay",
    "Bangalore",
    "Jaipur",
    "Chennai",
    "Agra",
    "Dehradun",
    "Shimla",
    "Mysore",
    "Cochin",
  ];

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(ShowLoading());

    const formDataToSend = new FormData();

    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      await axios.post("/api/careers", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Sent Successfully");
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        position: "",
        city: "",
        location: "",
        experience: "",
        qualification: "",
        resume: null,
        message: "",
      });
    } catch (error) {
      console.log(error);

      toast.error("Failed");
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div className='relative  bg-white overflow-hidden'>
      {/* Hero Banner */}
      <div className='relative h-96 w-full'>
        <img
          src={carers}
          alt='Teacher with children'
          className='w-full h-full'
        />
        <div className='absolute inset-0 bg-black/40 flex items-center justify-center'>
          <div className='text-center relative mt-40'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>
              Careers at BunnyTots
            </h1>
            <p className='text-xl text-white max-w-2xl mx-auto'>
              Shape Young Minds, Build Bright Futures
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className='relative py-16 px-4 sm:px-6 lg:px-8'>
        {/* Decorative elements */}
        <div className='absolute top-0 left-0 w-32 h-32 bg-[#E91E63]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
        <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#E91E63]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

        <div className='max-w-7xl mx-auto relative z-10'>
          {/* Introduction */}
          <div className='text-center mb-16'>
            <p className='text-lg text-gray-600 max-w-4xl mx-auto'>
              At BunnyTots, we're on a mission to nurture the early years of
              childhood through love, learning, and innovation. With multiple
              branches across the country, we are always looking for dedicated
              educators and support staff to join our passionate team.
            </p>
            <p className='text-lg text-gray-600 max-w-4xl mx-auto mt-4'>
              Whether you're an experienced teacher or just beginning your
              journey in early childhood education, you'll find a nurturing
              environment and opportunities to grow with us.
            </p>
          </div>

          <div className='p-6 max-w-4xl mx-auto'>
            <h2 className='text-3xl text-center md:text-4xl font-bold text-[#00008B] mb-8'>
              Preschool Teacher{" "}
              <span className='text-[#E91E63]'>Selection Criteria</span>{" "}
              Framework
            </h2>

            <div className='space-y-4 bg-white rounded-lg p-6 shadow-sm'>
              <div className='border-l-4 border-blue-500 pl-4 py-2 hover:bg-blue-50 transition-colors'>
                <h3 className='font-semibold text-lg text-gray-800'>
                  1. Personal Traits & Disposition (Soft Skills)
                </h3>
              </div>

              <div className='border-l-4 border-pink-500 pl-4 py-2 hover:bg-pink-50 transition-colors'>
                <h3 className='font-semibold text-lg text-gray-800'>
                  2. Communication Skills
                </h3>
              </div>

              <div className='border-l-4 border-purple-500 pl-4 py-2 hover:bg-purple-50 transition-colors'>
                <h3 className='font-semibold text-lg text-gray-800'>
                  3. Teaching Skills & Child Development Knowledge
                </h3>
              </div>

              <div className='border-l-4 border-green-500 pl-4 py-2 hover:bg-green-50 transition-colors'>
                <h3 className='font-semibold text-lg text-gray-800'>
                  4. Professionalism & Ethics
                </h3>
              </div>

              <div className='border-l-4 border-orange-500 pl-4 py-2 hover:bg-orange-50 transition-colors'>
                <h3 className='font-semibold text-lg text-gray-800'>
                  5. Qualifications & Experience
                </h3>
              </div>
            </div>
          </div>

          {/* Why Join Us */}
          <div className='text-center mb-16'>
            <span className='inline-block px-4 py-1 bg-[#E91E63]/10 text-[#E91E63] rounded-full text-sm font-medium mb-3'>
              Why Join Us
            </span>
            <h2 className='text-3xl md:text-4xl font-bold text-[#00008B] mb-4'>
              Grow With <span className='text-[#E91E63]'>BunnyTots</span>
            </h2>
            <div className='w-24 h-1 bg-[#E91E63] mx-auto mb-6'></div>
          </div>

          {/* Perks Grid */}
          <div className='grid grid-cols-2 md:grid-cols-2  lg:grid-cols-4 gap-8 mb-14'>
            {perks.map((perk, index) => (
              <div
                key={index}
                className='bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100'
              >
                <div className='flex justify-center mb-4'>{perk.icon}</div>
                <h3 className='md:text-xl  text-sm font-bold text-center mb-3'>
                  {perk.title}
                </h3>
                <p className='text-gray-600 text-[12px] text-center items-center '>
                  {perk.description}
                </p>
              </div>
            ))}
          </div>

          {/* Current Openings */}

          <h1 className='text-3xl'></h1>
          <p></p>

          {/* Application Form */}
          <div className='bg-white rounded-2xl p-8 md:p-12 mb-'>
            <div className='text-center mb-8'>
              <h2 className='text-2xl md:text-3xl font-bold text-[#00008B] mb-2'>
                Available Positions (Multiple Branches)
              </h2>
              <p className='text-gray-600'>
                {" "}
                Applicants must be polite and passionate about working with
                young children and committed to continuous improvement .
              </p>
            </div>

            <form
              className='max-w-5xl md:max-w-3xl  mx-auto border border-[#00008B] rounded-2xl p-6 md:p-8'
              onSubmit={handleSubmit}
            >
              <div className=' grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div>
                  <label
                    className='block text-gray-700 mb-2'
                    htmlFor='fullName'
                  >
                    Full Name:
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    value={formData.fullName}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    placeholder='Your full name'
                    required
                  />
                </div>

                <div>
                  <label className='block text-gray-700 mb-2' htmlFor='email'>
                    Email Address:
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    placeholder='careers@bunnytotsindia.com'
                    required
                  />
                </div>

                <div>
                  <label className='block text-gray-700 mb-2' htmlFor='phone'>
                    Phone Number:
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    placeholder='Your phone number'
                    required
                  />
                </div>

                <div>
                  <label
                    className='block text-gray-700 mb-2'
                    htmlFor='position'
                  >
                    Position Applying For:
                  </label>
                  <select
                    id='position'
                    value={formData.position}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    required
                  >
                    <option value=''>Select a position</option>
                    {positions.map((job) => (
                      <option key={job.id} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className='block text-gray-700 mb-2' htmlFor='city'>
                    Preferred City:
                  </label>
                  <select
                    id='city'
                    value={formData.city}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    required
                  >
                    <option value=''>Select a city</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    className='block text-gray-700 mb-2'
                    htmlFor='location'
                  >
                    Preferred Location:
                  </label>
                  <input
                    type='text'
                    id='location'
                    value={formData.location}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    placeholder='Specific area or branch'
                  />
                </div>

                <div>
                  <label
                    className='block text-gray-700 mb-2'
                    htmlFor='experience'
                  >
                    Total Experience (in years):
                  </label>
                  <input
                    type='number'
                    id='experience'
                    value={formData.experience}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    placeholder='Years of experience'
                    required
                  />
                </div>

                <div>
                  <label
                    className='block text-gray-700 mb-2'
                    htmlFor='qualification'
                  >
                    Highest Qualification:
                  </label>
                  <input
                    type='text'
                    id='qualification'
                    value={formData.qualification}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                    placeholder='Your highest degree'
                    required
                  />
                </div>
              </div>

              <div className='mt-6'>
                <label className='block text-gray-700 mb-2' htmlFor='resume'>
                  Upload Your Resume (PDF/DOC):
                </label>
                <input
                  type='file'
                  id='resume'
                  onChange={handleFileChange}
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                  accept='.pdf,.doc,.docx'
                  required
                />
              </div>

              <div className='mt-6'>
                <label className='block text-gray-700 mb-2' htmlFor='message'>
                  Message (Optional):
                </label>
                <textarea
                  id='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows='4'
                  className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E91E63]'
                  placeholder="Any additional information you'd like to share"
                ></textarea>
              </div>

              <div className='text-center mt-8'>
                <button
                  type='submit'
                  className='px-8 py-3 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-semibold rounded-full hover:from-[#1e3a8a] hover:to-[#0f172a] transition-colors shadow-md hover:shadow-lg'
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className='text-center bg-white p-8 rounded-2xl shadow-md border border-gray-100'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#00008B] mb-4'>
              Contact Us
            </h2>
            <p className='text-gray-600 mb-4'>
              For any queries, reach out to our HR team:
            </p>
            <p className='text-lg text-[#E91E63] font-medium'>
              Email: careers@bunnytotsindia.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
