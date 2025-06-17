import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const FixedButtons = () => {
  const location = useLocation();
  const path = location.pathname;

  const shouldHide =
    path.startsWith("/dashboard") ||
    path === "/login" ||
    path === "/user-dashboard" ||
    path === "/admin-login" ||
    path.startsWith("/auth");

  if (shouldHide) return null;

  return (
    <div className='fixed whitespace-nowrap bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4 z-50'>
      <NavLink
        to='/admission-form'
        className='bg-[#00008b] text-white px-2 py-2 rounded-lg shadow-md hover:bg-blue-950 transition'
      >
        Enrol Your Child
      </NavLink>
      <NavLink
        to='/franchise-create'
        className='bg-[#E91E63] text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition'
      >
        Become a Partner
      </NavLink>
    </div>
  );
};

export default FixedButtons;
