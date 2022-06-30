import axios from "axios";
import { useRef, useState } from "react"

export default function ResetPassword() {

    const [body, setBody] = useState();
    
    const url = "http://overflowingstacks.azurewebsites.net/users/resetPassword";
    
    const a = useRef();
    const b  = useRef();
    const c = useRef();

    async function resetpassword() {

        const rpc = {
            email: a.current.value,
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
        <input placeholder="Enter email" ref={a}></input>
        <input placeholder="Enter old password" ref={b}></input>
        <input placeholder="Enter new password" ref={c}></input>
        <button onClick={resetpassword}>RESET PASSWORD</button>
        <h3>{body}</h3>
    </>
    )
}
