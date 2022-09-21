import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { BRAND, CATEGORY, PRICE } from "../../actions/actionTypes";

const SearchSmallScreen = ({ history }) => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const onSumit = (e) => {
    e.preventDefault();
    history.push(`/products?q=${search}`);
    // reset the filters
    dispatch({ type: PRICE, payload: "" });
    dispatch({ type: CATEGORY, payload: "" });
    dispatch({ type: BRAND, payload: "" });
  };

  return (
    <form
      onSubmit={onSumit}
      className="flex items-center justify-between w-60 flex-row mx-2 border rounded-md overflow-hidden mb-4"
    >
      <button className=" flex-none focus:outline-none px-3 bg-gray-200 h-full">
        <FaSearch />
      </button>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search For Products"
        className="inline-block  w-full py-3 px-3  shadow-inner focus:outline-none   "
      />
    </form>
  );
};

export default SearchSmallScreen;
