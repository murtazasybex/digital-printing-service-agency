import React, { useState } from "react";
import { weddingfaq } from "../../assets";
import { weddingFaqs } from "../../constants";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="container px-5 mx-auto w-full my-8 max-w-[900px]">
        <div className="flex flex-wrap items-center justify-between">
          <div className="px-2 py-5 w-full max-w-[700px]">
            <h1 className="font-bold text-[28px] inter">
              Find wedding stationery and essentials that look beautiful, and
              feel authentically you.
            </h1>
            <div className="py-8">
              <div className="space-y-2">
                <p className="inter text-[17px]">
                  Whether you've just begun wedding planning or are ready to
                  order your wedding cards online, our wedding collection makes
                  it easy to be 100% yourself. Our wedding card designs and
                  decor draw from the most popular trends and themes, so it’s
                  easy to find something that feels fresh and fits your vibe
                  (and yes, your budget too). In our design studio, embrace your
                  style even more by customizing of our templates with your pick
                  of luxe details – think pretty papers, glistening foils and
                  dreamy colors.
                </p>
                <p className="inter text-[17px]">
                  For a truly personal touch, consider a custom illustration.
                  Working with our Design Services, you can request a
                  one-of-a-kind illustration of your wedding venue, you and your
                  SO, your pet and more. Once your illustration is done, we’ll
                  print it on your wedding stationery. And if you have any
                  questions along the way, our support experts are here to help.
                  After all, saying “yes” was easy. Every step of wedding
                  planning should be too.
                </p>
              </div>
            </div>
          </div>
          <img
            src={weddingfaq}
            className="w-full max-w-[500px] h-full max-h-[500px] mb-12"
            alt=""
          />
        </div>
        <h1 className="font-bold text-[28px] inter">
          Frequently Asked Questions
        </h1>
        {weddingFaqs.map((faq, index) => (
          <div key={index} className="pt-10 pb-3 border-b-2">
            <div
              className="flex justify-between cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h1
                className={`font-${
                  activeIndex === index ? "bold" : "medium"
                } text-[17px] inter pb-5`}
              >
                {faq.question}
              </h1>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-1000 overflow-hidden ${
                activeIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="space-y-5">
                {faq.answer.map((paragraph, idx) => (
                  <p key={idx} className="inter text-[17px]">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FAQs;
