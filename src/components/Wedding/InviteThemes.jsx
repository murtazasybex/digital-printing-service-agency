import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import { inviteThemes } from "../../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const InviteThemes = () => {
  const [curr, setCurr] = useState(inviteThemes.length - 10);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const prev = () => {
    sliderRef.current.slickPrev();
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  useEffect(() => {
    const slideInterval = setInterval(next, 50000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <>
      <section className="w-full bg-[#E1EEF1] relative z-0 px-2">
        <div className="w-full container mx-auto relative z-0 px-2">
          <div className="pb-6 w-full max-w-[1200px] ml-auto">
            <div>
              <h1 className="font-bold text-[28px] py-6 montserrat">
                Swoon-worthy invite themes
              </h1>
              <p className="text-[17px] inter">
                Whether it’s timeless or trendy, find the invite design that
                brings your wedding vision to life.
              </p>
            </div>
            <div>
              <p className="text-[14px] font-bold inter hover:underline delay-100">
                Shop all invitations
              </p>
            </div>
            <div>
              <Slider ref={sliderRef} {...settings}>
                {inviteThemes.map((item, index) => (
                  <div
                    key={index}
                    className="w-full flex flex-col justify-center items-center my-5"
                  >
                    <img
                      src={item.image}
                      className="hover-transition max-w-full max-h-full rounded-full overflow-hidden mx-auto w-[250px] h-[250px] flex justify-center items-center"
                      alt="product image"
                    />
                    <p className="text-center font-bold pt-3 text-[17px]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white text-gray-800  hover:bg-[#1A7E91] absolute top-1/2 mt-3 left-2 transform -translate-y-1/2"
        >
          <ChevronLeft size={30} className="hover:invert" />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white text-gray-800  hover:bg-[#1A7E91] absolute top-1/2 mt-3 right-2 transform -translate-y-1/2"
        >
          <ChevronRight size={30} className="hover:invert" />
        </button> */}
      </section>
    </>
  );
};

export default InviteThemes;
