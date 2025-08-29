// src/components/Navbar.js
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close"; // 🔹 Import Close Icon
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-scroll"; // 🔹 smooth scrolling
import logo from "../assets/LogoHC (1).jpeg"; // your logo

// Custom styled Box for links (desktop view only)
const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none", // hide links on small screen
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const isMenuOpen = Boolean(anchorEl);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#1a1a1a" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Abhishek Giri Logo"
            style={{ height: "50px", marginRight: "10px" }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Abhishek Giri
          </Typography>
        </Box>

        {/* Desktop Links */}
        <NavLinks>
          <Link to="hero" smooth={true} duration={500} offset={-70}>
            <Typography variant="body1">Home</Typography>
          </Link>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            <Typography variant="body1">About</Typography>
          </Link>
          <Link to="services" smooth={true} duration={500} offset={-70}>
            <Typography variant="body1">Services</Typography>
          </Link>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            <Typography variant="body1">Contact</Typography>
          </Link>
        </NavLinks>

        {/* Mobile Menu Icon */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />} {/* 🔹 Toggle icon */}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { backgroundColor: "#1a1a1a", color: "#fff" }, // match navbar
            }}
          >
            <MenuItem onClick={handleMenuClose}>
              <Link to="hero" smooth={true} duration={500} offset={-70}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="about" smooth={true} duration={500} offset={-70}>
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="services" smooth={true} duration={500} offset={-70}>
                Services
              </Link>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <Link to="contact" smooth={true} duration={500} offset={-70}>
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
