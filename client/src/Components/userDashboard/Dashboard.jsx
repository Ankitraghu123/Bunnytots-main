import React, { useState } from "react";
import UserDashboard from "./UserDashboard";
import { FiMenu, FiLogOut, FiPieChart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/user/userThunks";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const user = useSelector((state) => state?.user?.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = {
    primaryColor: "#E91E63",
    textColor: "#FFFFFF",
    accentTextColor: "#F3F4F6",
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Mobile Toggle Button */}
      <button
        className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg shadow-lg'
        style={{ backgroundColor: theme.primaryColor, color: theme.textColor }}
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      >
        <FiMenu className='h-6 w-6' />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-40 bg-gray-900 text-white transition-all duration-300 ${
          mobileSidebarOpen ? "w-64" : "hidden"
        } md:block ${sidebarOpen ? "md:w-64" : "md:w-20"}`}
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className='p-4 flex items-center justify-between border-b border-gray-700'>
          {sidebarOpen || mobileSidebarOpen ? (
            <h1
              className='text-xl font-bold'
              style={{ color: theme.textColor }}
            >
              BunnyLearn
            </h1>
          ) : null}
          <button
            onClick={() => {
              if (window.innerWidth < 768) {
                setMobileSidebarOpen(false);
              } else {
                setSidebarOpen(!sidebarOpen);
              }
            }}
            className='p-1 rounded-full hover:bg-gray-700 md:block'
          >
            <FiMenu className='h-5 w-5' />
          </button>
        </div>

        {/* Nav Item */}
        <div
          onClick={() => window.innerWidth < 768 && setMobileSidebarOpen(false)}
          className='mt-6 flex items-center gap-2 pl-4 text-xl bg-gray-700 hover:bg-gray-800 p-3 cursor-pointer transition'
        >
          <FiPieChart />
          {(sidebarOpen || mobileSidebarOpen) && (
            <span className='ml-4'>Dashboard</span>
          )}
        </div>

        {/* Logout */}
        <div className='absolute bottom-0 w-full p-4 border-t border-gray-700'>
          <button
            onClick={handleLogout}
            className='flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors'
          >
            <FiLogOut
              className='h-5 w-5'
              style={{ color: theme.accentTextColor }}
            />
            {(sidebarOpen || mobileSidebarOpen) && (
              <span className='ml-3' style={{ color: theme.accentTextColor }}>
                Logout
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        }`}
      >
        <header className='bg-white shadow-sm sticky top-0 z-10'>
          <div className='px-6 py-4 flex justify-between items-center'>
            <h1 className='text-xl font-semibold text-gray-800  '>Dashboard</h1>
            {user?.name && (
              <p className='text-sm text-gray-500'>Welcome, {user.name}</p>
            )}
          </div>
        </header>

        <main className='p-6 bg-gray-50'>
          <UserDashboard />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
