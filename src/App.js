import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from "./components/resetpassword/resetpassword";
import Welcome from "./components/welcome/welcomepage";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
                <Route path="resetpassword" element={<ResetPassword />} />
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
