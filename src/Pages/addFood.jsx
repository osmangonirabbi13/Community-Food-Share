import React from "react";

const addFood = () => {
  const handleAddFood = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());

    console.log(newTask);
  };
  return (
    <div className=" px-2 py-2  lg:px-50 lg:py-10">
      <div className="p-6 md:p-24 shadow-blue-200 shadow-2xl rounded-2xl   ">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">Add A New Food</h1>
        </div>
        <form onSubmit={handleAddFood} className="grid gap-4">
          <label className="label">Food Name : </label>
          <input
            name="foodName"
            className="input input-bordered w-full"
            placeholder="Add a Food Name"
            required
          />
          {/* Food Image URL */}
          <label className="label">Food Image URL : </label>
          <input
            name="foodImageUrl"
            className="input input-bordered w-full"
            placeholder="Food Image URL
"
            required
          />
          {/* Pickup Location */}

          <label className="label">Pickup Location : </label>
          <input
            name="pickupLocation"
            className="input input-bordered w-full"
            placeholder="Pickup Location"
            required
          />

          <div className="flex w-full gap-5">
            <div className="card  rounded-box grid h-20 grow ">
              <label className="label ">Food Quantity</label>
              <input
                type="number"
                name="foodQuantity"
                className="input input-bordered w-full "
                placeholder="Food Quantity"
                required
              />
            </div>

            <div className="card  rounded-box grid h-20 grow ">
              <label className="label">Expired Time</label>
              <select
                name="expiredTime"
                className="select select-bordered w-full"
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

          <label className="label">Additional Notes : </label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Additional Notes"
            required
          ></textarea>

          <input
            type="submit"
            value="Add Food"
            className="btn btn-primary w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default addFood;
