import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome/welcomepage";
import WelcomeNavBar from "./components/welcome/welcomepagenavbar";
import SwitchAppBar from "./components/darkmode/darkmode";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper } from "@mui/material";


export const userContext = createContext();

function App() {

  const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

  const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    <WelcomeNavBar/>
    <BrowserRouter>
    <ThemeProvider theme={darktheme}>
        <Paper style= {{height:"250vh"}}>
        <SwitchAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
              </Routes>
         </userContext.Provider>
         </Paper>
    </ThemeProvider>
     </BrowserRouter>

    </>
  );
}

export default App;
