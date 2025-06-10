import React from "react";
import donateimg from "../assets/donationimg.jpg";

const OurMission = () => {
  return (
    <div>
      <section className="container mx-auto px-3 pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-16 items-center py-20">
          <div>
            <img className="w-full" src={donateimg} alt="Donate Image" />
          </div>
          <div className="mt-10 lg:mt-0">
            <h1 className="text-center lg:text-left text-4xl font-medium pb-5 ">
              {" "}
              Our Mission{" "}
            </h1>
            <div className="h-[2px] w-[100px] bg-secondary mx-auto lg:mx-0"></div>
            <p className="text-center lg:text-left  text-xl  py-5">
              {" "}
              To provide our neighbours with access to healthy food by:
              Promoting the benefits of nutrition; building community
              partnerships; and supporting our clients through a variety of life
              challenges.{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
