import * as React from "react";
import { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TextField, OutlinedInput, InputLabel, InputAdornment, FormControl, IconButton, Button, Box, Paper, Card, CardContent, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Image from "/Users/rf/Desktop/P3_OverflowingStacks_FE/src/components/login/login_bg.jpeg";
import { createTheme } from "@mui/material";
import { userContext } from "../../App";
<<<<<<< Updated upstream
=======
import { isValidFormat } from "@firebase/util";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
>>>>>>> Stashed changes

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

  const [user,setUser] = useContext(userContext)

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

<<<<<<< Updated upstream
    try {
      const response = await axios.post(`https://overflowingstacks.azurewebsites.net/users/register`, userprofile);
      console.log(response.data);
      setUser({...user, email: emailInput.current.value})
      navigate("/registerqrcode");
    } catch (error) {
      console.error(error.response.data);
      console.log(error);
=======


   // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

      try {
      const response = await fetch(`${url}/users/findAllUsers`);
      const usersPulled = await response.json();
      console.log(usersPulled);
      for (let i = 0; i < usersPulled.length; i++ ){
      if(usersPulled[i].email === emailInput.current.value){
        toast.error('That user already exists');
        console.log("User Exists");
        valid = false;
        break;
      }
        
      }
    }catch(e){
      console.log(null);
  }
     if (emailInput.current.value === "" || passwordInput.current.value === "") {
      valid = false;
      toast.error("You need to enter a valid email and password");
    }// else if (emailInput.current.value.match(mailformat));
    else if (fnameInput.current.value === "" || lnameInput.current.value === "") {
      valid = false;
      toast.error('You need to enter a valid first and last name');
    }
    else if (usernameInput.current.value === "" || !isNaN(usernameInput.current.value) ) {
      valid = false;
      toast.error("You need to enter a valid username");
    }
    else if (phonenumberInput.current.value === "" || isNaN(phonenumberInput.current.value)) {
      valid = false;
      toast.error("You need to enter a valid phone number");
    }
    else if (dobInput.current.value === "") {
      valid = false;
      toast.error("You need to enter a valid date of birth");

    }
    else if(!isNaN(emailInput.current.value)){
      valid = false;
      toast.error("You need to enter a valid email");
    }
    else if(!isNaN(fnameInput.current.value)){
      valid = false;
      toast.error("You need to enter a valid first name")
    }
    else if(!isNaN(lnameInput.current.value)){
      valid = false;
      toast.error("You need to enter a valid last name")
    }
    else if(!isNaN(passwordInput.current.value)){
      valid = false;
      toast.error("Your password needs to include letters")
    }
    else {
      if(valid === true){
        setUser({...user, email: emailInput.current.value})
        
      try {
        const response = await axios.post(`${url}/users/register`, userprofile);
        console.log(response.data)
        
        navigate("/registerqrcode");
      } catch (error) {
        console.error(error.response.data);
        console.log(error);
        toast.error(error.response.data);
      }

    }
  }
  }
    async function checkUserName(){
      try {
        const response = await fetch(`${url}/users/findAllUsers`);
        const usersPulled = await response.json();
        console.log(usersPulled);
        for (let i = 0; i < usersPulled.length; i++ ){
          
          console.log(usersPulled[i].email);
        }
      }catch(e){
        console.log(null);
>>>>>>> Stashed changes
    }
  }

  return (
    
    <div>
      <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover /> 

<<<<<<< Updated upstream
<Paper style={styles.heroContainer}> 
=======
    <Paper style={styles.heroContainer}> 
           
          <center><div className="App">
          
>>>>>>> Stashed changes
        
      <center><div className="App">
      
    
<<<<<<< Updated upstream
=======
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
                inputRef={passwordInput}
                value={values.password}
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
    
              <TextField id="outlined-basic" type="date" label="Date of Birth" variant="outlined" inputRef={dobInput} InputLabelProps={{ shrink: true}}/>
              
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
    </div>
      );
    }
>>>>>>> Stashed changes

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
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField id="outlined-basic" label="Username" variant="outlined" />
          
          <br></br>
          <FormControl sx={{ m: 1, width: '28ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
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

          <TextField id="outlined-basic" label="Date of Birth" variant="outlined" />
          
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



    // <div className="container">
    //   <h4>Join OverflowingStacks!!!</h4>

    //   <input
    //     size="30"
    //     placeholder="Please enter your email"
    //     ref={emailInput}
    //   ></input>
    //   <br></br>

    //   <input
    //     size="30"
    //     placeholder="Please enter first name"
    //     ref={fnameInput}
    //   ></input>
    //   <br></br>

    //   <input
    //     size="30"
    //     placeholder="Please enter last name"
    //     ref={lnameInput}
    //   ></input>
    //   <br></br>

    //   <input
    //     size="30"
    //     placeholder="Please enter phone number"
    //     ref={phonenumberInput}
    //   ></input>
    //   <br></br>

    //   <input
    //     size="30"
    //     placeholder="Please enter username"
    //     ref={usernameInput}
    //   ></input>
    //   <br></br>

    //   <input
    //     size="30"
    //     type="password"
    //     placeholder="Please enter your password"
    //     ref={passwordInput}
    //   ></input>
    //   <br></br>

    //   <input
    //     size="30"
    //     placeholder="Please enter your dob"
    //     ref={dobInput}
    //   ></input>
    //   <br></br>

    //   <Button variant="contained" color="primary" onClick={register}>
    //     Sign Up
    //   </Button>
    // </div>
  );
}
