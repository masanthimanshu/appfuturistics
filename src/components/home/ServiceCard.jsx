import { Typography } from "@mui/material";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export const ServiceCard = ({ image, name, link, desc }) => {
  return (
    <Link to={link}>
      <div className={style.services_box}>
        <img style={{ width: "75px" }} src={image} alt={name} />
        <br />
        <br />
        <Typography variant="h4">{name}</Typography>
        <br />
        <br />
        <Typography>{desc}</Typography>
      </div>
    </Link>
  );
};
