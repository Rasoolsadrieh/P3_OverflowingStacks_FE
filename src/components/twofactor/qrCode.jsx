import axios from "axios";
import React, { useContext, useRef, useState } from "react";

import QRCode from "react-qr-code";
import { userContext } from "../../App";

export function QrCode(){


    const [user] = useContext(userContext)

    const [qrCodeInput, setQrCode] = useState([]);

    
    let ran = "not ran"
    const qrCode = 'otpauth://totp/scan%20me?secret='+ qrCodeInput

    const url = "http://localhost:9006"

    async function render(){
        if(ran === "not ran"){
            try{
            const secrectResponse = await axios.get(`${url}/findUser?id=${user.email}`)
            setQrCode(secrectResponse.data.secret)
            } catch(error){
            console.log(error)
            }
            ran = "ran"
        } 
        
    }

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
        <h3>This is your Sercet Key. You can input this directly into Google Authineticator or Scan the Qr Code above.</h3>
        <h3>Secret Key = {qrCodeInput}</h3>
        </center>
    </>
)

}