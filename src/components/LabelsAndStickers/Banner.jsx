import React from "react";
import { NavLink } from "react-router-dom";
import Aside from "./Aside";
import { labelstickbannerimg } from "../../assets";

const Banner = () => {
  return (
    <>
      <section className="bg-[#1A7E91]">
        <Aside />
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="flex justify-around md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 items-center px-2">
            <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[620px] text-start md:py-0 py-6 px-2">
              <h1 className="font-bold md:text-[54px] text-[22px] text-white montserrat">
                Labels, Stickers & Packaging
              </h1>
              <p className="text-[17px] text-white font-normal pb-2 inter">
                Get your business logo into more hands, from personalized labels
                and stickers to branded packaging.
              </p>
              <div className="flex lg:justify-center items-start justify-start space-x-3 pt-3">
                <NavLink to="#">
                  <button className="hover-transition py-2 px-6 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    Labels
                  </button>
                </NavLink>
                <NavLink to="#">
                  <button className="hover-transition py-2 px-6 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    Stickers
                  </button>
                </NavLink>
                <NavLink to="#">
                  <button className="hover-transition py-2 px-6 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    Packaging
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="">
              <img
                src={labelstickbannerimg}
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
