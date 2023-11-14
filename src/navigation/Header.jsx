import { ArrowOutward } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Grid container>
        <Grid item md={6}>
          <Link to="/">
            <Typography fontSize={22}>
              <b>
                <i>AppFuturistics</i>
              </b>
            </Typography>
          </Link>
        </Grid>
        <Grid item md={6}>
          <Box display="flex" alignItems="center" justifyContent="space-around">
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
          </Box>
        </Grid>
      </Grid>
    </header>
  );
};
