import axios from "axios";
import { useContext, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import Image from "./bg_img2.jpg";
import { Card, Paper, createTheme, TextField, Box, Button, Typography } from "@mui/material";

const styles = {
    heroContainer: {
      height: "100vh",
      backgroundImage: `url(${Image})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      BackgroundSize: 'cover',
      width: "100%",
      margin: 0,
      padding: 10,
      opacity: "85%",
    }
   };

export default function ResetPassword() {

    const [darkMode,setDarkMode]= useState(false)

  const darktheme=createTheme({
    palette: {
      mode: darkMode? 'dark' : 'light',
    }
  })

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
            setBody(response.data);

        }
        catch (error) {
            console.error(error);
            alert(error.response.data);
        }
    }

    return (
    <>
        <Paper style={styles.heroContainer}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <center>
        <Card check={darkMode} change={()=>{setDarkMode(!darkMode)}} sx={{ opacity: "98%", boxShadow: 5,
              borderRadius: 2, width: 400, height: 400 }}>
        <br></br>
            <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
        <center>
        <Typography sx={{  }} color="text.secondary" gutterBottom>
            Reset Password Below
        </Typography>
        <br></br>
        <TextField id="outlined-basic" label="Enter Email" variant="outlined" inputRef={a}/>
        <br></br>
        <br></br>
        <TextField id="outlined-basic" label="Enter Old Password" variant="outlined" inputRef={b}/>
        <br></br>
        <br></br>
        <TextField id="outlined-basic" label="Enter New Password" variant="outlined" inputRef={c}/>
        <br></br>
        <br></br>
        <Button variant='contained' onClick={resetpassword}>RESET PASSWORD</Button>
        </center>
        <h3>{body}</h3>
        </Box>
        </Card>
        </center>
        </Paper>
    </>
    )
}
