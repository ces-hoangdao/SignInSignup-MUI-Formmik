import {
  Typography,
  styled,
  Button,
  InputLabel,
  InputBase,
} from "@mui/material";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)(({ theme }) => ({
  color: "#475467",
  fontFamily: "Inter",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "600",
  textDecoration: "none",
  cursor: "pointer",

  "&:hover": {
    color: theme.palette.text.secondary,
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "30px",
  fontWeight: "bold",
  lineHeight: "38px",
}));

export const SupportText = styled(Typography)(() => ({
  color: "#475467",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "400",
}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  fontSize: "13px",
  lineHeight: "18px",
  fontWeight: "400",
  width: "100%",
}));

export const HintText = styled(Typography)(() => ({
  color: "#475467",
  fontSize: "14px",
  lineHeight: "20px",
  fontWeight: "400",
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

export const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  padding: "10px 16px",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "600",
  textTransform: "capitalize",
  color: theme.palette.common.white,
  borderRadius: "8px",
  width: "100%",

  "&:hover": {
    backgroundColor: theme.palette.primary.light,
  },
}));

export const SecondaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  border: `1px solid ${theme.palette.grey[300]}`,
  padding: "10px 16px",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "600",
  textTransform: "capitalize",
  color: theme.palette.text.secondary,
  borderRadius: "8px",
  width: "100%",
  display: "flex",
  gap: "8px",
  "&:hover": {
    backgroundColor: "#DFE6EB",
    borderColor: "#DFE6EB",
    color: "#4285F",
  },
}));

export const Label = styled(InputLabel)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: "14px",
  lineHeight: "20px",
  fontStyle: "normal",
  fontWeight: "500",
  width: "100%",
}));

export const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "400px",
  marginInline: "auto",
  gap: "20px",
  width: "100%",
});

export const Input = styled(InputBase)(({ theme }) => ({
  color: theme.palette.text.primary,
  padding: "10px 14px",
  width: "100%",
  textOverflow: "ellipsis",
  fontSize: "16px",
  lineHeight: "24px",
  fontWeight: "400",
  alignItems: "center",
  borderRadius: "8px",
  border: "1px solid #D0D5DD",
  boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
  "&::placeholder": {
    color: "#667085",
  },
}));
