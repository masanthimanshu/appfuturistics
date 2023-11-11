import { ArrowOutward } from "@mui/icons-material";
import { Button, Container, Typography, Grid } from "@mui/material";

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <div style={{ height: "80px" }}></div>
      <Typography variant="h3">
        We revolutionize enterprises through our tailored applications and
        innovative product solutions
      </Typography>
      <br />
      <Button variant="text" color="error">
        <b> Let's Connect </b> &nbsp;&nbsp; <ArrowOutward />
      </Button>
      <div style={{ height: "80px" }}></div>
      <video autoPlay muted loop>
        <source src="https://www.techaheadcorp.com/wp-content/uploads/2023/10/ta-banner-new.webm"></source>
      </video>
      <div style={{ height: "80px" }}></div>
      <Typography color="error">
        <b>WHAT WE DO</b>
      </Typography>
      <br />
      <Grid container>
        <Grid item md={9}>
          <Typography variant="h4">
            We design custom experiences and develop products that leverage your
            digital influence, ranging from cutting-edge mobile apps to
            solutions powered by artificial intelligence.
          </Typography>
        </Grid>
      </Grid>
      <div style={{ height: "80px" }}></div>
    </Container>
  );
};
