import React from "react";
import Announcement from "../Announcement";
import Banner from "./Banner";
import RightProduct from "./RightProduct";
import CTAOne from "./CTAOne";
import CTATwo from "./CTATwo";
import Footer from "../BusinessCards/FooterBusinesscards";
import OurPicks from "./OurPicks";

const PromotionalProducts = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <RightProduct />
      <CTAOne />
      <OurPicks />
      <CTATwo />
      <Footer />
    </>
  );
};

export default PromotionalProducts;
