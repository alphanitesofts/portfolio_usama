import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <div>
            {/* <header id="header" className="header fixed-top bg-light ">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
                    <a href="/" className="logo logo-icon d-flex align-items-center " style={{marginTop:"2em"}} >
                     
                        <span style={{fontSize:"4em"}} ><i className="fa-brands fa-connectdevelop"></i></span>
                    </a>
                    <nav id="navbar" className="navbar bg-light">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                         
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                            <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>
                </div>
            </header>
 */}

            {/* <nav className="navbar navbar-expand-lg fixed-top navbar-primary bg-light">
                <div className="container-fluid">
                    <a href="/" className=" logo logo-icon d-flex align-items-center " style={{ marginTop: "2em", marginLeft: "1.5em" }} >
                        <span style={{ fontSize: "3em" }} ><i className="fa-brands fa-connectdevelop"></i></span>
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{ fontSize: "1.05pc" }}>
                            <li className="nav-item">
                                <a className="nav-link active me-2" aria-current="page" href="#hero">Home</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item me-5">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                      
                        </ul>
                    </div>
                </div>
            </nav> */}


            <nav className="navbar  navbar-expand-lg fixed-top  navbar-light bg-light  ">
                <div className="container-fluid">
                    <Link to='/' className=" logo logo-icon d-flex align-items-center " style={{ marginTop: "2em", marginLeft: "1.5em" }} >
                        <span style={{ fontSize: "3em" }} ><i className="fa-brands fa-connectdevelop"></i></span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " style={{ fontSize: "1.05pc" }}>
                            <li className="nav-item">
                                <a className="nav-link active text-primary" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-primary" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href='#services'>Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-primary" href="#contact">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar