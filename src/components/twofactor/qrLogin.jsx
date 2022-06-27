import { useContext, useRef } from "react"
import { userContext } from "../../App";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";

export function QrLogin(){
    const [user] = useContext(userContext)
    let codeInput = useRef()
    const url = "https://overflowingstacks.azurewebsites.net"

    const checkCode = async () => {
        let curUrl = "https://overflowingstacks.azurewebsites.net/users/authCheck"

        const userData = {
            email: user.email,
            code: codeInput.current.value
        }
        console.log(curUrl)
        console.log(userData)
        const result = await axios.post("https://overflowingstacks.azurewebsites.net/users/authCheck", userData)
        console.log(result)
        // const result1 = await fetch(`${url}`, userData, {
        // });
        // const data = await result1.json();
        // console.log(data)

        //  const result2 = await fetch(`${curUrl}`, userData, {
        //      method: 'GET',
        //      mode: 'cors'
        //  });
        
        
        
    }


    return(
        <>
        <input ref={codeInput}></input>
        <br></br>
        <button onClick={checkCode}>check</button>
        </>
    )
}