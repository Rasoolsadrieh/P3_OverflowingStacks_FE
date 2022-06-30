import axios from "axios";
import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function ResetPassword() {

    const [user] = useContext(userContext)

    const [body, setBody] = useState();

    const navigate = useNavigate();


    const url = "https://overflowingstacks.azurewebsites.net/users/resetPassword";
    
    const a = useRef();
    const b  = useRef();
    const c = useRef();

    async function resetpassword() {

        const rpc = {
            email: user.email,
            password: b.current.value,
            newpassword: c.current.value
        }

        try {
            const response = await axios.put(`${url}`, rpc);
            console.log(response.data);
            setBody(response.data);

        }
        catch (error) {
            console.error(error);
            alert(error.response.data);
        }
    }

    return (
    <>
        <text>{user.email}</text>
        <br></br>
        <br></br>
        <input placeholder="Enter old password" ref={b}></input>
        <br></br>
        <br></br>
        <input placeholder="Enter new password" ref={c}></input>
        <br></br>
        <br></br>
        <button onClick={resetpassword}>RESET PASSWORD</button>
        <br></br>
        <br></br>
        <h3>{body}</h3>
        <br></br>
        <br></br>
        <button onClick={()=>{navigate("/profiledashboard")}}>Back To Profile</button>
    </>
    )
}