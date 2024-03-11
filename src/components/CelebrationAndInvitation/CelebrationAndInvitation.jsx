import React from "react";
import Banner from "./Banner";
import Footer from "../Footer";
import ShopCategory from "./ShopCategory";
import Announcement from "../Announcement";
import PartyStarted from "./PartyStarted";
import LetsHear from "./LetsHear";
import Engaged from "./Engaged";
import Stationary from "./Stationary";
import PersonalizedParty from "./PersonalizedParty";
import CTA from "./CTA";
import FAQs from "./FAQs";
import CategoriesTabs from "./CategoriesTabs";

const CelebrationAndInvitation = () => {
  return (
    <>
      <Announcement />
      <Banner />
      <CategoriesTabs />
      <ShopCategory />
      <PartyStarted />
      <LetsHear />
      <Engaged />
      <Stationary />
      <PersonalizedParty />
      <CTA />
      <FAQs />
      <Footer />
    </>
  );
};

export default CelebrationAndInvitation;
