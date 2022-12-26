import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { Button, Grid, TextField, Typography } from "@mui/material";

export default function UserCreate() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const { id } = useParams();

  const baseurl = "https://www.melivecode.com/api/users/" + id;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const response = await axios(baseurl);
    setFname(response.data.user.fname);
    setLname(response.data.user.lname);
    setUsername(response.data.user.username);
    setEmail(response.data.user.email);
    setAvatar(response.data.user.avatar);
  };

  const urlCreate = "https://www.melivecode.com/api/users/update";

  const raw = {
    id: id,
    fname: fname,
    lname: lname,
    email: email,
    username: username,
    avatar: avatar,
  };

  const config = {
    url: urlCreate,
    method: "put",
    data: raw,
  };

  const createdata = async () => {
    try {
      const response = await axios(config);
      console.log(response.status);
      if (response.status == 200) {
        alert("Update complete");
        window.location.href = "/";
      }
    } catch (error) {
      console.log(error.response.data);
      alert("Error");
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
        <Typography variant="h6" component="div" mb={2}>
          Update User
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
                value={fname}
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
                value={lname}
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
                value={username}
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
                value={email}
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
                value={avatar}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                {" "}
                Update{" "}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
