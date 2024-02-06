import { useEffect } from "react";
import { Box } from "@mui/material";
import style from "./style.module.css";
import { ZoomSection } from "../../components/services/ZoomSection";
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
      <Box position="relative" height="80vh" textAlign="center">
        <div className={style.hero_div}>
          <h1 id="org_name">Services</h1>
          <h2 id="subtitle">Incubating a culture of innovation & creativity</h2>
        </div>
      </Box>
      <ZoomSection />
      <Box height={100}></Box>
      <BottomNavbar page="services" />
      <Box height={100}></Box>
    </>
  );
}
