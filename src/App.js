import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./components/welcome/welcomepage";
import WelcomeNavBar from "./components/welcome/welcomepagenavbar";


export const userContext = createContext();

function App() {

  const [user, setUser] = useState({username: "Guest" })
  return (
    <>
    <WelcomeNavBar/>
    <BrowserRouter>
         <userContext.Provider value={[user, setUser]}>
             <Routes>
                <Route path="" element={<Welcome />} />
                <Route path="/" element={<Welcome />} />
              </Routes>
         </userContext.Provider>
     </BrowserRouter>

    </>
  );
}

export default App;
