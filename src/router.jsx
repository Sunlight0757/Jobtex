import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import Header from "./containers/layouts/Header";
import Sidebar from "./containers/layouts/Sidebar";
import Dashboard from "./pages/Dashboard";
import MyJob from "./pages/MyJob";

const Router = () => {
  return (
    <BrowserRouter>
      <Box display="flex" flexDirection="column" height="100vh">
        <Header />
        <Box display="flex" flexGrow={1}>
          <Box maxWidth={290} width="100%">
            <Sidebar />
          </Box>
          <Box justifyContent="center" bgcolor="#f5f5f5" width="100%">
            <Container maxWidth="lg">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/my-jobs" element={<MyJob />} />
              </Routes>
              <Box paddingY={2.5} marginTop={2}>
                <Box display="flex" justifyContent="center">
                  <Typography variant="body2" color="#64666c">
                    ©2023 Jobtex. All Rights Reserved.
                  </Typography>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default Router;
