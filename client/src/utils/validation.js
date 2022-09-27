const reEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
const rePass = new RegExp(
  /(?=[\da-zA-Z]+)[a-zA-Z\d$&+,:;=?@#|'<>.-^*()%!]{8,}/,
  "i"
);

export const isValidEmail = (email) => {
  return reEmail.test(email);
};

export const isValidPass = (pass) => {
  return rePass.test(pass);
};

export const isValidName = (name) => name && name.length >= 3;
