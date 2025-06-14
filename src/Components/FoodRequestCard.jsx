import { Link } from "react-router";
import Swal from "sweetalert2";

const FoodRequestCard = ({ food, handleDelete }) => {
  const {
    foodName,
    food_id,
    donator_email,
    donator_name,
    request_date,
    pickupLocation,
    expiredTime,
    _id,
    foodStatus,
  } = food;

  return (
    <div>
      <div className="shadow hover:shadow-md p-4 border border-[#E5E7EB] group">
        <p className="py-1 ">
          <b>Food Name :</b>{" "}
          <Link
            className="group-hover:text-secondary group-hover:underline"
            to={`/available-food/${food_id}`}
          >
            {" "}
            {foodName}{" "}
          </Link>{" "}
        </p>
        <p className="py-1 ">
          <b>Donar Name :</b> {donator_name}{" "}
        </p>
        <p className="py-1 ">
          <b>Donar Email :</b> {donator_email}{" "}
        </p>
        <p className="py-1 ">
          <b>Expire Time :</b> {expiredTime}{" "}
        </p>
        <p className="py-1 ">
          <b>Pickup Location :</b> {pickupLocation}{" "}
        </p>
        <p className="py-1 ">
          <b>Request Date :</b> {request_date}{" "}
        </p>
        <p className="py-1 ">
          <b>Food Status :</b>{" "}
          <span
            className={
              foodStatus === "Available" ? "text-green-500" : "text-orange-500"
            }
          >
            {foodStatus}
          </span>{" "}
        </p>
        <div>
          <button
            className={`${
              foodStatus === "Available"
                ? "text-black text-lg  cursor-pointer btn bg-secondary"
                : "text-[#00000061]"
            }  mt-6`}
            onClick={() =>
              foodStatus === "Available"
                ? handleDelete(_id)
                : Swal({
                    text: "This food is already delivered",
                    icon: "warning",
                    buttons: false,
                  })
            }
          >
            Cancel this Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodRequestCard;
