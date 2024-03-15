import PropTypes from "prop-types";
import style from "./style.module.css";
import { ArrowOutward } from "@mui/icons-material";
import { Box, Grid, Button, Typography } from "@mui/material";

export const CaseStudiesCard = ({ image, type, tech, title }) => {
  return (
    <Grid item md={6}>
      <div className={style.case_study_img}>
        <img src={image} alt="Case Study" />
      </div>
      <br />
      <Box display="flex" justifyContent="space-between">
        <Typography>{type}</Typography>
        <Typography color="gray">
          <b>{tech}</b>
        </Typography>
      </Box>
      <br />
      <Typography>
        <b>{title}</b>
      </Typography>
      <br />
      <Button variant="text" color="primary">
        View Case Study &nbsp; <ArrowOutward />
      </Button>
    </Grid>
  );
};

CaseStudiesCard.propTypes = {
  image: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  tech: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
