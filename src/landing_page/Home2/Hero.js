import React from 'react';
function Hero() {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <div className="col ">
                    <img src='media/Images/homeHero.png'className="img-fluid w-100 mb-5"></img>
                    <h1 className='mt-5'>Invest in everything</h1>
                    <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button className='btn btn-primary  ' style={{ width:"20%" ,height:"7%", margin:'0 auto'}}>Signup for free</button>
                </div>
            </div>

                
            
        </div>
     );
}

export default Hero;