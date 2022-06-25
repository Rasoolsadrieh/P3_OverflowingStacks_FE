import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QrCode } from "./components/twofactor/qrCode";
import Welcome from "./components/welcome/welcomepage";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({email: "Guest@yahoo.com" })
  return (
    <>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/registerqrcode" element={<QrCode />} />
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
