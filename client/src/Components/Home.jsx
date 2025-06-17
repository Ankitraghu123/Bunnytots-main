// Home.jsx
import React from 'react';
import ImageSlider from './ImageSlider';
import TabComponent from '../Pages/TabComponent';
import AboutUs from '../Pages/AboutUs';
import VisionMission from '../Pages/VisionMission';
import PreschoolPrograms from '../Pages/PreschoolPrograms';
import FranchiseOpportunity from '../Pages/FranchiseOpportunity';
import ContactUs from '../Pages/ContactUs'; 
import ParentSpeak from '../Pages/ParentSpeak';
import FAQAccordion from '../Pages/FAQAccordion';
import FunContentPage from '../Pages/FunContentPage';

const Home = () => {
  return (
    <>
      <ImageSlider />
      <TabComponent />
      <AboutUs />
      <VisionMission />
      <PreschoolPrograms />
      <FunContentPage/>
      <FranchiseOpportunity />
      <ContactUs />
      <ParentSpeak />
      <FAQAccordion />
    </>
  );
};

export default Home;
