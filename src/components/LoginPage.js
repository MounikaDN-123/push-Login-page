import React, { useState } from "react";
import {
  Alert,
  Button,
  Grid2,
  Input,
  Link,
  Paper,
  TextField,
} from "@mui/material";
import './LoginPage.css';
const Logindata = [
  {
    userName: "Mounika DN",
    //email:"mounika@gmail.com",
    Password: "1234mouni",
  },
];
const LoginPage = () => {
  const paperStyle = {
    padding: 20,
    height: "100vh",
    width: 400,
    margin: "0 auto",
  };

  const [data, setData] = useState({ userName: "", password: "" });
  const [loginSubmit, setLoginSubmit] = useState(false);
  console.log(loginSubmit)
  const { userName, password } = data;
  const handleChange = (e) => {
    if (e.target.name === "userName" && e.target.value.length > 25) {
      setData({ ...data, [e.target.name]: [] });
      console.log("Value entered is greater than 25 charecters");
    } else {
      setData({ ...data, [e.target.name]: [e.target.value] });
    }
  };
  const handleLoginsubmit = (e) => {
    e.preventDefault();
    console.log(data.userName[0].length, data.password.length,"DATA");
    // const regexp = /^\d{10}$/;
    // if((data.userName[0].length > 25 ||  regexp.test(data.userName[0]))&& (data.password[0].length <= 10 )){
    // console.log(loginSubmit,"Login")
    //   setLoginSubmit(loginSubmit);
    // }else {
    //   setLoginSubmit(!loginSubmit);
    // }
    
  };

  const handleLogOutsubmit = (e) => {
    e.preventDefault();
   
    setLoginSubmit(false);
    
  };
  return (
    <Paper elevation={5} className="paperSection">
      <Grid2 container className="login-Success-section">
        {!loginSubmit ? (
          <Grid2>
            <label>Email or Mobile or Login Name</label>
            <TextField
              value={userName}
              name="userName"
              type="text"
              fullWidth
              onChange={handleChange}
              maxLength={10}
            />
            <label>Password</label>
            <TextField
              value={password}
              name="password"
              onChange={handleChange}
              fullWidth
            />
            <Link
              href="#"
              style={{ float: "right", padding: "10px 0px 10px 0px" }}
            >
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
        ) : (
          <Grid2 className="logout-Success-section">
            <label >Login Successful!!</label>
            <Button
              type="submit "
              variant="contained"
              color="primary"
              onClick={handleLogOutsubmit}
              fullWidth
            >
              LogOut
            </Button>
          </Grid2>
        )}
      </Grid2>
    </Paper>
  );
};

export default LoginPage;
