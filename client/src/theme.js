import { createTheme } from "@mui/material";

const defaultTheme = createTheme();

export default createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem",
          borderRadius: 0,
          border: 0,
          fontWeight: 500,
          minHeight: 44,
          minWidth: 230,
          padding: "12px 20px",
          textTransform: "none",
          lineHeight: "16px",
        },
      },
      variants: [
        {
          props: {
            variant: "dark",
          },
          style: {
            backgroundColor: defaultTheme.palette.grey[900],
            color: defaultTheme.palette.common.white,
            textTransform: "uppercase",
            ":hover": {
              backgroundColor: defaultTheme.palette.grey[800],
            },
          },
          defaultProps: { disableRipple: false },
        },
      ],
    },
    MuiTab: {
      styleOverrides: {
        root: {},
      },
      variants: [
        {
          props: { variant: "main" },
          style: {
            "&.Mui-selected": {
              color: "#34d399",
            },
          },
        },
      ],
    },
  },
});
