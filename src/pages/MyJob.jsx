import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BorderColor,
  Clear,
  FmdGoodOutlined,
  LockOutlined,
  OfflineBolt,
  Search,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Chip,
  MenuItem,
  OutlinedInput,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const MyJob = () => {
  const [sort, setSort] = useState("newest");

  const handleSortChange = (event) => {
    setSort(event.target.value);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4} mt={4}>
      <Typography
        variant="h5"
        position="relative"
        fontWeight={700}
        sx={{
          paddingLeft: 2.5,
          "::before": {
            content: "''",
            bgcolor: "#14a077",
            width: 8,
            height: "100%",
            borderRadius: 1,
            position: "absolute",
            left: 0,
            top: 0,
          },
        }}
      >
        Manage Jobs
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor="white"
        borderRadius={2}
        p={3}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <OutlinedInput
            id="outlined-adornment-weight"
            startAdornment={<Search sx={{ marginRight: 1 }} />}
            aria-describedby="outlined-searcheight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
            placeholder="Search..."
            sx={{
              bgcolor: "#f5f5f5",
              borderRadius: 2,
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: 0,
              },
            }}
          />
          <Select
            displayEmpty
            value={sort}
            onChange={handleSortChange}
            input={<OutlinedInput />}
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              fontSize: 14,
              bgcolor: "#f5f5f5",
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: 0,
              },
            }}
          >
            <MenuItem key="default" value="default">
              Sort by: Default
            </MenuItem>
            <MenuItem key="newest" value="newest">
              Sort by: Newest
            </MenuItem>
            <MenuItem key="oldest" value="oldest">
              Sort by: Oldest
            </MenuItem>
          </Select>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingX: 3,
                    color: "#64666c",
                  }}
                >
                  Title
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingX: 3,
                    color: "#64666c",
                  }}
                >
                  Applicants
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingX: 3,
                    color: "#64666c",
                  }}
                >
                  Created & Expi#dc3545
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingX: 3,
                    color: "#64666c",
                  }}
                >
                  Status
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    paddingX: 3,
                    color: "#64666c",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                key="row_1"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    gap={1}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography
                        component={NavLink}
                        to="/"
                        variant="h6"
                        fontWeight={700}
                        color="#121212"
                        sx={{
                          textDecoration: "none",
                          transition: "color 300ms",
                          ":hover": { color: "#14a077" },
                        }}
                      >
                        Finance Manager
                      </Typography>
                      <OfflineBolt sx={{ color: "#504CFE" }} />
                      <Typography variant="body2">Filled</Typography>
                    </Box>
                    <Box
                      display="flex"
                      gap={1}
                      alignItems="center"
                      color="#64666C"
                    >
                      <FmdGoodOutlined fontSize="small" />
                      <Typography
                        component={NavLink}
                        to="/"
                        variant="body2"
                        color="#64666C"
                        sx={{ textDecoration: "none" }}
                      >
                        United States
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body2">0 Applicant(s)</Typography>
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body2">
                      Created: June 20, 2023
                    </Typography>
                    <Box display="flex" gap={1}>
                      <Typography variant="body2">Expiry date:</Typography>
                      <Typography variant="body2" color="#dc3545">
                        June 21, 2029
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Chip
                    label="Published"
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      bgcolor: "#198754",
                      color: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box display="flex" justifyContent="end" gap={2}>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <LockOutlined />
                    </Avatar>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <BorderColor />
                    </Avatar>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <Clear />
                    </Avatar>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow
                key="row_2"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    gap={1}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography
                        component={NavLink}
                        to="/"
                        variant="h6"
                        fontWeight={700}
                        color="#121212"
                        sx={{
                          textDecoration: "none",
                          transition: "color 300ms",
                          ":hover": { color: "#14a077" },
                        }}
                      >
                        Social Media Marketing
                      </Typography>
                      <OfflineBolt sx={{ color: "#504CFE" }} />
                      <Typography variant="body2">Filled</Typography>
                    </Box>
                    <Box
                      display="flex"
                      gap={1}
                      alignItems="center"
                      color="#64666C"
                    >
                      <FmdGoodOutlined fontSize="small" />
                      <Typography
                        component={NavLink}
                        to="/"
                        variant="body2"
                        color="#64666C"
                        sx={{ textDecoration: "none" }}
                      >
                        United States
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body2">1 Applicant(s)</Typography>
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body2">
                      Created: May 13, 2023
                    </Typography>
                    <Box display="flex" gap={1}>
                      <Typography variant="body2">Expiry date:</Typography>
                      <Typography variant="body2" color="#dc3545">
                        May 18, 2029
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Chip
                    label="Published"
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      bgcolor: "#198754",
                      color: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box display="flex" justifyContent="end" gap={2}>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <LockOutlined />
                    </Avatar>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <BorderColor />
                    </Avatar>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <Clear />
                    </Avatar>
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow
                key="row_2"
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="start"
                    gap={1}
                  >
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography
                        component={NavLink}
                        to="/"
                        variant="h6"
                        fontWeight={700}
                        color="#121212"
                        sx={{
                          textDecoration: "none",
                          transition: "color 300ms",
                          ":hover": { color: "#14a077" },
                        }}
                      >
                        Senior UI/UX Designer
                      </Typography>
                      <OfflineBolt sx={{ color: "#504CFE" }} />
                      <Typography variant="body2">Filled</Typography>
                    </Box>
                    <Box
                      display="flex"
                      gap={1}
                      alignItems="center"
                      color="#64666C"
                    >
                      <FmdGoodOutlined fontSize="small" />
                      <Typography
                        component={NavLink}
                        to="/"
                        variant="body2"
                        color="#64666C"
                        sx={{ textDecoration: "none" }}
                      >
                        United States
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body2">1 Applicant(s)</Typography>
                </TableCell>
                <TableCell align="left">
                  <Box display="flex" flexDirection="column">
                    <Typography variant="body2">
                      Created: May 13, 2023
                    </Typography>
                    <Box display="flex" gap={1}>
                      <Typography variant="body2">Expiry date:</Typography>
                      <Typography variant="body2" color="#dc3545">
                        May 13, 2029
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Chip
                    label="Published"
                    sx={{
                      fontSize: 14,
                      fontWeight: 700,
                      bgcolor: "#198754",
                      color: "white",
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Box display="flex" justifyContent="end" gap={2}>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <LockOutlined />
                    </Avatar>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <BorderColor />
                    </Avatar>
                    <Avatar
                      variant="square"
                      sx={{
                        bgcolor: "#f5f5f2",
                        color: "#121212",
                        borderRadius: 1,
                        cursor: "pointer",
                      }}
                    >
                      <Clear />
                    </Avatar>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default MyJob;
