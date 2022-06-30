import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function ProfileNavBar(){

    const navigate = useNavigate();

    return(
        <>
            {/* <Button  onClick={() => navigate("/profiledashboard")}>Profile Dashboard</Button> */}
            <Button  onClick={() => navigate("/profile")}>Profile</Button>
<<<<<<< Updated upstream
           
=======
            <Button  onClick={() => navigate("/resetpassword")}>Reset Password</Button>
>>>>>>> Stashed changes
        </>
    )
}