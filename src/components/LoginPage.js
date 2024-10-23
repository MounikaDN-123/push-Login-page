import React, { useState } from "react";
import { Button, Grid2, Link, Paper, TextField } from "@mui/material";

const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: 400,
    margin: "20px auto",
  };

  const [loginInfo, setLoginInfo] = useState({ UserName: "", Password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
    console.log(e);
  };
  const handleLoginChange = (e) => {
    e.preventDefault();
  };
  return (
    <Paper elevation={5} style={paperStyle}>
      <Grid2 container>
        <label>Email or Mobile or Login Name</label>
        <TextField
          value={""}
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <label>Password</label>
        <TextField
          value={""}
          onChange={handleChange}
          fullWidth
        />
        <Link href="#" style={{ float: "right", padding: "10px 0px 10px 0px" }}>
          Forget Login Credentials
        </Link>
        <Button
          type="submit "
          variant="contained"
          color="primary"
          onClick={handleLoginChange}
          fullWidth
        >
          Login
        </Button>
      </Grid2>
    </Paper>
  );
};

export default LoginPage;
