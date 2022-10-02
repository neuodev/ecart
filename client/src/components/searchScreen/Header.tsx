import {
  Breadcrumbs,
  Button,
  IconButton,
  Link,
  Menu,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  ASCENDING_ORDER,
  DECENDING_ORDER,
  NUMBER_PER_PAGE,
} from "../../actions/actionTypes";
import FilterSidebar from "./FilterSidebar";

const sortActions = [
  {
    icon: <AiOutlineSortAscending />,
    sortBy: "name",
  },
  {
    icon: <AiOutlineSortDescending />,
    sortBy: "-name",
  },
];

const options = [5, 10, 15, 20, 30];

const Header = () => {
  const dispatch = useDispatch();
  const [numPerPage, setNumPerPage] = useState(10);
  const filters = useSelector((state) => state.filters);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (op) => {
    if (typeof op === "number") {
      dispatch({ type: NUMBER_PER_PAGE, payload: op });
      setNumPerPage(op);
    }
    setAnchorEl(null);
  };

  const sort = (filter) => {
    if (filter === "name") {
      dispatch({ type: ASCENDING_ORDER });
    } else {
      dispatch({ type: DECENDING_ORDER });
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-50 px-3 py-3 rounded my-6 shadow-sm">
      <div className="flex items-center justify-between space-x-2 ">
        <div className="md:hidden">
          <FilterSidebar />
        </div>
        <h2 className="flex items-center text-2xl text-gray-900">
          {sortActions.map((action) => (
            <IconButton
              key={action.sortBy}
              disabled={action.sortBy === filters.sort}
              onClick={() => sort(action.sortBy)}
            >
              {action.icon}
            </IconButton>
          ))}
        </h2>
      </div>
      <div className="flex items-center justify-between space-x-2">
        <Button
          variant="outlined"
          size="small"
          sx={{
            maxWidth: "150px",
            minWidth: "unset",
            fontSize: "11px",
            height: "32px",
            minHeight: "unset",
          }}
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {numPerPage} Per Page
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          {options.map((op) => (
            <MenuItem
              key={op}
              onClick={() => handleClose(op)}
              sx={{ minWidth: "100px" }}
            >
              {op}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Header;
