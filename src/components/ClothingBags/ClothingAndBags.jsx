import React from "react";
import Banner from "./Banner";
import Announcement from "../Announcement";
import Personalize from "./Personalize";
import CTAOne from "./CTAOne";
import Collections from "./Collections";
import CTATwo from "./CTATwo";
import FooterSecondary from "../BusinessCards/FooterBusinesscards";
import CustomText from "./CustomText";

const ClothingAndBags = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <Personalize />
      <CTAOne />
      <Collections />
      <CTATwo />
      <CustomText />
      <FooterSecondary />
    </>
  );
};

export default ClothingAndBags;
