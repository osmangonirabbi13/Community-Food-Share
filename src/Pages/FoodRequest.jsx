import React, { use, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { AuthContext } from "../Provider/AuthContext";
import FoodRequestCard from "../Components/FoodRequestCard";
import Swal from "sweetalert2";
import Loading from "./Loading";
const FoodRequest = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState();
  const { user, loading } = use(AuthContext);

  useEffect(() => {
    axiosSecure
      .get(`/get-requested-foods?userEmail=${user?.email}`)
      .then((res) => {
        setFoods(res.data);
      });
  }, [axiosSecure, user?.email]);
  if (loading) {
    return <Loading />;
  }

  const handleDelete = (foodId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this request!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(
            `/user-request-delete?requestedFoodId=${foodId}&verifyUserEmail=${user?.email}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              axiosSecure
                .get(`/get-requested-foods?userEmail=${user?.email}`)
                .then((res) => {
                  setFoods(res.data);
                });

              Swal.fire({
                text: "Request Deleted Successfully",
                icon: "success",
                timer: 1500,
                showConfirmButton: false,
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="px-5 lg:px-1 pb-10">
        <h1 className="text-3xl text-center pt-5 pb-8 ">
          My Food Request {foods?.length}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-screen-3xl  mx-auto px-8 md:px-12 lg:px-16">
          {foods?.map((food) => (
            <FoodRequestCard
              key={food._id}
              food={food}
              handleDelete={handleDelete}
            ></FoodRequestCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRequest;
