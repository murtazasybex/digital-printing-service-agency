import React, { useState } from "react";
import { labelsStickersFaqs } from "../../constants";

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
            Create a professional look across products and packaging with
            personalized label stickers.
          </h1>
          <div className="py-8">
            <div className="space-y-2">
              <p className="inter text-[17px]">
                When it comes to branding, every jar, box or bag is a
                promotional opportunity. With VistaPrint’s fully customizable
                templates, you can design unique{" "}
                <span className="underline">product labels,</span>{" "}
                <span className="underline">clothing tags</span> and more
                without any design experience. Choose from various shapes and
                sizes, then add your logo, images and text for a can’t-miss
                look.
              </p>
              <p className="inter text-[17px]">
                We’ll help you create a suite of stickers, labels and packaging
                that’s all you – whether using{" "}
                <span className="underline">kids’ school labels</span> to
                feature your child’s name on frequently lost items,{" "}
                <span className="underline">mailer boxes</span> to personalize
                your shipments or custom-shaped stickers to showcase your
                creativity. Select the options that work, browse our design
                gallery or upload your own design.
              </p>
              <p className="inter text-[17px]">
                Whatever your need or business, you’ll find high-quality label
                sticker printing options and eye- catching templates to help you
                get noticed. Looking for inspiration? Here are{" "}
                <span className="underline">
                  7 ways to use custom stickers and labels
                </span>{" "}
                to make your products and packaging stand out.
              </p>
            </div>
          </div>
        </div>
        <h1 className="font-bold text-[28px] inter">
          Frequently Asked Questions
        </h1>
        {labelsStickersFaqs.map((faq, index) => (
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
