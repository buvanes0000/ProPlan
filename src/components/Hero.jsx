import React, { useState } from 'react';
import heroImage from "../assets/hero.png";

const Hero = () => {
  const [activeLink, setActiveLink] = useState(0);

  const linkClicked = (index) => {
    setActiveLink(index);
  };

  return (
    <div className='hero relative flex flex-col mt-[-13rem] h-[70vh] max-lg:h-[100vh] max-sm:mb-[3rem]  '>
      <h1 className='text-2xl text-center relative mt-[-12em] font-extrabold '> Pro plan Blog</h1>
      <ul className='flex flex-row justify-around flex-shrink-[3] relative mt-14 max-md:text-[0.6rem] max-sm:flex-col max-sm:w-[8rem] max-sm:justify-center self-center'>
        {['All', 'new', 'Sales', 'Recruting', 'Productivity'].map((item, index) => (
          <li 
            key={index}
            className={`${
              activeLink === index 
                ? "bg-[#3559E0] px-10 py-2 text-white  rounded-[1.5rem] w-auto" 
                : "px-10 py-2 w-auto"
            }`} 
            onClick={() => linkClicked(index)}
          >
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
      <div className='hero-container flex mt-20  justify-around max-lg:flex-col max-md'>
        <div className='hero-image lg:flex self-center '>
          <img src={heroImage} alt="" className='w-[20rem] h-[25rem] rounded-xl object-cover shadow-2xl' />
        </div>
        <div className='hero-content self-center max-lg:p-4 '>
          <p className='text-gray-400'>What's New</p>
          <h2 className='mt-16 text-3xl font-extrabold max-md:text-[1.3rem]'>Pro Plan-Where Every Second Counts</h2>
          <p className='mt-4 max-md:text-[0.8rem] font-[300]'>Time is our most valuable asset, and the next decade hinges on how we use it</p>
          <div className='button cursor-pointer flex gap-5 mt-20 max-sm:mt-[1rem] '>
            <p>Read More</p> 
            <div className='bg-black rounded-full py-1'>
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow">
                <path className="fill-white" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335) "></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
