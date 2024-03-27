import PropTypes from "prop-types";
import style from "./style.module.css";
import { Typography, Grid } from "@mui/material";

export const OurServicesCard = ({ icon, heading, description }) => {
  return (
    <Grid item md={4}>
      <div className={style.services_card}>
        <Typography variant="h3">
          <i className={icon}></i>
        </Typography>
        <br />
        <br />
        <Typography variant="h4">
          <b>{heading}</b>
        </Typography>
        <br />
        <Typography>{description}</Typography>
      </div>
    </Grid>
  );
};

OurServicesCard.propTypes = {
  icon: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
