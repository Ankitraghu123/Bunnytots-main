// src/Layout.jsx
import React from 'react';
import EuroKidsNavbar from '../src/Components/EuroKidsNavbar';
import Footer from '../src/Components/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <EuroKidsNavbar />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
