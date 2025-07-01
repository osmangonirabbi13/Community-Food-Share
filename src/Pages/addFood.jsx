import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;

    const foodName = form.foodName.value || "Unknown";
    const foodImageUrl = form.foodImageUrl.value || "Unknown";
    const pickupLocation = form.pickupLocation.value || "Unknown";
    const foodQuantity = form.foodQuantity.value || "Unknown";
    const expiredTime = form.expiredTime.value || "Unknown";
    const description = form.description.value || "Unknown";
    const foodStatus = "Available";
    const donator_image =
      user?.photoURL || "https://i.ibb.co/k2mWfq6/placeholder.jpg";
    const donator_name = user?.displayName || "Unknown";
    const donator_email = user?.email || "Unknown";

    const newFood = {
      foodName,
      foodImageUrl,
      pickupLocation,
      foodQuantity,
      expiredTime,
      description,
      foodStatus,
      donator_image,
      donator_name,
      donator_email,
    };

    axiosSecure
      .post("/foodshares", newFood)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Food added successfully");
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-2 py-2 lg:px-50 lg:py-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
      <div className="p-6 md:p-24 shadow-blue-200 dark:shadow-gray-700 shadow-2xl rounded-2xl bg-gray-50 dark:bg-gray-800">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Add A New Food</h1>
        </div>
        <form onSubmit={handleAddFood} className="grid gap-4">
          {/* Food Name */}
          <label className="label font-bold text-lg">Food Name:</label>
          <input
            name="foodName"
            className="input input-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
            placeholder="Add a Food Name"
            required
          />

          {/* Food Image URL */}
          <label className="label font-bold text-lg">Food Image URL:</label>
          <input
            name="foodImageUrl"
            className="input input-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
            placeholder="Food Image URL"
            required
          />

          {/* Pickup Location */}
          <label className="label font-bold text-lg">Pickup Location:</label>
          <input
            name="pickupLocation"
            className="input input-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
            placeholder="Pickup Location"
            required
          />

          {/* Quantity and Expired Time */}
          <div className="flex flex-col md:flex-row w-full gap-5">
            <div className="card rounded-box grid h-20 grow">
              <label className="label font-bold text-lg">Food Quantity:</label>
              <input
                type="number"
                name="foodQuantity"
                className="input input-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
                placeholder="Food Quantity"
                required
              />
            </div>

            <div className="card rounded-box grid h-20 grow">
              <label className="label font-bold text-lg">Expired Time:</label>
              <select
                name="expiredTime"
                className="select select-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
                required
              >
                <option value="">Expired Time</option>
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

          {/* Additional Notes */}
          <label className="label font-bold text-lg">Additional Notes:</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full bg-white dark:bg-gray-700 text-black dark:text-white"
            placeholder="Additional Notes"
            required
          ></textarea>

          {/* Submit Button */}
          <input
            type="submit"
            value="Add Food"
            className="btn btn-success w-full"
          />
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default AddFood;
