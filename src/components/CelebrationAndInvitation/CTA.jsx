import React from "react";
import { NavLink } from "react-router-dom";
import { celebinvitectaimg, ctaimgone } from "../../assets";

const CTA = () => {
  return (
    <>
      <div className="w-full mx-auto relative px-2 z-0 bg-[#1A7E91]">
        <div className="bg-cover bg-left md:bg-center w-full bg-no-repeat my-6 relative">
          <div className="flex justify-between lg:flex-row flex-col md:py-6 lg:py-0 py-16 items-center">
            <div className="space-y-5 pl-10 w-full max-w-[620px]">
              <h1 className="font-bold montserrat text-[32px] md:text-[36px] lg:text-[42px] text-white pr-2">
                Try Before You Buy
              </h1>
              <p className="md:text-[18px] text-[17px] text-white inter pb-5">
                Browse our variety of pre-printed and custom-printed packaging
                samples.
              </p>
              <NavLink to="#">
                <button className="hover-transition hover:bg-black cursor-pointer py-3 md:px-6 px-4 text-[14px] bg-white hover:bg-white/80 transition-colors rounded-full inter font-semibold relative z-10">
                  Browse sample
                </button>
              </NavLink>
            </div>
            <div>
              <img
                src={celebinvitectaimg}
                className="w-full max-w-[700px] pt-10 px-10"
                alt="printing agency"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CTA;
