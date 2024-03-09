import React from "react";
import { cantmissCollections } from "../../constants";

const Collections = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="w-full max-w-[1200px] ml-auto">
          <div className="">
            <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
              Can’t-miss collections
            </h1>
            <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
              Check out some of the products we can't stop talking about.
            </p>
          </div>
          <div className="flex md:justify-start justify-center flex-wrap relative overflow-hidden gap-3">
            {cantmissCollections.map((post, index) => (
              <div
                key={index}
                className="py-3 my-5 hover-transition w-full max-w-[380px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
              >
                <img
                  src={post.image}
                  className="px-1 rounded-2xl"
                  alt="social post"
                />
                <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                  {post.label}
                </h1>
                <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  {post.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Collections;
