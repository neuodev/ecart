import { createTheme } from "@mui/material";

const defaultTheme = createTheme();

export default createTheme({
  palette: {
    primary: {
      main: "#6ee7b7",
    },
  },
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
        {
          props: {
            size: "small",
            variant: "dark",
          },
          style: {
            minWidth: "150px",
            minHeight: "30px",
            fontSize: "14px",
          },
        },
        {
          props: {
            size: "small",
            variant: "dark-outlined",
          },
          style: {
            textTransform: "uppercase",
            border: `1px solid ${defaultTheme.palette.common.black}`,
            minWidth: "150px",
            minHeight: "30px",
            maxHeight: "40px",
            fontSize: "14px",
          },
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
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: defaultTheme.palette.grey[900],
        },
        arrow: {
          color: defaultTheme.palette.grey[900],
        },
      },
    },
  },
});
