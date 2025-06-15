import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import Loading from "../Pages/Loading";

const FeatureFoodsCard = ({ food }) => {
  const { loading } = use(AuthContext);
  const {
    foodName,
    foodImageUrl,
    pickupLocation,
    foodQuantity,
    expiredTime,
    description,
    donator_image,
    donator_name,
    _id,
    foodStatus,
  } = food;

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="shadow-md rounded-md p-3 border border-[#E5E7EB] group ">
      <div className="relative">
        <Link to={foodStatus === "Available" ? `/available-food/${_id}` : "/"}>
          <img
            className="transition-transform transform group-hover:scale-105 ease-in-out duration-500"
            src={foodImageUrl}
            alt={foodName}
          />
        </Link>
        <Link to={foodStatus === "Available" ? `/available-food/${_id}` : "/"}>
          <h1 className="text-2xl font-medium py-4 group-hover:text-primary ">
            {" "}
            {foodName}{" "}
          </h1>
        </Link>
        <p className="absolute top-3 right-3 bg-white py-1 px-2 rounded-lg text-xs">
          <span
            className={
              foodStatus === "Available" ? "text-green-500" : "text-orange-500"
            }
          >
            {foodStatus}
          </span>
        </p>
      </div>
      <div className="flex justify-around border-t-2 border-[#E5E7EB] py-3">
        <div className="flex-1">
          <img
            className="w-10  rounded-full"
            src={donator_image}
            alt={donator_name}
          />
          <p className="text-base font-medium ">{donator_name}</p>
        </div>
        <div className="flex-1">
          <p className="font-semibold ">Food Quantity</p>
          <p className="text-base font-semibold "> {foodQuantity} </p>
        </div>
      </div>
      <div className="flex justify-around border-t-2 border-[#E5E7EB] py-3">
        <div className="flex-1">
          <p className="font-semibold ">Pickup Location :</p>
          <p className="font-medium "> {pickupLocation} </p>
        </div>
        <div className="flex-1">
          <p className="font-semibold ">Expired Time :</p>
          <p className="font-medium "> {expiredTime} hr </p>
        </div>
      </div>
      <div className="border-t-2 py-3 border-[#E5E7EB]">
        <p className="font-semibold ">Donner Notes :</p>
        <p className="font-medium "> {description} </p>
      </div>
      <div className="py-5">
        <Link
          className={`text-black py-2 px-3 text-sm font-medium rounded-md hover:bg-secondary ${
            foodStatus === "Available" ? "bg-accent" : "bg-[#0000004d]"
          }`}
          to={foodStatus === "Available" ? `/available-food/${_id}` : "/"}
        >
          {" "}
          View Details{" "}
        </Link>
      </div>
    </div>
  );
};

export default FeatureFoodsCard;
