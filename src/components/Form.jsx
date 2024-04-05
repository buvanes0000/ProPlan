import React from 'react';
import bgImage from "../assets/bg.png";

const Form = () => {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    
   
  }

  return (
    <div className='form flex justify-around   p-5 mt-5 max-sm:flex-col max-sm:h-[30rem] '> 
      <div className='form-content text-white flex flex-col justify-around'>
          <p className='text-s font-[50]'>Stay Updated</p>
          <h4 className='text-3xl'>subscribe to the newsletter</h4>
          <p className='text-sm font-[50]'>Submit your all details in from we'll send all update once a month</p>
      </div>
      <div className='form-container  bg-slate-200 p-5 w-[20rem] rounded-sm shadow-lg max-sm:gap-6'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-evenly h-full max-sm:gap-8'>
              <input type="text" placeholder="Enter your name" required />
              <input type="text" placeholder="Enter your email " required />
              <input type="text" placeholder="Enter your phone number" required />
              
              <input type="submit" value="Submit" className='bg-[#3559E0] transition-all w-[10rem] text-center self-center hover:w-full duration-400 hover: hover:bg-[#6DB9EF] text-white cursor-pointer' />
          </form>
      </div>
    </div>
  );
}

export default Form;
