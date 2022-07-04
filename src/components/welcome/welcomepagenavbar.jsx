import SwitchAppBar from '../darkmode/darkmode';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { useState } from "react";
import '../darkmode/darkmode.css'
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Image from '../welcome/background_City.jpeg'



export default function WelcomeNavBar(){

  
  
    const navigate = useNavigate();

    return(
        <>
        <WelcomeNavBar/>
        </>
    )
}