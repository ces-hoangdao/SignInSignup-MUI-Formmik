import * as Yup from "yup";

export const SignupSchema = Yup.object().shape({
  userName: Yup.string().required("Username is a required field"),
  email: Yup.string()
    .required("Email is a required field")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});
