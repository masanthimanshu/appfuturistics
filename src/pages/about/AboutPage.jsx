import { useEffect } from "react";
import style from "./style.module.css";
import { Box, Grid, Container, Typography } from "@mui/material";
import { ContactForm } from "../../components/contact/ContactForm";
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
      <BottomNavbar page="about" />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <img src="/desk.png" alt="About Us" style={{ width: "100%" }} />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h4">What do we stand for?</Typography>
            <br />
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              suscipit ex sit accusamus porro deserunt voluptates autem,
              pariatur dolorum quae dolore beatae ipsam accusantium soluta quo
              enim expedita vero eum?
            </Typography>
            <br />
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              suscipit ex sit accusamus porro deserunt voluptates autem,
              pariatur dolorum quae dolore beatae ipsam accusantium soluta quo
              enim expedita vero eum?
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <Typography variant="h4">What do we stand for?</Typography>
            <br />
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              suscipit ex sit accusamus porro deserunt voluptates autem,
              pariatur dolorum quae dolore beatae ipsam accusantium soluta quo
              enim expedita vero eum?
            </Typography>
            <br />
            <Typography>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
              suscipit ex sit accusamus porro deserunt voluptates autem,
              pariatur dolorum quae dolore beatae ipsam accusantium soluta quo
              enim expedita vero eum?
            </Typography>
          </Grid>
          <Grid item md={6}>
            <img src="/desk.png" alt="About Us" style={{ width: "100%" }} />
          </Grid>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <ContactForm />
      <Box height={50}></Box>
    </>
  );
}
