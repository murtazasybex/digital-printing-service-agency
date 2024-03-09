import React from "react";
import { NavLink } from "react-router-dom";
import Aside from "./Aside";
import { promotionalbannerimg } from "../../assets";

const Banner = () => {
  return (
    <>
      <section className="bg-[#1A7E91]">
        <Aside />
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="flex justify-around md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 items-center px-2">
            <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[620px] text-start md:py-0 py-6 px-2">
              <h1 className="font-bold md:text-[54px] text-[22px] text-white montserrat">
                Promotional Products
              </h1>
              <p className="text-[17px] text-white font-normal pb-2 inter">
                We print promotional gifts for every list, at prices for every
                budget.
              </p>
              <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-3 lg:justify-center items-start justify-start lg:space-x-3 space-x-0 pt-3">
                <NavLink to="#">
                  <button className="hover-transition py-2 px-6 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    See all
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="">
              <img
                src={promotionalbannerimg}
                className="w-full"
                alt="call to action"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
