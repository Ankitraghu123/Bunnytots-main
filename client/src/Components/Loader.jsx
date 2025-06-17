import React from "react";

const Loader = () => {
  return (
    <div className='loader-container'>
      <div className='loader'>
        <div className='loader-ball'></div>
        <div className='loader-ball'></div>
        <div className='loader-ball'></div>
      </div>
      <div className='loader-text'>Loading fun & learning...</div>
    </div>
  );
};

export default Loader;
