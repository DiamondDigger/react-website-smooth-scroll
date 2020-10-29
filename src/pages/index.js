import React, { useState } from "react";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      {/* <InfoSection {...homeObjThree}/> */}
      <Services/>
      <InfoSection {...homeObjFour}/>
    </>
  );
};

export default Home;
