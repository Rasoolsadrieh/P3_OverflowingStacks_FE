import axios from "axios";
import React, { useContext, useRef, useState } from "react";

import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export function QrCode(){

    
    const [user] = useContext(userContext)
    const navigate = useNavigate();
    const [qrCodeInput, setQrCode] = useState();
    console.log(user.email)
    

    
    let ran = "not ran"
    const qrCode = 'otpauth://totp/Overflowing%20Stacks?secret='+ qrCodeInput

    const url = "https://overflowingstacks.azurewebsites.net"

    async function render(){
        if(ran === "not ran"){
            try{
            const secrectResponse = await axios.get(`${url}/users/finduser/${user.email}`)
            setQrCode(secrectResponse.data.secret)
            console.log(qrCodeInput)
            } catch(error){
            console.log(error)
            }
            ran = "ran"
        } 
        
    }

    //todo ADD Button

return(
    
    <>
        <body onLoad={render()}></body>
        <center>
        <div style={{ background: 'white', padding: '16px' }}>
            <QRCode bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                style={{ width: 256 }}
                value={qrCode} />
        </div>
        <a target="_blank" rel="noopener noreferrer" href="https://chrome.google.com/webstore/detail/authenticator/bhghoamapcdpbohphigoooaddinpkbai?hl=en">Google Auth Add On</a>
        <h3>This is your Sercet Key. You can input this directly into Google Authineticator or Scan the Qr Code above.</h3>
        <h3>Secret Key : {qrCodeInput}</h3>
        <button onClick={()=>{navigate("/profiledashboard")}}>Setup Profile</button>
        </center>
    </>
)

}
