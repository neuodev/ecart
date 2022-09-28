const reEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
const rePass = new RegExp(
  /(?=[\da-zA-Z]+)[a-zA-Z\d$&+,:;=?@#|'<>.-^*()%!]{8,}/,
  "i"
);

/**
 * Zip codes may vary from country to country, and most of them contain a combination of five numeric values.
 * So to validate the zip code string, we must declare a regular expression that will have only numeric values (0-9) and the length of five numbers.
 */
const rePostCode = new RegExp(/(^\d{5}$)|(^\d{5}-\d{4}$)/);

export const isValidEmail = (email) => reEmail.test(email);
export const isValidPass = (pass) => rePass.test(pass);
export const isValidName = (name) => name && name.length >= 3;
export const notEmpty = (val) => val && val.trim().length !== 0;
export const isValidPostalCode = (code) => rePostCode.test(code);
export const atLeastOfLength = (val, len) =>
  val && typeof val === "string" && val.length >= len;
