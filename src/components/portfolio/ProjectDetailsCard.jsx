import { Typography, Button } from "@mui/material";
import { ArrowOutward } from "@mui/icons-material";

export const ProjectDetailsCard = () => {
  return (
    <>
      <Typography variant="h4">
        <b>Heading Goes Here</b>
      </Typography>
      <br />
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
        provident recusandae ullam ut? Minima et similique eius, aliquid porro
        iure sunt cum facere consectetur saepe deleniti deserunt ipsum excepturi
        quae?
      </Typography>
      <br />
      <br />
      <Button variant="text" color="primary">
        View Case Study &nbsp; <ArrowOutward />
      </Button>
    </>
  );
};
