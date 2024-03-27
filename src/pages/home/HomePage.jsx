import { Box, Grid, Container, Typography } from "@mui/material";
import { ContactForm } from "../../components/contact/ContactForm";
import { PlatformIcons } from "../../components/home/PlatformIcons";
import { HomeHeroSection } from "../../components/home/HomeHeroSec";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { OurServicesCard } from "../../components/home/OurServicesCard";
import { CaseStudiesCard } from "../../components/home/CaseStudiesCard";

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
          <Grid container spacing={3}>
            <OurServicesCard
              heading="Design"
              icon="fa-solid fa-crop"
              description="Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Quis dignissimos enim unde!"
            />
            <OurServicesCard
              heading="Development"
              icon="fa-solid fa-code"
              description="Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Quis dignissimos enim unde!"
            />
            <OurServicesCard
              heading="Marketing"
              icon="fa-solid fa-chart-simple"
              description="Lorem ipsum dolor, sit amet consectetur 
                adipisicing elit. Quis dignissimos enim unde!"
            />
          </Grid>
        </Container>
      </Box>
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
        <br />
        <Grid container spacing={6}>
          <CaseStudiesCard
            image="/desk.png"
            tech="Flutter & Firebase"
            type="Mobile App Development"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis repudiandae animi, similique fugiat cupiditate iusto?"
          />
          <CaseStudiesCard
            image="/desk.png"
            tech="Flutter & Firebase"
            type="Mobile App Development"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis repudiandae animi, similique fugiat cupiditate iusto?"
          />
          <CaseStudiesCard
            image="/desk.png"
            tech="Flutter & Firebase"
            type="Mobile App Development"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Blanditiis repudiandae animi, similique fugiat cupiditate iusto?"
          />
          <CaseStudiesCard
            image="/desk.png"
            tech="Flutter & Firebase"
            type="Mobile App Development"
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis repudiandae animi, similique fugiat cupiditate iusto?"
          />
        </Grid>
        <br />
        <br />
      </Container>
      <br />
      <br />
      <Box bgcolor="#fafafa" py={10}>
        <Container>
          <Typography variant="h3" textAlign="center">
            <b>Our Platforms Expertise</b>
          </Typography>
          <br />
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
            quas laborum nostrum natus consequatur cum asperiores odio minus
            placeat quos atque sint minima qui pariatur soluta iste veritatis
            blanditiis?
          </Typography>
          <PlatformIcons />
        </Container>
      </Box>
      <ContactForm />
      <Box height={50}></Box>
    </>
  );
}
