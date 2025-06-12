import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router";
import { AuthContext } from "../Provider/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const SingleFood = () => {
  const { id } = useParams();
  const [food, setFood] = useState({});
  const { user } = use(AuthContext);
  const [foodExpireTime, setFoodExpireTime] = useState(null);
  const [foodAddedSuccessPopUp, setFoodAddedSuccessPopUp] = useState(null);

  const currentDate = new Date();
  const date = `${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}-${currentDate.getFullYear()}`;

  useEffect(() => {
    if (food.expiredTime) {
      setFoodExpireTime(food.expiredTime + " hr");
    }
  }, [food.expiredTime]);

  useEffect(() => {
    axios.get(`http://localhost:3000/foodshares/${id}`).then((res) => {
      setFood(res.data);
    });
  }, [id]);

  const handleFoodRequest = (e) => {
    e.preventDefault();

    const form = e.target;

    const foodName = form.food_name.value || "Unknown";
    const foodImageUrl = form.food_image.value || "Unknown";
    const food_id = form.food_id.value || "Unknown";
    const donator_email = form.donator_email.value || "Unknown";
    const donator_name = form.donator_name.value || "Unknown";
    const food_requester_email = form.food_requester_email.value || "Unknown";
    const request_date = form.request_date.value || "Unknown";
    const pickupLocation = form.pickup_location.value || "Unknown";
    const expiredTime = form.expired_time.value || "Unknown";
    const foodStatus = form.food_status.value || "Unknown";
    const requester_additional_notes =
      form.requester_additional_notes.value || "Unknown";
    const requester_name = user?.displayName || "Unknown";
    const requester_image =
      user?.photoURL || "https://i.ibb.co/k2mWfq6/placeholder.jpg";

    const RequestedFood = {
      food_id,
      food_requester_email,
      request_date,
      requester_additional_notes,
      requester_name,
      requester_image,
      foodName,
      foodImageUrl,
      pickupLocation,
      expiredTime,
      foodStatus,
      donator_name,
      donator_email,
    };

    axios
      .post("http://localhost:3000/user-add-requested-foods", RequestedFood)
      .then((res) => {
        if (res.data.insertedId) {
          setFoodAddedSuccessPopUp(res.data.insertedId);
          toast.success("Food added successfully");
          form.reset();
        }
      });
  };

  return (
    <div>
      <section className="container mx-auto px-4 py-5">
        <div className="mx-auto p-10 max-w-3xl shadow hover:shadow-md border my-6 rounded-md">
          <h1 className="text-3xl dark:text-white">Donor Information</h1>
          <img
            className="py-3 w-20 rounded-2xl dark:text-white"
            src={food?.donator_image}
            alt={food?.donator_name}
          />
          <p className="text-lg py-1 dark:text-white">
            {" "}
            <span className="font-medium"> Donar Name: </span>{" "}
            {food?.donator_name}
          </p>
          <p className="text-lg py-1 dark:text-white">
            {" "}
            <span className="font-medium"> Food Pickup Location: </span>{" "}
            {food?.pickupLocation}
          </p>
          <p className="text-lg py-1 dark:text-white">
            {" "}
            <span className="font-medium"> Food Status: </span>{" "}
            <span
              className={
                food.foodStatus === "Available"
                  ? "text-green-500"
                  : "text-orange-500"
              }
            >
              {food?.foodStatus}
            </span>{" "}
          </p>
        </div>
        <div className="mx-auto p-3 pb-8 max-w-3xl shadow hover:shadow-md border my-6 rounded-md">
          <img
            className="pb-3 rounded-xl w-full dark:text-white"
            src={food?.foodImageUrl}
            alt={food?.donator_name}
          />
          <h1 className="text-2xl font-medium py-4 dark:text-white">
            {food?.foodName}
          </h1>
          <p className="text-lg py-1 dark:text-white">
            {" "}
            <span className="font-medium"> Food Quantity : </span>{" "}
            {food?.foodQuantity}
          </p>
          <p className="text-lg py-1 dark:text-white">
            {" "}
            <span className="font-medium"> Expired Time: </span>{" "}
            {food?.expiredTime} hr
          </p>

          {food.foodStatus === "Available" ? (
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="bg-secondary text-white py-2 px-3 text-sm font-medium rounded-md mt-3 dark:text-white"
            >
              Request for this food
            </button>
          ) : (
            <button
              onClick={() => toast.error("This food is already delivered")}
              className="bg-[#00000061] text-white py-2 px-3 text-sm font-medium rounded-md mt-3 dark:text-white"
            >
              Request for this food
            </button>
          )}
        </div>

        <dialog id="my_modal_3" className="modal  ">
          <div className="modal-box bg-white">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-secondary">
                ✕
              </button>
            </form>
            <div>
              {/* Modal content  */}
              <form onSubmit={handleFoodRequest}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="food_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Name
                    </label>
                    <input
                      type="text"
                      name="food_name"
                      id="food_name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      defaultValue={food?.foodName}
                      readOnly
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="food_image"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Image URL
                    </label>
                    <input
                      type="url"
                      name="food_image"
                      id="food_image"
                      defaultValue={food?.foodImageUrl}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="food_id"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food ID
                    </label>
                    <input
                      type="text"
                      name="food_id"
                      id="food_id"
                      defaultValue={food?._id}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="donator_email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Donator email
                    </label>
                    <input
                      type="email"
                      name="donator_email"
                      id="donator_email"
                      defaultValue={food?.donator_email}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="donator_name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Donator name
                    </label>
                    <input
                      type="text"
                      name="donator_name"
                      id="donator_name"
                      defaultValue={food?.donator_name}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="food_requester_email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food requester email (current user email)
                    </label>
                    <input
                      type="email"
                      name="food_requester_email"
                      id="food_requester_email"
                      defaultValue={user?.email}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="request_date"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Request Date
                    </label>
                    <input
                      type="text"
                      name="request_date"
                      id="request_date"
                      defaultValue={date}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="pickup_location"
                      className="block mb-2 text-sm font-medium text-gray-900 "
                    >
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      name="pickup_location"
                      id="pickup_location"
                      defaultValue={food?.pickupLocation}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="expired_time"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Expired Time
                    </label>
                    <input
                      type="text"
                      name="expired_time"
                      id="expired_time"
                      defaultValue={foodExpireTime}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="food_status"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Status
                    </label>
                    <input
                      type="text"
                      name="food_status"
                      id="food_status"
                      defaultValue={food?.foodStatus}
                      readOnly
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      required
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="requester_additional_notes"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Food Requester Additional Notes
                    </label>
                    <textarea
                      name="requester_additional_notes"
                      id="requester_additional_notes"
                      rows={6}
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  {food.foodStatus === "Available" ? (
                    <input
                      type="submit"
                      value="Submit"
                      className="cursor-pointer inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-secondary rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                    />
                  ) : (
                    <button
                      onClick={() =>
                        toast.error("This food is already delivered")
                      }
                      className=" bg-secondary text-white py-2 px-3 text-sm font-medium rounded-md mt-3 dark:text-white"
                    >
                      Submit
                    </button>
                  )}

                  {foodAddedSuccessPopUp ? (
                    <p className="text-base text-green-500 py-3 mt-6">
                      Food request send successfully{" "}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </section>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default SingleFood;
