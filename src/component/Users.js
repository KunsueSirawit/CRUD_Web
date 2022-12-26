import React, { useState, useEffect } from "react";
import axios from "axios";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography, ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";

export default function Users() {
  const [items, setItems] = useState([]);

  const baseurl = "https://www.melivecode.com/api/users/";

  useEffect(() => {
    UserGet();
  }, []);

  const UserGet = async () => {
    const response = await axios(baseurl);
    console.log(response.data);
    setItems(response.data);
  };

  const UserDelete = async (id) => {
    const delurl = "https://www.melivecode.com/api/users/delete";

    const config = {
      url: delurl,
      method: "delete",
      data: { id: id },
    };

    if (id >= 13) {
      const response = await axios(config);
      if (response.status == 200) {
        UserGet();
        alert("Delete complete");
      }
      console.log(response.status);
    } else {
      alert(`You can't delete infomation id 1 - 12 `);
    }
  };
  const UserUpdate = async (id) => {
    if (id >= 13) {
      window.location = "/update/" + id;
    } else {
      alert(`You can't edit infomation id 1 - 12 `);
    }
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ p: 2 }}>
        <Paper sx={{ p: 2 }}>
          <Box display="flex">
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6" component="div">
                Users
              </Typography>
            </Box>
            <Box>
              <Link href="create">
                <Button variant="contained"> Create </Button>
              </Link>
            </Box>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> ID </TableCell>
                  <TableCell align="center">Avatar</TableCell>
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Username</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {items.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      <Box display="flex" justifyContent="{center}">
                        <Avatar alt={row.username} src={row.avatar} />
                      </Box>
                    </TableCell>
                    <TableCell align="right">{row.fname}</TableCell>
                    <TableCell align="right">{row.lname}</TableCell>
                    <TableCell align="right">{row.username}</TableCell>
                    <TableCell align="right">
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined button group"
                      >
                        <Button onClick={() => UserDelete(row.id)}>del</Button>
                        <Button onClick={() => UserUpdate(row.id)}>Edit</Button>
                      </ButtonGroup>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
