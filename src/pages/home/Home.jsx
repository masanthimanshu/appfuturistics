import { Container, Grid, Typography } from "@mui/material";
import { HeroSlider } from "../../components/home/HeroSlider";
import { ServicesData } from "../../data/services-data";
import style from "./style.module.css";
import { Ruler } from "../../components/Ruler";

export const Home = () => {
  return (
    <>
      <HeroSlider />
      <Ruler />
      <Container maxWidth="xl">
        <Typography color={"lightsalmon"}>
          <b>What we do</b>
        </Typography>
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
                <div className={style.services_box}>
                  <img
                    style={{ width: "75px" }}
                    src="/CodingService.png"
                    alt="Coding Service"
                  />
                  <br />
                  <br />
                  <Typography variant="h4">Coding Service</Typography>
                  <br />
                  <br />
                  <Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque consectetur vel tenetur quisquam, dignissimos soluta
                    dolores veniam, excepturi eum, amet sequi quaerat laborum
                    harum deleniti culpa suscipit nulla nemo ipsa!
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
      <Ruler />
    </>
  );
};
