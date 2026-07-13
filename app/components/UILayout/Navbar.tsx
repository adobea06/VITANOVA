"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Button from "../Button";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="w-full bg-white  shadow-sm shadow-neutral px-6 py-4 flex items-center justify-between">

      {/* Logo */}
      <div className="text-xl font-bold text-primary">
        VitaNova
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 text-neutral font-medium">
        <li className="hover:text-primary cursor-pointer">Home</li>
        <li className="hover:text-primary cursor-pointer">Patients</li>
        <li className="hover:text-primary cursor-pointer">Hospitals</li>
         <li className="hover:text-primary cursor-pointer">Contact Us</li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <FaBars
          className=" text-xl cursor-pointer text-gray-700"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center gap-4 py-4 text-neutral font-medium">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Patients</li>
            <li className="hover:text-primary cursor-pointer">Hospitals</li>
            <li className="hover:text-primary cursor-pointer">Contact Us</li>
             {/* Actions */}
      <div className="flex  flex-col items-center gap-4">
        <Button bgcolour="bg-white" textcolour="text-primary" font="font-medium" label="Login" hover="hover:text-neutral"/>
        {/* Order Button */}
      <Button bgcolour="bg-primary" textcolour="text-white" font="font-bold" label="Donate" hover="hover:bg-white hover:text-primary"  />
      </div>
          </ul>
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Button bgcolour="bg-white" textcolour="text-primary" font="font-medium" label="Login" hover="hover:text-neutral"/>
        {/* Order Button */}
      <Button bgcolour="bg-primary" textcolour="text-white" font="font-bold" label="Donate" hover="hover:bg-white hover:text-primary"  />
      </div>

     

    </nav>
  );
};

export default Navbar;