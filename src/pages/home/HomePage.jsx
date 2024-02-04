import { Box, Container, Typography, Grid } from "@mui/material";
import { DesignServices, Code, AppShortcut } from "@mui/icons-material";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { HomeHeroSection } from "../../components/home/HomeHeroSection";
import { OurServicesCard } from "../../components/home/OurServicesCard";

export default function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <BottomNavbar page="home" />
      <Box bgcolor="#fafafa" py={10}>
        <Container>
          <Typography variant="h3" textAlign="center">
            <b>How can we help you?</b>
          </Typography>
          <br />
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
            quas laborum nostrum natus consequatur cum asperiores odio minus
            placeat quos atque sint minima qui pariatur soluta iste veritatis
            blanditiis?
          </Typography>
          <br />
          <br />
          <br />
          <Grid container spacing={5}>
            <OurServicesCard
              heading="Design"
              icon={<DesignServices fontSize="inherit" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quae doloremque! Aperiam sint sapiente excepturi
                  quo, et vero fugit expedita ea adipisci molestias eligendi.
                  Praesentium, molestias? Ab culpa facere modi."
            />
            <OurServicesCard
              heading="Development"
              icon={<Code fontSize="inherit" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quae doloremque! Aperiam sint sapiente excepturi
                  quo, et vero fugit expedita ea adipisci molestias eligendi.
                  Praesentium, molestias? Ab culpa facere modi."
            />
            <OurServicesCard
              heading="Marketing"
              icon={<AppShortcut fontSize="inherit" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quae doloremque! Aperiam sint sapiente excepturi
                  quo, et vero fugit expedita ea adipisci molestias eligendi.
                  Praesentium, molestias? Ab culpa facere modi."
            />
          </Grid>
        </Container>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h3" textAlign="center">
          <b>Case Studies</b>
        </Typography>
        <br />
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
          quas laborum nostrum natus consequatur cum asperiores odio minus
          placeat quos atque sint minima qui pariatur soluta iste veritatis
          blanditiis?
        </Typography>
        <br />
        <br />
        <Grid container spacing={2}>
          <Grid item md={4}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
          </Grid>
          <Grid item md={4}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
          </Grid>
          <Grid item md={4}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
      <Box height={100}></Box>
    </>
  );
}
