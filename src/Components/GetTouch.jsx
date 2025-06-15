import React from "react";

const GetTouch = () => {
  return (
    <div className="pt-20  bg-[#FBF7EC] dark:bg-gray-900 dark:border-1 dark:shadow-sm text-black dark:text-white pb-10">
      <div className="w-full " bis_skin_checked="1">
        <div
          className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10"
          bis_skin_checked="1"
        >
          <h1 className="text-5xl antialiased font-semibold leading-none text-center ">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center ">
            Find out about events and other news
          </p>
          <div
            className="flex flex-row bg-white dark:bg-gray-500 rounded-xl"
            bis_skin_checked="1"
          >
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold cursor-pointer rounded-r-lg sm:w-1/3 bg-green-300 dark:bg-violet-600 dark:text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetTouch;
