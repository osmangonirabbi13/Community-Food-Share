import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthContext";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router";

const ManageFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axiosSecure
      .get(`/get-donated-foods-on-manage-my-food?userEmail=${user?.email}`)
      .then((res) => {
        setFoods(res.data);
      });
  }, [axiosSecure, user?.email]);

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
              // update foods list
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
            res.data; // optional
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
        <p>No foods found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th>#</th>
                <th>Food Name</th>
                <th>Status</th>
                <th>Edit</th>
                <th>Delete</th>
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
                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                      Edit
                    </button>
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(food._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
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
