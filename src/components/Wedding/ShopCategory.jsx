import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "react-feather";
import { categoryItems, shopByCategory } from "../../constants";

const ShopCategory = () => {
  const [curr, setCurr] = useState(categoryItems.length - 10);
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
    <section className="w-full container ml-auto relative z-0 px-4">
      <div className="pb-6 relative">
        <h1 className="font-bold text-[24px] py-2 px-2 montserrat">
          Shop by category
        </h1>
        <p className="px-2 pb-3">
          Grab essential stationery, party supplies and gifts for your next big
          occasion.
        </p>
        <div className="ml-auto container">
          <Slider ref={sliderRef} {...settings}>
            {shopByCategory.map((item, index) => (
              <div key={index} className="my-5">
                <div className="rounded-full overflow-hidden mx-auto bg-[#1A7E91] w-[200px] h-[200px] flex justify-center items-center">
                  <img
                    src={item.image}
                    className="hover-transition w-full max-h-full"
                    alt="product image"
                  />
                </div>
                <p className="text-center pt-3 text-[14px]">{item.label}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <button
        onClick={prev}
        className="p-1 rounded-full shadow bg-white text-gray-800  hover:bg-[#1A7E91] absolute top-1/2 mt-3 left-2 transform -translate-y-1/2"
      >
        <ChevronLeft size={40} className="hover:invert" />
      </button>
      <button
        onClick={next}
        className="p-1 rounded-full shadow bg-white text-gray-800  hover:bg-[#1A7E91] absolute top-1/2 mt-3 right-2 transform -translate-y-1/2"
      >
        <ChevronRight size={40} className="hover:invert" />
      </button>
    </section>
  );
};

export default ShopCategory;
