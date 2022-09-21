import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const ErrorScreen = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <Box className="h-screen w-full flex items-center justify-center flex-col">
      <Typography variant="h1" sx={{ mb: "20px" }}>
        Oops!
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: "12px",
        }}
      >
        Sorry, an unexpected error has occurred
      </Typography>
      <Typography variant="caption" className="text-gray-500">
        {error.statusText || error.message}
      </Typography>

      <Button
        onClick={() => navigate("/")}
        size="large"
        variant="outlined"
        sx={{ mt: "20px" }}
      >
        Home Screen
      </Button>
    </Box>
  );
};

export default ErrorScreen;
