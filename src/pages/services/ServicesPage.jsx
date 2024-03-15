import { useEffect } from "react";
import style from "./style.module.css";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { ContactForm } from "../../components/contact/ContactForm";
import { ZoomSection } from "../../components/services/ZoomSection";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { OurServicesCard } from "../../components/home/OurServicesCard";

export default function ServicesPage() {
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
          <h1 id="org_name">Services</h1>
          <h2 id="subtitle">Code rules everything around us</h2>
        </div>
      </section>
      <ZoomSection image="/desk.png" />
      <Container sx={{ marginTop: "-10rem" }}>
        <Grid container spacing={5}>
          <OurServicesCard
            heading="Design"
            icon={<i className="fa-solid fa-crop"></i>}
            description="Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Quis dignissimos enim unde!"
          />
          <OurServicesCard
            heading="Development"
            icon={<i className="fa-solid fa-code"></i>}
            description="Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Quis dignissimos enim unde!"
          />
          <OurServicesCard
            heading="Marketing"
            icon={<i className="fa-solid fa-chart-simple"></i>}
            description="Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Quis dignissimos enim unde!"
          />
        </Grid>
      </Container>
      <br />
      <BottomNavbar page="services" />
      <Container>
        <Box border={2} borderRadius={2} p={4} borderColor="gray">
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Typography variant="h4">
                <b>Mobile App</b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                est dignissimos dolorem molestias iste porro nostrum! Eveniet
                tempore ipsam pariatur ipsa, aliquid quod, nemo sequi, debitis
                reprehenderit neque repellendus et!
              </Typography>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Box>
        <br />
        <br />
        <Box border={2} borderRadius={2} p={4} borderColor="gray">
          <Grid container spacing={5}>
            <Grid item md={6} order={2}>
              <Typography variant="h4">
                <b>Web App</b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                est dignissimos dolorem molestias iste porro nostrum! Eveniet
                tempore ipsam pariatur ipsa, aliquid quod, nemo sequi, debitis
                reprehenderit neque repellendus et!
              </Typography>
            </Grid>
            <Grid item md={6} order={1}></Grid>
          </Grid>
        </Box>
        <br />
        <br />
        <Box border={2} borderRadius={2} p={4} borderColor="gray">
          <Grid container spacing={5}>
            <Grid item md={6}>
              <Typography variant="h4">
                <b>Mobile App</b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit,
                est dignissimos dolorem molestias iste porro nostrum! Eveniet
                tempore ipsam pariatur ipsa, aliquid quod, nemo sequi, debitis
                reprehenderit neque repellendus et!
              </Typography>
            </Grid>
            <Grid item md={6}></Grid>
          </Grid>
        </Box>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <Divider />
      <ContactForm />
      <Box height={50}></Box>
    </>
  );
}
