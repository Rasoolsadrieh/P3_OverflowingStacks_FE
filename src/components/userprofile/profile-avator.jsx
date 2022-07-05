import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube,faTwitter,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { Avatar } from "@mui/material";
import { storage } from "./firebase";
import {ref, uploadBytes, getDownloadURL, listAll} from "firebase/storage";
import axios from "axios";
import { useRef } from "react";
import './profile-avatar.css';
import { useNavigate } from "react-router-dom";
import { v4 } from "uuid";
import { useContext } from "react"
import { userContext } from "../../App";
import {Card, createTheme, TextField, FormControl, InputLabel, MenuItem, Select, Paper} from "@mui/material";
import Notifications from "../notifications/notificationbar";
import Image from "./bgimage.jpg";
import WelcomeNavBar from "../welcome/welcomepagenavbar";
import { Label } from "@mui/icons-material";


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

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);


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

  //-----------------------------------------------------------------------------

  const [user] = useContext(userContext)
  const navigate = useNavigate();

  const [value, setValue] = React.useState("Ex: - firstLast")
  const [valuebalance, setValuebalance] = React.useState("Ex: - 100.00")
  const [valueaccountName, setValueaccountName] = React.useState("Ex: -First Last")
  const [valueaccountNumber, setValueaccountNumber] = React.useState("Ex: - 1800 187 1285")

  const[object,setB] =useState();
  const[profile, setProfile] = useState();

  const[userLoaded, setUserLoaded] = useState(false)
 
  const fetchProfile = async ()=> {
    try{
      const response = await fetch(`${urlAzure}/profile/findAllProfile`)
      const responseProfile = await response.json();
      console.log(responseProfile)
   
   
     
      for (let i = 0; i < responseProfile.length; i++ ){
        // console.log(responseProfile[i].email.email);
        if(responseProfile[i].email.email === user.email){
          setB(responseProfile[i].email)
          console.log("ghghghghg")
          console.log(responseProfile[i])
          return {success:true, data : responseProfile[i]}
          break;
        }
      }
   
      }catch (error) {
        console.error("Here is the problem 111");
        return({success:false})
      }
  }

 
  useEffect(() => {
    (async () => {
      setUserLoaded(false);
      let res = await fetchProfile();
      if (res.success) {
        setProfile(res.data);
        setUserLoaded(true);
      }
    })();
  }, []);
  console.log("rrtrtrt");
  console.log(profile);

  const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
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
    setValuebalance(localStorage.getItem("inputValuebalance"));
    setValueaccountName(localStorage.getItem("inputValueaccountName"));
    setValueaccountNumber(localStorage.getItem("inputValueaccountNumber"));

  }, []);

  const urlAzure = "https://overflowingstacks.azurewebsites.net";
 

  const profileNameInput = useRef();
  const balanceInput  = useRef();
  const accountNameInput  = useRef();
  const accountNumberInput  = useRef();
   
  async function updateProfile() {
  let created = false;
  const profile = {
    profileName: profileNameInput.current.value,
    email: user.email,
    balance: balanceInput.current.value,
    accountName: accountNameInput.current.value,
    accountNumber:accountNumberInput.current.value  
  };
   
  console.log(profile)
  console.log(user)
 
  try{
  const response = await fetch(`${urlAzure}/profile/findAllProfile`)
  const responseProfile = await response.json();
  console.log(responseProfile)


 
  for (let i = 0; i < responseProfile.length; i++ ){
    // console.log(responseProfile[i].email.email);
    if(responseProfile[i].email.email === user.email){
      console.log("Profile Found");
      created = true;
      break;
    }
  }

  }catch (error) {
    console.error("Here is the problem 111");
  }

  if (created===true){
  try {
    const response = await axios.put(`${urlAzure}/profile/update`, profile);
    console.log(response.data);
    console.log(response.data);

  } catch (error) {
    console.error("Here is the problem of update");
  }
  } else{
    const responseNewProfile = await axios.post(`${urlAzure}/profile/register`, profile);
    console.log(responseNewProfile)
  }
  // const response = await axios.get(`${urlAzure}/profile/findProfile?profileName=${profile.profileName}`)
  // console.log(response.data.profileName)

  }

  return (

    <>
    <WelcomeNavBar/>
      <center> <div class="h2">Update Profile</div> 
     
      <Paper style={styles.heroContainer}> 
      <br></br>
      <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{ opacity: "98%", boxShadow: 5,
        borderRadius: 2, width: 700, height: 1000 }}>
      <br></br>

      <center> <h4>Welcome to Profile Dashboard</h4> </center>

      {/* ------------------------------Avatar Image----------------------------------------------------- */}
       <div >
      {imageUrls.map((url) => {
        return <Avatar alt = "Remy Sharp "src={url} sx ={{width : 150, height : 150}} />;
      })}
      </div> 
      {/* ------------------------------Avatar Image----------------------------------------------------- */}

 
        <br></br>
         
        {userLoaded ? (
          <div>
     
      <Button onClick={updateProfile}>Update</Button>
      <br></br>
      <br></br>
      <label>Profile Name * : </label>
      <output > {profile.profileName    } </output>  
      <TextField size="small" id="outlined-basic" label="Enter your Username" variant="outlined" onChange={handleChange} inputRef={profileNameInput}/>
      <br></br>
      <br></br>
      <label>Email * : </label>
      <output style ={{ borderWidth: 1, borderBottomStyle : "dotted", borderTopStyle : "none",  borderLeftStyle : "none", borderRightStyle : "none", pointerEvents: "fill" }}> {user.email} </output>
      {/* <TextField size="small" id="outlined-basic" label="Enter your Email" variant="outlined" inputRef={user.email}/> */}
      <br></br>
      <br></br>
      <label >Balance : </label>
      <output > {profile.balance  }</output>
      <TextField size="small" id="outlined-basic" label="Enter your balance" variant="outlined" onChange={handleChangebalance} inputRef={balanceInput}/>
      <br></br>
      <br></br>
      <label >Account Name : </label>
      <output > {profile.accountName  }</output>
      <TextField size="small" id="outlined-basic" label="Enter your Account Name" variant="outlined" onChange={handleChangeaccountName} inputRef={accountNameInput}/>
      <br></br>
      <br></br>
      <label >Account Number : </label>
      <output > {profile.accountNumber  }</output>
      <TextField size="small" id="outlined-basic" label="Enter your Account Number" variant="outlined" onChange={handleChangeaccountNumber} inputRef={accountNumberInput}/>

      <br></br>
          </div>
          ) : (
            <div>
            <Button onClick={updateProfile}>Create</Button>
            <p>No profile found, please create a profile</p>
            <br></br>
            <br></br>
            <Label>Profile Name * : </Label>
         
            <TextField size="small" id="outlined-basic" label="Enter your Profile Name" variant="outlined" onChange={handleChange} inputRef={profileNameInput}/>
            <br></br>
            <br></br>
            <label>Email * : </label>
            <output style ={{ borderWidth: 1, borderBottomStyle : "dotted", borderTopStyle : "none",  borderLeftStyle : "none", borderRightStyle : "none", pointerEvents: "fill" }}> {user.email} </output>
            {/* <TextField size="small" id="outlined-basic" label="Enter your Email" variant="outlined"  inputRef={user.email}/> */}
            <br></br>
            <br></br>
            <label >Balance : </label>
   
            <TextField size="small" id="outlined-basic" label="Enter your balance" variant="outlined" onChange={handleChangebalance} inputRef={balanceInput}/>
            <br></br>
            <br></br>
            <label >Account Name : </label>
           
            <TextField size="small" id="outlined-basic" label="Enter your Account Name" variant="outlined" onChange={handleChangeaccountName} inputRef={accountNameInput}/>
            <br></br>
            <br></br>
            <label >Account Number : </label>
         
            <TextField size="small" id="outlined-basic" label="Enter your Account Number" variant="outlined" onChange={handleChangeaccountNumber} inputRef={accountNumberInput}/>
                </div>
               )}
           
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
     
          <br></br>
          <FormControl size="small"  variant="outlined" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="Country">Time Zone </InputLabel>
          <Select
          labelId="Time Zone"
          id="Time Zone"
          label="Select">
         
          <MenuItem value="australia">(GMT-5:00) America/New_York</MenuItem>
          <MenuItem value="canada">(GMT-5:00) America/Jamaica</MenuItem>
          <MenuItem value="rio">(GMT-5:00) America/Rio_Branca</MenuItem>
          <MenuItem value="indiana">(GMT-5:00) America/Indiana/Winamac</MenuItem>
          <MenuItem value="indianapolis">(GMT-5:00) America/Indianapolis</MenuItem>
          <MenuItem value="toronto">(GMT-5:00) America/Toronto</MenuItem>
          <MenuItem value="usa">(GMT-5:00) US/Eastern</MenuItem>
         
           </Select>
      </FormControl>
            <br></br>
 
            <Button  onClick={() => navigate("/profiledashboard")}>Back</Button>  
           
            </Card>
            <br></br>
            <br></br>
            <br></br>
        <br></br>
       
        <br></br>    
        <div className="social-container">
          <h4>Connect to your social accounts</h4>
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
            </Paper>
            <center>

            </center>
            </center>

 
       
    </>
  )

}