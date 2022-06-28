

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvatarProfile from "./components/userprofile/profile-avator";
import ProfileDashboard from "./components/userprofile/profile-dashboard";
import Welcome from "./components/welcome/welcomepage";


export const userContext = createContext();

function App() {

  const [user, setUser] = useState({email: "jhomd@mail.com" })
  return (
    <>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
              
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/profiledashboard" element={<ProfileDashboard/>} />
                <Route path="/profile" element={<AvatarProfile/>}/>
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
