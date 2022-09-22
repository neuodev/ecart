import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BRAND, CATEGORY, PRICE } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { IconButton, OutlinedInput } from "@mui/material";

const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSumit = (e) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
    // reset filters
    dispatch({ type: PRICE, payload: "" });
    dispatch({ type: CATEGORY, payload: "" });
    dispatch({ type: BRAND, payload: "" });
  };

  return (
    <Box>
      <form onSubmit={onSumit}>
        <OutlinedInput
          endAdornment={
            <IconButton onClick={onSumit} sx={{ mr: "-10px" }}>
              <SearchOutlined />
            </IconButton>
          }
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 lg:w-80 xl:w-96"
          placeholder="Search..."
        />
      </form>
    </Box>
    // <div className="rounded-lg border overflow-hidden">
    //   <form className="flex items-stretch" onSubmit={onSumit}>
    //     <input
    //       value={search}
    //       onChange={(e) => setSearch(e.target.value)}
    //       className=" w-72 lg:w-80 xl:w-96 py-2 lg:py-3 px-4 focus:outline-none "
    //       type="text"
    //       placeholder="Search For Products"
    //     />
    //     <button className="px-3 cursor-pointer text-gray-800  focus:outline-none hover:bg-gray-100">
    //       <SearchOutlined />
    //     </button>
    //   </form>
    // </div>
  );
};

export default Search;
