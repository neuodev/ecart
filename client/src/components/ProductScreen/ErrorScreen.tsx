import { Button, Tooltip, Typography } from "@mui/material";

const ErrorScreen = () => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-400 md:min-h-600 flex items-center justify-center flex-col mb-10">
      <img
        className="w-52 lg:w-auto"
        src="/images/unknown-error.png"
        alt="Error"
        title="Error"
      />

      <h1 className="text-xl lg:text-2xl text-center">
        Unexpected error, please retry
      </h1>
      <Tooltip
        arrow
        followCursor
        placement="top"
        title={<Typography>Report this error</Typography>}
      >
        <Button href="/" sx={{ mt: "20px" }} variant="outlined" color="error">
          Report
        </Button>
      </Tooltip>
    </div>
  );
};

export default ErrorScreen;
