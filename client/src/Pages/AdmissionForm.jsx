import React, { useState } from "react";
import {
  FiUser,
  FiCalendar,
  FiMail,
  FiPhone,
  FiHome,
  FiEdit,
} from "react-icons/fi";
import axiosInstance from "../config/axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";

import admission from "../assets/admission.png";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    dob: "",
    program: "",
    address: "",
    subject: "Admission Form Submission", // hardcoded subject
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(ShowLoading());
      await axiosInstance.post("/api/contact/admission", formData);
      toast.success("Sent Successfully");
      setFormData({
        parentName: "",
        email: "",
        phone: "",
        childName: "",
        dob: "",
        program: "",
        address: "",
        subject: "",
      });
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    } finally {
      dispatch(HideLoading());
    }
  };

  const theme = {
    primaryColor: "#EE2341",
    secondaryColor: "#6C63FF",
    textColor: "#111827",
    accentTextColor: "#6B7280",
  };

  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      {/* Form Header */}
      <div className='text-center mb-10'>
        <h2 className='text-4xl font-bold mb-3 text-[#00008B]'>
          Join the <span className='text-[#E91E63]'>BunnyTots</span> Family
        </h2>
        <p className='text-lg' style={{ color: theme.accentTextColor }}>
          Embark on your child's progressive learning journey with us, where a
          strong foundation and holistic development are our priority.
        </p>
      </div>
      <img src={admission} alt='' />
      {/* Progress Steps */}
      <div className='flex justify-between mb-10 relative'>
        <div className='absolute top-3 left-0 right-0 h-1 bg-gray-200 -z-10'></div>
        {[1, 2, 3].map((step) => (
          <div key={step} className='flex flex-col items-center'>
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                step === 1 ? "bg-pink-100" : "bg-gray-100"
              }`}
              style={{
                color: step === 1 ? theme.primaryColor : theme.accentTextColor,
              }}
            >
              {step}
            </div>
            <span
              className='text-sm'
              style={{
                color: step === 1 ? theme.textColor : theme.accentTextColor,
              }}
            >
              {step === 1
                ? "Your Details"
                : step === 2
                ? "Child Info"
                : "Complete"}
            </span>
          </div>
        ))}
      </div>

      {/* Form Container */}
      <div className='bg-white rounded-xl shadow-lg overflow-hidden'>
        {/* Form Header */}
        <div
          className='bg-pink-50 px-6 py-4 border-b'
          style={{ borderColor: theme.primaryColor }}
        >
          <h3 className='font-bold flex items-center'>
            <FiEdit className='mr-2' style={{ color: theme.primaryColor }} />
            <span style={{ color: theme.textColor }}>Admission Form</span>
          </h3>
        </div>

        {/* Form Body */}
        <div className='p-6'>
          <form onSubmit={handleSubmit}>
            <div className='grid md:grid-cols-2 gap-6 mb-8'>
              {/* Parent Information */}
              <div>
                <h4
                  className='text-lg font-semibold mb-4 flex items-center'
                  style={{ color: theme.textColor }}
                >
                  <FiUser className='mr-2' /> Parent Information
                </h4>

                <div className='space-y-4'>
                  <div>
                    <label
                      className='block mb-1 text-sm'
                      style={{ color: theme.textColor }}
                    >
                      Full Name*
                    </label>
                    <input
                      type='text'
                      name='parentName'
                      value={formData.parentName}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                      style={{ borderColor: theme.accentTextColor }}
                      placeholder='Parent/Guardian name'
                      required
                    />
                  </div>

                  <div>
                    <label
                      className='block mb-1 text-sm'
                      style={{ color: theme.textColor }}
                    >
                      Email*
                    </label>
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
                        placeholder='admission@bunnytotsindia.com'
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className='block mb-1 text-sm'
                      style={{ color: theme.textColor }}
                    >
                      Phone Number*
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
                        style={{ borderColor: theme.accentTextColor }}
                        placeholder='+91 8435470955'
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Child Information */}
              <div>
                <h4
                  className='text-lg font-semibold mb-4 flex items-center'
                  style={{ color: theme.textColor }}
                >
                  <FiUser className='mr-2' /> Child Information
                </h4>

                <div className='space-y-4'>
                  <div>
                    <label
                      className='block mb-1 text-sm'
                      style={{ color: theme.textColor }}
                    >
                      Child's Name*
                    </label>
                    <input
                      type='text'
                      name='childName'
                      value={formData.childName}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                      style={{ borderColor: theme.accentTextColor }}
                      placeholder="Child's full name"
                      required
                    />
                  </div>

                  <div>
                    <label
                      className='block mb-1 text-sm'
                      style={{ color: theme.textColor }}
                    >
                      Date of Birth*
                    </label>
                    <div className='relative'>
                      <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                        <FiCalendar className='text-gray-400' />
                      </div>
                      <input
                        type='date'
                        name='dob'
                        value={formData.dob}
                        onChange={handleChange}
                        className='w-full pl-10 px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                        style={{ borderColor: theme.accentTextColor }}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className='block mb-1 text-sm'
                      style={{ color: theme.textColor }}
                    >
                      Program Interested*
                    </label>
                    <select
                      name='program'
                      value={formData.program}
                      onChange={handleChange}
                      className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                      style={{ borderColor: theme.accentTextColor }}
                      required
                    >
                      <option value=''>Select program</option>
                      <option value='playgroup'>Playgroup (1.5–2.5 yrs)</option>
                      <option value='nursery'>Nursery (2.5–3.5 yrs)</option>
                      <option value='junior-kg'>Junior KG (3.5–4.5 yrs)</option>
                      <option value='senior-kg'>Senior KG (4.5–5.5 yrs)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className='mb-8'>
              <h4
                className='text-lg font-semibold mb-4 flex items-center'
                style={{ color: theme.textColor }}
              >
                <FiHome className='mr-2' /> Address Information
              </h4>
              <div className='space-y-4'>
                <div>
                  <label
                    className='block mb-1 text-sm'
                    style={{ color: theme.textColor }}
                  >
                    Full Address*
                  </label>
                  <textarea
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                    className='w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none'
                    style={{ borderColor: theme.accentTextColor }}
                    rows='3'
                    placeholder='Street address, city, PIN code'
                    required
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className='text-center'>
              <button
                type='submit'
                className='px-8 py-3 rounded-full font-bold text-white transition-all hover:shadow-lg'
                style={{ backgroundColor: theme.primaryColor }}
              >
                Submit Application
              </button>
              <p
                className='mt-3 text-sm'
                style={{ color: theme.accentTextColor }}
              >
                We'll contact you within 24 hours to complete the admission
                process
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='mt-12 text-center'>
        <h3
          className='text-2xl font-bold mb-6'
          style={{ color: theme.textColor }}
        >
          Why Parents Choose BunnyTots
        </h3>
        <div className='grid sm:grid-cols-3 gap-6'>
          {[
            "BunnyLearn™ Curriculum",
            "Safe & Nurturing Environment",
            "7+ Years of Excellence",
          ].map((item, index) => (
            <div key={index} className='bg-white p-4 rounded-lg shadow-sm'>
              <p style={{ color: theme.primaryColor }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
