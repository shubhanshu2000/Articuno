import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { MdPersonOutline } from "react-icons/md";

const Nav = () => {
  return (
    <>
      <div>
        <nav className="flex border-b-2 border-gray-150 justify-between p-6 items-center ">
          <ul>
            <li>
              <span className="text-yellow-400">E-</span>Shop
            </li>
          </ul>
          <ul className="flex justify-between w-1/5 text-sm">
            <li>Men </li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
          <ul className="flex  justify-between w-1/12 text-xl">
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <IoCartOutline />
            </li>
            <li>
              <MdPersonOutline />
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Nav;
