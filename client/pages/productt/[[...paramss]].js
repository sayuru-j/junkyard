import React, { useState, useEffect, useRef } from "react";    //useEffect- PAGE EKTA YADDI DATA TIKA DATA BASE EKN FETCH WELA PNNANE MEKN
import axios from "axios";          //handle http requsts from backend
import Layout from "../../components/Layout";

import Link from "next/link";
import { useRouter } from 'next/router'
import { Button, Paper, Box } from "@mui/material";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';






import Stack from '@mui/material/Stack';

import TextField from '@mui/material/TextField';


export default function productt() {             //GETS DATA from backend


    const routers = useRouter()
    const { paramss = [] } = routers.query           //params> folder name, multiple routes can gets
    console.log(paramss)




    const [prid, setprid] = useState("");           //set state for frontend data,those export to backend
    const [prname, setprname] = useState("");
    const [primage, setprimage] = useState("");
    const [prunitprice, setprunitprice] = useState("");
    let [prquantity, setprquantity] = useState("");
    const [prdetails, setprdetails] = useState("");
    const [result, setResult] = useState(0);
    const [total, setTotal] = useState(0);

    let [number, setNumber] = useState(0);
    // const { id, prid1, prname1, primage1, prunitprice1, prquantity1, prdetails1 } = useParams();   //set new values variables

    const id = paramss[0]

   
    useEffect(() => {

        setprid(paramss[1]);
        setprname(paramss[2]);
                                                  //setprid>is previous value,prid1 is new value>after replcing with new values
       // setprimage(paramss[3]+paramss[4]+paramss[5]+paramss[6]+paramss[7]+paramss[8]+paramss[9]);                              //set that to useEffect function
         setprimage(`${paramss[3]}//${paramss[4]}/${paramss[5]}/${paramss[6]}/${paramss[7]}/${paramss[8]}/${paramss[9]}`);  
        setprunitprice(paramss[10]);
        setprquantity(paramss[11]);
        setprdetails(paramss[12]);
    


    }, []);


    function sendData(e) {              //create event(e) for pass the varible aming the input fileds
     
        e.preventDefault()               //if someone send data from any iput fiiled add data into new object varible

      
    
        const newquantity= {
            
            prid,
            prname,                         //if data comes form sendData(e),then add those values into new object variable
            primage,
            prunitprice,    
            prquantity,
            prdetails
        
        }

        axios.put(`http://localhost:8000/product/update/${id}`, newquantity).then(()=>{  //if new object have values,then post that into backend
         alert("Placed a order")  
        }).catch((err)=> {
            alert(err)

        })


    }

    function gettotal() {
        setTotal(prunitprice*number)  
        
    }


    function increment() {
        setprquantity(--prquantity) || setNumber(++number) 
    }
    function decrement() {
        setprquantity(++prquantity) || setNumber(--number) 
    }

    const handleInputChange = (event) => {
        
        
        //setprquantity(prquantity-(event.target.value));    
        setprquantity(parseInt(event.target.value));
   }
   const handleSubtraction = (eg) => {
    setNumber(prquantity-number)
    setprquantity(parseInt(eg.target.value)); 
  };

      const router = useRouter()

      function handleClick() {
        router.push({
          pathname: '/purchdetails',    
      
        });
      }

    return (
        <Layout>
            <div className="vh">

                <div className="container ">
                    <h5 className="text-os text-center">Product Details</h5>
                    <div className="card-pad">

                        <Paper elevation={1}>
                            <div className="row justify-content-center card-pad">
                                <div className="col"
                                    >
                                   <Card style={{
                                       
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        maxWidth: '450px',
                                        marginLeft: '10px'

                                    }} >
                      <CardMedia 
                      component="img"
                      alt=""
                      height="230"
                      image={primage}
                     
                      /> </Card>



                                </div>

                                <div className="col-sm d-flex justify-content-center">

                                    <form className="col-md-8 mt-4 mx-auto"  onSubmit={sendData}>
                                        <div className="form-cus">
                                            <div className="mb-3">
                                                <h5>{prname}</h5>
                                                <h6 style={{ fontSize: 13 }}>Unit Price: Rs.{prunitprice}</h6>
                                                <h6 style={{ fontSize: 13 }}>Quantity Available: {prquantity}</h6>
                                                
                                                
                                                
                                                <Box
                                                    sx={{
                                                        display: 'flex',
                                                        '& > :not(style)': {

                                                            width: 60,
                                                            height: 30,

                                                        },
                                                    }}
                                                >
                                                    <Paper variant="0">

                                                        <Stack direction="row">

                                                            <button type="button" class="btn btn-primary btn-md text-center" style={{ height: 30, borderRadius: "50%", padding: 12, color: "white" }} onClick={() => {
                                                                decrement();
                                                                gettotal();
                                                              }}>-</button>
                                                            <div className="form-group row">
                                                                <div className="col-sm-1">
                                                                    <input type="number" className="form-controlqt form-controlqt-sm border-0" id="exampleFormControlInput1"  value={number} onChange={handleInputChange} 
                                                                   
                                                                    />
                                                                </div>
                                                            </div>

                                                            <button type="button" class="btn btn-primary btn-md text-center" style={{
                                                                maxHeight: 30, borderRadius: "50%", color: "white",
                                                                padding: 10
                                                            }} onClick={() => {
                                                                increment();
                                                                gettotal();
                                                              }}
                                                                 >+</button>
                                                        </Stack>
                                                    </Paper>
                                                </Box>
                                                <br />
                                                <Button  type="submit" variant="contained" color="error" onClick={() => {router.push(`/purchdetails/${total}`)} } >
                                                    Place a Order
                                                </Button>
                                                <br/><br/><br/>
                                                <h3 style={{ fontSize: 18 ,color:"red"}}> Total : Rs.{total} </h3>
                                                

                                            </div>


                                        </div>
                                    </form>

                                </div>

                            </div>
                            <h6 style={{ fontSize: 13 }}>Details: {prdetails}</h6>
                        </Paper>
                    </div>

                </div>
            </div>
        </Layout>

    )
}