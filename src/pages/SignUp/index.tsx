import { Box, Container } from "@mui/material";
import { Google } from "grommet-icons";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "src/utils/Validation";
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
const index = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: SignUpSchema,
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
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <Box>
          <FormTitle>Create an account</FormTitle>
          <SupportText>Start your 30-day free trial.</SupportText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            width: "100%",
          }}
        >
          <Label required>UserName</Label>
          <Input
            name="userName"
            id="userName"
            placeholder="Enter your name"
            onChange={handleInputChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
            error={Boolean(formik.errors.userName)}
          />
          {formik.errors.userName && formik.touched.userName && (
            <ErrorMessage>{formik.errors.userName}</ErrorMessage>
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

        <Box sx={{ width: "100%" }}>
          <HintText>
            Must be at least 8 characters and contain one special character
          </HintText>
        </Box>
        <PrimaryButton type="submit">Get Started</PrimaryButton>
        <SecondaryButton>
          <Google color="plain" />
          Sign up with Google
        </SecondaryButton>
        <HintText
          sx={{
            justifyContent: "center",
          }}
        >
          Already have an account?
          <Link
            to="/sign-in"
            style={{
              fontWeight: 600,
              textDecoration: "none",
              color: "#7F56D9",
            }}
          >
            Sign in
          </Link>
        </HintText>
      </Form>
    </Container>
  );
};

export default index;
