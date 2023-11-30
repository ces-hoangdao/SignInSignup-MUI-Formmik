import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { ForgotPasswordSchema } from "src/utils/Validation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Key } from "grommet-icons";
import {
  FormTitle,
  SupportText,
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
      email: "",
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: ForgotPasswordSchema,
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            border: "1px solid #EAECF0",
            padding: "14px",
            borderRadius: "12px",
            boxShadow: " 0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
          }}
        >
          <Key color="#475467" size="40" />
        </Box>
        <Box>
          <FormTitle>Forgot password?</FormTitle>
          <SupportText>
            No worries, we’ll send you reset instructions.
          </SupportText>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            width: "100%",
          }}
        >
          <Label>Email</Label>
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

        <PrimaryButton type="submit">Reset password</PrimaryButton>

        <HintText
          sx={{
            justifyContent: "center",
          }}
        >
          <Link
            to="/sign-in"
            style={{
              textDecoration: "none",
              color: "#475467",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <ArrowBackIcon />
            Back to log in
          </Link>
        </HintText>
      </Form>
    </Container>
  );
};

export default index;
