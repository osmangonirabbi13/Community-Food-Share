import React, { useEffect, useState } from "react";
import AvailableFoodCard from "../Components/AvailableFoodCard";
import axios from "axios";
import Loading from "./Loading";

const AvailableFoods = () => {
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value;
    setSearchText(searchText);
  };

  useEffect(() => {
    axios.get("http://localhost:3000/foodshares/").then((res) => {
      console.log(res.data);
      setFoods(res.data);
    });
  }, []);

  return (
    <div>
      <div className="container mx-auto px-5 pb-24">
        <section className="flex gap-4 py-11 flex-col lg:flex-row justify-center items-center">
          <form
            className="flex-1 min-w-[350px] lg:min-w-max"
            onSubmit={handleSearch}
          >
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                name="searchText"
                placeholder="Search Foods"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                required
              />
              <button
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
              >
                Search
              </button>
            </div>
          </form>
          <form className="min-w-[350px] lg:min-w-max">
            <select
              className="select select-bordered w-full max-w-xs "
              name="filterText"
              onChange={(e) => setFilteredText(e.target.value)}
            >
              <option value="">Filter Foods By Expire Time</option>
              <option value="3">3 hr</option>
              <option value="7">7 hr</option>
              <option value="12">12 hr</option>
              <option value="24">24 hr</option>
              <option value="36">36 hr</option>
              <option value="48">48 hr</option>
              <option value="60">60 hr</option>
              <option value="72">72 hr</option>
            </select>
          </form>
          <div className="min-w-[350px] lg:min-w-max">
            {/* <button
              className="border py-3 px-4 rounded-lg border-black dark:border-white w-full max-w-xs dark:text-white dark:bg-gray-600"
              onClick={() => setAsc(!asc)}
            >
              {asc ? "Quantity Low To High" : "Quantity High To Low"}
            </button> */}
          </div>
        </section>
        <section>
          <h1 className="text-4xl font-medium text-center pb-14 ">
            {" "}
            Available Foods
          </h1>
        </section>
        <section>
          {foods.length === 0 ? (
            <>
              <p>
                <Loading />
              </p>
            </>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-9">
                {foods.map((food) => (
                  <AvailableFoodCard
                    key={food._id}
                    food={food}
                  ></AvailableFoodCard>
                ))}
              </div>
            </>
          )}
        </section>
      </div>
    </div>
  );
};

export default AvailableFoods;
