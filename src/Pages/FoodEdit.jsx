import React, { use, useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthContext";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import Loading from "./Loading";

const FoodEdit = () => {
  const [food, setFood] = useState({});
  const axiosSecure = useAxiosSecure();
  const { user, loading } = use(AuthContext);
  const { id } = useParams();

  useEffect(() => {
    axiosSecure
      .get(
        `/get-donated-foods-on-edit-page-input-field?productId=${id}&verifyUserEmail=${user?.email}`
      )
      .then((res) => {
        setFood(res.data);
      });
  }, [id, axiosSecure, user?.email]);

  if (loading) {
    return <Loading />;
  }

  const handleUpdateFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const UpdatedFood = Object.fromEntries(formData.entries());

    axiosSecure
      .put(
        `/donner-edit-foods/${id}?verifyUserEmail=${user?.email}`,
        UpdatedFood
      )
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            text: "Food updated successfully",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });
        }
      });
  };

  return (
    <div className=" px-2 py-2  lg:px-50 lg:py-10">
      <div className="p-6 md:p-24 shadow-blue-200 shadow-2xl rounded-2xl   ">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold"> Update Food </h1>
        </div>
        <form onSubmit={handleUpdateFood} className="grid gap-4">
          <label className="label text-black font-bold text-lg">
            Food Name :{" "}
          </label>
          <input
            name="foodName"
            defaultValue={food.foodName}
            className="input input-bordered w-full"
            placeholder="Add a Food Name"
            required
          />
          {/* Food Image URL */}
          <label className="label text-black font-bold text-lg">
            Food Image URL :{" "}
          </label>
          <input
            name="foodImageUrl"
            defaultValue={food.foodImageUrl}
            className="input input-bordered w-full"
            placeholder="Food Image URL
"
            required
          />
          {/* Pickup Location */}

          <label className="label text-black font-bold text-lg">
            Pickup Location :{" "}
          </label>
          <input
            name="pickupLocation"
            defaultValue={food.pickupLocation}
            className="input input-bordered w-full"
            placeholder="Pickup Location"
            required
          />

          <div className="flex w-full gap-5">
            <div className="card  rounded-box grid h-20 grow ">
              <label className="label text-black font-bold text-lg">
                Food Quantity :
              </label>
              <input
                type="number"
                name="foodQuantity"
                defaultValue={food.foodQuantity}
                className="input input-bordered w-full "
                placeholder="Food Quantity"
                required
              />
            </div>

            <div className="card  rounded-box grid h-20 grow ">
              <label className="label text-black font-bold text-lg">
                Expired Time :
              </label>
              <select
                name="expiredTime"
                defaultValue={food.expiredTime}
                className="select select-bordered w-full"
                required
              >
                <option value="">Expired Time </option>
                <option value="3">3 hr</option>
                <option value="7">7 hr</option>
                <option value="12">12 hr</option>
                <option value="24">24 hr</option>
                <option value="36">36 hr</option>
                <option value="48">48 hr</option>
                <option value="60">60 hr</option>
                <option value="72">72 hr</option>
              </select>
            </div>
          </div>

          <label className="label text-black font-bold text-lg">
            Additional Notes :{" "}
          </label>
          <textarea
            name="description"
            defaultValue={food.description}
            className="textarea textarea-bordered w-full"
            placeholder="Additional Notes"
            required
          ></textarea>

          <input
            type="submit"
            value="Update Food"
            className="btn btn-primary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default FoodEdit;
