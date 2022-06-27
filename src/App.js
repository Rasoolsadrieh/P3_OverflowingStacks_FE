
import { Avatar } from "@mui/material";
import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ResetPassword from "./components/resetpassword/resetpassword";


import AvatarProfile from "./components/userprofile/profile-avator";
import ProfileDashboard from "./components/userprofile/profile-dashboard";
import Welcome from "./components/welcome/welcomepage";
import CustomerLogin from "./components/login/login";
import { QrCode } from "./components/twofactor/qrCode";
import { QrLogin } from "./components/twofactor/qrLogin";


export const userContext = createContext();

function App() {

  const [user, setUser] = useState({email: "test@test.com" })
  return (
    <>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="/profiledashboard" element={<ProfileDashboard/>} />
                <Route path="/profile" element={<AvatarProfile/>}/>
                <Route path="/" element={< Welcome/>} />
                <Route path="login" element={<CustomerLogin />} />
                <Route path="" element={<Welcome />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/registerqrcode" element={<QrCode />} />
                <Route path="/loginqrcode" element={<QrLogin />} />
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
