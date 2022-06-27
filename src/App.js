import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerLogin from "./components/login/login";

export const userContext = createContext();

function App() {

  const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                {/* <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} /> */}
                <Route path="login" element={<CustomerLogin />} />
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
