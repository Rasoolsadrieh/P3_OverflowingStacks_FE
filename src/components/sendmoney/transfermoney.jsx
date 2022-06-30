import axios from "axios";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function Payment() {
  

    const url = "websites.net";
    
    const navigate = useNavigate();

    const [showPay, setPay] = useState(false);

    const profileNameInput = useRef();
    const receiverProfileInput =useRef();
    const paymentInput = useRef();
     
    
  
    async function transferMoneyNow() {

        const profileResponse = await axios.get(`${url}/findProfile?FindWhomProfile=${profileNameInput.current.value}`)
        const receiverProfileResponse = await axios.get(`${url}/findProfile?FindWhomProfile=${receiverProfileInput.current.value}`)
        
        const user = {

            profileName: profileResponse.data.profileName,
            fname: profileResponse.data.fname,
            lname: profileResponse.data.lname,
            email: profileResponse.data.email,
            balance: profileResponse.data.balance - paymentInput.current.value,
            accountName: profileResponse.data.accountName,
            accountNumber: profileResponse.data.accountNumber,
              
         };

         const receiver = {

            profileName: receiverProfileResponse.data.profileName,
            fname: receiverProfileResponse.data.fname,
            lname: receiverProfileResponse.data.lname,
            email: receiverProfileResponse.data.email,
            balance: receiverProfileResponse.data.balance + paymentInput.current.value,
            accountName: receiverProfileResponse.data.accountName,
            accountNumber: receiverProfileResponse.data.accountNumber,
            isRecieved: true,  
         };
                
             
    
        try {
            const response = await axios.put(`${url}/updateProfile`, user);
            const response2 = await axios.put(`${url}/updateProfile`, receiver);
            console.log(response.data);
            console.log(response2.data);
            setPay(!showPay)


         
        } catch (error) {
            console.error(error.response.data);
            console.error(error.response2.data);
            
        }
    }

    return (
        <>
                
                <center>
                <h4>You can pay your balance here here.</h4>
                <br></br>  
                <input  placeholder="Enter your Profile Name" ref={profileNameInput}></input>
                <br></br>
                <input  placeholder="Enter The profile name of the Receiver" ref={receiverProfileInput}></input>
                <br></br>
                <input  placeholder="Enter your payment amount" ref={paymentInput}></input>
                <br></br>
                <br></br>
                {showPay && <h4>your money transfer has been sent!</h4>}
                <br></br>
                <br></br>
                <Button  onClick={transferMoneyNow}>Send Money</Button>
                <br></br>
                <br></br>
                <Button  onClick={() => navigate("/profile")}>Back</Button>       
                </center>        
        </>
    );
}
