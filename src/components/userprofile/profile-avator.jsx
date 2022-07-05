
import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";

import './Avatar.css';
import { Avatar } from "@mui/material";
import { storage } from "./firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import axios from "axios";
import { useRef } from "react";
import './profile-avatar.css';
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import {listAll} from "firebase/storage";
import {Card, CardContent, createTheme, TextField, FormControl, InputLabel, MenuItem, Select, Paper} from "@mui/material";
import Notifications from "../notifications/notificationbar";
import Image from "./bgimage.jpg";
import WelcomeNavBar from "../welcome/welcomepagenavbar";


const styles = {
  heroContainer: {
    height: "122vh",
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'relative',
    bottom: "400px",
    backgroundRepeat: 'no-repeat',
    width: "100%",
    margin: 0,
    bottom: "30px",
    opacity: "80%",
  }
 };

 

export default function AvatorProfile() {

  const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })


  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);

  const imagesListRef = ref(storage, "images/");
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `image/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImageUrls((prev) => [ url]);
      });
    });
  };

  useEffect(() => {
    listAll(imagesListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImageUrls(() => [url]);
        });
      });
    });
  }, []);

  const [profileBody, setProfileBody] = useState("");
  const [profileB, setProfileB] = useState("");
  const [userBody, setUserBody] = useState ("")

  const [value, setValue] = React.useState({profileName: ""})
  const [valuefname, setValuefname] = React.useState({fname: ""})
  const [valuelname, setValuelname] = React.useState({lname: ""})
  const [valueemail, setValueemail] = React.useState({email: ""})
  const [valuebalance, setValuebalance] = React.useState({balance: ""})
  const [valueaccountName, setValueaccountName] = React.useState({accountName: ""})
  const [valueaccountNumber, setValueaccountNumber] = React.useState({accountNumber: ""})


  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  const handleChangefname = (j) =>{
    setValuefname(j.target.value);
    localStorage.setItem("inputValuefname", j.target.value);

  }
  const handleChangelname = (k) =>{
    setValuelname(k.target.value);
    localStorage.setItem("inputValuelname", k.target.value);

  }

  const handleChangeemail = (f) => {
    setValueemail(f.target.value);
    localStorage.setItem("inputValueemail", f.target.value);
  };
  const handleChangebalance = (g) => {
    setValuebalance(g.target.value);
    localStorage.setItem("inputValuebalance", g.target.value);
  };
  const handleChangeaccountName = (h) => {
    setValueaccountName(h.target.value);
    localStorage.setItem("inputValueaccountName", h.target.value);
  };
  const handleChangeaccountNumber = (i) => {
    setValueaccountNumber(i.target.value);
    localStorage.setItem("inputValueaccountNumber", i.target.value);
  };


  useEffect(() => {
    setValue(localStorage.getItem("inputValue"));
    setValuefname(localStorage.getItem("inputValuefname"));
    setValuelname(localStorage.getItem("inputValuelname"));
    setValueemail(localStorage.getItem("inputValueemail"));
    setValuebalance(localStorage.getItem("inputValuebalance"));
    setValueaccountName(localStorage.getItem("inputValueaccountName"));
    setValueaccountNumber(localStorage.getItem("inputValueaccountNumber"));

  }, []);



  const urla = "http://localhost:9003";
  const urlAzure = "https://overflowingstacks.azurewebsites.net";

  const navigate = useNavigate();

  const profileNameInput = useRef();
  const fnameInput = useRef();
  const lnameInput = useRef();
  const emailInput = useRef();
  const balanceInput  = useRef();
  const accountNameInput  = useRef();
  const accountNumberInput  = useRef();
  
  async function updateProfile() {
              
    try {   
      const response = (await fetch(`${urla}/profile/findAllProfile`));
      const profileResponse = await response.json();
      setProfileB(profileResponse[0].email)
      setProfileBody(profileResponse[0].email)
      console.log(profileResponse[0].email)

      const userResponse = (await fetch (`${urla}/users/findAllUsers`))
      const userResponsj = await userResponse.json();
      setUserBody(userResponsj[0])
    } catch (error) {
        // console.error("here is the problem ");
    } 

    const profile = {
        profileName: profileNameInput.current.value,
        email: profileB.email,
        balance: balanceInput.current.value,
        accountName: accountNameInput.current.value,
        accountNumber:accountNumberInput.current.value,   
    };
    // console.log(profileB)
    // console.log(profileBody.fname)

    const user = {
        fname: fnameInput.current.value,
        lname: lnameInput.current.value,
    }

    try {
      const response = await axios.put(`${urla}/profile/update`, profile);
      console.log(response.data);
      
       
    } catch (error) {
      console.error(error.response.data);
    }
  }
  // console.log(userBody);

  return (

    <>
    <WelcomeNavBar/>
      <center> <div class="h2">Update Profile</div> 
      
      <Paper style={styles.heroContainer}> 
      <br></br>
      <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{ opacity: "98%", boxShadow: 5,
        borderRadius: 2, width: 700, height: 862 }}>
      <br></br>
     
      {imageUrls.map((url) => {
        return <Avatar alt = "Remy Sharp "src={url} sx ={{width : 125, height : 125}} />;
      })}
      <br></br>
      <input
        type="file"
        onChange={(event) => {
        setImageUpload(event.target.files[0]);
      }} />

      <Button onClick={uploadFile}>Upload Image</Button>
      
     
          
            <br></br>
            <br></br>
            
            
            
            {/* <output value={value} onChange={handleChange}> {profileBody.fname} </output> */}
            <TextField size="small" id="outlined-basic" label="Enter your First Name" variant="outlined" onChange={handleChangefname} inputRef={fnameInput}/>
            {/* <input value={valuefname} onChange={handleChangefname} placeholder="Enter your First Name" ref={fnameInput}></input> */}
            <br></br>
           <br></br>
            {/* <output> {profileBody.lname} </output> */}
            <TextField size="small" id="outlined-basic" label="Enter your Last Name" variant="outlined" onChange={handleChangelname} inputRef={lnameInput}/>
            {/* <input value={valuelname} onChange={handleChangelname} placeholder="Enter Your Last Name" ref={lnameInput}></input> */}
            <br></br>
            <br></br>
            <TextField size="small" id="outlined-basic" label="Enter your Username" variant="outlined" onChange={handleChange} inputRef={profileNameInput}/>
            {/* <input value={value} onChange={handleChange} placeholder="Enter Profile Name" ref={profileNameInput}></input> */}
            <br></br>
            <br></br>
            <TextField size="small" id="outlined-basic" label="Enter your Email" variant="outlined" onChange={handleChangeemail} inputRef={emailInput}/>
            {/* <input value={valueemail} onChange={handleChangeemail}  placeholder="Enter your email" ref={emailInput}></input> */}
            <br></br>
            <br></br>
            
            <TextField size="small" id="outlined-basic" label="Enter your balance" variant="outlined" onChange={handleChangebalance} inputRef={balanceInput}/>
            {/* <input  value={valuebalance} onChange={handleChangebalance} placeholder="Enter your balance" ref={balanceInput}></input> */}
            <br></br>
            <br></br>
            
            <TextField size="small" id="outlined-basic" label="Enter your Account Name" variant="outlined" onChange={handleChangeaccountName} inputRef={accountNameInput}/>
            {/* <input value={valueaccountName} onChange={handleChangeaccountName} placeholder="Enter your accountName" ref={accountNameInput}></input> */}
            <br></br>
            <br></br>
            
            <TextField size="small" id="outlined-basic" label="Enter your Account Number" variant="outlined" onChange={handleChangeaccountNumber} inputRef={accountNumberInput}/>
            {/* <input  value={valueaccountNumber} onChange={handleChangeaccountNumber} placeholder="Enter your accountNumber" ref={accountNumberInput}></input> */}
            <br></br>  
            <br></br>                 
          
            
            
            <FormControl size="small"  variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Country">Country </InputLabel>
        <Select
          labelId="Country"
          id="Country"
          label="Select"
          width="60px"
        >
          
          <MenuItem value="usa">USA</MenuItem>
          <MenuItem value="canada">Canada</MenuItem>
          <MenuItem value="australia">Australia</MenuItem>
          <MenuItem value="ethiopia">Ethiopia</MenuItem>
          
          
        </Select>
      </FormControl>
            
            {/* <div className="col-75">
            <label >Country * : </label>
              <select id="country" name="country">
              <option value="australia">USA</option>
              <option value="canada">Canada</option>
              <option value="usa">Australia</option>
              <option value="usa">Ethiopia</option>
              </select>
            </div> */}
            <br></br>
           
            

            <FormControl size="small"  variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Country">Time Zone </InputLabel>
        <Select
          labelId="Time Zone"
          id="Time Zone"
          label="Select"
        >
          
          <MenuItem value="australia">(GMT-5:00) America/New_York</MenuItem>
          <MenuItem value="canada">(GMT-5:00) America/Jamaica</MenuItem>
          <MenuItem value="rio">(GMT-5:00) America/Rio_Branca</MenuItem>
          <MenuItem value="indiana">(GMT-5:00) America/Indiana/Winamac</MenuItem>
          <MenuItem value="indianapolis">(GMT-5:00) America/Indianapolis</MenuItem>
          <MenuItem value="toronto">(GMT-5:00) America/Toronto</MenuItem>
          <MenuItem value="usa">(GMT-5:00) US/Eastern</MenuItem>
          
        </Select>
      </FormControl>
  
            {/* <label >Time zone ? : </label>
              <select id="timezone" name="timezone">
              <option value="australia">(GMT-5:00) America/New_York</option>
              <option value="canada">(GMT-5:00) America/Jamaica</option>
              <option value="usa">(GMT-5:00) America/Rio_Branca</option>
              <option value="usa">(GMT-5:00) America/Indiana/Winamac</option>
              <option value="usa">(GMT-5:00) America/Indianapolis</option>
              <option value="usa">(GMT-5:00) America/Toronto</option>
              <option value="usa">(GMT-5:00) US/Eastern</option>
              </select> */}
            <br></br>
            <br></br>
            
            
            <Button onClick={updateProfile}>Update</Button>
            
            </Card>
            <br></br>
            <br></br>
            </Paper>
            <center>
            <div className="social-container">
              <div className="h4">Connect your social accounts</div>
              <br></br>
              <a href="https://www.youtube.com"
                className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.twitter.com" 
                className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.linkedin.com/"
                 className="linkedin social">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
            
            
            </center>
            </center>
    
    </>

    );
}


