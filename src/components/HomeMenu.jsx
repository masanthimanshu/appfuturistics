import { Link } from "react-router-dom";
import { Box, Container } from "@mui/material";

export const HomeMenu = () => {
  return (
    <Container
      sx={{
        p: 1.25,
        top: "90vh",
        boxShadow: 5,
        borderRadius: 25,
        position: "sticky",
      }}
    >
      <Box display="flex" justifyContent="space-around">
        <Link to="/">
          <Box py={1} px={4} color="white" bgcolor="black" borderRadius={25}>
            <i className="fa-solid fa-house-user"></i> &nbsp;&nbsp; Home
          </Box>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-microchip"></i> &nbsp;&nbsp; Services
        </Link>
        <Link to="/">
          <i className="fa-solid fa-briefcase"></i> &nbsp;&nbsp; Portfolio
        </Link>
        <Link to="/">
          <i className="fa-solid fa-circle-user"></i> &nbsp;&nbsp; About
        </Link>
        <Link to="/">
          <i className="fa-solid fa-square-arrow-up-right"></i> &nbsp;&nbsp;
          Hire us
        </Link>
        <Link to="/">
          <i className="fa-solid fa-paper-plane"></i> &nbsp;&nbsp; Career
        </Link>
      </Box>
    </Container>
  );
};
