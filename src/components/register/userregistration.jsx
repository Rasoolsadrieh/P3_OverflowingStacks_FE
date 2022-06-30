import * as React from "react";
import Button from "@mui/material/Button";
import { useRef, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";

export default function UserRegistration() {
  const navigate = useNavigate();

  const [user,setUser] = useContext(userContext)

  const url = "https://overflowingstacks.azurewebsites.net";

  const emailInput = useRef();
  const fnameInput = useRef();
  const lnameInput = useRef();
  const phonenumberInput = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const dobInput = useRef();

  async function register() {
    const userprofile = {
      email: emailInput.current.value,
      fname: fnameInput.current.value,
      lname: lnameInput.current.value,
      phonenumber: phonenumberInput.current.value,
      username: usernameInput.current.value,
      password: passwordInput.current.value,
      dob: dobInput.current.value
    };


   // let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    
    if (emailInput.current.value === "" || passwordInput.current.value === "") {
      alert("You need to enter valid email and password");
    }// else if (emailInput.current.value.match(mailformat));
    else if (fnameInput.current.value === "" || lnameInput.current.value === "") {
      alert("You need to enter valid First or Last Name");
    }
    else if (usernameInput.current.value === "" || !isNaN(usernameInput.current.value) ) {
      alert("You need to enter valid Username");
    }
    else if (phonenumberInput.current.value === "" || isNaN(phonenumberInput.current.value)) {
      alert("You need to enter valid Phone Number");
    }
    else if (dobInput.current.value === "") {
      alert("You need to enter valid Date of Birth");
    }
    else if(!isNaN(emailInput.current.value)){
      alert("You need to enter valid email");
    }
    else if(!isNaN(fnameInput.current.value)){
      alert("You need to enter valid first name")
    }
    else if(!isNaN(lnameInput.current.value)){
      alert("You need to enter valid last name")
    }
    else if(!isNaN(passwordInput.current.value)){
      alert("Your Password needs to include letters")
    }
    else {
      try {
        const response = await axios.post(`${url}/users/register`, userprofile);
        console.log(response.data);
        navigate("/login");
      } catch (error) {
        console.error(error.response.data);
        console.log(error);
        alert(error.response.data);
      }

    }
  }

  return (
    <div className="container">
      <h4>Join OverflowingStacks!!!</h4>

      <input
        size="30"
        placeholder="Please enter your email"
        ref={emailInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter first name"
        ref={fnameInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter last name"
        ref={lnameInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter phone number"
        ref={phonenumberInput}
      ></input>
      <br></br>

      <input
        size="30"
        placeholder="Please enter username"
        ref={usernameInput}
      ></input>
      <br></br>

      <input
        size="30"
        type="password"
        placeholder="Please enter your password"
        ref={passwordInput}
      ></input>
      <br></br>
      <br></br>

      <h7>Please enter your date of birth  </h7>
      <br></br>
      <input
        size="30"
        type="date"
        placeholder="Please enter your dob"
        ref={dobInput}
      ></input>
      <br></br>

      <Button variant="contained" color="primary" onClick={register}>
        Sign Up
      </Button>
    </div>
  );
}
