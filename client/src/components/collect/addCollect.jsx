import axios from 'axios'
import {Paper, Button} from "@mui/material"
import React, { useEffect, useState } from 'react'
import {
  TrashIcon,
  PencilIcon,
  DocumentDownloadIcon,
  RefreshIcon,
} from "@heroicons/react/outline";
import { useNavigate } from 'react-router-dom';

function AddCollection() {
    const navigate = useNavigate()
    const [success, setSuccess]= useState("")
  const [state, setState] = useState({
    name: "",
    address:"",
    collectionDate: "",
    wasteType: "",
    quantity: ""
  })

  const handleChange = (item)=> (e) =>{
    setState({
        ...state,
        [item]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
        const response = await axios.post(`${import.meta.env.VITE_API}/collection/add`,{
            name: state.name,
            address: state.address,
            collectionDate: state.collectionDate.split("T")[0],
            wasteType:state.wasteType,
            quantity: state.quantity
        })

        console.log(response.data)
        if(response.data){
            navigate("/CollectSuccess")
        }
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div className="vh"> 
            {JSON.stringify(state)}
        <div className="container ">
        <h5 className="text-os text-center">Add New Product</h5>
            <div className="card-pad">
            <Paper elevation={1}>
            <div className="row justify-content-center card-pad">
            <div className="col" 
                style={{backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maxWidth: '450px',
                        marginLeft: '10px'
                
                }}>
                    
            </div>
            <div className="col-sm d-flex justify-content-center">

            <form className= "col-md-8 mt-4 mx-auto" onSubmit={handleSubmit}> 
                <div className="form-cus">

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Customer name</label>               
                <input  
                onChange={handleChange("name")}
                type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="ex:  John sins"
                     
                />          
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Address</label>
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="ex:  No:17/3, sk Road, colombo"
                      onChange={handleChange("address")}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Collection Date</label>
                <input 
                onChange={handleChange("collectionDate")}
                type="datetime-local" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="ex:  2023/02/10"
                        
                />
                </div>

                

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Waste Type</label>
                <input  
                onChange={handleChange("wasteType")}
                type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="ex:   plastic"
                        
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Quantity</label>
                <input type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product Details"
                        onChange={handleChange("quantity")}
                />
                </div>

                      
                           <Button  type="submit" variant="outlined" color="success" >Submit</Button>
                      
                </div>
                </form>

                </div>
                </div>
            </Paper>
            </div>
        
    </div>
    </div>
  )
}

export default AddCollection