import React, { use } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Loading from "./Loading";
import { AuthContext } from "../Provider/AuthContext";
import FeatureFoodsCard from "../Components/FeatureFoodsCard";
import { Link } from "react-router";

const FeatureFoods = () => {
  const axiosSecure = useAxiosSecure();
  const { loading } = use(AuthContext);

  const {
    data: foods = [],
    isError,
    error,
  } = useQuery({
    queryKey: ["featuredFoods"],
    queryFn: async () => {
      const res = await axiosSecure.get("/featured-Foods");
      return res.data;
    },
  });

  if (loading) return <Loading />;

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="">
      <div className="max-w-lg mx-auto py-14">
        <h1 className="text-4xl text-center font-medium pb-5 ">
          {" "}
          Featured Foods
        </h1>
        <div className="h-[2px] w-[100px] bg-success mx-auto"></div>
        <p className="text-center text-xl  py-4">
          Delicious Meals Making a Difference Savor the Flavor of Generosity
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-2xl  mx-auto px-8 md:px-12 lg:px-16">
        {foods.map((food) => (
          <FeatureFoodsCard key={food._id} food={food}></FeatureFoodsCard>
        ))}
      </div>
      <div className="pt-10 flex items-center justify-center">
        <Link to="available-food">
          {" "}
          <button className="btn btn-accent text-xl px-5 py-2 ">
            View All
          </button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default FeatureFoods;
