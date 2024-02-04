import { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";

export default function ServicesPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Container sx={{ height: "100vh" }}></Container>
      <BottomNavbar page="services" />
      <Box height={100}></Box>
    </>
  );
}
