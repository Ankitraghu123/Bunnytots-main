import React, { useState } from "react";
import { FiUser, FiLock, FiEye, FiEyeOff } from "react-icons/fi";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginUser } from "../redux/user/userThunks";

import { ShowLoading, HideLoading } from "../redux/alertsSlice";
import toast from "react-hot-toast";

const Login = () => {
  // Using the same theme from ImageSlider
  const theme = {
    primaryColor: "#E91E63", // Primary brand color (red)
    secondaryColor: "#6C63FF", // Secondary color (purple)
    textColor: "#FFFFFF", // Main text color
    accentTextColor: "#F3F4F6", // Secondary text color
    buttonHoverColor: "#C5112E", // Darker red for button hover
    overlayColor: "rgba(0, 0, 0, 0.5)", // Image overlay
  };

  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(ShowLoading());

    try {
      const resultAction = await dispatch(loginUser(formData));

      if (loginUser.fulfilled.match(resultAction)) {
        toast.success("Login successful");

        // ✅ Extract role from payload or state
        const userData = resultAction.payload; // assuming it includes user info like role

        const role = userData?.user?.role || "User"; // fallback if role is undefined

        // ✅ Redirect based on role
        if (role === "Admin") {
          navigate("/dashboard");
        } else {
          navigate("/user-dashboard");
        }
      } else {
        const errorMsg = resultAction.payload || "Login failed";
        toast.error(errorMsg);
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div
      className='min-h-screen relative z-10 flex items-center justify-center bg-cover bg-center'
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)",
      }}
    >
      <div
        className='w-full h-full absolute'
        style={{ backgroundColor: theme.overlayColor }}
      ></div>

      <div className=' w-full max-w-md px-6 py-8'>
        <div className='bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl shadow-xl overflow-hidden border border-white border-opacity-20'>
          {/* Header */}
          <div
            className='py-6 px-8 text-center bg-[#E91E63]'
            // style={{ backgroundColor: 'rgba(233, 30, 99, 0.2)' }}
          >
            <h2
              className='text-3xl font-bold'
              style={{ color: theme.textColor }}
            >
              Welcome Back
            </h2>
            <p className='mt-2' style={{ color: theme.accentTextColor }}>
              Sign in to your account
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='px-8 py-6'>
            {/* email Field */}
            <div className='mb-6'>
              <label
                htmlFor='email'
                className='block mb-2 text-sm font-medium'
                // style={{ color: theme.accentTextColor }}
              >
                Email
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FiUser className='h-5 w-5' />
                </div>
                <input
                  type='text'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full pl-10 pr-3 py-3 rounded-lg border border-black border-opacity-30 focus:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all'
                  style={
                    {
                      // backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      // color: theme.textColor,
                      // focusRingColor: theme.primaryColor
                    }
                  }
                  placeholder='Enter your email'
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className='mb-8'>
              <label
                htmlFor='password'
                className='block mb-2 text-sm font-medium bor'
                // style={{ color: theme.accentTextColor }}
              >
                Password
              </label>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <FiLock className='h-5 w-5' />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='w-full pl-10 pr-10 py-3  rounded-lg border border-black border-opacity-30 focus:border-opacity-50 focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all'
                  placeholder='Enter your password'
                  required
                />
                <button
                  type='button'
                  className='absolute inset-y-0 right-0 pr-3 flex items-center'
                  onClick={() => setShowPassword(!showPassword)}
                  //   style={{ color: theme.accentTextColor }}
                >
                  {showPassword ? (
                    <FiEyeOff className='h-5 w-5' />
                  ) : (
                    <FiEye className='h-5 w-5' />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type='submit'
              className='w-full py-3 px-4 rounded-lg font-bold text-white hover:shadow-lg transition-all duration-300 flex items-center justify-center'
              style={{
                background: `linear-gradient(to right, ${theme.primaryColor}, ${theme.secondaryColor})`,
                ":hover": {
                  backgroundColor: theme.buttonHoverColor,
                },
              }}
            >
              Sign In
            </button>

            {/* Social Login */}
            <div className='grid grid-cols-2 gap-4 mb-6'></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
