"use client";

import { BButton, BLogo } from "@/components/LV1_Atoms";
import { NavMenu } from "@/components/LV2_Molecules";
import { cn } from "@/utils";
import { useState } from "react";

const BHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavbar = () => {
    setMenuOpen(!menuOpen);
  };
  const generalStyling =
    "flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto lg:px-16";
  const classes = cn(generalStyling);
  return (
    <nav className={classes}>
      <div>
        <BLogo variant="header" />
      </div>

      <div className="hidden lg:flex items-center gap-x-6 ">
        <NavMenu />
        <div>
          <BButton size="sm" weight="medium" color="white">
            Start Now
          </BButton>
        </div>
      </div>

      <div className="lg:hidden" onClick={handleNavbar}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_16_20099)">
            <path
              d="M4 6H20"
              stroke="#C026D3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="#C026D3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18H20"
              stroke="#C026D3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_16_20099">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      {/* mobile menu */}
      <div
        className={` bg-fuchsia-600 fixed top-0 right-0 w-[65%] h-full  lg:hidden  p-10 z-10 transform transition-transform duration-300  ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex w-full items-center justify-end">
          <button onClick={handleNavbar} className="cursor-pointer mb-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0,0,300,150"
            >
              <g
                fill="#ffffff"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M7.71875,6.28125l-1.4375,1.4375l17.28125,17.28125l-17.28125,17.28125l1.4375,1.4375l17.28125,-17.28125l17.28125,17.28125l1.4375,-1.4375l-17.28125,-17.28125l17.28125,-17.28125l-1.4375,-1.4375l-17.28125,17.28125z"></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div className="flex-col py-4">
          <ul className="flex flex-col gap-y-6 pl-4 text-white text-3xl font-bold">
            <a href="/">
              <li>Explore</li>
            </a>
            <a href="/">
              <li>Solutions</li>
            </a>
            <a href="/">
              <li>About</li>
            </a>
            <a href="/">
              <li>Blog</li>
            </a>
            <a href="/">
              <li>Log In</li>
            </a>
          </ul>
        </div>
        <div className="pt-6"></div>
      </div>
    </nav>
  );
};

export default BHeader;
