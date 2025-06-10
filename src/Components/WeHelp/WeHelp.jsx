import React from "react";
import { Link } from "react-router";
const WeHelp = () => {
  return (
    <div>
      <section className="container mx-auto px-4">
        <div className="max-w-lg mx-auto py-14">
          <h1 className="text-4xl text-center font-medium pb-5 ">
            {" "}
            How Can We Help?
          </h1>
          <div className="h-[2px] w-[100px] bg-secondary mx-auto"></div>
          <p className="text-center text-xl  py-5">
            There are numerous ways you can help us make a difference in our
            community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center items-center max-w-5xl mx-auto">
          <div className="food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
            <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
              <div className="w-3/4 mx-auto">
                <h1 className="text-3xl text-primary-700 text-center font-medium ">
                  Donate Food{" "}
                </h1>
                <p className="text-center text-lg ">
                  You can donate food to any of our Food Bank locations during
                  office hours.
                </p>
                <Link className="text-secondary underline">Learn more</Link>
              </div>
            </div>
          </div>

          <div className="grow food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
            <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
              <div className="w-3/4 mx-auto">
                <h1 className="text-3xl text-primary-700 text-center font-medium ">
                  Grow a Row{" "}
                </h1>
                <p className="text-center text-lg  py-2">
                  If you grew too much in your garden, please donate it to us.
                  We’ll see that it gets used by those in need.
                </p>
                <Link className="text-secondary underline">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="money food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
            <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
              <div className="w-3/4 mx-auto">
                <h1 className="text-3xl text-primary-700 text-center font-medium ">
                  {" "}
                  Donate Money{" "}
                </h1>
                <p className="text-center text-lg  py-2">
                  Monetary donations allow us to keep our shelves stocked
                  throughout the year.
                </p>
                <Link className="text-secondary underline">Learn more</Link>
              </div>
            </div>
          </div>
          <div className="volunteer food_donate bg-cover bg-no-repeat bg-center shadow hover:shadow-md rounded-md">
            <div className="text-center h-96 bg-[#ffffffc2] flex justify-center items-center">
              <div className="w-3/4 mx-auto">
                <h1 className="text-3xl text-primary-700 text-center font-medium ">
                  {" "}
                  Volunteer{" "}
                </h1>
                <p className="text-center text-lg  py-2">
                  We are always looking for people to lend a hand, in a variety
                  of capacities.
                </p>
                <Link className="text-secondary underline">Learn more</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WeHelp;
