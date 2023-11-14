import { ArrowOutward } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Grid container>
        <Grid item md={7}>
          <Link to="/">
            <Typography fontSize={22}>
              <b>
                <i>AppFuturistics</i>
              </b>
            </Typography>
          </Link>
        </Grid>
        <Grid item md={5}>
          <menu>
            <Link to="/services">Services</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/about">About</Link>
            <Link to="/career">Career</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">
              <Button variant="outlined" color="inherit">
                <b>Contact Us</b> &nbsp;&nbsp; <ArrowOutward />
              </Button>
            </Link>
          </menu>
        </Grid>
      </Grid>
    </header>
  );
};
