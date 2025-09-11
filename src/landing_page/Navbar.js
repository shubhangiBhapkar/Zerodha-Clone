import React from 'react';
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg border " style={{height:"80px"}}>
            <div class="container" >
                <a class="navbar-brand" href="#">
                    <img src='media/Images/Logo.svg ' alt='logo' style={{width:"30%"}}></img>
                </a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul class="navbar-nav mx-auto mb-2 mb-lg-0 fs-5 " style={{gap:"35px"}}>
                        <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Signup</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">About</a>
                        </li>
                         <li class="nav-item">
                            <a class="nav-link " aria-current="page" href="#">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Support</a>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar;