import React, { useState } from 'react';
import cardData from './Data';

const colors = ['bg-[#F5F5F5]', 'bg-[#F5F5F5]', 'bg-[##F5F5F5]']; 
let colorIndex = 0; 

const getNextColor = () => {
  const color = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length; // Cycle through colors
  return color;
};

const MostPopular = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 9;
  const totalPages = Math.ceil(cardData.length / cardsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    let pagination = [];
    for (let i = 1; i <= totalPages; i++) {
      pagination.push(
        <span
          key={i}
          className={`cursor-pointer text-[0.8rem] bg-black  mx-1 border border-[#111] px-4 py-2 rounded-full ${
            currentPage === i ? 'text-[#86B6F6]' : 'text-white'
          }`}
          onClick={() => handleClick(i)}
        >
          {i}
        </span>
      );
    }
    return pagination;
  };

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;
    return cardData.slice(startIndex, endIndex).map((card) => (
      <div
        key={card.id} id='card'
        className={`flex flex-col justify-evenly card ${getNextColor()} text-black w-[18rem] h-[23rem] p-5 rounded-md border-[1px] border-[#111]`}
      >
        <p className='relative text-white mt-[-4.5rem] z-10 bg-[#0C0C0C] text-[0.7rem] text-center w-auto p-[0.5rem] rounded-lg border border-[#fff] transition-all duration-[0.6s]  '>
          {card.label}
        </p>
        <div>
          <h4 className='text-sm font-[800]'>{card.title}:</h4>
          <h4 className='text-sm font-[400]'>{card.subTitle}</h4>
          <p className='text-black text-[0.7rem] mt-4'>{card.readTime}</p>
        </div>
        <p className='text-[0.7rem] font-[300]'>{card.description}</p>
        <div className='button cursor-pointer flex  mt-10 '>
          <p className='text-sm mt-[0.1rem]'>Read More</p>
          <div className='mt-[0.1rem] ml-[-0.1rem] '>
            
            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 64 64" viewBox="0 0 64 64" id="arrow">
              <path className="fill-black" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335) "></path>
            </svg>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <section className='mostpopular'>
      <h3 className=' text-center font-extrabold mb-[3rem] text-[2rem] '> Popular Topics</h3>
      <div className='cards grid grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 max-sm:gap-[3rem] justify-items-center items-center'>
        {renderCards()}
      </div>
      <div className='flex justify-center items-center mt-5'>
        {renderPagination()}
      </div>
    </section>
  );
};

export default MostPopular;



