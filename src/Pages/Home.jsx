import React from "react";
import Hero from "../Components/Hero Seation/Hero";
import OurMission from "../Components/ourMission";
import WeHelp from "../Components/WeHelp/WeHelp";
import FeatureFoods from "./FeatureFoods";
import GetTouch from "../Components/GetTouch";
import Support from "../Components/Support";
import Volunteers from "../Components/Volunteers";

const Home = () => {
  return (
    <div className=" w-full">
      <Hero />
      <FeatureFoods />
      <OurMission />
      <Support />
      <WeHelp />
      <Volunteers />
      <GetTouch />
    </div>
  );
};

export default Home;
