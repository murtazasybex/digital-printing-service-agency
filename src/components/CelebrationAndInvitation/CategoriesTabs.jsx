import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { categoriesTab } from "../../constants";

const CategoriesTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <>
      <section className="w-full bg-[#1A7E91]/20 mx-auto mb-8">
        <div className="categoriestext-[13px] w-full hidden xl:flex justify-center md:shadow-sm md:border-b-2 space-x-10 px-2 pt-5">
          {categoriesTab.map((nav, index) => (
            <NavLink
              key={index}
              to={`${nav.id}`}
              className={`${
                activeTab === index
                  ? "text-[#002C34]"
                  : "hover:text-[#002C34] cursor-pointer transition-colors"
              }`}
              onClick={() => handleTabClick(index)}
            >
              <p
                className={`${
                  activeTab === index
                    ? "font-semibold border-b-2 border-[#002C34] pb-4"
                    : "font-normal"
                } inter`}
              >
                {nav.title}
              </p>
            </NavLink>
          ))}
        </div>
      </section>
    </>
  );
};

export default CategoriesTabs;
