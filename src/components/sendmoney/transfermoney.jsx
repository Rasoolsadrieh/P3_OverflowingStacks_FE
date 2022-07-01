import axios from "axios";
import { useRef, useState, useContext, } from "react";
import { Button, Paper, Card, createTheme, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Image from "./bg_img2.jpg";

const styles = {
    heroContainer: {
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      BackgroundSize: 'cover',
      width: "100%",
      margin: 0,
      padding: 10,
      opacity: "85%",
    }
   };

export default function Payment() {
  

    const [darkMode,setDarkMode]= useState(false)

    const darktheme=createTheme({
      palette: {
        mode: darkMode? 'dark' : 'light',
      }
    })

    const url = "https://overflowingstacks.azurewebsites.net";
    
    const navigate = useNavigate();
    const [user] = useContext(userContext)


    const [showPay, setPay] = useState(false);
    const [negativeBalance, setNegative] = useState(false);

    const profileNameInput = useRef();
    const receiverProfileInput =useRef();
    const paymentInput = useRef();
    
     let isValid = true;
    
  
    async function transferMoneyNow() {


        const profileResponse = await axios.get(`${url}/profile/findProfile?profileName=${profileNameInput.current.value}`)
        const receiverProfileResponse = await axios.get(`${url}/profile/findProfile?profileName=${receiverProfileInput.current.value}`)
        console.log(profileResponse.data.balance - paymentInput.current.value)
        
       if(profileResponse.data.balance - paymentInput.current.value <= 0 ||  paymentInput.current.value <= 0 ){
        isValid = false;
        setPay(false);
        setNegative(true);

       }else{ isValid = true;}
        
        const sender = {

            profileName: profileResponse.data.profileName,
            email: profileResponse.data.email,
            balance: profileResponse.data.balance - paymentInput.current.value,
            accountName: profileResponse.data.accountName,
            accountNumber: profileResponse.data.accountNumber,
              
         };

         
        

         const receiver = {

            profileName: receiverProfileResponse.data.profileName,
            email: receiverProfileResponse.data.email,
            balance: parseInt(receiverProfileResponse.data.balance) + parseInt(paymentInput.current.value),
            accountName: receiverProfileResponse.data.accountName,
            accountNumber: receiverProfileResponse.data.accountNumber,

         };
             
             
    
        try {
            if(isValid === true){
            const response = await axios.put(`${url}/profile/updateProfile`, sender);
            const response2 = await axios.put(`${url}/profile/updateProfile`, receiver);

            console.log(response.data);
            console.log(response2.data);
            setPay(true);
            setNegative(false);
            }

         
        } catch (error) {
            console.error(error.response.data);
            console.error(error.response2.data);
            
        }
    }

    return (
        <>
                <Paper style={styles.heroContainer}>
                <center>
                <br></br>
                <br></br>
                <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{ opacity: "98%", boxShadow: 5,
              borderRadius: 2, width: 400, height: 600 }}>
                <br></br>
                <Typography>Transfer Money Below</Typography>
                <br></br>
                <Typography>{user.email}</Typography>
                <br></br> 
                <TextField sx={{ width: '35ch' }} id="outlined-basic" label="Confirm your Name" variant="outlined" inputRef={profileNameInput}/> 
                <br></br>
                <br></br>
                <TextField sx={{ width: '35ch' }} id="outlined-basic" label="Enter Name of the Receiver" variant="outlined" inputRef={receiverProfileInput}/> 
                <br></br>
                <br></br>
                <TextField sx={{ width: '35ch' }} id="outlined-basic" label="Enter your Payment Amount" variant="outlined" inputRef={paymentInput}/>
                <br></br>
                <br></br>
                {negativeBalance && <h4>Your money is less than what you are trying to send, please lower the amount or deposit to your account!</h4>}
                {showPay && <h4>Your money transfer has been sent!</h4>}
                <br></br>
                <br></br>
                <Button variant='contained' onClick={transferMoneyNow}>Send Money</Button>
                <br></br>
                <br></br>
                <Button variant='contained' onClick={() => navigate("/profiledashboard")}>Back</Button>       
                </Card>
                </center>  
                </Paper>      
        </>
    );
}
