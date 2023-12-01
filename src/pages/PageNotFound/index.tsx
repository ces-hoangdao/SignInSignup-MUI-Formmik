import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Title,
  HintText,
  PrimaryButton,
} from "src/Components/CustomMuiComponents";
import PrimaryLayout from "src/layouts/PrimaryLayout";

const index = () => {
  return (
    <PrimaryLayout>
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "700px",
          marginInline: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { lg: "30px", md: "20px" },
        }}
      >
        <HintText
          sx={{
            color: "#7F56D9",
            fontWeight: "600",
            fontSize: { lg: "16px", md: "13px" },
            justifyContent: "center",
          }}
        >
          404 error
        </HintText>
        <Title sx={{ fontSize: { lg: "60px", md: "40px" } }}>
          Page not found
        </Title>
        <HintText
          sx={{
            fontSize: { lg: "20px", md: "16px" },
            fontWeight: "400",
            lineHeight: "30px",
          }}
        >
          We searched high and low, but couldn’t find what you’re looking for.
          <br /> Let’s find a better place for you to go.
        </HintText>
        <Link to="/" style={{ marginTop: "25px" }}>
          <PrimaryButton>
            <ArrowBackIcon />
            Go back home
          </PrimaryButton>
        </Link>
      </Box>
    </PrimaryLayout>
  );
};

export default index;
