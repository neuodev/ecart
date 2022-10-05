import { Button, IconButton, MenuItem, Menu } from "@mui/material";
import React, { useState } from "react";
import {
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { addPageLimit, sortAsc, sortDesc } from "../../actions/actionTypes";
import { RootState, useAppDispatch } from "../../store";
import FilterSidebar from "./FilterSidebar";

type SortBy = "name" | "-name";

const sortActions: Array<{
  icon: React.ReactNode;
  sortBy: SortBy;
}> = [
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
      dispatch(addPageLimit(op));
      setNumPerPage(op);
    }
    setAnchorEl(null);
  };

  const sort = (sortBy: SortBy) => {
    dispatch(sortBy === "name" ? sortAsc() : sortDesc());
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
