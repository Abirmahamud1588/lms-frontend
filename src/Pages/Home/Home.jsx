import React from "react";
import Banner from "./Banner";
import Boxsec from "./Boxsec";
import Rightside from "./Rightside";
import Leftside from "./Leftside";
import Review from "./Review";
import Team from "./Team";
import Faq from "./Faq";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div>
      <Banner />
      <Boxsec />
      <Rightside />
      <Leftside />
      <Review />
      <Team />
      <Faq />
      <ContactForm />
    </div>
  );
};

export default Home;
