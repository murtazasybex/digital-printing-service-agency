import React, { useState } from "react";
import { homegiftsFaqs } from "../../constants";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <section className="container px-5 mx-auto w-full my-8 max-w-[900px]">
        <div className="px-2 py-5 w-full max-w-[700px]">
          <h1 className="font-bold text-[28px] inter">
            Give something that means something – a custom photo gift.
          </h1>
          <div className="py-8">
            <div className="space-y-2">
              <p className="inter text-[17px]">
                Those photos on your phone weren’t meant to gather dust - and
                neither were the memories they spark. With personalized photo
                gifts, you can transform those pics into feel-good mementos
                loved ones will return to again and again. With our wide
                selection of products and designs, you can create everything
                from the practical (custom water bottle, anyone?) to the
                precious (photo books capturing the niece’s first year).
              </p>
              <p className="inter text-[17px]">
                You’re not just limited to photos, either. With our extensive
                gift options and product templates, you can showcase – and gift
                –everything from a monogram to your very own design. Create a
                canvas print for mom and dad showcasing their wedding photo and
                anniversary date. Or give your bestie a mug with her nickname on
                it – you know, the name only you’re allowed to call her. No
                matter your recipient or the occasion, we can help you create
                something that’s totally unique. And totally them.
              </p>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-[28px] inter">
          Frequently Asked Questions
        </h1>
        {homegiftsFaqs.map((faq, index) => (
          <div key={index} className="pt-5 pb-3 border-b-2">
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
