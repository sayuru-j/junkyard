import React, { useState } from "react";     //{useState} -class state like ,in buld function
import {Link} from 'react-router-dom'; // links are not refesh
import Layout from "../components/Layout";


function AdminLogin() {

    //var username = "admin"; //("") state eka kemathi thenka sita patan ganna puluwan
    //var password = "add" ;

    const [username, setusername] = useState("");    
    const [password, setpassword] = useState(""); 
    

    function sendData(e) {
        e.preventDefault()
        
        if (username == "admin" && password=="123456") {
            alert("LOGIN SUCCESFULL")
            window.location.href="/ProductMng"
               
          } else {
              
            alert("PLEASE CHECK USERNAME OR PASSWORD")
            
          }
       
          
        
    }

    
    
        
    return (
        <Layout>
        <section className="main-container">
        <div className="d-flex justify-content-center">
        <form class="col-3 " onSubmit={sendData}>
                <br /> <br />
                <br /> <br />
                
                <div class="form-outline mb-4">
                    
                <h1 class="text-center" style={{ color: "red" }}> Admin Login</h1>
                <br /> <br /> 
                <label class="form-label" for="form2Example1">User Name</label>
                    <input type="text" id="form2Example1" class="form-control"  onChange={(e) => {
                        setusername(e.target.value);
                    }}/>
                    
                </div>
                

                <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Password</label>
                    <input type="password" id="form2Example2" class="form-control" onChange={(e) => {
                        setpassword(e.target.value);
                    }} />
                    
                </div>


               
                <div class="text-center">

                <button type="submit" class="btn btn-primary" id="btnlog">Login</button>
                <br/><br/><br/><br/>

                </div>
            </form></div>
      </section>
         
      </Layout>
    )


}

export default AdminLogin;
