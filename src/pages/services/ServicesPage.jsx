import { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
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
      <br />
      <br />
      <br />
      <br />
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
      <BottomNavbar page="services" />
      <Box height={50}></Box>
    </>
  );
}
