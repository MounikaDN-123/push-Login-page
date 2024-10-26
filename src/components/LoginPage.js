import React, { useState } from "react";
import { Button, Grid2, Input, Link, Paper, TextField } from "@mui/material";

const data = [{
  userName:"Mounika DN",
  email:"mounika@gmail.com",
  Password:"1234mouni"
}]
const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: 400,
    margin: "20px auto",
  };

  const [data,setData] = useState({userName:'',password:''})

  const {userName,password} = data;
  const handleChange = (e) => {
    console.log(e,"Event")
    console.log(e.target.name,e.target.value,"Target Values")
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const handleLoginsubmit = (e) => {
    e.preventDefault();
    console.log(data,"DATA")
  };
  return (
    <Paper elevation={5} style={paperStyle}>
      <Grid2 container>
        <label>Email or Mobile or Login Name</label>
        <TextField
          value={userName}
          name='userName'
          type="text"
          fullWidth
          onChange={handleChange}
        />
        <label>Password</label>
        <TextField
          value={password}
          name="password"
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
          onClick={handleLoginsubmit}
          fullWidth
        >
          Login
        </Button>
      </Grid2>
    </Paper>
  );
};

export default LoginPage;
