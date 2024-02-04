import style from "./style.module.css";
import { Box, Typography, Grid } from "@mui/material";

export const OurServicesCard = ({ icon, heading, description }) => {
  return (
    <Grid item md={4}>
      <div className={style.services_card}>
        <Typography variant="h3">{icon}</Typography>
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
