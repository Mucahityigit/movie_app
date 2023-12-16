import React, { useEffect, useState } from "react";
import "./footer.css";
import logo from "../../assets/images/logo.png";
const Footer = () => {
  return (
    <footer className="shadow bg-[#00050d] pt-10">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Schedule
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Trend
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="#" className="hover:underline">
            Movie Night
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
