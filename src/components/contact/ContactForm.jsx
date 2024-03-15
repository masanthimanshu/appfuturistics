import { useState } from "react";
import { ArrowOutward } from "@mui/icons-material";
import { Grid, Button, Container, TextField, Typography } from "@mui/material";

export const ContactForm = () => {
  const [msg, setMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container sx={{ py: 10 }}>
      <Typography color="grey">
        <b>GET IN TOUCH</b>
      </Typography>
      <Typography variant="h4">
        Let&apos;s get started on your project!
      </Typography>
      <br />
      <br />
      <br />
      <form onSubmit={handleSubmit}>
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
        <Button variant="text" color="primary" type="submit">
          Submit &nbsp;
          <ArrowOutward />
        </Button>
      </form>
    </Container>
  );
};
