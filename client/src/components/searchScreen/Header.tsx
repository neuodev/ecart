import { Button, IconButton, Link, MenuItem, Menu } from "@mui/material";
import { styled } from "@mui/styles";
import React, { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";

import { useSelector } from "react-redux";
import {
  ASCENDING_ORDER,
  DECENDING_ORDER,
  ITEMS_LIMIT,
} from "../../actions/actionTypes";
import { RootState, useAppDispatch } from "../../store";
import FilterSidebar from "./FilterSidebar";

const sortActions: Array<{
  icon: React.ReactNode;
  type: typeof ASCENDING_ORDER | typeof DECENDING_ORDER;
  sortBy: string;
}> = [
  {
    icon: <AiOutlineSortAscending />,
    type: ASCENDING_ORDER,
    sortBy: "name",
  },
  {
    icon: <AiOutlineSortDescending />,
    type: DECENDING_ORDER,
    sortBy: "-name",
  },
];

const options = [5, 10, 15, 20, 30];

const Header = () => {
  const dispatch = useAppDispatch();
  const [numPerPage, setNumPerPage] = useState<number>(10);
  const filters = useSelector<RootState, RootState["filters"]>(
    (state) => state.filters
  );
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (op: number | React.MouseEvent<HTMLElement>) => {
    if (typeof op === "number") {
      dispatch({ type: ITEMS_LIMIT, payload: op });
      setNumPerPage(op);
    }
    setAnchorEl(null);
  };

  const sort = (filter: typeof ASCENDING_ORDER | typeof DECENDING_ORDER) => {
    dispatch({ type: filter });
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
              onClick={() => sort(action.type)}
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