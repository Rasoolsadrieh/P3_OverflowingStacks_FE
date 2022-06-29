

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome/welcomepage";
import WelcomeNavBar from "./components/welcome/welcomepagenavbar";
import SwitchAppBar from "./components/darkmode/darkmode";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import ResetPassword from "./components/resetpassword/resetpassword";
import AvatarProfile from "./components/userprofile/profile-avator";
import ProfileDashboard from "./components/userprofile/profile-dashboard";
import CustomerLogin from "./components/login/login";
import { QrCode } from "./components/twofactor/qrCode";
import { QrLogin } from "./components/twofactor/qrLogin";


export const userContext = createContext();

function App() {


  const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

  const [user, setUser] = useState({email: "Guest@mail.com" })
  
  return (
    <>
    
    <BrowserRouter>
    {/* <WelcomeNavBar/> */}
    <ThemeProvider theme={darktheme}>
        <Paper style= {{height:"250vh"}}>
        {/* <SwitchAppBar check={darkMode} change={()=>setDarkMode(!darkMode)}/> */}
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="profiledashboard" element={<ProfileDashboard/>} />
                <Route path="profile" element={<AvatarProfile/>}/>
                <Route path="/" element={< Welcome/>} />
                <Route path="login" element={<CustomerLogin />} />
                <Route path="" element={<Welcome />} />
                <Route path="resetpassword" element={<ResetPassword />} />
                <Route path="registerqrcode" element={<QrCode />} />
                <Route path="loginqrcode" element={<QrLogin />} />
              </Routes>
         </userContext.Provider>
         </Paper>
    </ThemeProvider>
     </BrowserRouter>

    </>
  );
}

export default App;
