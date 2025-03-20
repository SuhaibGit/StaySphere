import React from 'react';
import Link from 'next/link';
import { RiArrowDropDownLine } from "react-icons/ri";

const Sidebar = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed top-10 right-0 h-full bg-white z-10 overflow-x-hidden transition-all duration-500 ease-in-out ${
          show ? 'w-[100%]' : 'w-0'
        }`}
      >
        <ul className="mt-5 p-4 text-[20px]">
          <li className="mb-6">
            <Link href="/" className="flex items-center text-[#f7451dfe]  justify-between hover:text-black">
              List your property 
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/" className="flex items-center text-[#f7451dfe]  justify-between hover:text-black">
              Support 
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/" className="flex items-center text-[#f7451dfe]  justify-between hover:text-black">
              Trips 
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/" className="flex items-center text-[#f7451dfe]  justify-between hover:text-black">
              Message Us 
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/" className="flex items-center text-[#f7451dfe]  justify-between hover:text-black">
              Sign In 
            </Link>
          </li>
          <li className="mb-6">
            <Link href="/" className="flex items-center text-[#f7451dfe]  justify-between hover:text-black">
              Others 
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay */}
      {show && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default Sidebar;