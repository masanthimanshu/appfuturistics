import { gsap } from "gsap";
import { Box } from "@mui/material";
import style from "./style.module.css";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HomeHeroSection = () => {
  const animation = useRef(null);
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
        delay: 0.1,
      });

      timeLine.to("#subtitle", {
        y: -50,
        opacity: 1,
      });

      timeLine.to("#mascot", {
        y: -50,
        delay: 0.05,
        opacity: 0.075,
      });
    }, animation);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={animation}>
      <Box position="relative" height="100vh" textAlign="center">
        <img
          id="mascot"
          alt="Mascot"
          src="/mascot.png"
          className={style.hero_img}
        />
        <div className={style.hero_div}>
          <h1 id="org_name">Appfuturistics</h1>
          <h2 id="subtitle">YOUR TECHNOLOGY PARTNERS</h2>
        </div>
      </Box>
    </div>
  );
};
