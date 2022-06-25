//import { createContext, useState } from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
//import Userprofile from "./components/userprofile/Userprofile";
import Avatar from "./components/userprofile/Avatar";
import Avatar2 from "./components/userprofile/Avatar2";

// export const userContext = createContext();

function App() {

  // const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    {/* <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="" element={< Userprofile/>} />
                <Route path="/" element={< Avatar/>} />
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
