export const validateLoginForm = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};

export const validateRegisterForm = (name, email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
  const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
    password
  );
  if (!isEmailValid) return "Email Id is not valid";
  if (!isPasswordValid) return "Password is not valid";
  return null;
};
