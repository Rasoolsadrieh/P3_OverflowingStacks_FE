import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";

export default function CustomerLogin() {

  const navigate = useNavigate();
  
  const [user,setUser] = useContext(userContext)

  const url = "https://overflowingstacksweb.azurewebsites.net/"

  const CustomerEmailInput = useRef();
  const PasswordInput = useRef();

  async function login(){

    const customer = {
        
        username: CustomerEmailInput.current.value,
        userpassword: PasswordInput.current.value,
    }
    
    try{
        const response = await axios.post(`${url}/auth`, customer)
        console.log(response.data)
        setUser(response.data.email)
        navigate("/loginqrcode");
    } catch (error) {
        console.error(error.response.data)
        console.log(error)
    }
}

  return (
    <>
    <h4>Please log in below.</h4>
    <br></br>
    <input size="50" placeholder="Please enter your email address" ref={CustomerEmailInput}></input>
    <br></br>
    <br></br>
    <input size="50" type="password" placeholder="Please enter your password" ref={PasswordInput}></input>
    <br></br>
    <br></br>
    <Button variant="contained" color="success" onClick={login}>Login</Button>
</>
);
}
