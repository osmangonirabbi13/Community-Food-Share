import React from "react";
import { Link } from "react-router";

const AvailableFoodCard = ({ food }) => {
  const {
    foodName,
    foodImageUrl,
    pickupLocation,
    foodQuantity,
    expiredTime,
    description,
    foodStatus,
    donator_image,
    donator_name,
    _id,
  } = food;

  return (
    <div>
      <div className="shadow-md rounded-md p-3 border border-[#E5E7EB] dark:border-none dark:bg-gray-800 group ">
        <div className="relative">
          <Link
            to={
              foodStatus === "Available"
                ? `/available-food/${_id}`
                : "/available-foods"
            }
          >
            <img
              className="transition-transform transform group-hover:scale-105 ease-in-out duration-500 h-[350px] object-cover"
              src={foodImageUrl}
              alt={foodImageUrl}
            />
          </Link>
          <Link
            to={
              foodStatus === "Available"
                ? `/available-food/${_id}`
                : "/available-foods"
            }
          >
            <h1 className="text-2xl font-medium py-4 group-hover:text-secondary">
              {" "}
              {foodName}{" "}
            </h1>
          </Link>
          <p className="absolute top-3 right-3 bg-white py-1 px-2 rounded-lg text-xs">
            <span
              className={
                foodStatus === "Available"
                  ? "text-green-500"
                  : "text-orange-500"
              }
            >
              {foodStatus}
            </span>
          </p>
        </div>
        <div className="flex justify-around border-t-2 border-[#E5E7EB] py-3">
          <div className="flex-1">
            <img
              className="w-10   rounded-full"
              src={donator_image}
              alt={donator_name}
            />
            <p className="text-base font-medium ">{donator_name}</p>
          </div>
          <div className="flex-1 ">
            <p className="font-semibold ">
              <span className="font-bold text-lg">Food Quantity : </span>
              <span className="text-wrap">{foodQuantity}</span>
            </p>
          </div>
        </div>
        <div className=" gap-4 border-t-2 border-[#E5E7EB] py-3">
          <div className="">
            <p className="font-semibold  ">
              <span className="font-bold text-lg"> Pickup Location :</span>{" "}
              <span className="text-wrap">{pickupLocation}</span>{" "}
            </p>
          </div>
          <div className="">
            <p className="font-semibold ">
              <span className="font-bold text-lg">Expired Time :</span>{" "}
              <span className="text-wrap">{expiredTime} hr </span>
            </p>
          </div>
        </div>
        <div className="border-t-2 border-[#E5E7EB] py-3 ">
          <p className="font-semibold  truncate">
            <span className="font-bold text-lg"> Donner Notes : </span>
            <span className="text-wrap  ">{description}</span>{" "}
          </p>
        </div>
        <div className="py-5">
          <Link
            className={`text-white py-2 px-3 text-sm font-medium rounded-md ${
              foodStatus === "Available" ? "bg-secondary" : "bg-[#0000004d]"
            }`}
            to={
              foodStatus === "Available"
                ? `/available-food/${_id}`
                : "/available-foods"
            }
          >
            {" "}
            View Details{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
