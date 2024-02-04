import { useEffect } from "react";
import { Container } from "@mui/material";
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
      <Container sx={{ height: "500vh" }}></Container>
    </>
  );
}