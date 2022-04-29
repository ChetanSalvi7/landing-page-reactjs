import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-light navbar-light  ">
                <div className="container-fluid text-uppercase">
                    <NavLink className="navbar-brand" to="/"><img src="https://general.futuregenerali.in/general-insurance/img/HomePageImg/fglogo.png" alt="logo" width={150} /> </NavLink>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to="aboutme">About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="whyChooseUs">Why Choose us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="testimonials">Testimonials</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="quiz">Quiz</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="videos">Videos</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="articles">Articles</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contactus">Contact us</NavLink>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
            

        </>

    );
};

export default Navbar;