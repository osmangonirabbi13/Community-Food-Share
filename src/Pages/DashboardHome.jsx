import React, { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { FaUtensils } from "react-icons/fa";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const [totalFood, setTotalFood] = useState(0);

  useEffect(() => {
    axiosSecure
      .get("/foodshares")
      .then((res) => {
        setTotalFood(res.data.length);
      })
      .catch((err) => {
        console.error("Error fetching food shares:", err);
      });
  }, [axiosSecure]);

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
        Welcome to Your Dashboard!
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3">
        {/* Card 1*/}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center gap-4 w-64 border-l-4 border-primary">
          <div className="bg-primary p-3 rounded-full text-white text-2xl">
            <FaUtensils />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Total Food
            </h2>
            <p className="text-2xl font-bold text-primary dark:text-white">
              {totalFood}
            </p>
          </div>
        </div>
        {/* Card 2*/}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center gap-4 w-64 border-l-4 border-primary">
          <div className="bg-primary p-3 rounded-full text-white text-2xl">
            <FaUtensils />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Total Food
            </h2>
            <p className="text-2xl font-bold text-primary dark:text-white">
              {totalFood}
            </p>
          </div>
        </div>
        {/* Card 3*/}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center gap-4 w-64 border-l-4 border-primary">
          <div className="bg-primary p-3 rounded-full text-white text-2xl">
            <FaUtensils />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              Total Food
            </h2>
            <p className="text-2xl font-bold text-primary dark:text-white">
              {totalFood}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
