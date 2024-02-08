import { useEffect } from "react";
import { Box } from "@mui/material";
import style from "./style.module.css";
import { ZoomSection } from "../../components/common/ZoomSection";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";

export default function PortfolioPage() {
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
          <h1 id="org_name">Portfolio</h1>
          <h2 id="subtitle">Code rules everything around us</h2>
        </div>
      </Box>
      <ZoomSection image="/desk.png" />
      <br />
      <br />
      <BottomNavbar page="portfolio" />
      <br />
      <br />
      <Box height={125}></Box>
    </>
  );
}
