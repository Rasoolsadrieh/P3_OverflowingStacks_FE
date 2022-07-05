import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Image from "./bg_image.jpeg";
import { Paper, Card, Button, createTheme } from "@mui/material";
import '../darkmode/darkmode.css';
import WelcomeNavBar from "../welcome/welcomepagenavbar";


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

export function QrCode(){

    const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

    
    const [user] = useContext(userContext)
    const navigate = useNavigate();
    const [qrCodeInput, setQrCode] = useState();
    console.log(user.email)
    
    
    let ran = "not ran"
    const qrCode = 'otpauth://totp/Overflowing%20Stacks?secret='+ qrCodeInput

    const url = "https://overflowingstacks.azurewebsites.net"

    async function render(){
        if(ran === "not ran"){
            try{
            const secrectResponse = await axios.get(`${url}/users/finduser/${user.email}`)
            setQrCode(secrectResponse.data.secret)
            console.log(qrCodeInput)
            } catch(error){
            console.log(error)
            }
            ran = "ran"
        } 
        
    }

    //todo ADD Button

return(
    
    <>
    <WelcomeNavBar/>
        <Paper style={styles.heroContainer}>
        <br></br>
        <br></br>
        <center>
        <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{  opacity: "98%", boxShadow: 5,
        borderRadius: 2, width: 500, height: 550 }}>
       
        <body onLoad={render()}></body>
        <center>
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={qrCode} />
        </div>
        <br></br>
        <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=en"><div className="h3">Google Auth Add On</div></a>
        <div className="h3">This is your Sercet Key. You can input this directly into Google Authineticator or Scan the Qr Code above.</div>
        <div className="h3">Secret Key : {qrCodeInput}</div>
        <br></br>
        <Button variant='contained' onClick={()=>{navigate("/profiledashboard")}}>Setup Profile</Button>
        </center>
        </Card>
        </center>
        </Paper>
    </>
)

}
