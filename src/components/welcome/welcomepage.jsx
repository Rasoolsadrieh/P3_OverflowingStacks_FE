import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import '../darkmode/darkmode.css'
import Image from '../welcome/background_City.jpeg';
import { Card, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import WelcomeNavBar from "./welcomepagenavbar";
import { userContext } from "../../App";
import { useContext } from "react";


const styles = {
    heroContainer: {
      height: "80vh",
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: "100%",
      margin: 0,
      padding: 10,
      opacity: "80%",
    }
   };


export default function Welcome(){
  const [user,setUser] = useContext(userContext)
   
  // console.log(user.email)

  async function login(){
    setUser({ ...user, email: "Guest" })
    navigate("/login")
    console.log(user)
  }

  async function register(){
    setUser({ ...user, email: "Guest" })
    navigate("/register")
    console.log(user)
  }
  
    const navigate = useNavigate();

    return(

       <>
       <Paper style={styles.heroContainer} >
         <div class="h1">Money is built on trust.<br></br> Trust your money with us.</div>
         
        <div class="b1">
        <Button variant="contained" size="large" sx={{color: "white", backgroundColor: "black", borderColor: "grey"}} onClick={login}>Login</Button></div>
         <div class="b2">
         <Button variant="contained" size="large" sx={{ color: "white", backgroundColor: "black", borderColor: "grey"}} onClick={register}>Register</Button></div>
        
        
        
        
        </Paper>
        </>
      
    )
}