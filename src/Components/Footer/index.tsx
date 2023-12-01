import { Box, Container } from "@mui/material";
import Copyright from "../Copyright";
import { PAGES } from "src/constants/route";
import { HintText, Link, SecondaryButton } from "../CustomMuiComponents";
import Logo from "src/assets/logo.png";
import { Google, Apple, Facebook } from "grommet-icons";

const index = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "auto", padding: "20px 0" }}>
      <Container
        sx={{
          display: "flex",
          padding: 0,
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            padding: 0,
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link to="/" sx={{ display: "flex" }}>
              <img src={Logo} alt="logo" />
            </Link>
            <HintText>
              Design amazing digital experiences that create more happy in the
              world.
            </HintText>
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
            }}
          >
            {PAGES.map((page) => (
              <Link key={page.name} to={page.link} sx={{ fontSize: 14 }}>
                {page.name}
              </Link>
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", marginTop: "auto" }}>
            <SecondaryButton sx={{ border: "none" }}>
              <Google color="plain" size="20px" />
            </SecondaryButton>
            <SecondaryButton sx={{ border: "none" }}>
              <Facebook color="plain" size="20px" />
            </SecondaryButton>
            <SecondaryButton sx={{ border: "none" }}>
              <Apple color="plain" size="20px" />
            </SecondaryButton>
          </Box>
        </Box>
      </Container>
      <Container sx={{ borderTop: "1px solid #D0D5DD", padding: "20px 0" }}>
        <Copyright />
      </Container>
    </Container>
  );
};

export default index;
