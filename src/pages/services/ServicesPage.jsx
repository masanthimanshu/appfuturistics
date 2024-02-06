import { useEffect } from "react";
import style from "./style.module.css";
import { Box, Container, Typography } from "@mui/material";
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
      <Container sx={{ height: "100vh" }}>
        <div id="zoom_sec" className={style.hero_sec}>
          <Typography variant="h2">
            <b>Services</b>
          </Typography>
        </div>
      </Container>
      <BottomNavbar page="services" />
      <Box height={100}></Box>
    </>
  );
}
