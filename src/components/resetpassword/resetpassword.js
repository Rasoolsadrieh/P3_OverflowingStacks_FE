import axios from "axios";
import { useRef, useState } from "react"
import { ToastContainer , toast } from "react-toastify";
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
            console.log(response.status);
            if(response.data === "Please check your email and previous password to update your password"){toast.warn(response.data)}
            else{toast.success(response.data)}
            
        
            setBody(response.data);

        }
        catch (error) {
            console.error(error);
            toast.error(error.response.data);
        }
    }

    return (
    <>
        <ToastContainer position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover/>
        <input placeholder="Enter email" ref={a}></input>
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
