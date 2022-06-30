import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export default function ProfileNavBar(){

    const navigate = useNavigate();

    async function toWelcome(){
        navigate("/Welcome")
    }



    return(
        <>
            <Button onClick={() => navigate("/profile")}>Profile</Button>
            <Button onClick={()=>{navigate("/resetpassword")}}>Reset Password</Button>
            <Button onClick={toWelcome}>Log Out</Button>
            <Button onClick={()=>{navigate("/registerqrcode")}}>Get QR Code</Button>
        </>
    )
}
