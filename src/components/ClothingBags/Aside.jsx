import React, { useState } from "react";
import { asideClothingBags } from "../../constants";

const Aside = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  return (
    <>
      <div className="relative z-10">
        <nav
          className={`xl:w-70 fixed inset-y-2 xl:top-72 top-48 overflow-y-auto xl:left-5 left-0 z-1 border bg-white rounded-xl shadow-md ${
            sidebarVisible
              ? "translate-x-0"
              : "-translate-x-full xl:translate-x-0"
          } transition-transform duration-300 ease-in-out`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style>
            {`
            nav::-webkit-scrollbar {
              display: none;
            }
          `}
          </style>
          <ul className="p-5">
            <h1 className="font-bold border-b-2 mb-3 text-[20px] leading-loose">
              Clothing & Bags
            </h1>
            {asideClothingBags.map((categoryData, index) => (
              <li key={index} className="mb-4 border-b py-2">
                <h1 className="font-semibold text-lg mb-2">
                  {categoryData.category}
                </h1>
                <ul>
                  {categoryData.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="hover:text-[#1A7E91] transition-colors cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sidebar toggle button */}
        <button
          className="xl:hidden fixed top-30 left-2 z-1 bg-primary px-2 py-1 text-white bg-[#214c55] rounded-lg focus:outline-none"
          onClick={toggleSidebar}
        >
          {sidebarVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
    </>
  );
};

export default Aside;
