
import { Avatar } from "@mui/material";

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
import UserRegistration from "./components/register/userregistration";
import Logo2 from './components/darkmode/Overflowing_Stacks_Dark.png'
import Logo from './components/darkmode/Overflowing_Stacks.png'
import './components/darkmode/darkmode.css'
import Payment from "./components/sendmoney/transfermoney";

export const userContext = createContext();



function App() {
  const [darkMode,setDarkMode]= useState(false)
  const [logoState, setLogoState] = useState(false)
  const [logoLState, setLogoLState] = useState(true)

  function logos(){

    if(darkMode === true){setLogoState(!logoState); setLogoLState(!logoLState)}
  else{setLogoState(!logoState); setLogoLState(!logoLState)}}

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

  function logos(){
   

    if(darkMode === true){setLogoState(!logoState); setLogoLState(!logoLState)}
  else{setLogoState(!logoState); setLogoLState(!logoLState)}}

  const [user, setUser] = useState({email: "Guest@mail.com" })


  
  return (
    <>
   
    <BrowserRouter>
    
    <ThemeProvider theme={darktheme}>
    {/* <WelcomeNavBar/> */}
        <Paper style= {{height:"200vh"}}>
        <SwitchAppBar check={darkMode} change={()=>{setDarkMode(!darkMode); logos()}}/>
      {logoState && <img className='logo2' height={80}  src={Logo2} />}
      {logoLState && <img className='logo' height={80} src={Logo} />}
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
                <Route path="register" element={<UserRegistration />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="sendmoney" element={<Payment />} />

              </Routes>
         </userContext.Provider>
         </Paper>
    </ThemeProvider>
     </BrowserRouter>
    </>
  );
}

export default App;
