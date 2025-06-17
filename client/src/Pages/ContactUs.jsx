import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";
import axios from "../config/axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(ShowLoading());
    try {
      await axios.post("/api/contact", formData);
      toast.success("Sent Successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
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
    <div className='relative bg-white py-20 px-6 md:px-12 lg:px-24 overflow-hidden'>
      {/* Decorative elements - matching your theme */}
      <div className='absolute top-0 left-0 w-32 h-32 bg-[#EE2341]/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
      <div className='absolute bottom-0 right-0 w-48 h-48 bg-[#EE2341]/5 rounded-full translate-x-1/2 translate-y-1/2'></div>

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Section header - consistent with your design */}
        <div className='text-center mb-16'>
          <span className='inline-block px-4 py-1 bg-[#EE2341]/10 text-[#EE2341] rounded-full text-sm font-medium mb-3'>
            Get In Touch
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-[#00008B] mb-4'>
            Contact <span className='text-[#E91E63]'>Our Team</span>
          </h2>
          <div className='w-24 h-1 bg-[#EE2341] mx-auto mb-6'></div>
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Have questions about our programs or franchise opportunities? We're
            here to help!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-[#EE2341]/10 to-pink-500/10 rounded-2xl opacity-30 blur transition-all duration-300'></div>
            <div className='relative bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Send Us a Message
              </h3>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <label
                      htmlFor='name'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      value={formData.name}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
                      placeholder='Your name'
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-gray-700 mb-1'
                    >
                      Email Address
                    </label>
                    <input
                      type='email'
                      id='email'
                      name='email'
                      value={formData.email}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
                      placeholder='your@email.com'
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Phone Number
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
                    placeholder='+91 8435470955 '
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Subject
                  </label>
                  <select
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
                  >
                    <option value=''>Select a topic</option>
                    <option value='admission'>Admission Inquiry</option>
                    <option value='franchise'>Franchise Opportunity</option>
                    <option value='programs'>Programs Information</option>
                    <option value='other'>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Your Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    rows='4'
                    value={formData.message}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EE2341] focus:border-transparent'
                    placeholder='Type your message here...'
                  ></textarea>
                </div>

                <button
                  type='submit'
                  className='w-full px-6 py-5 bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]'
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Contact Information
              </h3>

              <div className='space-y-6'>
                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-[#EE2341]/10 p-3 rounded-full text-[#EE2341] mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900'>
                      Phone
                    </h4>
                    <p className='text-gray-600'>+91 8435470955</p>
                    {/* <p className="text-gray-600">+91 1234567890</p> */}
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-[#EE2341]/10 p-3 rounded-full text-[#EE2341] mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900'>
                      Email
                    </h4>
                    <p className='text-gray-600'>info@bunnytots.example.com</p>
                    <p className='text-gray-600'>
                      support@bunnytots.example.com
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex-shrink-0 bg-[#EE2341]/10 p-3 rounded-full text-[#EE2341] mr-4'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-semibold text-gray-900'>
                      Head Office
                    </h4>
                    <p className='text-gray-600'>
                      {" "}
                      Heaven's Life, Katara Hills .
                    </p>
                    {/* <p className="text-gray-600">123 Education Street, Knowledge City</p> */}
                    <p className='text-gray-600'>Bhopal 462043</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className='bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-100 p-8'>
              <h3 className='text-2xl font-bold text-gray-900 mb-6'>
                Business Hours
              </h3>

              <div className='space-'>
                <div className='flex justify-between'>
                  <span className='text-gray-700 font-medium'>
                    Monday - Friday
                  </span>
                  <span className='text-gray-600'>9:00 AM to 6:00 PM</span>
                </div>
                <div className='flex justify-between'>
                  <span className='text-gray-700 font-medium '>Saturday</span>
                  <span className='text-gray-600'>9:00 AM to 2:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
