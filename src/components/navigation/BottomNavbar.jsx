import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";

export const BottomNavbar = ({ page }) => {
  return (
    <Container
      sx={{
        p: 1.5,
        zIndex: 2,
        boxShadow: 5,
        borderRadius: 25,
        bgcolor: "white",
        position: "sticky",
        top: "calc(100vh - 80px)",
      }}
    >
      <Box display="flex" justifyContent="space-around">
        <Link to="/">
          {page == "home" ? (
            <Box py={1} px={4} color="white" bgcolor="black" borderRadius={25}>
              <p>
                <i className="fa-solid fa-house-user"></i> &nbsp;&nbsp; Home
              </p>
            </Box>
          ) : (
            <Box py={1} px={4}>
              <i className="fa-solid fa-house-user"></i> &nbsp;&nbsp; Home
            </Box>
          )}
        </Link>
        <Link to="/services">
          {page == "services" ? (
            <Box py={1} px={4} color="white" bgcolor="black" borderRadius={25}>
              <p>
                <i className="fa-solid fa-microchip"></i> &nbsp;&nbsp; Services
              </p>
            </Box>
          ) : (
            <Box py={1} px={4}>
              <p>
                <i className="fa-solid fa-microchip"></i> &nbsp;&nbsp; Services
              </p>
            </Box>
          )}
        </Link>
        <Link to="/portfolio">
          {page == "portfolio" ? (
            <Box py={1} px={4} color="white" bgcolor="black" borderRadius={25}>
              <p>
                <i className="fa-solid fa-briefcase"></i> &nbsp;&nbsp; Portfolio
              </p>
            </Box>
          ) : (
            <Box py={1} px={4}>
              <p>
                <i className="fa-solid fa-briefcase"></i> &nbsp;&nbsp; Portfolio
              </p>
            </Box>
          )}
        </Link>
        <Link to="/about">
          {page == "about" ? (
            <Box py={1} px={4} color="white" bgcolor="black" borderRadius={25}>
              <p>
                <i className="fa-solid fa-circle-user"></i> &nbsp;&nbsp; About
              </p>
            </Box>
          ) : (
            <Box py={1} px={4}>
              <p>
                <i className="fa-solid fa-circle-user"></i> &nbsp;&nbsp; About
              </p>
            </Box>
          )}
        </Link>
        <Link to="/hire-us">
          <i className="fa-solid fa-square-arrow-up-right"></i> &nbsp;&nbsp;
          Hire us
        </Link>
        <Link to="/career">
          <i className="fa-solid fa-paper-plane"></i> &nbsp;&nbsp; Career
        </Link>
      </Box>
    </Container>
  );
};
