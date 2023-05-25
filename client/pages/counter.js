import React, { useState } from "react";    //{useState} -class state like ,in buld function
import Layout from "../components/Layout";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import Link from "next/link";
import { BrowserRouter as Router, Route } from "react-router-dom"

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function counter() {
    let [number, setNumber] = useState(0) //build state,[number- state name, setNumber- any mrthod name, useState(0)-inbuld & first intial state

    function increment() {
        setNumber(++number)     //set function to impelement method
    }
    function decrement() {
        if(number > 0){
        setNumber(--number)     //set function to impelement method
    }
    }


    return (

        <Layout>
            <div>
                <h3>Functional Component</h3>
                <h1>Counter = {number}</h1>              {/*[number call here */}
                <button onClick={e => increment()}>Increment</button>       {/*   e => event arrow function define, need event for function, e -event*/}
                <button onClick={e => decrement()}>decrement</button>
                <div className='text-red-500d bg-blue-300'>
      Hello world!
    </div>
    <Box
      sx={{
        display: 'flex',
        '& > :not(style)': {
          
          width: 120,
          height: 30,
        
        },
      }}
    >
      <Paper variant="outlined" >

      <Stack  direction="row">
       
      <button type="button" class="btn btn-outline-primary btn-md"style={{ height:30, }}>-</button>
      <TextField id="outlined-basic" variant="outlined"  sx={{
        width: 300
    }}
    InputProps={{ sx: { height: 30 } }}
     />
      <button type="button" class="btn btn-outline-primary btn-md" style={{ height:30, }} >+</button>
    </Stack>
   </Paper>
    </Box>
   
    <div className="form-group row">
  <div className="col-sm-1">
    <input type="email" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
</div>

                <br />
                <button type="button" className="btn btn-primary"style={{ borderRadius:"100%" }}>HI</button>
                <div className="alert alert-primary" role="alert">
                    A simple primary alert—check it out!
                </div>


                <Link href="#"><DeleteOutlineRoundedIcon fontSize="5" /></Link>

                <div className="flex flex-col-reverse ...">
  <div>01</div>
  <div>02</div>
  <div>03</div>
</div>
            </div>
        </Layout>

    )
}

export default counter;