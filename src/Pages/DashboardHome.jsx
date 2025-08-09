import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthContext";
import { FaUtensils, FaClipboardList, FaStar } from "react-icons/fa";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [totalFoods, setTotalFoods] = useState(0);
  const [myDonatedFoods, setMyDonatedFoods] = useState(0);
  const [myRequestedFoods, setMyRequestedFoods] = useState(0);
  const [featuredFoods, setFeaturedFoods] = useState(0);

  // Total Foods
  useEffect(() => {
    axiosSecure.get("/foodshares").then((res) => {
      setTotalFoods(res.data.length);
    });
  }, [axiosSecure]);

  // My Donated Foods
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/get-donated-foods-on-manage-my-food?userEmail=${user.email}`)
        .then((res) => {
          setMyDonatedFoods(res.data.length);
        });
    }
  }, [axiosSecure, user?.email]);

  // My Requested Foods
  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/get-requested-foods?userEmail=${user.email}`)
        .then((res) => {
          setMyRequestedFoods(res.data.length);
        });
    }
  }, [axiosSecure, user?.email]);

  // Featured Foods
  useEffect(() => {
    axiosSecure.get("/featured-Foods").then((res) => {
      setFeaturedFoods(res.data.length);
    });
  }, [axiosSecure]);

  // Card component
  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div
      className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 flex items-center gap-4 border-l-4"
      style={{ borderColor: color }}
    >
      <div
        className="p-3 rounded-full text-white text-2xl"
        style={{ backgroundColor: color }}
      >
        <Icon />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          {title}
        </h2>
        <p className="text-2xl font-bold text-primary dark:text-white">
          {value}
        </p>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
        Welcome to Your Dashboard!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard
          icon={FaUtensils}
          title="Total Foods"
          value={totalFoods}
          color="#4CAF50"
        />
        <StatCard
          icon={FaClipboardList}
          title="My Donated Foods"
          value={myDonatedFoods}
          color="#FF9800"
        />
      </div>
    </div>
  );
};

export default DashboardHome;
