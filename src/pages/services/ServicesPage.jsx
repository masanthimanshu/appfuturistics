import { useEffect } from "react";
import style from "./style.module.css";
import { ContactForm } from "../../components/contact/ContactForm";
import { ZoomSection } from "../../components/services/ZoomSection";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { OurServicesCard } from "../../components/home/OurServicesCard";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                delectus velit similique sapiente quo magni laudantium quas
                debitis laboriosam maxime voluptate dolorum cumque eum impedit,
                distinctio aliquid fugiat amet voluptatibus.
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Placeat sequi maiores voluptatem aspernatur ipsam fugiat error
                totam eveniet dolorum, perferendis recusandae saepe beatae optio
                officiis maxime autem cum enim consequatur!
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum neque minima eligendi consectetur et quasi
                repudiandae excepturi labore. Cum similique in nam? Animi
                consequatur fuga rerum facilis quasi fugiat commodi!
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aspernatur autem ullam at neque in amet inventore nam asperiores
                nulla excepturi qui tempora molestias, quae sunt, nesciunt quo
                eaque ea possimus?
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
                <b>Wordpress Website</b>
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                aperiam voluptatum vero temporibus corporis nulla sequi,
                similique esse voluptatem cum illum est harum natus, sunt itaque
                soluta molestias dolorum ab!
              </Typography>
              <br />
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                fuga dicta voluptatem laborum corrupti officia voluptas quo, qui
                architecto inventore dolore. Voluptates aspernatur possimus
                dolor nulla porro in officiis laudantium.
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
