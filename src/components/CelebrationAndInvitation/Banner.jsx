import React from "react";
import { celebinvitebannerimg } from "../../assets";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <div className="w-full mx-auto relative px-2 z-0 bg-[#1A7E91]">
        <div className="bg-cover bg-left md:bg-center w-full bg-no-repeat my-6 relative">
          <div className="flex justify-between lg:flex-row flex-col md:py-6 lg:py-0 py-16 items-center">
            <div className="space-y-5 pl-10 w-full max-w-[620px]">
              <h1 className="font-bold montserrat text-[28px] md:text-[36px] lg:text-[42px] text-white pr-2">
                Their big finish, your biggest savings
              </h1>
              <p className="md:text-[18px] text-[17px] text-white inter pb-5">
                Throw the ultimate post-finals bash with grad supplies the
                scholar, and your wallet, will love.
              </p>
              <NavLink to="#">
                <button className="hover-transition hover:bg-black cursor-pointer py-3 md:px-6 px-4 text-[14px] bg-white hover:bg-white/80 transition-colors rounded-full inter font-semibold relative z-10">
                  Shop all graduation
                </button>
              </NavLink>
            </div>
            <div>
              <img
                src={celebinvitebannerimg}
                className="w-full max-w-[700px] pt-10"
                alt="printing agency"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
