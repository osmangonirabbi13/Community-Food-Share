import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router";
import Loading from "./Loading";

const ManageFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure
      .get(`/get-donated-foods-on-manage-my-food?userEmail=${user?.email}`)
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
      text: "Once deleted, you will not be able to recover this food!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(
            `/user-donated-food-delete?donatedFoodId=${foodId}&verifyUserEmail=${user?.email}`
          )
          .then((res) => {
            if (res.data.deletedCount > 0) {
              axiosSecure
                .get(
                  `/get-donated-foods-on-manage-my-food?userEmail=${user?.email}`
                )
                .then((res) => {
                  setFoods(res.data);
                });

              Swal.fire("Deleted!", "Food has been deleted.", "success");
            }
          });

        axiosSecure
          .delete(
            `/user-requested-food-delete-by-donar?requestedFoodId=${foodId}&verifyUserEmail=${user?.email}`
          )
          .then((res) => {
            res.data;
          });
      }
    });
  };

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-center text-3xl pb-7">
        My Donated Food {foods?.length}
      </h1>

      {foods.length === 0 ? (
        <p className="text-center text-2xl">No foods found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300">
            <thead className="bg-gray-100 ">
              <tr>
                <th className="font-bold md:text-2xl">#</th>
                <th className="font-bold md:text-2xl">Food Name</th>
                <th className="font-bold md:text-2xl">Status</th>
                <th className="font-bold md:text-2xl">Edit</th>
                <th className="font-bold md:text-2xl">Delete</th>
              </tr>
            </thead>
            <tbody>
              {foods.map((food, index) => (
                <tr key={food._id}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2 underline hover:text-secondary">
                    {" "}
                    <Link to={`/available-food/${food._id}`}>
                      {" "}
                      {food.foodName}
                    </Link>
                  </td>
                  <td className="px-4 py-2 text-green-500">
                    {food.foodStatus}
                  </td>
                  <td className="px-4 py-2">
                    <Link to={`/update/${food._id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(food._id)}
                      className=" text-white px-3 py-1 rounded btn btn-error hover:bg-secondary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageFoods;
