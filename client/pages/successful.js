import React from "react";    //{useState} -class state like ,in buld function
import {Link} from 'react-router-dom'; // links are not refesh
import Layout from "../components/Layout";
import { Button, Paper, Box } from "@mui/material";


function Successful() {

    return (
        <Layout>
            <div className="container ">
        <div className="justify-content-center"> 
        <div style={{ width: "800px", height: "auto", margin: 'auto' }}>
                <div className="img-pad">
                    <img className="img-fluid text-center" alt="about-us" src="/static/images/scc.png"/>
                </div>
            </div>

            </div>
                                                            
        {/*<h1 style={{ color: "blue" }}>PAYMENT SUCCESSFUL</h1>*/}
        <br/><br/>
        <div className="col-sm d-flex justify-content-center">
                           <Button  type="submit" variant="contained" color="success" onClick={() => {window.location.href="/"}}>OK</Button>
                </div>
        

        </div>
        <br/><br/><br/>
        </Layout>
    )


}

export default Successful;