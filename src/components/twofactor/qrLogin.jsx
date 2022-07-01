import { useContext, useRef, useState } from "react"
import { userContext } from "../../App";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Button, Card, Paper, TextField, Typography } from "@mui/material";
import Image from "./bg_image.jpeg";
import { createTheme } from "@mui/material";

const styles = {
    heroContainer: {
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      BackgroundSize: 'cover',
      width: "100%",
      margin: 0,
      padding: 10,
      opacity: "85%",
    }
   };


export function QrLogin(){

    const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

    const [user] = useContext(userContext)
    const navigate = useNavigate();

    let codeInput = useRef()
    const url = "https://overflowingstacks.azurewebsites.net"

    const checkCode = async () => {
        let curUrl = "https://overflowingstacks.azurewebsites.net/users/authCheck"

        const userData = {
            email: user.email,
            code: codeInput.current.value
        }
        console.log(curUrl)
        console.log(userData)
        const result = await axios.post("https://overflowingstacks.azurewebsites.net/users/authCheck", userData)
        console.log(result)
        navigate("/profiledashboard")
        
        
        
    }


    return(
        <>
        <Paper style={styles.heroContainer}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
        <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{  opacity: "98%", boxShadow: 5,
        borderRadius: 2, width: 400, height: 250 }}>
        <center>
        <br></br>
        <br></br>
        <Typography>
        Enter Authentication Code
        </Typography>
        <br></br>
        <TextField id="outlined-basic" label="Please Enter Code" variant="outlined" inputRef={codeInput}/>
        {/* <input ref={codeInput}></input> */}
        <br></br>
        <br></br>
        <Button variant='contained' onClick={checkCode}>Check</Button>
        
        </center>
       </Card>
       </center>
        </Paper>
        </>
    )
}