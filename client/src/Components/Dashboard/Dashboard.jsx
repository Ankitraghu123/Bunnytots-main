import React, { useState } from "react";
import SyllabusForm from "./SyllabusForm";
import UserManagement from "./UserManagement";
import Student from "./Student";
import PreschoolSyllabusTable from "./PreschoolSyllabusTable";
import {
  FiMenu,
  FiUser,
  FiBell,
  FiMessageSquare,
  FiPieChart,
  FiCalendar,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { FaChalkboardTeacher, FaUserGraduate, FaBook } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/user/userThunks";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  // Using the same theme from ImageSlider
  const theme = {
    primaryColor: "#E91E63", // Primary brand color (red)
    secondaryColor: "#6C63FF", // Secondary color (purple)
    textColor: "#FFFFFF", // Main text color
    accentTextColor: "#F3F4F6", // Secondary text color
    buttonHoverColor: "#C5112E", // Darker red for button hover
    dotActiveColor: "#EE2341", // Active dot color
    overlayColor: "rgba(0, 0, 0, 0.5)", // Image overlay
    cardBg: "rgba(255, 255, 255, 0.1)", // Card background
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='flex  bg-gray-100'>
      <button
        className='md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg'
        style={{ backgroundColor: theme.primaryColor, color: theme.textColor }}
        onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
      >
        <FiMenu className='h-6 w-6' />
      </button>

      <div
        className={`${sidebarOpen ? "w-64" : "w-20"} ${
          mobileSidebarOpen ? "block" : "hidden"
        } md:block bg-gray-900 text-white transition-all duration-300 fixed h-full z-40`}
        style={{ backgroundColor: "#0f172a" }}
      >
        <div className='p-4 flex items-center justify-between border-b border-gray-700'>
          {sidebarOpen ? (
            <h1
              className='text-xl font-bold'
              style={{ color: theme.textColor }}
            >
              BunnyLearn
            </h1>
          ) : (
            <div
              className='w-8 h-8 rounded-full'
              style={{ backgroundColor: theme.primaryColor }}
            ></div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className='p-1 rounded-full hover:bg-gray-700 hidden md:block'
          >
            <FiMenu className='h-5 w-5' />
          </button>
        </div>

        <nav className='mt-6'>
          <NavItem
            icon={<FiPieChart />}
            text='Dashboard'
            active={activeTab === "dashboard"}
            onClick={() => setActiveTab("dashboard")}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />

          <NavItem
            icon={<FaUserGraduate />}
            text='Syllabus'
            active={activeTab === "/syllabusform"}
            onClick={() => setActiveTab("/syllabusform")}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem
            icon={<FaChalkboardTeacher />}
            text='Mange User'
            active={activeTab === "mangeuser"}
            onClick={() => setActiveTab("mangeuser")}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem
            icon={<FaBook />}
            text='Student Data'
            active={activeTab === "student"}
            onClick={() => setActiveTab("student")}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          {/* <NavItem
            icon={<FiCalendar />}
            text="Calendar"
            active={activeTab === 'calendar'}
            onClick={() => setActiveTab('/')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem
            icon={<FiMessageSquare />}
            text="Messages"
            active={activeTab === 'messages'}
            onClick={() => setActiveTab('messages')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          />
          <NavItem
            icon={<FiSettings />}
            text="Settings"
            active={activeTab === 'settings'}
            onClick={() => setActiveTab('settings')}
            sidebarOpen={sidebarOpen}
            theme={theme}
          /> */}
        </nav>

        <div className='absolute bottom-0 w-full p-4 border-t border-gray-700'>
          <button
            onClick={() => {
              dispatch(logoutUser());
              navigate("/");
            }}
            className='flex items-center w-full p-2 rounded-lg hover:bg-gray-700 transition-colors'
          >
            <FiLogOut
              className='h-5 w-5'
              style={{ color: theme.accentTextColor }}
            />
            {sidebarOpen && (
              <span className='ml-3' style={{ color: theme.accentTextColor }}>
                Logout
              </span>
            )}
          </button>
        </div>
      </div>

      <div
        className={`flex-1 ${
          sidebarOpen ? "md:ml-64" : "md:ml-20"
        } transition-all duration-300`}
      >
        <header className='bg-white shadow-sm'>
          <div className='flex items-center justify-between px-6 py-4'>
            <div className='flex items-center space-x-4'>
              <h1 className='text-xl font-semibold text-gray-800'>Dashboard</h1>
            </div>

            <div className='flex items-center space-x-4'>
              <button className='p-2 rounded-full relative hover:bg-gray-100'>
                <FiBell className='h-5 w-5 text-gray-600' />
                <span
                  className='absolute top-0 right-0 w-2 h-2 rounded-full'
                  style={{ backgroundColor: theme.primaryColor }}
                ></span>
              </button>

              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 rounded-full overflow-hidden'>
                  <img
                    src='https://randomuser.me/api/portraits/women/44.jpg'
                    alt='User'
                    className='w-full h-full object-cover'
                  />
                </div>
                {sidebarOpen && (
                  <span className='text-sm font-medium text-gray-700'>
                    Admin User
                  </span>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className='p-6 bg-gray-50 min-h-full'>
          {activeTab === "dashboard" && (
            <div>
              <h2 className='text-2xl font-semibold text-gray-700 mb-4'>
                Welcome to Dashboard
              </h2>
              <PreschoolSyllabusTable />
              {/* Stats or summary section here if needed */}
            </div>
          )}

          {activeTab === "/syllabusform" && <SyllabusForm />}

          {activeTab === "mangeuser" && (
            <div>
              {/* <h2 className="text-xl font-bold">Manage User Component</h2> */}
              <UserManagement />
            </div>
          )}

          {activeTab === "student" && (
            <div>
              <h2 className='text-xl font-bold'>Manage Student</h2>
              <Student />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

// Reusable Components
const NavItem = ({ icon, text, active, onClick, sidebarOpen, theme }) => (
  <button
    onClick={onClick}
    className={`flex items-center w-full p-3 ${
      active ? "bg-gray-800" : "hover:bg-gray-800"
    } transition-colors`}
  >
    <span
      className={`p-2 rounded-lg ${active ? "text-white" : "text-gray-400"}`}
      style={active ? { backgroundColor: theme.primaryColor } : {}}
    >
      {icon}
    </span>
    {sidebarOpen && (
      <span
        className={`ml-3 ${
          active ? "text-white font-medium" : "text-gray-400"
        }`}
      >
        {text}
      </span>
    )}
  </button>
);

export default Dashboard;
