import { Link, Typography } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        My Website
      </Link>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
