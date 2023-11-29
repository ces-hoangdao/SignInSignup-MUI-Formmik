import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Formik, Form, FormikHelpers } from "formik";
import { SignupSchema } from "src/utils/Vallidation";
import {
  FormTitle,
  SupportText,
  SecondaryButton,
  PrimaryButton,
  Label,
  Input,
  HintText,
} from "src/Components/CustomMuiComponents";
const index = () => {
  return (
    <Container>
      <Formik
        initialValues={{
          userName: "",
          email: "",
          password: "",
        }}
        validateOnChange
        validateOnBlur
        validationSchema={SignupSchema}
        onSubmit={(
          values: {
            userName: string;
            email: string;
            password: string;
          },
          {
            setSubmitting,
          }: FormikHelpers<{
            userName: string;
            email: string;
            password: string;
          }>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ errors, touched }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "400px",
              marginInline: "auto",
              gap: "20px",
            }}
          >
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
              <Label required>Name</Label>
              <Input placeholder="Enter your name" />
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
              <Input placeholder="Enter your email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
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
              <Input placeholder="Create a password" type="password" />
            </Box>
            <Box sx={{ width: "100%" }}>
              <HintText>
                <CheckCircleIcon color="info" />
                Must be at least 8 characters
              </HintText>
              <HintText>
                <CheckCircleIcon color="info" />
                Must contain one special character
              </HintText>
            </Box>

            <PrimaryButton type="submit">Get Started</PrimaryButton>
            <SecondaryButton>Sign up with Google</SecondaryButton>
          </Form>
        )}
      </Formik>

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
    </Container>
  );
};

export default index;
