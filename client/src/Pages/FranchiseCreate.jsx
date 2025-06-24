// import FranchiseTools from './FranchiseTools';
import BunnyWoodlandProducts from "./BunnyWoodlandProducts";
import React, { useState } from "react";
import onelick from "../assets/onelick.png";
import {
  FaRocket,
  FaHistory,
  FaChild,
  FaMapMarkedAlt,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

import {
  FiUser,
  FiMail,
  FiPhone,
  FiEdit,
  FiSmile,
  FiBook,
  FiHeart,
} from "react-icons/fi";
import axios from "../config/axios";
import toast from "react-hot-toast";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";
import { useDispatch } from "react-redux";

const theme = {
  primaryColor: "#EE2341",
  secondaryColor: "#6C63FF",
  textColor: "#E91E63",
  accentTextColor: "#6B7280",
};

const stateCityData = {
  "Andhra Pradesh": [
    "Visakhapatnam",
    "Vijayawada",
    "Guntur",
    "Tirupati",
    "Nellore",
    "Kurnool",
    "Rajahmundry",
  ],
  "Arunachal Pradesh": ["Itanagar", "Pasighat", "Naharlagun", "Ziro", "Tezu"],
  Assam: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Tezpur", "Nagaon"],
  Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga"],
  Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba", "Jagdalpur"],
  Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"],
  Gujarat: [
    "Ahmedabad",
    "Surat",
    "Vadodara",
    "Rajkot",
    "Bhavnagar",
    "Gandhinagar",
  ],
  Haryana: ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Hisar", "Karnal"],
  "Himachal Pradesh": [
    "Shimla",
    "Dharamshala",
    "Mandi",
    "Solan",
    "Kullu",
    "Manali",
  ],
  Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"],
  Karnataka: [
    "Bengaluru",
    "Mysore",
    "Mangalore",
    "Hubli",
    "Belgaum",
    "Shimoga",
  ],
  Kerala: [
    "Thiruvananthapuram",
    "Kochi",
    "Kozhikode",
    "Alappuzha",
    "Thrissur",
    "Kollam",
  ],
  "Madhya Pradesh": [
    "Bhopal",
    "Indore",
    "Jabalpur",
    "Gwalior",
    "Ujjain",
    " Satna",
    "Vidisha",
  ],
  Maharashtra: [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik",
    "Thane",
    "Aurangabad",
    "Solapur",
  ],
  Manipur: ["Imphal", "Thoubal", "Churachandpur", "Ukhrul"],
  Meghalaya: ["Shillong", "Tura", "Nongstoin", "Jowai"],
  Mizoram: ["Aizawl", "Lunglei", "Champhai", "Serchhip"],
  Nagaland: ["Kohima", "Dimapur", "Mokokchung", "Wokha"],
  Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur"],
  Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala"],
  Rajasthan: ["Jaipur", "Udaipur", "Kota", "Ajmer", "Jodhpur", "Bikaner"],
  Sikkim: ["Gangtok", "Namchi", "Geyzing", "Rangpo"],
  "Tamil Nadu": [
    "Chennai",
    "Coimbatore",
    "Madurai",
    "Tiruchirappalli",
    "Salem",
    "Erode",
  ],
  Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Khammam"],
  Tripura: ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar"],
  "Uttar Pradesh": [
    "Lucknow",
    "Kanpur",
    "Varanasi",
    "Agra",
    "Noida",
    "Ghaziabad",
    "Allahabad",
  ],
  Uttarakhand: ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Mussoorie"],
  "West Bengal": [
    "Kolkata",
    "Durgapur",
    "Siliguri",
    "Howrah",
    "Asansol",
    "Darjeeling",
  ],
  "Delhi NCR": ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"],
};

const FranchiseCreate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const dispatch = useDispatch();

  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  // Cities based on selected state or empty array if no state selected
  const cities = selectedState ? stateCityData[selectedState] || [] : [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity(""); // Reset city when state changes
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(ShowLoading());

    const final = {
      ...formData,
      state: selectedState,
      city: selectedCity,
      subject: "Franchise Opportunity",
    };

    try {
      await axios.post("/api/contact/franchise", final);
      toast.success("Sent Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
      });
      setSelectedState("");
      setSelectedCity("");
    } catch (error) {
      console.log(error);

      toast.error("Failed");
    } finally {
      dispatch(HideLoading());
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({
  //     ...formData,
  //     state: selectedState,
  //     city: selectedCity,
  //   });

  //   // Reset form
  //   setFormData({
  //     name: "",
  //     email: "",
  //     phone: "",
  //   });
  //   setSelectedState("");
  //   setSelectedCity("");
  // };

  return (
    <div className='max-w-8xl mx-auto px-4 py-12   bg-gray0'>
      <div className='max-w-6xl  flex mx-auto px-2 py-12'>
        <div className='flex flex-col md:flex-row'>
          {/* Text Section - Full width on mobile, centered on desktop */}
          <div className='md:w-1/2 w-full p-2 relative   top-[-40px] '>
            <h2 className='text-[20px] md:text-3xl  font-bold top-28  mb:top-[-10px] md:relative  text-[#00008B]'>
              Establish a partnership with a premier
              <span className='text-[#E91E63]'>
                {" "}
                chain of preschools in India.
              </span>
              <br />
              <span className='text-gray-600 text-2xl font-light '>
                {" "}
                Become a successful business leader
              </span>
            </h2>
          </div>

          {/* Form Card - Full width on both mobile and desktop */}
          <div className='md:w-[450px] w-full  rounded-xl shadow-lg overflow-hidden'>
            <div
              className='bg-pink-50 px-6 py-2 border-b   '
              style={{ borderColor: theme.primaryColor }}
            >
              <h3 className='font-bold flex items-center'>
                <FiEdit
                  className='mr-2'
                  style={{ color: theme.primaryColor }}
                />
                <span className='text-[#00008B]'>Franchise Opportunity</span>
              </h3>
            </div>

            <div className='p-6'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-6 mb-8'>
                  {/* Parent Information */}
                  <div>
                    <h4 className='text-lg font-semibold whitespace-nowrap mb-4 flex items-center'>
                      {/* <FiUser className="mr-2 " /> */}
                      Your Information
                    </h4>

                    <div className='space-y-4'>
                      <div>
                        <label className='block mb-1 text-sm'>Full Name*</label>
                        <input
                          type='text'
                          name='name'
                          value={formData.name}
                          onChange={handleChange}
                          className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                          style={{ borderColor: theme.accentTextColor }}
                          placeholder='Your Full Name'
                          required
                        />
                      </div>

                      <div>
                        <label className='block mb-1 text-sm'>Email Id*</label>
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <FiMail className='text-gray-400' />
                          </div>
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full pl-10 px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                            style={{ borderColor: theme.accentTextColor }}
                            placeholder='franchise@bunnytotsindia.com'
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className='block mb-1 text-sm'>
                          Mobile Number*
                        </label>
                        <div className='relative'>
                          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                            <FiPhone className='text-gray-400' />
                          </div>
                          <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleChange}
                            className='w-full pl-10 px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                            placeholder='+91 8435470955 '
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location Preference */}
                  <div>
                    <div className='space-y-4'>
                      <div className='mt-0 md:mt-11'>
                        <label className='block mb-1 relative text-sm'>
                          Preferred State*
                        </label>
                        <select
                          className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                          style={{ borderColor: theme.accentTextColor }}
                          required
                          value={selectedState}
                          onChange={handleStateChange}
                        >
                          <option value=''>Select State</option>
                          {Object.keys(stateCityData).map((state) => (
                            <option key={state} value={state}>
                              {state}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className='block mb-1 text-sm'>
                          Preferred City*
                        </label>
                        <select
                          className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                          style={{ borderColor: theme.accentTextColor }}
                          required
                          disabled={!selectedState}
                          value={selectedCity}
                          onChange={handleCityChange}
                        >
                          <option value=''>
                            {selectedState
                              ? "Select City"
                              : "Select State first"}
                          </option>
                          {cities.map((city, i) => (
                            <option key={i} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  className='w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto p-6 bg-white  shadow-md'>
        <h1 className='text-3xl font-bold text-center mb-8 text-[#00008B] '>
          Everything You Need to{" "}
          <span className='text-[#E91E63]'>Establish a Successful</span>{" "}
          Preschool Franchise
        </h1>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-10'>
          <div className='bg-blue-50 p-6 rounded-lg text-center'>
            <p className='text-gray-600 mb-2'>An investment of</p>
            <p className='text-2xl font-bold text-[#E91E63]'>₹ 5-10 lakh*</p>
          </div>

          <div className='bg-blue-50 p-6 rounded-lg text-center'>
            <p className='text-gray-600 mb-2'>Long-term</p>
            <p className='text-2xl font-bold text-[#E91E63]'>
              High Return on Investment
            </p>
          </div>

          <div className='bg-blue-50 p-6 rounded-lg text-center'>
            <p className='text-gray-600 mb-2'>Minimum space required</p>
            <p className='text-2xl font-bold text-[#E91E63]'>1200 sq ft</p>
          </div>
        </div>

        <h2 className='text-2xl font-bold text-center mb-4 text-[#00008B] '>
          Why Choose <span className='text-[#E91E63]'> BunnyTots?</span>
        </h2>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-1'>
          <div className='bg-[#EFF6FF] p-6 rounded-lg text-center '>
            <FaRocket className='text-4xl text-[#E91E63] mb-2 mx-auto' />
            <p className='text-gray-600'>Fastest Growing Preschool</p>
          </div>

          <div className='bg-[#EFF6FF] p-8 rounded-lg text-center'>
            {/* <FaHistory className="text-4xl text-[#E91E63] mb-2 mx-auto" /> */}
            <p className='text-xl font-bold text-[#E91E63]'>7+ years</p>
            <p className='text-gray-600'>A proven track record spanning </p>
          </div>

          <div className='bg-[#EFF6FF] p-4 rounded-lg text-center flex flex-col items-center'>
            <FaChild className='text-4xl text-[#E91E63] mb-/2' />
            <p className='text-gray-600 text-center'>
              Thousands of young minds nurtured with care and dedication.
            </p>
          </div>

          <div className='bg-[#EFF6FF] p-6 rounded-lg text-center'>
            {/* <FaMapMarkedAlt className="text-2xl text-[#E91E63] mb-2 mx-auto" /> */}
            <p className='text-xl font-bold text-[#E91E63]'>2000+</p>
            <p className='text-gray-600'>
              Rapidly expanding locations nationwide
            </p>
          </div>

          <div className='bg-[#EFF6FF] p-8 flex flex-col items-center rounded-lg text-center'>
            <FaGlobe className='text-2xl text-[#E91E63] mb-2' />
            <p className='text-gray-600'>International Presence</p>
          </div>

          <div className='bg-[#EFF6FF] p-6 rounded-lg text-center'>
            {/* <FaClock className="text-2xl text-[#E91E63] mb-2 mx-auto" /> */}
            <p className='text-xl font-bold text-[#E91E63]'>61320+ hrs</p>
            <p className='text-gray-600'>
              of preschools education for successful students
            </p>
          </div>
        </div>

        {/* All-round Support with EDGE360 section */}
        <div className='mt-12'>
          <h2 className='text-2xl font-bold text-center mb-8 text-[#00008B]'>
            One Click to Success <br />
            <span className='text-[#E91E63]'>
              {" "}
              --Get Full Support with{" "}
            </span>{" "}
            BunnyTots Franchise
          </h2>
          <img src={onelick} alt='' className='mb-4' />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                Preschool infrastructure & Ambience Design{" "}
              </h3>
              <p className='text-gray-600'>
                Complete guidance for setting up your preschool
              </p>
            </div>

            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                {" "}
                Elegant Preschool Furniture and Durable Equipment{" "}
              </h3>
              <p className='text-gray-600'>
                Full guidance for setting up your own Preschool
              </p>
            </div>

            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                {" "}
                Researched Curriculum{" "}
              </h3>
              <p className='text-gray-600'>
                A systematic method of education based upon careful scientific
                study
              </p>
            </div>

            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                Educational Aids
              </h3>
              <p className='text-gray-600'>
                Productive tools for better and constant learning
              </p>
            </div>

            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                Rigorous Teacher Training & Skill Development{" "}
              </h3>
              <p className='text-gray-600'>
                Professional Personality Development
              </p>
            </div>
            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                Business Development and Operations Support{" "}
              </h3>
              <p className='text-gray-600'>
                Tools for effective Preschool operation
              </p>
            </div>

            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                Admission Management Guidance
              </h3>
              <p className='text-gray-600'>Guidance for students Admission</p>
            </div>
            <div className='bg-[#EFF6FF] p-5 rounded-lg border-l-4 border-[#E91E63]'>
              <h3 className='font-bold text-lg text-[#00008B] mb-2'>
                Teachers & Students portal{" "}
              </h3>
              <p className='text-gray-600'>
                Digital tools for best "Early Childhood Education"
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <SchoolWoodenRacks productId="BW-SRAST" /> */}

      <BunnyWoodlandProducts />
    </div>
  );
};

export default FranchiseCreate;
