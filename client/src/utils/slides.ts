import { useMediaQuery } from "@mui/material";

const SLIDES_PER_VIEW = {
  xl: 5,
  lg: 4,
  md: 3,
  sm: 2,
  xs: 1,
};

type View = keyof typeof SLIDES_PER_VIEW;

export const useSlides = () => {
  let islg = useMediaQuery("(min-width: 1024px)");
  let isxl = useMediaQuery("(min-width: 1280px)");
  let ismd = useMediaQuery("(min-width: 768px)");
  let issm = useMediaQuery("(min-width: 640px)");

  let view: View;

  if (isxl) view = "xl";
  else if (islg) view = "lg";
  else if (ismd) view = "md";
  else if (issm) view = "sm";
  else view = "xs";

  return SLIDES_PER_VIEW[view];
};
