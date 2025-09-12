import React from 'react';
import {Link} from "react-router-dom"
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border " style={{height:"80px"}}>
            <div class="container" >
                <Link class="navbar-brand" to="/">
                    <img src='media/Images/Logo.svg ' alt='logo' style={{width:"30%"}}></img>
                </Link>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 " style={{gap:"35px"}}>
                        <li class="nav-item">
                            <Link class="nav-link " aria-current="page" to="/signup">Signup</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/about">About</Link>
                        </li>
                         <li class="nav-item">
                            <Link class="nav-link " aria-current="page" to="/products">Products</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/pricing">Pricing</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link " to="/support">Support</Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;