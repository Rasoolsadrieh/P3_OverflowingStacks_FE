
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";

export default function AvatorProfile() {

    const [profileBody, setProfileBody] = useState("");
    const [profileB, setProfileB] = useState("");

    const url = "http://localhost:9004";

    useEffect(() => {
        profile();
    }, []);

    async function profile() {
        try {
            
            const response = (await fetch(`${url}/profile/findAllProfile`));
            const profileResponse = await response.json();

            setProfileBody(profileResponse[0]);
            setProfileB(profileResponse[0].email)

        } catch (error) {
            // console.error("here is the problem ");
        }
        
    }

    return (
        <>
            <br></br>
            <center>
            <h4>Wlecome to Profile dashboard</h4>
            <br></br>
            <br></br>
            <label >First Name : </label>
            <output> {profileBody.fname} </output>
            <br></br>
            <br></br>
   
            <label >Last Name : </label>
            <output> {profileBody.lname} </output>
            <br></br>
            <br></br>
       
            <label >Profile Name : </label>
            <output> {profileBody.fname}{profileBody.lname} </output>
            <br></br>
            <br></br>
           
            <label >Email : </label>
            <output> {profileB.email} </output>
            <br></br>
            <br></br>
        
            <label >Phone Number : </label>
            <output> {profileB.phoneNumber} </output>
            <br></br>
            <br></br>

            <div className="col-75">
            <label >Country : </label>
              <select id="country" name="country">
              <option value="australia">USA</option>
              <option value="canada">Canada</option>
              <option value="usa">Australia</option>
              <option value="usa">Ethiopia</option>
              </select>

            </div>
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={profile}>Update</Button>
            <br></br>
            <br></br>

            <div className="social-container">
              <h3>Social Follow</h3>
              <a href="https://www.youtube.com"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.twitter.com" 
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.linkedin.com/"
                 className="instagram social">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>

             </div>
  
            </center>
        </>
    );
}

