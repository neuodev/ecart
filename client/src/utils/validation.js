const reEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "i");
const rePass = new RegExp(
  /(?=[a-zA-Z]+)(?=[^\d]*\d)[a-zA-Z\d$&+,:;=?@#|'<>.-^*()%!]{8,}/,
  "i"
);

export const isValidEmail = (email) => {
  return reEmail.test(email);
};

export const isValidPass = (pass) => {
  return rePass.test(pass);
};
