"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className="h-auto flex flex-col md:flex-row items-end justify-center gap-4 bg-white p-6 rounded-lg w-[90%] md:w-full mx-auto placeholder:text-gray-400">
      {/* Destination Input */}
      <div className="flex flex-col w-full md:w-160 gap-0.5">
        <label className="text-sm font-medium text-gray-600">Destination</label>
        <input
          type="text"
          className="w-full p-2 text-black border rounded-md outline-none transition-colors duration-300"
          placeholder="Where do you want to Stay?"
        />
      </div>

      {/* Start Date */}
      <div className="flex flex-col w-full md:w-auto gap-0.5">
        <label className="text-sm font-medium text-gray-600">Check-in</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText="Select start date"
          className="border p-2 rounded-md w-full md:w-58 text-black"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col w-full md:w-auto gap-0.5">
        <label className="text-sm font-medium text-gray-600">Check-out</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()}
          placeholderText="Select end date"
          className="border p-2 rounded-md w-full md:w-58 text-black"
        />
      </div>

      {/* Search Button */}
      <button className="flex items-center justify-center gap-2 bg-[#f7451dfe] text-white px-4 py-2 rounded-md hover:bg-black transition hover:cursor-pointer w-full md:w-auto" >
        <FaSearch />
        Search
      </button>
    </div>
  );
};

export default SearchBar;