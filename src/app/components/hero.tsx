import React from 'react';
import SearchBar from './search';
import Listing from './listing';
import { IoMdCheckmark } from "react-icons/io";

const Hero = () => {
  return (
    <div className='bg-white h-auto p-4 md:p-[20px] flex flex-col'>
      {/* Heading */}
      <h1 className=' flex justify-center md:justify-start text-2xl md:text-4xl w-full px-0 md:px-[110px] py-[20px] text-black font-bold'>
        Search stays
      </h1>

      {/* Search Bar */}
      <SearchBar />

      {/* Benefits Section */}
      <div className='flex flex-col gap-4 md:flex-row justify-center text-sm md:text-[15px] text-gray-800 px-4 md:px-[110px] py-[30px] md:py-[50px]'>
        <div className='flex gap-2 items-center'>
          <IoMdCheckmark className='text-[#f7451dfe]' />
          <p>As a One Key member you can save 10% or more on over 100,000 hotels worldwide.</p>
        </div>
        <div className='flex gap-2 items-center'>
          <IoMdCheckmark className='text-[#f7451dfe]' />
          <p>Most hotels are fully refundable. Because flexibility matters.</p>
        </div>
        <div className='flex gap-2 items-center'>
          <IoMdCheckmark className='text-[#f7451dfe]' />
          <p>Save up to 30% when you add a hotel to your flight as a One Key member.</p>
        </div>
      </div>

      {/* Trending Destinations Heading */}
      <h1 className='text-2xl md:text-4xl w-full px-4 md:px-[110px] py-[20px] text-black font-semibold'>
        Explore stays in trending destinations
      </h1>

      {/* Listing Component */}
      <Listing />
    </div>
  );
};

export default Hero;