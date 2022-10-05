import { SearchOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { resetFilters } from "../../actions/actionTypes";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { IconButton, OutlinedInput } from "@mui/material";
import { useAppDispatch } from "../../store";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/products?q=${search}`);
    dispatch(resetFilters());
  };

  return (
    <Box>
      <form onSubmit={onSumit}>
        <OutlinedInput
          endAdornment={
            <IconButton type="submit" sx={{ mr: "-10px" }}>
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
