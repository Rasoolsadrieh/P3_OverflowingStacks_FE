import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../App";

export default function CustomerLogin() {
  const customerEmailInput = useRef();
  const passwordInput = useRef();
  const [user, setUser] = useContext(userContext);
  const navigate = useNavigate();
  const url = "https://somebank.azurewebsites.net";
  const isAdmin = false;

  async function login() {
    // Whenever you are getting a useRefs value, make sure it's inside some function call. Otherwise it will
    // error due to the refInput.current = undefined, meaning there is no .value available
    const customer = {
      customerEmail: customerEmailInput.current.value,
      password: passwordInput.current.value,
    };

    if (customer.customerEmail === "") {
      alert("You need to enter an Email!");
    }
    if (customer.password === "") {
      alert("You need to enter a password!");
    }
    if (customer.password === "admin") {
      navigate("/admin");
    } else if (customer.password === "customer") {
      navigate("/customer");
    } else {
      try {
        const response = await axios.post(`${url}/login`, customer);
        console.log(response.data);
        setUser({ ...user, customerEmail: customer.customerEmail });
        // the below code, manipulates the DOM
        // window.location.replace("http://localhost:3000/dashboard");
        navigate("/customer");
      } catch (error) {
        console.error(error.response.data);
        // alert(error.response.data);
      }
    }
  }

  return (
    <>
      <h4>Please log in below.</h4>
      <br></br>
      <input
        placeholder="Enter Your Customer Email"
        ref={customerEmailInput}
      ></input>
      <br></br>
      <br></br>
      <input
        type="password"
        placeholder="Enter Your Password"
        ref={passwordInput}
      ></input>
      <br></br>
      <br></br>
      <button class="btn btn-outline-primary btn-lg display-1" onClick={login}>
        Login
      </button>
    </>
  );
}
