import SwitchAppBar from '../darkmode/darkmode';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { useState } from "react";



export default function WelcomeNavBar(){

    const [darkMode,setDarkMode]= useState(false)

    const darktheme=createTheme({
      palette: {
        mode: darkMode? 'dark' : 'light',
      }
    })

    return(
        <ThemeProvider theme={darktheme}>
        <Paper style= {{height:"250vh"}}>
        <SwitchAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>

        <nav>
            <h1>Welcome to Overflowing Stacks</h1>
        </nav>
        </Paper>
    </ThemeProvider>
    )
}