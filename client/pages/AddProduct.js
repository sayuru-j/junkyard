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

    const [state, setState] = useState({
        primage: "",
        
      });

    const [url, setUrl] = useState("");
    const [image, setImage] = useState("");

    function sendData(e) {              //create event(e) for pass the varible aming the input fileds
     
        e.preventDefault()               //if someone send data from any iput fiiled add data into new object varible
    
        const newProduct = {

            prid,
            prname,                         //if data comes form sendData(e),then add those values into new object variable
            primage: url,
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

    const uploadImage = async () => {
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "ecgop3wq");
        data.append("cloud_name", "df2vpsktp");
    
        try {
          const response = await axios.post(
            "https://api.cloudinary.com/v1_1/df2vpsktp/image/upload",
            data
          );
          const responseData = await response.data;
          setUrl(responseData.url);
        } catch (error) {
          console.log(error);
        }
      };


  
   
  
    return(
        <Layout>
        <div className="vh"> 
            
        <div className="container ">
        <h5 className="text-os text-center">Add New Product</h5>
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
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product ID" required
                     onChange={(e) => {
                        setprid(e.target.value); 
                    }}
                />          
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                <input  type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product Name" required
                      onChange={(e) => {
                        setprname(e.target.value); 
                    }}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Image</label>
                <input type="file" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Choose File " required
                        
                        onChange={(e) => setImage(e.target.files[0])}
                />
                </div>
                
                {image && (
                      <div className="flex flex-col items-center w-1/3 justify-center">
                        <img
                        
                          className="rounded-2xl max-h-48"
                          src={URL.createObjectURL(image)}
                          alt=""
                          style={{
                            maxWidth: '50px',
                            marginLeft: '10px'   }}
                        />
                        <button
                          onClick={uploadImage}
                          type="button"
                          className="my-2 py-1 bg-primary text-white px-4 rounded-lg"
                        >
                          {url ? "Uploaded" : "Upload"}
                        </button>
                      </div>
                    )}
               
                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Unit Price</label>               
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Unit Price" required
                       onChange={(e) => {
                        setprunitprice(e.target.value); 
                    }}
                />          
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Available Quantity</label>
                <input  type="number" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Available Quantity" required
                        onChange={(e) => {
                            setprquantity(e.target.value); 
                        }}
                />
                </div>

                <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Details</label>
                <input type="text" className="form-control font-size-sm" id="exampleFormControlInput1" placeholder="Product Details" required
                        onChange={(e) => {
                            setprdetails(e.target.value); 
                        }}
                />
                </div>

                      <div style={{float: "right"}}>
                           <Button  type="submit" variant="outlined" color="success" onClick={() => {window.location.href="/ProductMng"}}  required>Submit</Button>
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

