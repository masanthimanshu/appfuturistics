import { gsap } from "gsap";
import style from "./style.module.css";
import { Container } from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { HomeMenu } from "../../components/HomeMenu";

export const HomePage = () => {
  const animation = useRef();
  const timeLine = gsap.timeline();

  useLayoutEffect(() => {
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
        delay: 0.5,
        opacity: 0.05,
      });
    }, animation);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className={style.main_sec} ref={animation}>
        <img src="/mascot.png" alt="Mascot" id="mascot" />
        <div>
          <h1 id="org_name">Appfuturistics</h1>
          <h2 id="subtitle">YOUR TECHNOLOGY PARTNER</h2>
        </div>
      </section>
      <HomeMenu />
      <Container sx={{ height: "500vh" }}></Container>
    </>
  );
};
