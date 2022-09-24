import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { RESET_FILTERS } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";
const SearchSmallScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const onSumit = (e) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
    dispatch({ type: RESET_FILTERS });
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
