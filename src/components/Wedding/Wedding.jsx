import React from "react";
import Banner from "./Banner";
import Announcement from "../Announcement";
import ShopCategory from "./ShopCategory";
import BigdayBestseller from "./BigdayBestseller";
import CTA from "./CTA";
import GetInspired from "./GetInspired";
import InviteThemes from "./InviteThemes";
import FAQs from "./FAQs";
import FooterSecondary from "../BusinessCards/FooterBusinesscards";

const Wedding = () => {
  return (
    <>
      <Announcement />
      <Banner />
      {/* <ShopCategory /> */}
      <BigdayBestseller />
      <CTA />
      <InviteThemes />
      <GetInspired />
      <FAQs />
      <FooterSecondary />
    </>
  );
};

export default Wedding;
