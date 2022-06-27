import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerLogin from "./components/login/login";
import { QrCode } from "./components/twofactor/qrCode";
import { QrLogin } from "./components/twofactor/qrLogin";
import Welcome from "./components/welcome/welcomepage";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({email: "test@test.com" })
  return (
    <>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="login" element={<CustomerLogin />} />
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
                <Route path="/registerqrcode" element={<QrCode />} />
                <Route path="/loginqrcode" element={<QrLogin />} />
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
