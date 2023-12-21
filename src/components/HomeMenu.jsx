import style from "./style.module.css";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";

export const HomeMenu = () => {
  return (
    <section className={style.menu_sec}>
      <Box display="flex" justifyContent="space-around">
        <div className={style.selected_item}>
          <Link to="/">
            <i className="fa-solid fa-house-user"></i> &nbsp;&nbsp;
            <Typography>Home</Typography>
          </Link>
        </div>
        <Link to="/">
          <i className="fa-solid fa-microchip"></i> &nbsp;&nbsp;
          <Typography>Services</Typography>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-briefcase"></i> &nbsp;&nbsp;
          <Typography>Portfolio</Typography>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-circle-user"></i> &nbsp;&nbsp;
          <Typography>About</Typography>
        </Link>
        <Link to="/">
          <i className="fa-solid fa-square-arrow-up-right"></i> &nbsp;&nbsp;
          <Typography>Hire us</Typography>
        </Link>
      </Box>
    </section>
  );
};
