import React from "react";
import { useState } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="h-[90px] bg-red-200">
      <div className="flex flex-row max-w-7xl h-full mx-auto px-4 bg-gray-800 rounded-b-lg justify-between ">
        <h1 className="text-6xl md:text-5xl text-blue-100 cursor-pointer text-center my-4 md:my-5 inline-block">
          ZAZA KAYA
        </h1>
        <nav className="hidden md:flex text-2xl my-3 text-white">
          <ul className="flex space-x-6 py-4">
            <li className="">
              <a href="/Home" className="justify-center align-middle">
                Home
              </a>
            </li>
            <li className="">
              <a href="/Home" className="justify-center align-middle">
                Services
              </a>
            </li>
            <li className="">
              <a href="/Home" className="justify-center align-middle">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="my-4 md:hidden ">
          <AiOutlineMenuUnfold
            id="close"
            className="text-white md:hidden cursor-pointer block "
            size={40}
          />
        </button>
        {/* <button>
          <AiOutlineClose
            className="text-white
           cursor-pointer md:hidden "
            size={40}
          />
        </button> */}
      </div>
    </header>
  );
};

export default Navbar;
