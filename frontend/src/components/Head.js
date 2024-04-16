

import React from 'react';

const Navbar = () => {
  const handleCallClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-blue-400 md:flex-row">
      <div className="items-center hidden md:flex">
        <a href="#" className="flex items-center text-white" onClick={() => handleCallClick('+91-9026018365')}>
          <img src="/phone.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
          <span className="font-bold">+91-9026018365</span>
        </a>
        <span className="mx-4 text-white">|</span>
        <a href="#" className="flex items-center text-white" onClick={() => handleCallClick('+91-9026018366')}>
          <img src="/phone.svg" alt="Phone Icon" className="w-6 h-6 mr-2" />
          <span className="font-bold">+91-9026018366</span>
        </a>
        <span className="mx-4 text-white">|</span>
        <a href="#" className="flex items-center text-white" onClick={() => handleEmailClick('admin@arivani.net')}>
          <img src="/mail.svg" alt="Email Icon" className="w-6 h-6 mr-2" />
          <span className="font-semibold ">admin@arivani.net</span>
        </a>
      </div>

      
      <div className="flex items-center">
       
      </div>

      
    </nav>
  );
};

export default Navbar;
