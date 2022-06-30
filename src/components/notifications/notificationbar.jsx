import { useContext, useEffect, useState } from "react";
import { userContext } from "../../App";
import * as React from 'react';
import Payment from "../sendmoney/transfermoney";
import PaidIcon from '@mui/icons-material/Paid';
import { Link } from "@mui/material";
//import { FixedSizeList } from 'react-window';

import List from '@mui/material/List';

import { ListGroup } from "react-bootstrap";


export default function Notifications() {
    const [menuBody, setMenuBody] = useState([]);
    
    const [menu, setMenu] = useState(true);
    const [menuRecent, setMenuRecent] = useState(true);
    const [user, setUser] = useContext(userContext);
    const url = "https://overflowingstacks.azurewebsites.net";
    //console.log(user)
    useEffect(() => {
        findAll();
    }, [menu]);
    
    // Async/Await in JS, this came around in 2016 (ECMAScript6)
    async function findAll() {
        try {
            console.log((`${url}`))
            const response = await fetch(`${url}`+ "/notification");
            const menus = await response.json();
            console.log(menus);
            const menuTableRows = menus.map((e) => {
                if (e.user.email === user.email){
                    const message=e.noti_con //TODO: what we are pulling
                return (
                    <tr>
                        <a target="_blank" rel="noopener noreferrer" href={message}><td  width="200"></td></a>
                    </tr>
                );
                }
            });
            setMenuBody(menuTableRows);
            console.log(menus);
        } catch (e) {
            console.error(e);
        }
        async function MoneyRecieved(){

            const[moneyRecieved, setMoneyRecieved] = useState()
            const[user, setUser] = useState()
            
            if (Payment (isRecieved == false)) {
             
              } else {
                useEffect(()  => {
                    const fetchData = async () => isRecieved == true && <h3> You have recieved money! </h3>});
                };
                   
                    componentDidMount() 
                        this.timer = setInterval(()=> this.getMoney(), 10000);
                        return () => clearInterval(interval);
                      };
                    }
                    try {
                        const response = await axios.put(`${url}/notification`, user);
                        const response2 = await axios.put(`${url}/notification`, MoneyRecieved);
                        console.log(response.data);
                        console.log(response2.data);
                        setMoneyRecieved(!isRecieved)
            
            
                     
                    } catch (error) {
                        console.error(error.response.data);
                        console.error(error.response2.data);
                        
                    }
                    if(Payment == true)
                    <Link href="notification">
                    <Badge color="secondary">
          <PaidIcon />
        </Badge>
        </Link>
        
              
                      
                //       componentWillUnmount() {
                //         this.timer = null; 
                //       }
                      
                //       getMoney() {
                //         fetch(this.getIsRecieved('https://overflowingstacksweb.azurewebsites.net/notification'))
                //           .then(isRecieved => result.json())
                //           .then(isReceived => this.setState({ money: result }));
                //       };
                //     }
                // onPayment={this.findAll}
                // update
              
              
              
            
        
            
         
    }
   
    return (
    
       <>
       <div>
         <h2>Notifications</h2>
            <List
        sx={{
            width: '100%',
            maxWidth: 360,
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'background.paper',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
        }}
        subheader={<li />}
        >
            
        <ListGroup>
            {menuBody}
        </ListGroup>
        </List>
        </div>
        
        </>
    );
