import * as React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Button, Box, Paper, Card, CardContent, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "./login_bg.jpeg";
import { createTheme } from "@mui/material";
import { userContext } from "../../App";

const styles = {
  heroContainer: {
    height: "120vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: "100%",
    margin: 0,
    
    opacity: "80%",
  }
 };


export default function UserRegistration() {

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

  const [user,setUser] = React.useContext(userContext)

  const url = "https://overflowingstacks.azurewebsites.net";

  const emailInput = useRef();
  const fnameInput = useRef();
  const lnameInput = useRef();
  const phonenumberInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const dobInput = useRef();

  async function register() {
    const userprofile = {
      email: emailInput.current.value,
      fname: fnameInput.current.value,
      lname: lnameInput.current.value,
      phonenumber: phonenumberInput.current.value,
      username: usernameInput.current.value,
      password: passwordInput.current.value,
      dob: dobInput.current.value
    };

    try {
      const response = await axios.post(`https://overflowingstacks.azurewebsites.net/users/register`, userprofile);
      console.log(response.data);
      setUser({...user, email: emailInput.current.value})
      navigate("/registerqrcode");
    } catch (error) {
      console.error(error.response.data);
      console.log(error);
    }
  }

  return (


    <Paper style={styles.heroContainer}> 
            
          <center><div className="App">
          
        
    
          <center>
         <br></br>
         <br></br>
         <br></br>
       <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{ boxShadow: 5,
              borderRadius: 2, width: 400, height: 700 }}>
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
              Please Register below
          </Typography>
              <TextField id="outlined-basic" label="Email" variant="outlined" inputRef={emailInput}/>
              <TextField id="outlined-basic" label="First Name" variant="outlined" inputRef={fnameInput}/>
              <TextField id="outlined-basic" label="Last Name" variant="outlined" inputRef={lnameInput}/>
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" inputRef={phonenumberInput}/>
              <TextField id="outlined-basic" label="Username" variant="outlined" inputRef={usernameInput}/>
              
              <br></br>
              <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                inputRef={passwordInput}
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
              <br></br>
    
              <TextField id="outlined-basic" label="Date of Birth" variant="outlined" inputRef={dobInput}/>
              
            </FormControl>
              <br></br>
              <br></br>
              <Button variant='contained' onClick={register}>Register</Button>
              
              </Box>
              </center>
              </CardContent>
              </Card>
              </center>
              </div>
              </center>
              </Paper>
    
      );
    }
