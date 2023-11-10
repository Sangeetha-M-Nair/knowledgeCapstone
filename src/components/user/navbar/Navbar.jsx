import React, { useState } from "react";
import {
  AppBar,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleMenuItemClick = (page) => () => {
    navigate(`/${page}`);
    handleMenuClose();
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          {/* Your app title or logo can go here */}
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              {" "}
              Spice Store App
            </Link>
          </Typography>

          {/* Profile Icon with Dropdown */}
          <div>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <AccountCircleIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuItemClick("profile")}>
                Profile
              </MenuItem>
              <MenuItem onClick={handleMenuItemClick("account")}>
                Account
              </MenuItem>
              <MenuItem onClick={handleMenuItemClick("logout")}>
                Logout
              </MenuItem>
            </Menu>
          </div>

          {/* Cart Icon */}
          <IconButton color="inherit">
            <AddShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
