import { AxiosError } from "axios";

export const getErrMsg = (error: unknown) => {
  let msg = "Unknown error, please retry";

  if (error instanceof AxiosError) {
    msg =
      error.response && error.response.data.error
        ? error.response.data.error
        : error.message;
  }

  return msg;
};
