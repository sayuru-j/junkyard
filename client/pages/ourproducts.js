
import Layout from "../components/Layout";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Link from "next/link";
import { BrowserRouter as Router, Route } from "react-router-dom"
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useRouter} from 'next/router'

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import EditRoundedIcon from '@mui/icons-material/EditRounded';

export default function ourproducts() {

  const [productmng, setProduct] = useState([]);    //get backend data by array type one by one
  //useState()>what is the initial state of data,now is nothing

  useEffect(() => {                              //use useEffect for get data from BE
    function getProduct() {                    //write function to asign BE http connectivity
      axios.get("http://localhost:8000/product/").then((res) => {
        setProduct(res.data);                                  //setproduct one by one as reponse data
      }).catch((err) => {
        alert(err.message);
      })
    }
    getProduct();
  }, [])                                        //set object one by one []  []   []



  const router = useRouter()

  return (

    <Layout>
      
      <div className="container" >
      <h5 className="text-os text-center">Our Prodcuts</h5>
       <div className="row justify-content-left">
      
        {productmng.map(({ _id, prid, prname, primage, prunitprice, prquantity, prdetails }) => (
          <React.Fragment key={_id}>
           
                
                  <div className="col- card-pad">
                    <Card sx={{ width: 300, height: 280 }} onClick={() => {router.push(`/productt/${_id}/${prid}/${prname}/${primage}/${prunitprice}/${prquantity}/${prdetails}`)} }>
                      <CardMedia 
                      component="img"
                      alt=""
                      height="140"
                      image={primage}
                     
                      />       
                      <div className="card-content">
                        <CardContent>

                          <Typography gutterBottom variant="h6" component="div">
                            {prname}
                          </Typography>
                          
                          <Typography gutterBottom variant="h6" component="div" color="red" align="left">
                          Rs.{prunitprice}
                          </Typography>
                        
                         
                          
                       
                        </CardContent>
                      </div>
                    </Card>
                  
                 </div>
           </React.Fragment>

        ))}
      </div>
     </div>
    </Layout>

  )
}

