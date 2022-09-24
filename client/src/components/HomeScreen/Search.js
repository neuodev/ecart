import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  BRAND,
  CATEGORY,
  PRICE,
  RESET_FILTERS,
} from "../../actions/actionTypes";
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
    dispatch({ type: RESET_FILTERS });
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
          sx={{ borderRadius: "0px" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-72 lg:w-80 xl:w-96"
          placeholder="Search..."
        />
      </form>
    </Box>
  );
};

export default Search;
