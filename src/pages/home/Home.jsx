import { Box, Container, Grid, Typography } from "@mui/material";
import { HeroSlider } from "../../components/home/HeroSlider";
import { Platforms } from "../../components/home/Platforms";
import { ServiceCard } from "../../components/home/ServiceCard";
import { ServicesData } from "../../data/services-data";

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <hr />
      <Container maxWidth="xl">
        <Typography color={"lightsalmon"}>
          <b>What we do</b>
        </Typography>
        <br />
        <Grid container>
          <Grid item md={8}>
            <Typography variant="h4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              earum blanditiis obcaecati excepturi quidem nobis suscipit
              voluptas in reiciendis quis!
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
          {ServicesData.map((e, index) => {
            return (
              <Grid key={index} item md={4}>
                <ServiceCard
                  name={e.name}
                  desc={e.desc}
                  link={e.link}
                  image={e.image}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <hr />
      <Box p={10} color="white" bgcolor="var(--webColor)">
        <Typography>
          <b>OUR PLATFORM EXPERTISE</b>
        </Typography>
        <br />
        <Grid container>
          <Grid item md={8}>
            <Typography variant="h4">
              Leverage our profound platform knowledge and robust technological
              capabilities.
            </Typography>
          </Grid>
        </Grid>
        <Platforms />
      </Box>
    </>
  );
};
