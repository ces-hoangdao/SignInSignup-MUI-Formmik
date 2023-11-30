import { Box, Container } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignInSchema } from "src/utils/Validation";
import {
  FormTitle,
  SupportText,
  SecondaryButton,
  PrimaryButton,
  Label,
  Input,
  HintText,
  ErrorMessage,
  Form,
} from "src/Components/CustomMuiComponents";
import Header from "src/Components/Header";
import { Google, Apple, Facebook } from "grommet-icons";
import { auth } from "src/configs/firebaseConfig";
const index = () => {
  const handleGoogle = async () => {
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignInSchema,
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    formik.handleChange(e);
    formik.setErrors({});
    formik.setFieldValue(name, value);
  };
  return (
    <Container
      sx={{ display: "flex", padding: "80px", flexDirection: "column" }}
    >
      <Header />
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <FormTitle>Log in to your account</FormTitle>
          <SupportText>Welcome back! Please enter your details.</SupportText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            width: "100%",
          }}
        >
          <Label required>Email</Label>
          <Input
            name="email"
            id="email"
            placeholder="Enter your Email"
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            error={Boolean(formik.errors.email)}
          />
          {formik.errors.email && formik.touched.email && (
            <ErrorMessage>{formik.errors.email}</ErrorMessage>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            width: "100%",
          }}
        >
          <Label required>Password</Label>
          <Input
            name="password"
            id="password"
            type="password"
            placeholder="Create a password"
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            error={Boolean(formik.errors.password)}
          />
          {formik.errors.password && formik.touched.password && (
            <ErrorMessage>{formik.errors.password}</ErrorMessage>
          )}
        </Box>
        <HintText>
          <Link
            to="/forgot-password"
            style={{
              fontWeight: 600,
              textDecoration: "none",
              color: "#7F56D9",
            }}
          >
            Forgot password?
          </Link>
        </HintText>

        <PrimaryButton type="submit">Get Started</PrimaryButton>
        <SecondaryButton onClick={handleGoogle}>
          <Google color="plain" /> Sign up with Google
        </SecondaryButton>
        <SecondaryButton>
          <Facebook color="plain" /> Sign up with Facebook
        </SecondaryButton>
        <SecondaryButton>
          <Apple color="plain" /> Sign up with Apple
        </SecondaryButton>
        <HintText
          sx={{
            justifyContent: "center",
          }}
        >
          Don’t have an account?
          <Link
            to="/sign-up"
            style={{
              fontWeight: 600,
              textDecoration: "none",
              color: "#7F56D9",
            }}
          >
            Sign up
          </Link>
        </HintText>
      </Form>
    </Container>
  );
};

export default index;
