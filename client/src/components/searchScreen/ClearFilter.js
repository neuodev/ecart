import { IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const ClearFilter = ({ resetFunc, disabled }) => {
  return (
    <Tooltip
      arrow
      placement="top"
      title={<Typography>Clear filter</Typography>}
    >
      <span>
        <IconButton
          onClick={() => resetFunc(null)}
          size="small"
          disabled={disabled}
        >
          <HighlightOffIcon />
        </IconButton>
      </span>
    </Tooltip>
  );
};

export default ClearFilter;
