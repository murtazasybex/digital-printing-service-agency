import React from "react";
import { labelstickersctaone } from "../../assets";
import { NavLink } from "react-router-dom";

const CTAOne = () => {
  return (
    <>
      <section className="bg-[#1A7E91] w-full py-2">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="flex justify-evenly md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 items-center px-2">
            <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[600px] text-start md:py-0 py-6 px-2">
              <h1 className="font-bold md:text-[40px] text-[28px] text-white inter">
                Try Before You Buy
              </h1>
              <p className="text-[17px] text-white font-normal pb-2 inter">
                Browse our variety of pre-printed and custom-printed packaging
                samples.
              </p>
              <NavLink to="#">
                <button className="hover-transition py-3 px-10 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold mt-5">
                  Work with a designer
                </button>
              </NavLink>
            </div>
            <div className="">
              <img
                src={labelstickersctaone}
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

export default CTAOne;
