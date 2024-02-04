import { useState } from "react";
import { PlatformIcons } from "../../components/home/PlatformIcons";
import { BottomNavbar } from "../../components/navigation/BottomNavbar";
import { HomeHeroSection } from "../../components/home/HomeHeroSection";
import { OurServicesCard } from "../../components/home/OurServicesCard";
import {
  Code,
  AppShortcut,
  ArrowOutward,
  DesignServices,
} from "@mui/icons-material";
import {
  Box,
  Grid,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

export default function HomePage() {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  return (
    <>
      <HomeHeroSection />
      <BottomNavbar page="home" />
      <Box bgcolor="#fafafa" py={10}>
        <Container>
          <Typography variant="h3" textAlign="center">
            <b>How can we help you?</b>
          </Typography>
          <br />
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
            quas laborum nostrum natus consequatur cum asperiores odio minus
            placeat quos atque sint minima qui pariatur soluta iste veritatis
            blanditiis?
          </Typography>
          <br />
          <br />
          <br />
          <Grid container spacing={5}>
            <OurServicesCard
              heading="Design"
              icon={<DesignServices fontSize="inherit" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quae doloremque! Aperiam sint sapiente excepturi
                  quo, et vero fugit expedita ea adipisci molestias eligendi.
                  Praesentium, molestias? Ab culpa facere modi."
            />
            <OurServicesCard
              heading="Development"
              icon={<Code fontSize="inherit" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quae doloremque! Aperiam sint sapiente excepturi
                  quo, et vero fugit expedita ea adipisci molestias eligendi.
                  Praesentium, molestias? Ab culpa facere modi."
            />
            <OurServicesCard
              heading="Marketing"
              icon={<AppShortcut fontSize="inherit" />}
              description="Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Obcaecati, quae doloremque! Aperiam sint sapiente excepturi
                  quo, et vero fugit expedita ea adipisci molestias eligendi.
                  Praesentium, molestias? Ab culpa facere modi."
            />
          </Grid>
        </Container>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Typography variant="h3" textAlign="center">
          <b>Case Studies</b>
        </Typography>
        <br />
        <Typography textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
          quas laborum nostrum natus consequatur cum asperiores odio minus
          placeat quos atque sint minima qui pariatur soluta iste veritatis
          blanditiis?
        </Typography>
        <br />
        <br />
        <Grid container spacing={5}>
          <Grid item md={6}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
            <br />
            <br />
            <Box display="flex" justifyContent="space-between">
              <Typography>Mobile App Development</Typography>
              <Typography color="gray">
                <b>Flutter & Firebase</b>
              </Typography>
            </Box>
            <br />
            <Typography>
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis repudiandae animi, similique fugiat cupiditate iusto?
              </b>
            </Typography>
            <br />
            <Button variant="text" color="primary">
              View Case Study &nbsp; <ArrowOutward />
            </Button>
          </Grid>
          <Grid item md={6}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
            <br />
            <br />
            <Box display="flex" justifyContent="space-between">
              <Typography>Mobile App Development</Typography>
              <Typography color="gray">
                <b>Flutter & Firebase</b>
              </Typography>
            </Box>
            <br />
            <Typography>
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis repudiandae animi, similique fugiat cupiditate iusto?
              </b>
            </Typography>
            <br />
            <Button variant="text" color="primary">
              View Case Study &nbsp; <ArrowOutward />
            </Button>
          </Grid>
          <Grid item md={6}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
            <br />
            <br />
            <Box display="flex" justifyContent="space-between">
              <Typography>Mobile App Development</Typography>
              <Typography color="gray">
                <b>Flutter & Firebase</b>
              </Typography>
            </Box>
            <br />
            <Typography>
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis repudiandae animi, similique fugiat cupiditate iusto?
              </b>
            </Typography>
            <br />
            <Button variant="text" color="primary">
              View Case Study &nbsp; <ArrowOutward />
            </Button>
          </Grid>
          <Grid item md={6}>
            <img src="/desk.png" alt="Case Study" style={{ width: "100%" }} />
            <br />
            <br />
            <Box display="flex" justifyContent="space-between">
              <Typography>Mobile App Development</Typography>
              <Typography color="gray">
                <b>Flutter & Firebase</b>
              </Typography>
            </Box>
            <br />
            <Typography>
              <b>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis repudiandae animi, similique fugiat cupiditate iusto?
              </b>
            </Typography>
            <br />
            <Button variant="text" color="primary">
              View Case Study &nbsp; <ArrowOutward />
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
      </Container>
      <br />
      <br />
      <Box bgcolor="#fafafa" py={10}>
        <Container>
          <Typography variant="h3" textAlign="center">
            <b>Our Platforms Expertise</b>
          </Typography>
          <br />
          <Typography textAlign="center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ipsum
            quas laborum nostrum natus consequatur cum asperiores odio minus
            placeat quos atque sint minima qui pariatur soluta iste veritatis
            blanditiis?
          </Typography>
          <PlatformIcons />
        </Container>
      </Box>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <form>
          <Grid container spacing={5}>
            <Grid item md={6}>
              <TextField
                label="Name"
                value={name}
                variant="standard"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="email"
                label="Email"
                value={email}
                variant="standard"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Phone"
                type="number"
                value={phone}
                variant="standard"
                placeholder="Enter Your Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                label="Company Name"
                value={company}
                variant="standard"
                placeholder="Enter Your Company Name"
                onChange={(e) => setCompany(e.target.value)}
                required
                fullWidth
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                value={msg}
                label="Message"
                variant="standard"
                placeholder="How can we help you?"
                onChange={(e) => setMsg(e.target.value)}
                rows={3}
                fullWidth
                multiline
              />
            </Grid>
          </Grid>
          <br />
          <br />
          <Button variant="text" color="primary">
            Submit &nbsp;
            <ArrowOutward />
          </Button>
        </form>
      </Container>
      <Box height={100}></Box>
    </>
  );
}
