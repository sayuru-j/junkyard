import React, {useState} from "react";    //{useState} -class state like ,in buld function
import Layout from "../components/Layout";
import { Button, Paper, Box } from "@mui/material";
import axios from "axios";

export default function AddProduct () {

    const [prid, setprid] = useState("");           //set state for frontend data,those export to backend
    const [prname, setprname] = useState("");
    const [primage, setprimage] = useState("");
    const [prunitprice, setprunitprice] = useState("");
    const [prquantity, setprquantity] = useState("");
    const [prdetails, setprdetails] = useState("");

    function sendData(e) {              //create event(e) for pass the varible aming the input fileds
     
        e.preventDefault()               //if someone send data from any iput fiiled add data into new object varible
    
        const newProduct = {

            prid,
            prname,                         //if data comes form sendData(e),then add those values into new object variable
            primage,
            prunitprice,
            prquantity,
            prdetails
        }

        axios.post("http://localhost:8000/product/add", newProduct).then(()=>{  //if new object have values,then post that into backend
         alert("Product Added")  
        }).catch((err)=> {
            alert(err)

        })


    }


  
   
  
    return(
        <Layout>
        <div className="vh"> 
            
        <div className="container ">
        <h5 className="text-os text-center">Card Details</h5>
            <div className="card-pad">
            <Paper elevation={1}  sx={{  maxWidth: 900, height: 400, margin: 'auto'}}>
            <div className="row justify-content-center card-pad">
           
            <div className="col-sm d-flex justify-content-center">

            <form className= "col-md-8 mt-4 mx-auto"  onSubmit={sendData}> 
                <div className="form-cus">
                <div class="row">
                <div class="col">
                <div className="mb-3" style={{ width: "350px" }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Card Number</label>               
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Card Number"
                     onChange={(e) => {
                        setprid(e.target.value); 
                    }}
                />          
                </div></div>
                <div class="col">
                <div  className="mb-3" style={{ width: "100px" }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">CVV</label>
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="CVV"
                      onChange={(e) => {
                        setprname(e.target.value); 
                    }}
                />
                </div> </div></div>   
                
                <div class="row">
                <div class="col">
                <div className="mb-3" style={{ width: "350px" }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Name On Card</label>               
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Name On Card"
                     onChange={(e) => {
                        setprid(e.target.value); 
                    }}
                />          
                </div></div>
                <div class="col">
                <div  className="mb-3" style={{ width: "100px" }}>
                <label htmlFor="exampleFormControlInput1" className="form-label">EXP</label>
                <input  type="date" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="EXP"
                      onChange={(e) => {
                        setprname(e.target.value); 
                    }}
                />
                </div> </div></div> 



                <div class="row">
                <div class="col">
                 <br/>
                 <div >
                           <Button  type="submit" variant="contained" color="error" onClick={() => {window.location.href="/successful"}}>Pay</Button>
                </div>

                </div>
                <div class="col">
                

                <div style={{ width: "200px", height: "auto" }}>
                <div className="img-pad">
                    <img className="img-fluid text-center" alt="about-us" src="/static/images/payments.png"/>
                </div>
            </div>
                
                </div></div> 



                

                     
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

