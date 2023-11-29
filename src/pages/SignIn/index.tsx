import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
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
      <Box
        sx={{
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
          <Input placeholder="Enter your email" />
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
          <Input placeholder="Enter your password" type="password" />
        </Box>

        <PrimaryButton>Get Started</PrimaryButton>
        <SecondaryButton>Sign up with Google</SecondaryButton>
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
      </Box>
    </Container>
  );
};

export default index;
