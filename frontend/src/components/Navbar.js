import React from 'react';

const CompanyNavbar = () => {
  return (
    <nav className="flex flex-col items-center justify-between p-4 ml-4 mr-4 md:flex-row">
      <div className="flex items-center">
        <span className="mr-4 font-bold text-black">
          <img src="/ityo2.png" alt="Brand Logo" className="w-auto h-10" />
        </span>
        <span className="hidden mx-4 text-black md:block">|</span>
        <a href="#" className="font-bold text-black hover:underline">About us</a>
        <a href="#" className="ml-4 font-bold text-black md:ml-8 hover:underline">Services</a>
        <a href="#" className="ml-4 font-bold text-black md:ml-8 hover:underline">Technologies</a>
        <a href="#" className="ml-4 font-bold text-black md:ml-8 hover:underline">Products</a>
        <a href="#" className="ml-4 font-bold text-black md:ml-8 hover:underline">Portfolio</a>
        <a href="#" className="ml-4 font-bold text-black md:ml-8 hover:underline">Recruitment</a>
      </div>
      <div className="mt-4 md:mt-0">
        <a href="#" className="font-bold text-black hover:underline">Current Openings</a>
        <a href="#" className="ml-4 font-bold text-black md:ml-8 hover:underline">Contact us</a>
      </div>
    </nav>
  );
};

export default CompanyNavbar;
