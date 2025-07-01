import React, { useEffect, useState } from "react";
import AvailableFoodCard from "../Components/AvailableFoodCard";
import Loading from "./Loading";
import { LuColumns3 } from "react-icons/lu";
import { FiColumns } from "react-icons/fi";
import { MdFilterAlt } from "react-icons/md";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const AvailableFoods = () => {
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredText, setFilteredText] = useState("");
  const [isThreeColumn, setIsThreeColumn] = useState(true);
  const [asc, setAsc] = useState(true);
  const [showMobileFilters, setShowMobileFilters] = useState(false); // ✅ mobile filter toggle

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.searchText.value.trim();
    setSearchText(searchText);
  };

  useEffect(() => {
    axiosSecure.get("/foodshares").then((res) => {
      setFoods(res.data);
    });
  }, [axiosSecure]);

  useEffect(() => {
    if (searchText !== "") {
      axiosSecure
        .get(`/get-donated-search-foods?search=${searchText}`)
        .then((res) => {
          setFoods(res.data);
        });
    } else {
      axiosSecure.get("/foodshares").then((res) => {
        setFoods(res.data);
      });
    }
  }, [searchText, axiosSecure]);

  useEffect(() => {
    if (filteredText) {
      axiosSecure
        .get(`/get-donated-filtered-foods?filtered=${filteredText}`)
        .then((res) => {
          setFoods(res.data);
        });
    } else {
      axiosSecure.get("/foodshares").then((res) => {
        setFoods(res.data);
      });
    }
  }, [filteredText, axiosSecure]);

  useEffect(() => {
    axiosSecure
      .get(`/get-donated-sorted-foods?sort=${asc ? "asc" : "desc"}`)
      .then((res) => {
        setFoods(res.data);
      });
  }, [asc, axiosSecure]);

  return (
    <div>
      <div className="container mx-auto px-5 pb-24">
        <section className="flex gap-4 py-11 flex-col lg:flex-row justify-center items-center relative">
          <div className="lg:hidden flex justify-center w-full">
            <button
              className="flex items-center gap-2 border border-gray-300 px-4 py-2 rounded-md text-gray-700 dark:text-white"
              onClick={() => setShowMobileFilters(!showMobileFilters)}
            >
              <MdFilterAlt size={24} />
              Filters
            </button>
          </div>

          {showMobileFilters && (
            <div className="flex flex-col gap-4 w-full mt-4 lg:hidden">
              <form>
                <select
                  className="select select-bordered w-full cursor-pointer"
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
              <button
                className="border py-2 px-4 rounded-lg border-gray-300 cursor-pointer w-full"
                onClick={() => setAsc(!asc)}
              >
                {asc ? "Quantity Low To High" : "Quantity High To Low"}
              </button>
            </div>
          )}

          <form
            className="flex-1 min-w-[350px] lg:min-w-max"
            onSubmit={handleSearch}
          >
            <div className="relative">
              <input
                type="text"
                name="searchText"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search Foods"
                id="default-search"
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:text-white"
                required
              />
              <button
                type="submit"
                className="absolute right-2.5 bottom-2.5 bg-success text-black hover:bg-primary-500 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>

          <form className="hidden lg:block">
            <select
              className="select select-bordered w-full max-w-xs cursor-pointer"
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

          <div className="hidden lg:block">
            <button
              className="border py-2 px-4 rounded-lg border-gray-300 cursor-pointer w-full max-w-xs"
              onClick={() => setAsc(!asc)}
            >
              {asc ? "Quantity Low To High" : "Quantity High To Low"}
            </button>
          </div>

          <button
            className="py-3 px-4 rounded-lg hidden lg:flex cursor-pointer max-w-xs"
            onClick={() => setIsThreeColumn(!isThreeColumn)}
          >
            {isThreeColumn ? (
              <FiColumns size={40} color="blue" />
            ) : (
              <LuColumns3 size={40} />
            )}
          </button>
        </section>

        {/* Title */}
        <section>
          <h1 className="text-4xl font-medium text-center pb-14">
            Available Foods
          </h1>
        </section>

        {/* Cards */}
        <section>
          {foods.length === 0 ? (
            <>
              <p className="text-2xl text-secondary text-center">
                No Data Found
              </p>
              <Loading />
            </>
          ) : (
            <div
              className={`grid grid-cols-1 md:grid-cols-2 ${
                isThreeColumn ? "lg:grid-cols-3" : "lg:grid-cols-2"
              } gap-5 lg:gap-9`}
            >
              {foods.map((food) => (
                <AvailableFoodCard key={food._id} food={food} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default AvailableFoods;
