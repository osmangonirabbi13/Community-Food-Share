import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthContext";
import { FaUtensils, FaClipboardList, FaStar } from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  const [totalFoods, setTotalFoods] = useState(0);
  const [myDonatedFoods, setMyDonatedFoods] = useState(0);
  const [myRequestedFoods, setMyRequestedFoods] = useState(0);
  const [featuredFoods, setFeaturedFoods] = useState(0);
  const [foodShareData, setFoodShareData] = useState([]);

  // Total Foods
  useEffect(() => {
    axiosSecure.get("/foodshares").then((res) => {
      setTotalFoods(res.data.length);
      // Prepare chart data
      const transformed = res.data.map((food) => ({
        name: food.foodName,
        quantity: food.foodQuantity,
      }));
      setFoodShareData(transformed);
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

  const pieData = [
    { name: "Total Foods", value: totalFoods },
    { name: "My Donated", value: myDonatedFoods },
    { name: "My Requested", value: myRequestedFoods },
    { name: "Featured", value: featuredFoods },
  ];
  const COLORS = ["#4CAF50", "#FF9800", "#F44336", "#2196F3"];

  return (
    <div>
      <h1 className="text-3xl md:text-5xl font-bold text-primary dark:text-white mb-8">
        Welcome to Your Dashboard!
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
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
        <StatCard
          icon={FaClipboardList}
          title="My Requested Foods"
          value={myRequestedFoods}
          color="#F44336"
        />
        <StatCard
          icon={FaStar}
          title="Featured Foods"
          value={featuredFoods}
          color="#2196F3"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-primary dark:text-white">
            Food Quantity Overview
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={foodShareData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: "#555" }} />
              <YAxis tick={{ fill: "#555" }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="quantity" fill="#4F46E5" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-primary dark:text-white">
            Food Stats Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
