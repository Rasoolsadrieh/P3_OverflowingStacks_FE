import axios from "axios";
import { useRef, useState } from "react"
import { ToastContainer , toast } from "react-toastify";

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
            console.log(response.status);
            if(response.data === "Please check your email and previous password to update your password"){toast.warn(response.data)}
            else{toast.success(response.data)}
            
        
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
        <input placeholder="Enter old password" ref={b}></input>
        <input placeholder="Enter new password" ref={c}></input>
        <button onClick={resetpassword}>RESET PASSWORD</button>
        
    </>
    )
}
