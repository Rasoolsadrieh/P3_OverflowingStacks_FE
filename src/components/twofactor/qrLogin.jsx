import { useContext, useRef } from "react"
import { userContext } from "../../App";
import axios from "axios";

export function QrLogin(){
    const [user] = useContext(userContext)
    let codeInput = useRef()
    const url = "https://overflowingstacks.azurewebsites.net"

    const checkCode = async () => {
        let curUrl = "https://overflowingstacks.azurewebsites.net/users/authCheck"

        const userData = {
            "email": user.email,
            "code": codeInput.current.value
        }
        console.log(curUrl)
        console.log(userData)
        const result = await axios.get("https://overflowingstacks.azurewebsites.net/users/authCheck", {
            data: {
                email: user.email,
                code: codeInput.current.value
            }
        })
        console.log(result)
        // const result1 = await fetch(`${curUrl}`, userData, {
        //     method: 'GET',
        //     mode: 'cors'
        // });
        
        
        
    }


    return(
        <>
        <input ref={codeInput}></input>
        <br></br>
        <button onClick={checkCode}>check</button>
        </>
    )
}