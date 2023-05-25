import React, {useState, useEffect} from "react";    //{useState} -class state like ,in buld function
import Layout from "../../components/Layout";
import { Button, Paper, Box } from "@mui/material";
import axios from "axios";
import { useRouter } from 'next/router'
import Stack from '@mui/material/Stack';

export default function AddPurchase () {

    const routers = useRouter()
    const { paramss = [] } = routers.query           //params> folder name, multiple routes can gets
    console.log(paramss)

    const [pdname, setpdname] = useState("");           //set state for frontend data,those export to backend
    const [pdaddress, setpdaddress] = useState("");
    const [pdemail, setpdemail] = useState("");
    const [pdtel, setpdtel] = useState("");
    const [total, setTotal] = useState("");


    useEffect(() => {

        setTotal(paramss[0]);

    }, []);
	
  

    function sendData(e) {              //create event(e) for pass the varible aming the input fileds
     
        e.preventDefault()               //if someone send data from any iput fiiled add data into new object varible
    
        const newPurchase = {

            pdname,
            pdaddress,                         //if data comes form sendData(e),then add those values into new object variable
            pdemail,
            pdtel,
            total
        }

        axios.post("http://localhost:8000/purchasedt/in", newPurchase).then(()=>{  //if new object have values,then post that into backend
         alert("Purchase Added")  
        }).catch((err)=> {
            alert(err)

        })


    }


  
   
  
    return(
        <Layout>
        <div className="vh"> 
           
        <div className="container ">
        <h5 className="text-os text-center">Purchase Details</h5>
            <div className="card-pad">
            <Paper elevation={1}>
            <div className="row justify-content-center card-pad">
            <div className="col" 
                style={{backgroundImage: 'url(https://source.unsplash.com/random/?city,night)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maxWidth: '450px',
                        marginLeft: '10px'
                
                }}>
                    
            </div>
            <div className="col-sm d-flex justify-content-center">

            <form className= "col-md-8 mt-4 mx-auto"  onSubmit={sendData}> 
                <div className="form-cus">

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>               
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Full Name"
                     onChange={(e) => {
                        setpdname(e.target.value); 
                    }}
                />          
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Address"
                      onChange={(e) => {
                        setpdaddress(e.target.value); 
                    }}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Enter Email "
                        onChange={(e) => {
                            setpdemail(e.target.value); 
                        }}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tel</label>               
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Enter Tel"
                       onChange={(e) => {
                        setpdtel(e.target.value); 
                    }}
                />          
                </div>
                
                <Stack direction="row">
                      <h3 style={{ fontSize: 18 }}>Total:</h3> &nbsp;&nbsp;<h3 style={{ fontSize: 18 ,color:"red"}}> Rs.{total} </h3> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
                      <div style={{float: "right"}}>
                           <Button  type="submit" variant="outlined" color="success" onClick={() => {window.location.href="/AddCard"}} >Submit</Button>
                           </div>
                           </Stack>
                </div>
                </form>

                </div>
                </div>
            </Paper>
            </div>
        
    </div>
    </div>
    </Layout>
    )
}

