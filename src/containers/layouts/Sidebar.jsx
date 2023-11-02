import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Button } from "@mui/material";
import { MenuList } from "../../constants/MenuList";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "../../store/userSlice";
import { Logout } from "@mui/icons-material";

const Sidebar = () => {
  const dispatch = useDispatch();

  const active = "dashboard";

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    dispatch(setCurrentUser({}));
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex="auto"
      padding={3}
      bgcolor="white"
    >
      {MenuList.map((item) => (
        <Button
          LinkComponent={NavLink}
          to={item.link}
          key={item.key}
          startIcon={item.icon}
          sx={{
            textTransform: "none",
            color: "black",
            justifyContent: "start",
            padding: 2,
            bgcolor: active === item.key ? "#f5f5f2" : "",
            fontWeight: active === item.key ? 700 : 400,
            transition: "font-weight 300ms, background-color 300ms",
            ".MuiButton-startIcon": {
              color: active === item.key ? "#14a077" : "#121212",
              transition: "color 300ms",
            },
            "&:hover": {
              bgcolor: "#f5f5f2",
              fontWeight: 700,
              ".MuiButton-startIcon": {
                color: "#14a077",
              },
            },
          }}
        >
          {item.label}
        </Button>
      ))}
      <Button
        onClick={handleLogout}
        startIcon={<Logout />}
        sx={{
          textTransform: "none",
          color: "black",
          justifyContent: "start",
          padding: 2,
          transition: "font-weight 300ms, background-color 300ms",
          ".MuiButton-startIcon": {
            transition: "color 300ms",
          },
          "&:hover": {
            bgcolor: "#f5f5f2",
            fontWeight: 700,
            ".MuiButton-startIcon": {
              color: "#14a077",
            },
          },
        }}
      >
        Logout
      </Button>
    </Box>
  );
};

export default Sidebar;
