import React from "react";
import { rightProducts } from "../../constants";

const RightProduct = () => {
  return (
    <>
      <section className="w-full relative z-0 px-2">
        <div className="w-full container mx-auto relative z-0 px-2">
          <div className="pb-6 w-full max-w-[1200px] ml-auto">
            <h1 className="font-bold text-[28px] py-6 montserrat">
              Find the right product for you
            </h1>
            <p className="text-[17px] inter">
              From daily wear to travel bags, we’ve got you covered.
            </p>

            <div className="flex flex-wrap md:justify-start justify-center items-center gap-10 py-5">
              {rightProducts.map((item, index) => (
                <div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RightProduct;
