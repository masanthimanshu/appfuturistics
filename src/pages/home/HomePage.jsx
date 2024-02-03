import { Box, Container, Typography } from "@mui/material";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { HomeHeroSection } from "../../components/home/HomeHeroSection";

export const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <BottomNavbar page="home" />
      <Box bgcolor="#f5f5f5" py={10}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h3">
            <b>How can we help you?</b>
          </Typography>
          <br />
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
            quas laborum nostrum natus consequatur cum asperiores odio minus
            placeat quos atque sint minima qui pariatur soluta iste veritatis
            blanditiis?
          </Typography>
        </Container>
      </Box>
      <Container sx={{ height: "200vh" }}></Container>
    </>
  );
};
