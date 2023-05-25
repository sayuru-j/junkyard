import React from "react";
import Link from 'next/link';
import Router from 'next/router';
import Button from '@mui/material/Button'
import nProgress from "nprogress";
import "nprogress/nprogress.css"



Router.onRouteChangeStart = url => nProgress.start()
Router.onRouteChangeComplete = url => nProgress.done()
Router.onRouteChangeError = url => nProgress.done();

const Layout = ({children}) => {
    
    const head = () => (
           <React.Fragment>
           <header>
            <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" 
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" 
            crossOrigin="anonymous"/>
            <link rel="stylesheet" href="/static/css/styles.css"/>
            <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300italic,400italic,500,500italic,700,700italic,900italic,900' rel='stylesheet' type='text/css'></link>
            <link href="https://fonts.googleapis.com/css?family=Montserrat:100" rel="stylesheet"></link>
            <link rel="shortcut icon" href="#"></link>
            
           </header>
           </React.Fragment>
    ) 
            

    const nav = () => (
        <nav className="navbar navbar-expand-lg navbar-light nav-custom">
  <a href="/"><img className="brand-logo" src="/static/images/junkyard-logo.png" alt="jy-logo"/></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item text-pad">
        <Link className="nav-link" href="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item text-pad">
        <Link className="nav-link" href="/collect">Collect <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item text-pad">
        <Link className="nav-link" href="/center">Our Centers <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item text-pad">
        <Link className="nav-link" href="/ourproducts">Recycled Products <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item text-pad">
        <Link className="nav-link" href="/fleet">Our Fleet <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item text-pad">
        <Link className="nav-link" href="/aboutus">About Us <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <div className="sign-up-btn my-2 my-lg-0">
    <Link href="/signup">
    <Button variant="contained" color="success">Sign Up For Services</Button>
    </Link>
    </div>
  </div>
</nav>
            
            
    )

    const footer = () => (
            <footer className="py-3 container-footer">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><Link href="/" as="/" className="nav-link px-2 text-muted">Home</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">Collect</Link></li>
                <li className="nav-item"><Link href="/center" as="/center" className="nav-link px-2 text-muted">Recycling Centers</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">Buy Recycled Products</Link></li>
                <li className="nav-item"><Link href="#" as="#" className="nav-link px-2 text-muted">Garbage Trucks</Link></li>
                <li className="nav-item"><Link href="/aboutus" as="/aboutus" className="nav-link px-2 text-muted">About Us</Link></li>
                <li className="nav-item"><Link href="/signup" as="/signup" className="nav-link px-2 text-muted">Sign Up</Link></li>
                </ul>
                <p className="text-center text-muted">JUNKYARD © 2023 <a target="_blank" href="https://github.com/sayuru-j">SJ</a>, Inc.</p>
            </footer>
    )

    return <React.Fragment>
        {head()} 
        {nav()} 
        
        {children} 

        {footer()}
    </React.Fragment>
}

export default Layout;