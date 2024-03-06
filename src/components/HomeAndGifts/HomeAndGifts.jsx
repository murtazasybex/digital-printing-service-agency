import React from "react";
import Footer from "../Footer";
import Banner from "./Banner";
import Bestselling from "./Bestselling";
import CustomArt from "./CustomArt";
import Keepsakes from "./Keepsakes";
import CTAOne from "./CTAOne";
import CustomCalender from "./CustomCalender";
import Drinkware from "./Drinkware";
import FAQs from "./FAQs";
import Announcement from "../Announcement";

const HomeAndGifts = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <Bestselling />
      <CustomArt />
      <Keepsakes />
      <CTAOne />
      <CustomCalender />
      <Drinkware />
      <FAQs />
      <Footer />
    </>
  );
};

export default HomeAndGifts;
