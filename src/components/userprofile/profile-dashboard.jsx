import ProfileNavBar from "./profileNavbar";
import { useNavigate } from "react-router-dom";
import {Card, CardContent, createTheme, TextField, FormControl, InputLabel, MenuItem, Select, Paper, Button, Grid} from "@mui/material";
import Image from "./bgimage.jpg";
import '../darkmode/darkmode.css'



const styles = {
    heroContainer: {
      height: "110vh",
      backgroundImage: `url(${Image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'relative',
      bottom: "400px",
      backgroundRepeat: 'no-repeat',
      width: "100%",
      margin: 0,
      bottom: "30px",
      opacity: "80%",
    }
   };



export default function ProfileDashboard() {
    const navigate = useNavigate();

    async function toWelcome(){
        navigate("/Welcome")
    }
    
    return (
        <>
        <center><div class="h2">Welcome</div> </center>
        <Paper style={styles.heroContainer}> 
        
       
         <Button variant="contained" size="big" sx={{marginTop:"100px", marginLeft:"350px", marginRight:"100px", font: "60px", height: "200px", width: "200px", color: "white", backgroundColor: "black", borderColor: "white"}} onClick={() => navigate("/profile")}><div className="h8">Profile</div></Button>
            <Button variant="contained" size="big" sx={{marginTop:"100px", font: "60px", height: "200px", width: "275px", color: "white", backgroundColor: "black", borderColor: "white"}}onClick={()=>{navigate("/resetpassword")}}><div className="h8">Reset Password</div></Button>
            <Button variant="contained" size="big" sx={{marginTop:"100px", marginLeft:"100px", font: "60px", height: "200px", width: "200px", color: "white", backgroundColor: "black", borderColor: "white"}}onClick={()=>{navigate("/registerqrcode")}}><div className="h8">Get QR Code</div></Button>
            <br></br>
            <Button variant="contained" size="big" sx={{marginTop:"150px", marginLeft:"535px", font: "60px", height: "200px", width: "200px", color: "white", backgroundColor: "black", borderColor: "white"}}onClick={()=>{navigate("/sendmoney")}}><div className="h8">Send Money</div></Button>
            
            <Button variant="contained" size="big" sx={{marginTop:"150px", marginLeft:"100px", font: "60px", height: "200px", width: "200px", color: "white", backgroundColor: "black", borderColor: "white"}}onClick={toWelcome}><div className="h8">Log Out</div></Button>
            
            
        
            
            </Paper>
        </>
    );
}