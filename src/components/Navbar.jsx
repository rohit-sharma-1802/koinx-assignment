import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import koinXlogo from '../assets/koinXlogo.png'

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="top-0 sticky w-full bg-white z-50">
      <nav className="h-[60px] p-5 w-full flex justify-between items-center">
        <Link to="/">
          <img
            src={koinXlogo}
            alt="logo"
            className="w-[120px] h-[50px] object-contain"
          />
        </Link>

        <ul className="hidden md:flex font-medium gap-10 items-center">
          <li className="cursor-pointer">Crypto Taxes</li>
          <li className="cursor-pointer">Free Tools</li>
          <li className="cursor-pointer">Resource Center</li>
          <li className="cursor-pointer">
            <button className="cursor-pointer bg-[#1b4aef] text-white px-[20px] py-[8px] rounded-xl">
              Get Started
            </button>
          </li>
        </ul>
        <div className="flex gap-5 md:hidden">
          {menu ? (
            <RxCross1
              className="cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
              size={25}
            />
          ) : (
            <AiOutlineMenu
              className="cursor-pointer"
              onClick={() => setMenu((prev) => !prev)}
              size={25}
            />
          )}
        </div>
      </nav>
      <div
        className={`h-screen menu absolute bg-white w-full transition-all duration-200 ease-in-out ${
          menu ? "" : "mt-[-500%]"
        }`}
      >
        <ul className="flex flex-col mt-10 font-medium gap-10 items-center">
          <li className="cursor-pointer">Crypto Taxes</li>
          <li className="cursor-pointer">Free Tools</li>
          <li className="cursor-pointer">Resource Center</li>
          <li className="cursor-pointer">
            <button className="cursor-pointer bg-[#1b4aef] text-white px-[20px] py-[8px] rounded-xl">
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
