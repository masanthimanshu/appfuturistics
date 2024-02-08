import { useEffect } from "react";
import style from "./style.module.css";
import { Box, Container, Grid, Typography } from "@mui/material";
import { ZoomSection } from "../../components/common/ZoomSection";
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
          <h2 id="subtitle">Code rules everything around us</h2>
        </div>
      </Box>
      <ZoomSection image="/desk.png" />
      <br />
      <br />
      <BottomNavbar page="services" />
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
      <Box height={125}></Box>
    </>
  );
}
