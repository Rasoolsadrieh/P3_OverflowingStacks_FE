import { useContext, useRef } from "react"
import { userContext } from "../../App";
import axios from "axios";
import { ConstructionOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function QrLogin(){
    const [user] = useContext(userContext)
    const navigate = useNavigate();

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
        navigate("/profiledashboard")
        
        
        
    }


    return(
        <>
        <input ref={codeInput}></input>
        <br></br>
        <button onClick={checkCode}>check</button>
        </>
    )
}