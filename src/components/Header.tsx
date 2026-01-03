// src/Header.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const Header: React.FC = () => {
  const location = useLocation();

  const isProductsActive =
    location.pathname === "/" || location.pathname.startsWith("/edit/");
  const isAddActive = location.pathname === "/add";

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(255,255,255,0.9)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid",
        borderColor: "divider",
        color: "text.primary",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1100,
          width: "100%",
          mx: "auto",
          py: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {/* Brand / Logo */}
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: 2,
              background:
                "linear-gradient(135deg, #2563eb, #7c3aed)",
              boxShadow: "0 10px 24px rgba(37, 99, 235, 0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
            }}
          >
            <Inventory2OutlinedIcon fontSize="small" />
          </Box>

          <Box sx={{ lineHeight: 1.1 }}>
            <Typography variant="subtitle1" fontWeight={800}>
              My App
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              fontWeight={600}
            >
              Product Manager
            </Typography>
          </Box>
        </Box>

        {/* Navigation */}
        <Stack direction="row" spacing={1.5} alignItems="center">
          <Button
            component={Link}
            to="/"
            variant={isProductsActive ? "contained" : "text"}
            color={isProductsActive ? "primary" : "inherit"}
            startIcon={<Inventory2OutlinedIcon fontSize="small" />}
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 600,
              px: 2,
            }}
          >
            Products
          </Button>

          <Button
            component={Link}
            to="/add"
            variant={isAddActive ? "contained" : "outlined"}
            color="primary"
            startIcon={<AddCircleOutlineIcon fontSize="small" />}
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 600,
              px: 2.2,
              background: isAddActive
                ? "linear-gradient(135deg, #2563eb, #4f46e5)"
                : "transparent",
              color: isAddActive ? "#fff" : "primary.main",
              borderColor: "primary.main",
              "&:hover": {
                background: "linear-gradient(135deg, #2563eb, #4f46e5)",
                color: "#fff",
              },
            }}
          >
            Add Product
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;