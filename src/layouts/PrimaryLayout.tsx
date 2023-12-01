import React from "react";
import Header from "src/Components/Header";
import Footer from "src/Components/Footer";
import { Container } from "@mui/material";

const PrimaryLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      sx={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: { lg: "120px", xs: "80px" },
      }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};

export default PrimaryLayout;
