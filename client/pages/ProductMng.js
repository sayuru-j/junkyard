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

export default function ProductMng(){             //GETS DATA from backend

    const [productmng, setProduct] = useState([]);    //get backend data by array type one by one
                                                   //useState()>what is the initial state of data,now is nothing
    
    useEffect(()=>{                              //use useEffect for get data from BE
        function getProduct(){                    //write function to asign BE http connectivity
        axios.get("http://localhost:8000/product/").then((res)=>{
            setProduct(res.data);                                  //setproduct one by one as reponse data
        }).catch((err)=>{
            alert(err.message);
        })
        }
        getProduct();    
    }, [])                                        //set object one by one []  []   []


    const handleSearchArea = (e) => {
      //console.log(e.currentTarget.value);              //shows all searching data in consol
      const searchKey = e.currentTarget.value;           //assingn theses values into searchkey varibale
  
      axios.get("http://localhost:8000/product/").then((res) => {
  
        const resultt = res.data
        const result = resultt.filter((posts) =>
  
          posts.prname.includes(searchKey)   //search by card name
        )
  
        setProduct(result)
      })
  
  
    }


                                       //Delete Product
    const OnDelete = (id) => {
      axios.delete(`http://localhost:8000/product/delete/${id}`).then((res)=> {
        alert(" Deleted Successfully")
      });
    };                                   

    const router = useRouter()

    return(
        <Layout>
          <br/> <br/>
        <div><h6 style={{ color: "#172231",textAlign:"center" }}>PRODUCT MANAGEMENT</h6>
        <br/> <br/>
        <div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        
        <Button  type="submit" variant="outlined" color="success" onClick={() => {window.location.href="/AddProduct"}}>+ Add Product</Button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button  type="submit" variant="outlined" color="error" onClick={() => {window.location.href="/Allpurchdetails"}}>Report</Button>
        
        <form className="my-search">
      <input className="form-control mr-sm-2" type="search" placeholder="Search By Product Name" name="searchQuery" onChange={handleSearchArea}
        ></input></form>

        </div>
        <br/>
        <TableContainer component={Paper}  sx={{  maxWidth: 1200, margin: 'auto'}}>
        
        <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>prid</TableCell>
            <TableCell align="right">prname</TableCell>
            <TableCell align="center">primage</TableCell>
            <TableCell align="right">prunitprice</TableCell>
            <TableCell align="right">prquantity</TableCell>
            <TableCell align="right">prdetails</TableCell>
            <TableCell align="right">O / D</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productmng.map(({ _id, prid, prname, primage, prunitprice, prquantity, prdetails }) => (
            <TableRow
              key={_id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell >{prid}</TableCell>
              <TableCell align="right">{prname}</TableCell>
              <TableCell align="right">{primage}</TableCell>
              <TableCell align="right">{prunitprice}</TableCell>
              <TableCell align="right">{prquantity}</TableCell>
              <TableCell align="right">{prdetails}</TableCell>

              <TableCell align="right">
              

              <Link href="#"  onClick={() => {router.push(`/UpdateProduct/${_id}/${prid}/${prname}/${primage}/${prunitprice}/${prquantity}/${prdetails}`)} } ><EditRoundedIcon fontSize="5"/></Link>&nbsp;&nbsp;
              <Link href="#" onClick={() => OnDelete(_id)(window.location.reload(true))}><DeleteOutlineRoundedIcon fontSize="5" color="red"/></Link>
               

            </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        
          <br/> <br/> <br/> <br/> <br/> <br/> <br/> 
        </div>
        </Layout>
        
    )
}