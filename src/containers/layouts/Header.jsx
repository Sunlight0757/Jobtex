import { useState } from "react";
import Sidebar from "./Sidebar";
import { Avatar, Badge, Box, Button, Menu, Typography } from "@mui/material";
import { ExpandMore, GridView, NotificationsNone } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      paddingX={{ xl: 5 }}
      borderBottom={1}
      borderColor="#e5e5e5bf"
    >
      <Box display="flex" alignItems="center" gap={6} padding={4}>
        <NavLink to="/" style={{ cursor: "pointer" }}>
          <img src="/assets/logo/logo.svg" alt="logo" />
        </NavLink>
        <Box
          display="flex"
          alignItems="center"
          gap={1}
          sx={{
            cursor: "pointer",
            transition: "color 300ms",
            ":hover": { color: "#14a077" },
          }}
        >
          <GridView />
          <Typography variant="subtitle1">Categories</Typography>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={4} padding={2}>
        <Badge
          badgeContent={4}
          color="primary"
          sx={{
            cursor: "pointer",
            transition: "color 300ms",
            ":hover": { color: "#14a077" },
            "& .MuiBadge-colorPrimary": { bgcolor: "#ffc107" },
          }}
        >
          <NotificationsNone />
        </Badge>
        <Box
          display="flex"
          gap={2}
          alignItems="center"
          sx={{
            cursor: "pointer",
            transition: "color 300ms",
            ":hover": { color: "#14a077" },
          }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar alt="Remy Sharp" src="/assets/avatar/e11.png" />
          <Box display="flex" alignItems="center">
            <Typography variant="subtitle2">Employer</Typography>
            <ExpandMore />
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              mt: 3.5,
              border: "1px solid #e5e5e5bf",
              maxWidth: 290,
              width: "100%",
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                border: "1px solid #e5e5e5bf",
                borderBottom: 0,
                borderRight: 0,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Sidebar />
        </Menu>
        <Button
          variant="outlined"
          size="large"
          sx={{
            borderColor: "#14A077",
            color: "#121212",
            textTransform: "none",
            fontSize: 16,
            fontWeight: 700,
            paddingX: 5,
            paddingY: 1.5,
            ":hover": {
              bgcolor: "#14A077",
              color: "white",
              borderColor: "#14A077",
            },
          }}
        >
          Post Job
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
