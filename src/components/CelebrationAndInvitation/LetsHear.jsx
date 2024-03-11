import React from "react";
import { letsHear } from "../../constants";

const LetsHear = () => {
  return (
    <>
      <section className="w-full container mx-auto relative py-8">
        <div className="">
          <h1 className="font-bold text-[28px] mt-7 pl-3 px-2 inter">
            Let’s hear it for the grad
          </h1>
          <p className="text-[17px] pb-6 pt-2 pl-3 px-2 inter">
            Put their achievements (and their face, of course) on full display
            with invites and party decor made to honor this big moment.
          </p>
        </div>
        <div className="flex justify-around flex-wrap relative overflow-hidden gap-3">
          {letsHear.map((post, index) => (
            <div
              key={index}
              className="py-3 my-5 hover-transition w-full max-w-[300px] px-3 hover:border hover:bg-[#F8F8F8] transition-colors rounded-2xl cursor-pointer"
            >
              <img
                src={post.image}
                className="px-1 rounded-2xl"
                alt="social post"
              />
              <h1 className="font-bold text-[17px] mt-4 pl-3 px-2 inter">
                {post.label}
              </h1>
              {/* <p className="text-[14px] pb-3 pt-2 pl-3 px-2 inter">
                  {post.content}
                </p> */}
              <p className="text-[13px] text-[#5C5C5C] pb-6 pl-3 px-2 inter">
                {post.startingprice}
                <span className="px-1">{post.fullprice}</span>
                <span className="text-[#0A806B]">{post.discountprice}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default LetsHear;
