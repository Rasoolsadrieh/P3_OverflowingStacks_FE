<<<<<<< HEAD
//import { createContext, useState } from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
//import Userprofile from "./components/userprofile/Userprofile";
import Avatar from "./components/userprofile/Avatar";
import Avatar2 from "./components/userprofile/Avatar2";
=======

import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AvatarProfile from "./components/userprofile/profile-avator";
import ProfileDashboard from "./components/userprofile/profile-dashboard";
import Welcome from "./components/welcome/welcomepage";

>>>>>>> 725b1f89bff00ce70f525676e4b2e7f61257f695

// export const userContext = createContext();

function App() {

  // const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    {/* <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
<<<<<<< HEAD
                <Route path="" element={< Userprofile/>} />
                <Route path="/" element={< Avatar/>} />
=======
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/profiledashboard" element={<ProfileDashboard/>} />
                <Route path="/profile" element={<AvatarProfile/>}/>
>>>>>>> 725b1f89bff00ce70f525676e4b2e7f61257f695
              </Routes>
         </userContext.Provider>
     </BrowserRouter> */}
     <div>
      <Avatar src="" alt="" />
      </div>
      <div>
      <Avatar2 src="" alt="" />
      </div>
    </>
  );
}

export default App;
