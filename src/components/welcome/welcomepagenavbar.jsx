import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";

export default function WelcomeNavBar(){

    const navigate = useNavigate();

    return(
       
        <nav>
            <h1>Welcome to Overflowing Stacks</h1>
            <Button onClick={() => navigate("/profile")}>Profile</Button>
        </nav>
    )
}