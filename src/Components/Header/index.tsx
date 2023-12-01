import * as React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Container,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
} from "@mui/material";
import Logo from "src/assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import {
  Link,
  PrimaryButton,
  SecondaryButton,
} from "src/Components/CustomMuiComponents";
import { isAuthenticated } from "src/utils/Auth";
import { PAGES, SETTINGS } from "src/constants/route";

const Header = () => {
  const isLogin = isAuthenticated();

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo and navbar  in md and above */}
          <Link
            to="/"
            sx={{ display: { xs: "none", sm: "none", md: "flex" }, mr: 1 }}
          >
            <img src={Logo} alt="logo" />
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGES.map((page) => (
              <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                <Link to={page.link}>{page.name}</Link>
              </MenuItem>
            ))}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              maxWidth: 50,
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon color="primary" />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link to={page.link}>{page.name}</Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Link
            to="/"
            sx={{ display: { xs: "none", sm: "flex", md: "none" }, mr: 1 }}
          >
            <img src={Logo} alt="logo" />
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            {isLogin ? (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="" />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {SETTINGS.map((setting) => (
                    <MenuItem key={setting.name} onClick={handleCloseUserMenu}>
                      <Link to={setting.link}>{setting.name}</Link>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            ) : (
              <Toolbar
                disableGutters
                sx={{
                  display: { sx: "none", md: "flex" },
                  gap: 2,
                  justifyContent: "space-between",
                }}
              >
                <Link to="/sign-in">
                  <SecondaryButton
                    sx={{
                      color: "#475467",
                      border: "none",
                      "&:hover": {
                        borderColor: "#D0D5DD",
                      },
                    }}
                  >
                    Login
                  </SecondaryButton>
                </Link>
                <Link to="/sign-up">
                  <PrimaryButton
                    sx={{
                      whiteSpace: "nowrap",
                    }}
                  >
                    Sign Up
                  </PrimaryButton>
                </Link>
              </Toolbar>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
