import React from "react";
import { weddingbannerimg } from "../../assets";
import Aside from "./Aside";
import { NavLink } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="bg-[#1A7E91]">
        <Aside />
        <div className="w-full max-w-[1200px] ml-auto px-2">
          <div className="flex justify-around md:space-x-8 flex-wrap lg:flex-nowrap md:py-0 items-center px-2">
            <div className="space-y-3 my-6 flex flex-col items-start justify-center w-full max-w-[620px] text-start md:py-0 py-6 px-2">
              <h1 className="font-bold md:text-[54px] text-[22px] text-white montserrat">
                Wedding Planning
              </h1>
              <p className="text-[17px] text-white font-normal pb-2 inter">
                Get 50 wedding invites for under $50 with 50% off all
                quantities, sizes and paper stocks.
              </p>
              <div className="flex flex-wrap space-x-3 pt-3 md:space-y-0 space-y-3 justify-center">
                <NavLink to="#">
                  <button className="hover-transition py-2 px-10 bg-black text-[14px] hover:bg-black/80 transition-colors inter text-white rounded-full font-semibold">
                    Shop wedding invites
                  </button>
                </NavLink>
                <NavLink to="#">
                  <button className="hover-transition py-2 px-14 bg-white text-[14px] hover:bg-white/80 transition-colors inter text-[#5C5C5C] rounded-full font-semibold">
                    Free sample kit
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="">
              <img
                src={weddingbannerimg}
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
