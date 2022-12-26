import React, { useState } from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function UserCreate() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const urlCreate = "https://www.melivecode.com/api/users/create";

  const raw = {
    fname: fname,
    lname: lname,
    email: email,
    username: username,
    avatar: avatar,
  };

  const config = {
    url: urlCreate,
    method: "post",
    data: raw,
  };

  const createdata = async () => {
    try {
      const response = await axios(config);
      console.log(response.status);
      if (response.status == 200) {
        alert("Register complete");
        window.location.href = "/";
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error.response.data);
      alert("abcdefgh");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createdata();
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ p: 2 }}>
        <Typography variant="h6" component="div">
          Create Users
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="fname"
                label="First Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setFname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="lname"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setLname(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="avatar"
                label="Avatar"
                variant="outlined"
                fullWidth
                required
                onChange={(e) => setAvatar(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                {" "}
                Register{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
