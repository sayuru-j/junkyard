import React,{useState, useEffect, useRef} from "react";    //useEffect- PAGE EKTA YADDI DATA TIKA DATA BASE EKN FETCH WELA PNNANE MEKN
import axios from "axios";          //handle http requsts from backend
import Layout from "../components/Layout";
import { Button, Box } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Link from "next/link";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import {useRouter} from 'next/router'

import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';

import ReactToPrint from "react-to-print";


export default function Purchasemng(){             //GETS DATA from backend

    const [Purchase, setPurchase] = useState([]);    //get backend data by array type one by one
    const [totalcalc, setTotal] = useState(0);                                            //useState()>what is the initial state of data,now is nothing
    
    useEffect(()=>{                              //use useEffect for get data from BE
        function getPurchase(){                    //write function to asign BE http connectivity
        axios.get("http://localhost:8000/purchasedt/getpu").then((res)=>{
            setPurchase(res.data);                                  //setproduct one by one as reponse data
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getPurchase();    
    }, [])                                        //set object one by one []  []   []

    useEffect(() => {
      const sum = Purchase.reduce((total, { total: purchaseTotal }) => {
        return total + (isNaN(purchaseTotal) ? 0 : parseInt(purchaseTotal));
      }, 0);
      setTotal(sum);
    }, [Purchase]);



    const componentRef = useRef()         /** selected printing function*/

    const handlePrint = () => {        //noraml way printing
        window.print()
    }



                                

    const router = useRouter()

    return(
        <Layout>
          <br/> <br/>
        <div >
       
        <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        

        <ReactToPrint trigger={() =>
        <Button  type="submit" variant="outlined" color="error">+ Download</Button>}
        content={() => componentRef.current}/>
         
         
           
        </div>
        <div className="p-5" ref={componentRef}>
        <h6 style={{ color: "#172231",textAlign:"center" }} ref={componentRef}>Purchased Details</h6> <br/> 
        <br/>
        <TableContainer component={Paper}  sx={{  maxWidth: 900, margin: 'auto'}} >
        
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
   
            <TableCell align="left">Name</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Tel</TableCell>
            <TableCell align="right">Total Purchased</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {Purchase.map(({ _id, pdname, pdaddress, pdemail, pdtel, total }) => (
            <TableRow
              key={_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{pdname}</TableCell>
              <TableCell align="right">{pdaddress}</TableCell>
              <TableCell align="right">{pdemail}</TableCell>
              <TableCell align="right">{pdtel}</TableCell>
              <TableCell className="amount" align="right">{total}</TableCell>
             

              
            </TableRow>
          ))}
          
        </TableBody>
           
        
      </Table>

      
          
          <div className="row" >
                    <div className="col">
                     
                     <div >
                            <h5>TOTAL INCOME </h5>
                    </div>
    
                    </div>
                    <div className="col">
                    
    
                    <div >
                    <h3  style={{ width: "430px", height: "auto", textAlign:"right", color:"green" }}>Rs.{totalcalc.toLocaleString()}</h3>
                </div>
                    
                    </div></div> 
                    
            
          
    
    </TableContainer></div> 
  
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
       
        </div>
        </Layout>
        
    )
}