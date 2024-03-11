import React, { useState } from "react";
import { cardsFaqs } from "../../constants";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <section className="container px-8 w-full my-8">
        <div className="px-2 py-5 w-full max-w-[800px]">
          <h1 className="font-bold text-[28px] inter">
            Take your celebration to the next level with custom details that
            "wow" your crowd.
          </h1>
          <div className="py-8">
            <div className="space-y-4">
              <p className="inter text-[17px]">
                Life calls for a celebration. Many, in fact. Whether it’s your
                kiddo’s birthday or a wedding everyone’s invited to, VistaPrint
                is here. We’re here for the thrilling whirlwind that is party
                planning – with invites you can customize in minutes. For the
                moment you realize you need a present – with stationery gifts
                that have their name written all over them (literally). For when
                the party’s over, and you’re reveling in the afterglow of a good
                time – cue our thank you cards.
              </p>
              <p className="inter text-[17px]">
                And for the festive season, you'll find seasonal designs to make
                your holiday party truly stand out. Whether you're after classic
                Christmas motifs or bold looks, you can send invites and boast
                decorations that perfectly match your vision. No matter your
                style, there are so many ways to infuse joy into the everyday,
                all at budget- friendly prices. We wouldn’t have it any other
                way.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full max-w-[1024px]">
          <h1 className="font-bold text-[28px] inter">
            Frequently Asked Questions
          </h1>
          {cardsFaqs.map((faq, index) => (
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
        </div>
      </section>
    </>
  );
};

export default FAQs;
