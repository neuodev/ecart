import React from "react";
import { Modal as MuiModal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Modal = ({ children, open, onClose, className, width, minWidth }) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      disableAutoFocus
      disableEnforceFocus
    >
      <Box className={className} sx={{ ...style, width, minWidth }}>
        {children}
      </Box>
    </MuiModal>
  );
};

export default Modal;
