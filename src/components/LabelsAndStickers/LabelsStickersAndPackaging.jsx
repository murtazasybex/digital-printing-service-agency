import React from "react";
import Banner from "./Banner";
import Announcement from "../Announcement";
import BrandedLabels from "./BrandedLabels";
import Stickers from "./Stickers";
import CTAOne from "./CTAOne";
import CTATwo from "./CTATwo";
import Packaging from "./Packaging";
import FAQs from "./FAQs";
import Footer from "../Footer";

const LabelsStickersAndPackaging = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <BrandedLabels />
      <Stickers />
      <CTAOne />
      <Packaging />
      <CTATwo />
      <FAQs />
      <Footer />
    </>
  );
};

export default LabelsStickersAndPackaging;
