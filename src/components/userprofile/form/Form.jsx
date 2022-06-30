// import * as React from 'react';
// import Box from '@mui/material/Box';
// import FilledInput from '@mui/material/FilledInput';
// import FormControl from '@mui/material/FormControl';
// import FormHelperText from '@mui/material/FormHelperText';
// import Input from '@mui/material/Input';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';

// export default function Form() {
//   const [name, setName] = React.useState('Composed TextField');

//   const handleChange = (event) => {
//     setName(event.target.value);
//   };

//   return (

//     <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1 },
//       }}
//       noValidate
//       autoComplete="off"
      
//     >
// <form>                      
//     <div class="form-group form-inline">                            
//         <label for="exampleInputEmail1">Profile Name</label>
//             <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
//     </div>
//         <div class="form-group form-inline">                            
//         <label for="exampleInputEmail1">Email address</label>
//             <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email"></input>
//     </div>
    
// </form>


// <label >Profile Name * : </label>
//          <FormControl disabled variant="standard">
//         <InputLabel htmlFor="component-disabled">Name</InputLabel>
//         <Input id="component-disabled" value={name} onChange={handleChange} />
//         <FormHelperText>Disabled</FormHelperText>
//       </FormControl>
//     </Box>

    
//   );
// }

// /* 

// <Form>
// <div className= >
// <form></form>
// <left>

//   <label >Profile Name * : </label>
//   <input value={value} onChange={handleChange} placeholder="Enter Profile Name" ref={profileNameInput}></input>
//   <br></br>
//   <br></br>
//   <br></br>
//   <label >Email *  :    </label>
//   <input value={valueemail} onChange={handleChangeemail}  placeholder="Enter your email" ref={emailInput}></input>
//   <br></br>
//   <br></br>
//   <br></br>
//   <label >Balance  : </label>
//   <input  value={valuebalance} onChange={handleChangebalance} placeholder="Enter your balance" ref={balanceInput}></input>
//   <br></br>
//   <br></br>
//   <br></br>
//   <label >Account Name : </label>
//   <input value={valueaccountName} onChange={handleChangeaccountName} placeholder="Enter your accountName" ref={accountNameInput}></input>
//   <br></br>
//   <br></br>
//   <br></br>
//   <label >Account Number : </label>
//   <input  value={valueaccountNumber} onChange={handleChangeaccountNumber} placeholder="Enter your accountNumber" ref={accountNumberInput}></input>
//   <br></br>  
//   <br></br>                  
//   </left> 
//   <br></br>
//   </div>
//   <left>
//   <div className="col-75">
//   <label >Country * : </label>
//     <select id="country" name="country">
//     <option value="australia">USA</option>
//     <option value="canada">Canada</option>
//     <option value="usa">Australia</option>
//     <option value="usa">Ethiopia</option>
//     </select>
//   </div>
//   <br></br>
//   <br></br>
//   <br></br>

//   <label >Time zone ? : </label>
//     <select id="timezone" name="timezone">
//     <option value="australia">(GMT-5:00) America/New_York</option>
//     <option value="canada">(GMT-5:00) America/Jamaica</option>
//     <option value="usa">(GMT-5:00) America/Rio_Branca</option>
//     <option value="usa">(GMT-5:00) America/Indiana/Winamac</option>
//     <option value="usa">(GMT-5:00) America/Indianapolis</option>
//     <option value="usa">(GMT-5:00) America/Toronto</option>
//     <option value="usa">(GMT-5:00) US/Eastern</option>
//     </select>
//   <br></br>
//   <br></br>
//   <br></br>
//   </left>
//   <center>
//   <Button onClick={updateProfile}>Update</Button>
//   <br></br>
//   <br></br>

//   </Form>  */