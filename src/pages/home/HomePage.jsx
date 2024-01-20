import { gsap } from "gsap";
import style from "./style.module.css";
import { Box, Container } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BottomNavbar } from "../../components/BottomNavbar";

gsap.registerPlugin(ScrollTrigger);

export const HomePage = () => {
  const animation = useRef();
  const timeLine = gsap.timeline();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    const ctx = gsap.context(() => {
      timeLine.to("#org_name", {
        y: -50,
        opacity: 1,
        delay: 0.25,
      });

      timeLine.to("#subtitle", {
        y: -50,
        opacity: 1,
      });

      timeLine.to("#mascot", {
        y: -50,
        delay: 0.25,
        opacity: 0.05,
      });
    }, animation);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={animation}>
      <Box position="relative" height="110vh" textAlign="center">
        <img
          id="mascot"
          alt="Mascot"
          src="/mascot.png"
          className={style.hero_img}
        />
        <div className={style.hero_div}>
          <h1 id="org_name">Appfuturistics</h1>
          <h2 id="subtitle">YOUR TECHNOLOGY PARTNER</h2>
        </div>
      </Box>
      <BottomNavbar page="home" />
      <Container sx={{ height: "500vh" }}></Container>
    </div>
  );
};
