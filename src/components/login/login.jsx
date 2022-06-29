import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { userContext } from "../../App";

export default function CustomerLogin() {

  const navigate = useNavigate();

  const url = "https://overflowingstacksweb.azurewebsites.net/"

  const EmailInput = useRef();
  const PasswordInput = useRef();

  async function login(){

    const customer = {
        
        email: EmailInput.current.value,
       password: PasswordInput.current.value,
    }
    
    try{
        const response = await axios.post(`${url}/auth`, customer)
        console.log(response.data)
        navigate("/profiledashboard");
    } catch (error) {
        console.error(error.response.data)
        console.log(error)
        alert(error.response.data);
    }
}

  return (
    <>
    <h4>Please log in below.</h4>
    <br></br>
    <input size="55" placeholder="Please enter your email address" ref={EmailInput}></input>
    <br></br>
    <br></br>
    <input size="55" type="password" placeholder="Please enter your password" ref={PasswordInput}></input>
    <br></br>
    <br></br>
    <Button variant="contained" color="success" onClick={login}>Login</Button>
</>
);
}
