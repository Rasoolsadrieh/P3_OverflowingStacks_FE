import axios from "axios";
import { useRef, useState, useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";


export default function Payment() {
  


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
                
                <center>
                <h4>You can pay your balance here.</h4>
                <h4>{user.email}</h4>
                <br></br>  
                <input  placeholder="Confirm your Profile Name" ref={profileNameInput}></input>
                <br></br>
                <input  placeholder="Enter The profile name of the Receiver" ref={receiverProfileInput}></input>
                <br></br>
                <input  placeholder="Enter your payment amount" ref={paymentInput}></input>
                <br></br>
                <br></br>
                {negativeBalance && <h4>your money is less than what you are trying to send, please lower the amount or deposit to your account!</h4>}
                {showPay && <h4>your money transfer has been sent!</h4>}
                <br></br>
                <br></br>
                <Button  onClick={transferMoneyNow}>Send Money</Button>
                <br></br>
                <br></br>
                <Button  onClick={() => navigate("/profiledashboard")}>Back</Button>       
                </center>        
        </>
    );
}
