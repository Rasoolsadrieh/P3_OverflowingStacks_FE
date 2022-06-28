import SwitchAppBar from '../darkmode/darkmode';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { useState } from "react";
import Logo2 from '../darkmode/Overflowing_Stacks_Dark.png'
import Logo from '../darkmode/Overflowing_Stacks.png'
import '../darkmode/darkmode.css'





export default function WelcomeNavBar(){

    const [darkMode,setDarkMode]= useState(false)
    const [logoState, setLogoState] = useState(false)
    const [logoLState, setLogoLState] = useState(true)

    const darktheme=createTheme({
      palette: {
        mode: darkMode? 'dark' : 'light',
      }
      
    })

    function logos(){

    if(darkMode === true){setLogoState(!logoState); setLogoLState(!logoLState)}
  else{setLogoState(!logoState); setLogoLState(!logoLState)}}

    return(
        <ThemeProvider theme={darktheme}>
        <Paper style= {{height:"1000px"}} >
        
        <SwitchAppBar check={darkMode} change={()=>{setDarkMode(!darkMode); logos()}}/>
      {logoState && <img className='logo2' height={80}  src={Logo2} />}
      {logoLState && <img className='logo' height={80} src={Logo} />}
        <nav>
            <h1>Welcome to Overflowing Stacks</h1>
        </nav>
        </Paper>
    </ThemeProvider>
    )
}