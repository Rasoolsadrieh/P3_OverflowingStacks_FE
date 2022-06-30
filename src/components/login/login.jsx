import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Box, Paper, Card, CardContent, Typography, } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "./login_bg.jpeg";
import { createTheme } from "@mui/material";

const styles = {
  heroContainer: {
    height: "100vh",
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    margin: 0,
    padding: 10,
    opacity: "80%",
  }
 };

export default function CustomerLogin() {

  const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();
  

  const url = "https://overflowingstacksweb.azurewebsites.net/"

  const CustomerEmailInput = useRef();
  const PasswordInput = useRef();

  async function login(){

    const customer = {
        
        username: CustomerEmailInput.current.value,
        userpassword: PasswordInput.current.value,
    }
    
    try{
        const response = await axios.post(`${url}/auth`, customer)
        console.log(response.data)
        navigate("/loginqrcode");
    } catch (error) {
        console.error(error.response.data)
        console.log(error)
    }
}

  return (
    <>
    <center>
    <div className="login">
    <Paper style={styles.heroContainer}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{  opacity: "85%", boxShadow: 5,
          borderRadius: 2, width: 400, height: 300 }}>
      <CardContent>
     
     
          <center>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
          <Typography sx={{  }} color="text.secondary" gutterBottom>
          Please log in below
      </Typography>
          <TextField id="outlined-basic" label="Please enter your Email" variant="outlined" inputRef={CustomerEmailInput} />
          <br></br>
          <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined" inputRef={CustomerEmailInput}>
          <InputLabel htmlFor="outlined-adornment-password">Please enter Password </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            inputRef={PasswordInput}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          <br></br>
          <br></br>
          <Button variant='contained' onClick={login}>Login</Button>
          
          </Box>
          </center>
          </CardContent>
          </Card>
          </Paper>
          </div>
          </center>




    {/* <h4>Please log in below.</h4>
    <br></br>
    <input size="50" placeholder="Please enter your email address" ref={CustomerEmailInput}></input>
    <br></br>
    <br></br>
    <input size="50" type="password" placeholder="Please enter your password" ref={PasswordInput}></input>
    <br></br>
    <br></br>
    <Button variant="contained" color="success" onClick={login}>Login</Button> */}
</>
);
}
