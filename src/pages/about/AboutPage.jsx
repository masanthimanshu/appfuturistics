import { useEffect } from "react";
import { Box } from "@mui/material";
import style from "./style.module.css";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <section className={style.hero_sec}>
        <div>
          <h1 id="org_name">About Us</h1>
          <h2 id="subtitle">Code rules everything around us</h2>
        </div>
      </section>
      <br />
      <br />
      <BottomNavbar page="about" />
      <br />
      <br />
      <Box height={125}></Box>
    </>
  );
}
