import { Button, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

const Quantity = ({ quantity, setQuantity }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="flex items-center justify-start space-x-5 py-5">
      <Tooltip
        placement="top"
        followCursor
        arrow
        title={<Typography>Choose how many copies you want to buy</Typography>}
      >
        <Button
          id="qty-btn"
          aria-controls={open ? "qty-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "100px",
            minWidth: "unset",
          }}
          variant="dark-outlined"
          size="small"
        >
          Qty: {quantity}
        </Button>
      </Tooltip>
      <Menu
        id="qty-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "qty-btn",
        }}
      >
        {new Array(10).fill(0).map((_, idx) => (
          <MenuItem
            sx={{ width: "150px" }}
            key={idx}
            onClick={() => {
              handleClose();
              setQuantity(idx + 1);
            }}
          >
            {idx + 1}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default Quantity;
