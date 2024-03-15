import { gsap } from "gsap";
import style from "./style.module.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Container, Divider, Grid } from "@mui/material";
import { useLayoutEffect, useRef, useEffect } from "react";
import { ContactForm } from "../../components/contact/ContactForm";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { ProjectDetailsCard } from "../../components/portfolio/ProjectDetailsCard";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const animation = useRef();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context((e) => {
      const leftBoxes = e.selector("#slide_left");
      const rightBoxes = e.selector("#slide_right");

      leftBoxes.forEach((box) => {
        gsap.to(box, {
          x: 0,
          duration: 1,
          scrollTrigger: {
            start: "top center",
            trigger: box,
          },
        });
      });

      rightBoxes.forEach((box) => {
        gsap.to(box, {
          x: 0,
          duration: 1,
          scrollTrigger: {
            start: "top center",
            trigger: box,
          },
        });
      });
    }, animation);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={animation}>
      <section className={style.hero_sec}>
        <div>
          <h1 id="org_name">Portfolio</h1>
          <h2 id="subtitle">Code rules everything around us</h2>
        </div>
      </section>
      <BottomNavbar page="portfolio" />
      <br />
      <br />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <div id="slide_left" className={style.slide_left}>
              <img src="/desk.png" alt="Image" />
            </div>
          </Grid>
          <Grid item md={6} display="flex" alignItems="center">
            <div id="slide_right" className={style.slide_right}>
              <ProjectDetailsCard />
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={6}>
          <Grid item md={6} display="flex" alignItems="center">
            <div id="slide_left" className={style.slide_left}>
              <ProjectDetailsCard />
            </div>
          </Grid>
          <Grid item md={6}>
            <div id="slide_right" className={style.slide_right}>
              <img src="/desk.png" alt="Image" />
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
        <br />
        <Grid container spacing={6}>
          <Grid item md={6}>
            <div id="slide_left" className={style.slide_left}>
              <img src="/desk.png" alt="Image" />
            </div>
          </Grid>
          <Grid item md={6} display="flex" alignItems="center">
            <div id="slide_right" className={style.slide_right}>
              <ProjectDetailsCard />
            </div>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <ContactForm />
      <Box height={50}></Box>
    </div>
  );
}
