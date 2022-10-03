import { Button, Tooltip, Typography } from "@mui/material";

const ErrorScreen = () => {
  return (
    <div className="max-w-screen-lg mx-auto min-h-600 flex items-center justify-center flex-col mb-10">
      <img
        className=""
        src="/images/unknown-error.png"
        alt="Error"
        title="Error"
      />

      <h1 className="text-3xl">Unexpected error, please retry</h1>
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
