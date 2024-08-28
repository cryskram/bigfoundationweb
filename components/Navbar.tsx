"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-8 w-full py-4 bg-white shadow-md">
      <div className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" width={100} height={100} alt="logo" />
        </Link>
        <div className="hidden lg:flex gap-10 font-bold">
          <Link className="links" href="/">
            Home
          </Link>
          <Link className="links" href="/#whyus">
            About Us
          </Link>
          <Link className="links" href="/#services">
            Walkthrough
          </Link>
          <Link className="links" href="/#events">
            Facilities
          </Link>
          <Link className="links" href="/about">
            Register
          </Link>
          <Link className="links" href="/about">
            Events
          </Link>
          <Link className="links" href="/about">
            Contact
          </Link>
        </div>
        <div className="lg:hidden">
          <button className="focus:outline-none" onClick={toggleMenu}>
            {!isOpen ? <GiHamburgerMenu size={30} /> : <IoMdClose size={30} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 flex flex-col space-y-3 sm:px-3">
            <Link className="links" href="/">
              Home
            </Link>
            <Link className="links" href="/#whyus">
              About Us
            </Link>
            <Link className="links" href="/#services">
              Walkthrough
            </Link>
            <Link className="links" href="/#events">
              Facilities
            </Link>
            <Link className="links" href="/about">
              Register
            </Link>
            <Link className="links" href="/about">
              Events
            </Link>
            <Link className="links" href="/about">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavbarComponent;
