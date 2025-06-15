import React from "react";
import Hero from "../Components/Hero Seation/Hero";
import OurMission from "../Components/ourMission";
import WeHelp from "../Components/WeHelp/WeHelp";
import FeatureFoods from "./FeatureFoods";
import GetTouch from "../Components/GetTouch";
import Support from "../Components/Support";

const Home = () => {
  return (
    <div className=" w-full">
      <Hero />
      <FeatureFoods />
      <OurMission />
      <Support />
      <WeHelp />
      <GetTouch />
    </div>
  );
};

export default Home;
