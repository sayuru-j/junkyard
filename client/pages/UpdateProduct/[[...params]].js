import React, {useEffect, useState} from "react";    //{useState} -class state like ,in buld function
import Layout from "../../components/Layout";
import { Button, Paper, Box } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";
import {useRouter} from 'next/router'

export default function  UpdateProduct () {


    const router = useRouter()
    const {params = []}= router.query           //params> folder name, multiple routes can gets
    console.log(params)




    const [prid, setprid] = useState("");           //set state for frontend data,those export to backend
    const [prname, setprname] = useState("");
    const [primage, setprimage] = useState("");
    const [prunitprice, setprunitprice] = useState("");
    const [prquantity, setprquantity] = useState("");
    const [prdetails, setprdetails] = useState("");

    

    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");
   // const { id, prid1, prname1, primage1, prunitprice1, prquantity1, prdetails1 } = useParams();   //set new values variables
    
   const id = params[0]
   
    useEffect(()=>{

        setprid(params[1]);
        setprname(params[2]);                                 //setprid>is previous value,prid1 is new value>after replcing with new values
        //setprimage(params[3]);                              //set that to useEffect function
        setprimage(`${params[3]}//${params[4]}/${params[5]}/${params[6]}/${params[7]}/${params[8]}/${params[9]}`);
        setprunitprice(params[10]);
        setprquantity(params[11]);
        setprdetails(params[12]);
        
    },[]);


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

        axios.put(`http://localhost:8000/product/update/${id}`, newProduct).then(()=>{  //if new object have values,then post that into backend
         alert("Product Updated")  
        }).catch((err)=> {
            alert(err)

        })


    }

   
  
   
  
    return(
        <Layout>
        <div className="vh"> 
            
        <div className="container">
        <h5 className="text-os text-center">Update Product</h5>
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
                <label htmlFor="exampleFormControlInput1" className="form-label">Product ID</label>               
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product ID" defaultValue={prid} 
                     onChange={(e) => {
                        setprid(e.target.value); 
                    }}
                />          
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product Name" defaultValue={prname} 
                      onChange={(e) => {
                        setprname(e.target.value); 
                    }}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Image</label>
                <input type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Choose File "defaultValue={primage} 
                        
                       
                        onChange={(e) => {
                            setprimage(e.target.value); 
                        }}
                />
                </div>
              

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Unit Price</label>               
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Unit Price" defaultValue={prunitprice} 
                       onChange={(e) => {
                        setprunitprice(e.target.value); 
                    }}
                />          
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Available Quantity</label>
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Available Quantity" defaultValue={prquantity} 
                        onChange={(e) => {
                            setprquantity(e.target.value); 
                        }}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Details</label>
                <input type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product Details" defaultValue={prdetails} 
                        onChange={(e) => {
                            setprdetails(e.target.value); 
                        }}
                />
                </div>

                      <div style={{float: "right"}}>
                           <Button  type="submit" variant="outlined" color="success" onClick={() => {window.location.href="/ProductMng"}}>Submit</Button>
                      </div>
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

