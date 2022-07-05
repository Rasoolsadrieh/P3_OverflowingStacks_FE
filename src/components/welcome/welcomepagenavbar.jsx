import SwitchAppBar from '../darkmode/darkmode';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { useState } from "react";
import '../darkmode/darkmode.css'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Image from '../welcome/background_City.jpeg'



export default function WelcomeNavBar(){
  

    

    async function toWelcome(){
        navigate("/Welcome")
    }
  
    const navigate = useNavigate();

    return(
        <>
        <center>
        <Button sx={{marginTop: -25}} onClick={() => navigate("/profile")}>Profile</Button>
            <Button sx={{marginTop: -25}} onClick={()=>{navigate("/resetpassword")}}>Reset Password</Button>
            <Button sx={{marginTop: -25}} onClick={()=>{navigate("/registerqrcode")}}>Get QR Code</Button>
            <Button sx={{marginTop: -25}} onClick={()=>{navigate("/sendmoney")}}>Send Money</Button>
            <Button sx={{marginTop: -25}} onClick={toWelcome}>Log Out</Button>
            </center>
        </>
    )
}