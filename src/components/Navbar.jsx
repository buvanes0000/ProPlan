import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center logo flex-col">
           <h2 className='logo-h text-[2rem] font-[1500] text-[white] bg-[#3559E0] w-full text-center rounded-full'>P</h2>
           <p className='logo-p text-[#3559E0]'>Pro Plan</p>
          </div>

          <div className="hidden lg:flex md:items-center md:w-auto">
            <ul className="text-lg md:flex md:justify-between">
              <li className="md:ml-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Individuals</a>
              </li>
              <li className="md:ml-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Teams</a>
              </li>
              <li className="md:ml-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Enterprise</a>
              </li>
              <li className="md:ml-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Product</a>
              </li>
              <li className="md:ml-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Pricing</a>
              </li>
              <li className="md:ml-4">
                <a href="#" className="text-gray-600 hover:text-blue-500">Resources</a>
              </li>
            </ul>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-600 hover:text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          <div className='buttons max-lg:hidden'>
            <a className='mr-5' href="">log In</a>
            <button className="button-34 transition-all duration-400 hover:bg-[#6DB9EF] hover:translate-y-[-6px]" role="button">Sign up</button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={` relative  p-[5rem] bg-slate-300 rounded-md text-pretty  z-50  transition-transform duration-[0.8s] ${
            isOpen ? 'translate-y-[0%]' : 'translate-y-[-300%] '
          }`}
        >
          <ul className="text-lg flex flex-col ">
            <li className="my-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 block">Individuals</a>
            </li>
            <li className="my-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 block">Teams</a>
            </li>
            <li className="my-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 block">Enterprise</a>
            </li>
            <li className="my-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 block">Product</a>
            </li>
            <li className="my-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 block">Pricing</a>
            </li>
            <li className="my-2">
              <a href="#" className="text-gray-600 hover:text-blue-500 block">Resources</a>
            </li>
            <li className='my-2'>
              <a className='' href="">log In</a>
            </li>
            <li><button className="button-34 ml-[-0.7rem]  transition-all duration-400 hover:translate-y-[-6px]  hover:bg-[#6DB9EF]" role="button">Sign up</button></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;